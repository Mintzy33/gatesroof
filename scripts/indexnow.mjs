#!/usr/bin/env node
/**
 * indexnow.mjs — tell Bing (and every IndexNow engine: Yandex, Seznam, Naver…)
 * that www.gatesroof.com URLs changed. Bing's index feeds ChatGPT search and
 * Copilot, so this is the fast path for fixes to reach answer engines.
 *
 * Manual, run AFTER a production deploy is live. Deliberately NOT wired into
 * `npm run build`: a preview build must never ping engines about production URLs.
 *
 * Run:
 *   node scripts/indexnow.mjs /contact /about https://www.gatesroof.com/reviews
 *   node scripts/indexnow.mjs --sitemap              # every URL in the live sitemap
 *   node scripts/indexnow.mjs --sitemap <url>        # a different sitemap
 *   node scripts/indexnow.mjs --dry-run --sitemap    # print the payload, send nothing
 *
 * Key: the single public/<32-hex>.txt file (its body is the key). IndexNow fetches
 * https://www.gatesroof.com/<key>.txt to verify ownership, so it must be deployed.
 * Prefer submitting only changed URLs; resubmitting the whole sitemap every deploy
 * invites 429s.
 *
 * Exit 0 = accepted (200/202). 1 = usage / no URLs. 2 = key file missing or not live.
 * 3 = 400/422 (bad request / URL not on host). 4 = 403 (key not valid).
 * 5 = 429 (too many requests). 6 = network error or any other status.
 */
import { readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const HOST = "www.gatesroof.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const DEFAULT_SITEMAP = `${ORIGIN}/sitemap.xml`;
const BATCH = 10000; // IndexNow max URLs per POST

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function fail(code, msg) {
  console.error(`indexnow: ${msg}`);
  process.exit(code);
}

// ── key ──
const keyFiles = readdirSync(join(root, "public")).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (keyFiles.length !== 1) fail(2, `expected exactly one public/<32-hex>.txt key file, found ${keyFiles.length}`);
const key = keyFiles[0].slice(0, 32);
if (readFileSync(join(root, "public", keyFiles[0]), "utf8").trim() !== key) {
  fail(2, `public/${keyFiles[0]} must contain only its own key`);
}
const keyLocation = `${ORIGIN}/${key}.txt`;

// ── args ──
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const raw = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--dry-run") continue;
  if (a === "--sitemap") {
    let src = DEFAULT_SITEMAP;
    if (/\.xml(\?|$)/.test(args[i + 1] ?? "")) src = args[++i];
    const res = await fetch(src).catch((e) => fail(6, `sitemap fetch failed: ${e.message}`));
    if (!res.ok) fail(6, `sitemap ${src} returned HTTP ${res.status}`);
    const xml = await res.text();
    raw.push(...[...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]));
    continue;
  }
  if (a.startsWith("--")) fail(1, `unknown flag ${a}`);
  raw.push(a);
}
if (!raw.length) fail(1, "usage: node scripts/indexnow.mjs [--dry-run] (--sitemap [url] | <url|/path> ...)");

// ── normalise: /path → full URL, keep https on the www host only, dedupe ──
const urls = new Set();
for (const r of raw) {
  let u;
  try {
    u = new URL(r, ORIGIN);
  } catch {
    console.warn(`skip (not a URL): ${r}`);
    continue;
  }
  if (u.protocol !== "https:" || u.host !== HOST) {
    console.warn(`skip (IndexNow only accepts ${ORIGIN} URLs for this key): ${r}`);
    continue;
  }
  u.hash = "";
  urls.add(u.toString());
}
if (!urls.size) fail(1, "no submittable URLs left after filtering");
const list = [...urls];

if (dryRun) {
  console.log(JSON.stringify({ host: HOST, key, keyLocation, urlList: list }, null, 2));
  console.log(`dry run: ${list.length} URL(s), nothing sent`);
  process.exit(0);
}

// ── the key file must be live on production, or IndexNow answers 403 ──
const keyRes = await fetch(keyLocation).catch((e) => fail(2, `could not fetch ${keyLocation}: ${e.message}`));
if (!keyRes.ok || (await keyRes.text()).trim() !== key) {
  fail(2, `${keyLocation} is not serving the key (HTTP ${keyRes.status}) — deploy first`);
}

// ── submit ──
let exitCode = 0;
for (let i = 0; i < list.length; i += BATCH) {
  const urlList = list.slice(i, i + BATCH);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  }).catch((e) => fail(6, `POST failed: ${e.message}`));
  const body = (await res.text()).trim();
  console.log(`HTTP ${res.status} for ${urlList.length} URL(s)${body ? ` — ${body.slice(0, 300)}` : ""}`);
  if (res.status === 200 || res.status === 202) continue;
  exitCode = { 400: 3, 422: 3, 403: 4, 429: 5 }[res.status] ?? 6;
  break;
}
if (exitCode === 0) console.log(`submitted ${list.length} URL(s) to IndexNow (202 = accepted, key check pending)`);
process.exit(exitCode);
