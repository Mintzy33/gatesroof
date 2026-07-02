---
name: gates-marketing-ops
description: Recurring marketing operations for the gatesroof repo (Gates Enterprises, gatesroof.com). Use whenever the task is a GEO/AI-citation tracking run (weekly Thursday slice, monthly scorecard, quarterly re-audit, anything touching geo/*.md or the prompt matrix), publishing or editing content (blog post, area/city page, answer-first pillar, anything in app/blog/posts.ts or app/areas/), or a site-wide stat change (review count, star rating, cert name, founding year, phone, roofs completed) — even if the user just says "reviews went up" or "add a page for Parker" or "run the citation check." Also load before touching JSON-LD/schema anywhere in this repo: it encodes the next/script bug that once made 100+ pages invisible to AI crawlers.
---

# Gates marketing ops — GEO runs, content publishing, stat sweeps

Three recipes that share one honesty system. Gates' entire GEO strategy is radical
consistency: every public number traces to one file, every claim is verifiable, and
AI engines punish drift. The recipes exist because each has a failure mode that is
invisible for months (unrendered schema, corrupted longitudinal data, stale stats).

Deep background lives in the repo — read these, don't duplicate them:

| File | What it is |
|---|---|
| `docs/OPERATIONS.md` | Schema/JSON-LD rules, diagnostics, pitfalls. Read before any schema work. |
| `geo/GEO-OPERATING-SYSTEM.md` | GEO playbook: cadence table, guardrails, content queue, division of labor. |
| `geo/GATES-GEO-CITATION-TRACKER.md` | Append-only run ledger + Layer-6 scorecard ("numbers to beat"). |
| `geo/gates-geo-prompt-matrix.csv` | The 35-prompt matrix (tiers A–D) all runs sample from. |
| `lib/site-stats.ts` | SITE_STATS — single source of truth for every public number. |
| `lib/schema.ts` | All JSON-LD builders (`blogPostingSchema`, `faqSchema`, `cityFaqItems`, …). |
| `app/blog/posts.ts` | Blog content: typed `BlogPost[]` array (no MDX in this repo). |
| `app/areas/aurora/` | Canonical area-page template (`page.tsx` + `content.tsx`). |

Separate-company firewall: Gates ≠ HailScore. Never move HailScore credentials or
data into this repo; never track HailScore citations here (gatesroof.com only).

---

## Recipe 1 — GEO citation run (Thu weekly · monthly · quarterly)

The point is month-over-month comparability. An improvised protocol corrupts the
longitudinal dataset, which is the whole product of this work.

1. **Load the matrix.** `geo/gates-geo-prompt-matrix.csv`. Weekly slice = 7 prompts:
   the 4 priority-gap prompts + 3 rotation (decayed wins to re-check + one new —
   see the "Re-check next run" line of the latest batch in the tracker).
   Monthly = full 35-prompt matrix. Quarterly = monthly + the 7-layer foundation
   re-audit, written as `geo/GATES-GEO-BASELINE-<date>.md` (model on the 2026-07-01 one).
2. **Measure live, logged-out.** Run each prompt on Perplexity and Google (for AI
   Overviews + Local Pack) via the Claude-in-Chrome extension, US geo, no login.
   Record exactly what you saw: ✅ cited / ❌ absent / ➖ no AIO shown, plus who WAS
   named (competitor watch feeds off this). Login-gated engines (ChatGPT, Gemini,
   Copilot, Claude, Grok) are marked "not run" unless Alex grants a session.
   **Never fabricate or infer a citation** — an unverified cell poisons every future
   comparison against it.
3. **Degraded mode (Chrome extension down)** — Run 004 precedent, follow it exactly:
   fall back to Google-organic web-search proxy only; title the batch `⚠️ PROXY-ONLY`;
   mark live metrics (Perplexity / AIO / Map pack) `n/r`; **keep the prior live run's
   figures as the scorecard's numbers-to-beat** (do not overwrite them with proxy
   numbers); end with a "Re-check next run (live)" list.
4. **Log it.** Append a dated batch section to `geo/GATES-GEO-CITATION-TRACKER.md`
   (append-only — never edit past batches) using the existing table format + a
   "**This batch:**" summary with flags. Update the Layer-6 scorecard table at the top.
5. **Brief Alex.** Write `geo/GATES-GEO-SUMMARY-<date>.md`: numbered points, wins /
   losses / competitor moves / top actions, ending with the literal line
   "**Nothing was committed or deployed — that's your gate.**"
6. **Flag drift you trip over.** Stale stats in SERP snippets and HailScore-attribution
   regressions get caught BY these runs (the 308-review staleness and the Aurora
   HailScore-framing slip were both found this way). Put them in the batch flags and
   the summary; if asked to fix, use Recipes 2–3.

**Hard guardrail:** scheduled/tracking runs produce drafts and reports ONLY. Never
commit or deploy from a GEO run — Alex is the gate. Content/entity fixes he approves
go on branches like `geo/entity-fixes` for him to review and merge.

---

## Recipe 2 — Publishing content the Gates way

Gates publishing ≠ HailScore publishing: content is TypeScript data, not MDX, and
freshness dates are git-derived.

### 2a. Blog post

1. Append a `BlogPost` object to the `blogPosts` array in `app/blog/posts.ts`.
   The interface at the top of the file is the contract. Key behaviors:
   - `content` is a **paragraph array of plain strings**. The renderer
     (`app/components/BlogPostLayout.tsx`) turns any string under 100 chars with no
     trailing `.`/`)`/`?` and no `". "` inside into an **H2**. So: write section
     headings as short punctuation-free strings, and make sure every real paragraph
     ends with a period — a short punchy sentence without one will silently render
     as a heading.
   - Internal links: put `[LINK: some-key]` in the text and define
     `{ placeholder: "some-key", href, text }` in `internalLinks`.
   - `publishDate` = today. **Leave `updatedDate` unset** — it's only for material
     revisions later (visible "Last updated" + schema `dateModified`). Never bulk-set
     dates to look fresh; AI engines compound trust and fake freshness leaks.
   - `faqs` (optional) renders a visible FAQ section AND emits FAQPage JSON-LD —
     visible text must equal schema text exactly (Google penalizes mismatch).
2. Cover image → `public/images/blog/` (webp/jpg), reference it in `coverImage`.
3. Schema is free: `app/blog/[slug]/page.tsx` already emits `blogPostingSchema` +
   breadcrumbs + FAQ as native scripts for every array entry. Don't add your own.
4. Sitemap is free too: `app/sitemap.ts` imports `blogPosts`.

### 2b. Area / city landing page

1. Copy `app/areas/aurora/` (both `page.tsx` and `content.tsx`) to `app/areas/<city>/`.
2. Rewrite `content.tsx` with **genuinely unique local content** — that city's hail
   history, neighborhoods, roof stock, city-specific FAQs. Thin find-and-replace
   templates get ignored by both Google and answer engines; uniqueness is the point.
3. In `page.tsx`: update metadata/canonical, the `citySchema` object (geo coordinates,
   `areaServed`), breadcrumb + FAQ calls. Keep `<PageSchema route="/areas/<city>" />`
   and the native `<script type="application/ld+json" dangerouslySetInnerHTML>` tags.
4. Add the city slug to the `areas` array in `app/sitemap.ts` (the sitemap is
   data-derived by design — never hand-add URL entries elsewhere in it).
5. Stats in title/body/schema come from `lib/site-stats.ts` values — copy the current
   numbers exactly; better, import `SITE_STATS`.

### 2c. Answer-first pillar

Model on the Denver cost guide (`roof-replacement-cost-denver` in `posts.ts`) — it's
the proven formula (Google AIO quotes it verbatim as the #1 source): liftable answer
summary in the first two paragraphs, concrete local numbers, FAQ block with schema,
internal links to/from the matching service page. The priority queue of target
queries is in `geo/GEO-OPERATING-SYSTEM.md`.

### The JSON-LD rule (biggest possible mistake in this repo)

**Never use `<Script>` from `next/script` for JSON-LD.** It serializes schema into
the RSC Flight payload instead of a real `<script>` tag, so AI crawlers and Google's
parser see ZERO structured data. This shipped invisible schema across 100+ pages for
months; the fix touched 110 files. Always native:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

Diagnostic (run on live or preview URL — homepage ≥5, most landing pages ≥7):

```bash
curl -sL -A "GPTBot/1.0" https://www.gatesroof.com/<path> | grep -oE '<script[^>]*application/ld\+json' | wc -l
```

If view-source only shows schema escaped inside `self.__next_f.push(...)`, it's the
bug — convert to native `<script>`. Full walkthrough in `docs/OPERATIONS.md`.

---

## Recipe 3 — Site-wide stat sweep (review count, rating, certs, NAP facts)

Structural debt: ~180 files hardcode stats instead of importing `SITE_STATS` (the
339 bump took two sweeps a week apart and still isn't fully propagated — ~27
area-page bodies said "300+" at the 2026-07-01 baseline; GEO runs kept finding
stragglers like `/areas/aurora` still saying 308 after Denver was fixed). Until the refactor lands,
the exhaustive sweep is the only defense.

1. **Confirm the new value from a real source.** Review count/rating: Google
   Business Profile / Places. Cert names: the manufacturer certificate itself
   (that's how "Shingle Master Pro" was corrected to **CertainTeed ShingleMaster**,
   2026-06-10). Founding year (2014), phone, address, other NAP-class facts: owner
   confirmation only — never guess owner-level claims.
2. **Edit `lib/site-stats.ts` first** — key pages (homepage, header, footer, core
   schema) pull from it.
3. **Grep every variant of the OLD value** and fix each hit:
   ```bash
   grep -rn "308\|308+\|300+" app lib public scripts
   ```
   Known drift hotspots (all bit us in Runs 003–005): `public/llms.txt` · homepage
   cert badge · `app/areas/*/page.tsx` (metadata title AND body AND `citySchema`
   `aggregateRating` — titles and body drift independently) · `app/best-roofer-*`
   pages · blog body copy in `app/blog/posts.ts` · FAQ generators `lib/faq-data.ts`
   and `lib/schema.ts` (`cityFaqItems` fans out to every city page) · Meta ad
   templates in `scripts/storm-ads/meta/build-storm-city.py`.
4. **Schema precision rule:** `aggregateRating.reviewCount` must be the **exact
   integer** (e.g. `"339"`); marketing copy may round down to "300+"-style only if
   intentional — but Run 005 flagged exactly that mismatch as trust-eroding, so
   prefer the exact number everywhere.
5. **Sync `public/llms.txt`** — answer engines read it directly.
6. **Off-site drift is not code:** wrong Yelp phone, conflicting Chamber listings,
   GBP fields → list them for Alex's punch list (he owns logins), don't try to fix.
7. **Log the sweep** (commit message + a line in the next GEO summary) so the next
   tracking run can confirm the fix propagated to SERP snippets.

---

## Shared hard rules (all three recipes)

- **Every public stat traces to `lib/site-stats.ts`.** New code imports `SITE_STATS`;
  never introduce a new hardcoded number.
- **No insurance/deductible-outcome promises.** Colorado's roofing statute
  (C.R.S. § 6-22-101 et seq.; deductible-waiver ban at § 6-22-105) makes "we'll
  cover your deductible" / concrete payout dollars illegal territory — a 23+ file
  purge already happened, including the FAQ generators. Use conditional/process
  language ("on a covered claim…", "your insurer pays the approved scope minus your
  deductible"). Educational explainers of how claims work are fine.
- **Never claim Gates created/owns/operates HailScore.** Correct framing (see
  `public/llms.txt`): an independent third-party tool owned by a separate company,
  which Gates uses. A ~54-file false-attribution sweep was needed once and
  regressions keep resurfacing on area pages — run `grep -rn "HailScore" app lib public`
  on every content pass.
- **Colorado only, trades voice.** Copy sounds like a working Front Range roofer,
  not an agency. Public-facing founder name is **Andrew Gates** — never change it.
- **robots.txt is untouchable.** It deliberately allows 13 named AI crawlers with
  zero `Disallow` rules — that IS the GEO strategy. Never add a Disallow; if
  Cloudflare ever fronts the site, its default-on "Block AI Scrapers" silently kills GEO.
- **Commit author must be `a.chicilo@gatesroof.com`** (resolves to GH Mintzy33, the
  Vercel team account — any other author and Vercel refuses to build the push).
  gh CLI active account must be Mintzy33 (`gh auth switch --user Mintzy33`).
- **Never print secrets.** `scripts/storm-ads/config.json`, `hailscore-config.json`,
  and `meta/meta-config.json` are gitignored live credentials — never cat them into
  a transcript, never `git add -f` them, never commit `.bak` copies (also ignored).
  Old tokens still exist in git history; do not "clean up" with history rewrites.

## Settled decisions that look like bugs — do not "fix"

- **`formatDate` in `app/components/BlogPostLayout.tsx`** parses `YYYY-MM-DD` with an
  explicit local-time anchor to avoid a Mountain-time off-by-one. Don't simplify to
  `new Date(iso)`.
- **The H2 heading heuristic** in `BlogPostLayout.tsx` (short string, no terminal
  punctuation → heading) is the intended authoring mechanism, not sloppy parsing.
- **Lint baseline is ~383 errors / 69 warnings** (mostly `react/no-unescaped-entities`)
  with no `ignoreDuringBuilds` set — a local `next build` can fail at lint on code you
  never touched. That's baseline, not your change; fix only in scoped passes when asked.
- **Storm-ads auto-activation is deliberately OFF** ("kill auto-spend, keep alerts",
  2026-06-24): `auto_activate_enabled:false` lives in the git-ignored
  `scripts/storm-ads/config.json`, and the code defaults False on a fresh clone.
  Detection, PAUSED-campaign creation, and Discord alerts still run; manual
  `python storm-trigger.py --activate <City>` is the human gate (~$80/day/city when
  live). `meta/build-storm-city.py` has `ACTIVATE = True` hardcoded — running it
  SPENDS immediately, and its hail sizes must be verified NWS figures, never guesses.
  `meta/kill-all.py` is dry-run by default; `--live` actually pauses.
- **The sitemap is data-derived** (`app/sitemap.ts` reads `blogPosts`, service-area
  data, and the `areas` array) after hand-maintenance drifted badly (15 orphans,
  42+ omissions). Extend the data, never hand-add URL entries.
- **Hero video stays light** — the 49MB autoplay LCP disaster was fixed to 6.6MB +
  poster + mobile gate. Don't reintroduce heavy hero media; this is a phone-first
  service business.
- **Google Indexing API** (`scripts/submit-indexing.py`) caps Gates at 100 URLs/day
  because the 200/day quota is SHARED with HailScore via one service account —
  over-submitting starves the other side. The launchd job is deliberately
  `.disabled` (`com.gates.indexing.plist.disabled`).
- **Tina (the Discord agent) drafts, never commits.** Alex relays what to ship.

## Verification tail (before any push)

1. `npm run dev` → load every touched page in a browser; check the mobile breakpoint.
2. Schema check: view-source for real `<script type="application/ld+json">` tags
   (not `self.__next_f.push`), then the GPTBot curl count above on the deployed URL.
3. Stats check: `grep -rn "<old value>" app lib public scripts` returns nothing;
   `grep -rn "HailScore" <touched files>` shows only correct third-party framing.
4. New/edited pages: `npm run update:dates` and commit the `lib/page-dates.json`
   diff (it's git-derived `dateModified` — the recency signal engines read).
5. Confirm commit author (`git log -1 --format='%ae'` → `a.chicilo@gatesroof.com`),
   then push to `main` (auto-deploys on Vercel; maintenance needs no PR — GEO entity
   work goes on a `geo/*` branch for Alex). Live-verify the production URL after
   deploy; "compiles" ≠ "renders".
