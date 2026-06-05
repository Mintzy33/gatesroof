#!/usr/bin/env node
/**
 * Crawler health monitor — GEO early-warning alarm.
 *
 * Fetches key pages as the major AI-crawler user-agents and asserts:
 *   1. HTTP 200 (after redirects)
 *   2. body contains >= 1 REAL, unescaped <script type="application/ld+json"> tag
 *      — NOT the RSC Flight-payload escaped form (\"application/ld+json\").
 *      See docs/OPERATIONS.md "Critical gotcha" for why this distinction matters.
 *
 * On any failure: posts a red embed to Discord #geo-alerts (env DISCORD_WEBHOOK_ALERTS)
 * and exits 1, which also fails the GitHub Actions run.
 * On success: prints {"ok":true,"checks":24} and exits 0. No Discord noise.
 *
 * Usage:
 *   node scripts/crawler-health.mjs                          # production run
 *   node scripts/crawler-health.mjs --base-url http://localhost:3000
 *   node scripts/crawler-health.mjs --inject-404             # force a failure to test alerting
 *
 * Node >= 18 (native fetch). Zero dependencies.
 */

const DEFAULT_BASE_URL = 'https://www.gatesroof.com';

const PAGES = [
  '/',
  '/best-roofer-denver',
  '/areas/denver',
  '/reviews',
  '/services/storm-hail-damage',
  '/about/alex-chicilo',
];

// Real UA strings, matched against public docs for each crawler.
const USER_AGENTS = {
  GPTBot:
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.2; +https://openai.com/gptbot',
  ClaudeBot: 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
  PerplexityBot:
    'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
  'Google-Extended':
    'Mozilla/5.0 (compatible; Google-Extended/1.0; +http://www.google.com/bot.html)',
};

// The unescaped tag a real crawler must see in raw HTML. Attribute order varies
// (e.g. <script id="faq-schema" type="application/ld+json">), so match any
// <script> tag carrying the type — but NOT the Flight-escaped form (type=\"...\"),
// which has backslashes before the quotes and won't match ["'] here.
const JSON_LD_RE = /<script\b[^>]*\btype=["']application\/ld\+json["']/gi;

const FETCH_TIMEOUT_MS = 15_000;
const RETRY_DELAY_MS = 3_000;

function parseArgs(argv) {
  const args = { baseUrl: DEFAULT_BASE_URL, inject404: false };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--base-url' && argv[i + 1]) args.baseUrl = argv[++i].replace(/\/$/, '');
    else if (argv[i] === '--inject-404') args.inject404 = true;
    else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(2);
    }
  }
  return args;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchOnce(url, userAgent) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': userAgent },
      redirect: 'follow',
      signal: controller.signal,
    });
    const body = await res.text();
    return { status: res.status, body };
  } finally {
    clearTimeout(timer);
  }
}

/** One check = one page fetched as one crawler UA. Retries once on network error / 5xx. */
async function runCheck(baseUrl, page, uaName, uaString) {
  const url = `${baseUrl}${page}`;
  let result;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      result = await fetchOnce(url, uaString);
      if (result.status < 500) break; // only retry server errors
    } catch (err) {
      result = { status: 0, body: '', error: err.name === 'AbortError' ? 'timeout' : err.message };
    }
    if (attempt === 1) await sleep(RETRY_DELAY_MS);
  }

  if (result.status !== 200) {
    return {
      ok: false,
      page,
      ua: uaName,
      reason: result.error ? `fetch failed (${result.error})` : `HTTP ${result.status}`,
    };
  }
  const ldCount = (result.body.match(JSON_LD_RE) || []).length;
  if (ldCount < 1) {
    const escapedOnly = result.body.includes('\\"application/ld+json\\"');
    return {
      ok: false,
      page,
      ua: uaName,
      reason: escapedOnly
        ? 'JSON-LD only in escaped Flight payload (next/script regression?)'
        : 'no JSON-LD <script> tag in HTML',
    };
  }
  return { ok: true, page, ua: uaName, ldCount };
}

async function notifyDiscord(failures, checksRun, baseUrl) {
  const webhook = process.env.DISCORD_WEBHOOK_ALERTS;
  if (!webhook) {
    console.error('DISCORD_WEBHOOK_ALERTS not set — skipping Discord alert (workflow failure is the only signal).');
    return;
  }
  const lines = failures.map((f) => `• \`${f.ua}\` → \`${f.page}\` — ${f.reason}`);
  let description = lines.join('\n');
  if (description.length > 3800) description = description.slice(0, 3800) + '\n…(truncated)';

  const payload = {
    embeds: [
      {
        title: `🚨 Crawler health: ${failures.length}/${checksRun} checks failed`,
        description,
        color: 0xe74c3c,
        footer: { text: `crawler-health • ${baseUrl}` },
        timestamp: new Date().toISOString(),
      },
    ],
  };
  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) console.error(`Discord webhook returned HTTP ${res.status}`);
  } catch (err) {
    console.error(`Discord webhook delivery failed: ${err.message}`);
  }
}

async function main() {
  const started = Date.now();
  const { baseUrl, inject404 } = parseArgs(process.argv);
  const pages = inject404 ? [...PAGES, '/this-page-intentionally-does-not-exist'] : PAGES;

  const results = [];
  // Batch by page: 4 UA fetches in parallel per page, pages sequential — gentle on prod.
  for (const page of pages) {
    const batch = await Promise.all(
      Object.entries(USER_AGENTS).map(([uaName, uaString]) =>
        runCheck(baseUrl, page, uaName, uaString),
      ),
    );
    results.push(...batch);
  }

  const failures = results.filter((r) => !r.ok);
  const durationMs = Date.now() - started;

  if (failures.length > 0) {
    console.error(JSON.stringify({ ok: false, checks: results.length, failures, durationMs }, null, 2));
    await notifyDiscord(failures, results.length, baseUrl);
    process.exit(1);
  }
  console.log(JSON.stringify({ ok: true, checks: results.length, durationMs }));
}

main().catch((err) => {
  console.error('crawler-health crashed:', err);
  process.exit(1);
});
