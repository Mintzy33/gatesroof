# GEO/SEO Operations Runbook

How the GEO stack works in this codebase — for any developer (or future-Alex) dropped into the project tomorrow.

For the operational rhythm (rituals, build queue, who-approves-what), see `gatesroof-cowork-charter.md`. This doc is the **codebase reference**.

---

## Cheat sheet

| Thing | Where |
|---|---|
| All JSON-LD schema builders | `lib/schema.ts` |
| Per-page `dateModified` (auto-generated, git-derived) | `lib/page-dates.json` |
| Regenerate `page-dates.json` | `npm run update:dates` |
| Site review count / rating (source of truth) | `lib/site-stats.ts` |
| WebPage schema component (renders on landing pages) | `app/components/PageSchema.tsx` |
| Blog post data + types | `app/blog/posts.ts` |
| Blog renderer (where `formatDate` lives) | `app/components/BlogPostLayout.tsx` |
| AI-crawler config | `public/robots.txt` |
| AI-friendly site summary | `public/llms.txt` |
| Sitemap generator | `app/sitemap.ts` |
| FAQ content templates | `lib/faq-data.ts` |
| Service-area / city data | `lib/service-areas-data.ts` |
| Date-map generator script | `scripts/gen-page-dates.mjs` |

---

## The architecture

### 1. AI crawler access (`public/robots.txt`)

13 named AI agents are explicitly allowed (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, Claude-Web, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, cohere-ai, Bytespider) plus the wildcard `User-agent: *`. Zero `Disallow` rules — the whole site is crawlable.

**Don't add `Disallow` anywhere without thinking hard.** If Cloudflare ever gets added in front of Vercel, double-check its "Block AI Scrapers and Crawlers" toggle is OFF — that default-on setting silently kills GEO on many sites.

Sanity test (anytime):
```bash
curl -A "GPTBot/1.0 (+https://openai.com/gptbot)" -I https://www.gatesroof.com/
# Expect: HTTP 200
```

### 2. JSON-LD schema (the centerpiece)

All schema is built by functions in `lib/schema.ts` (`blogPostingSchema`, `webPageSchema`, `reviewPageSchema`, `servicePageSchema`, `faqSchema`, `breadcrumbSchema`, …) and rendered as **native** `<script type="application/ld+json">` tags directly in page components.

#### ⚠️ Critical gotcha — read this before touching schema

> **Never use `<Script>` from `next/script` for JSON-LD.**

`next/script` serializes the JSON into the React Server Component "Flight" payload instead of emitting a real server-side `<script>` tag. AI crawlers (and Google's structured-data parser) read raw HTML before any JS runs, so they see **zero** structured data.

The site shipped with this bug for some time — schema was authored beautifully across 100+ pages but invisible to every AI engine. The fix touched 110 files and is the highest-impact change in the repo's history. **Don't reintroduce it.**

Correct pattern:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(mySchema) }}
/>
```

Wrong pattern (do not use):
```tsx
import Script from "next/script";  // ❌ for JSON-LD
<Script type="application/ld+json" dangerouslySetInnerHTML={...} />
```

#### Schema types in use

| Type | Where rendered |
|---|---|
| `RoofingContractor` / `LocalBusiness` | `app/layout.tsx` (site-wide) |
| `Organization` | `app/layout.tsx` |
| `WebSite` + `SiteNavigationElement` | `app/layout.tsx` |
| `FAQPage` | Homepage + landing pages + blog (per-page) |
| `Service` | Each `app/services/*` page |
| `Review` + `AggregateRating` | `/reviews` |
| `Article` (`BlogPosting`) | `/blog/[slug]` |
| `Person` | `/about/alex-chicilo`, `/about/gates-enterprises` |
| `WebPage` (with `dateModified`) | 103 landing pages, via `<PageSchema route="…" />` |
| `BreadcrumbList` | Landing + blog pages |

### 3. Recency engine

Two parallel mechanisms feed the freshness signal AI engines use:

**Blog posts** — `app/blog/posts.ts` has an optional `updatedDate` on each post. When set, it drives:
- A visible "Last updated …" line in the post header (`app/components/BlogPostLayout.tsx`).
- `Article.dateModified` in the JSON-LD.
- `og:modifiedTime` in the OpenGraph metadata.

Set `updatedDate` only when content is **materially revised** — not on every wording tweak. Honest dates outperform fabricated ones.

**Landing pages** — `lib/page-dates.json` maps `route → "YYYY-MM-DD"`, generated from each page's content file git history. Read by `webPageSchema(route)` in `lib/schema.ts`, rendered via `<PageSchema route="…" />` on each landing page.

Refresh after any meaningful content change:
```bash
npm run update:dates
git diff lib/page-dates.json   # review
git add lib/page-dates.json && git commit -m "chore: refresh page-dates"
```

(There's also an automated weekly PR for this — see `gatesroof-geo-automation-prompt.md`.)

**Timezone gotcha in `formatDate`** — it parses `YYYY-MM-DD` strings with an explicit local-time anchor to avoid an off-by-one in Mountain time. Don't simplify it back to `new Date(iso)` without a timezone test.

### 4. Review stats — `lib/site-stats.ts`

Single source of truth for `reviewCount`, `starRating`, `totalRoofs`, `phone`, etc. Schemas (`RoofingContractor.aggregateRating`) pull from here.

**Known issue:** ~147 page files hardcode the review count inline instead of importing from `SITE_STATS`. When the number changes you must site-wide find/replace. Future improvement: refactor pages to read from `SITE_STATS`. The file's own comment warns about this — heed it.

### 5. `llms.txt` — `public/llms.txt`

Plain-markdown summary served at `/llms.txt`. AI models read it to anchor facts about Gates Enterprises. Keep it in sync with:
- Owner / Director of Operations (currently Andrew Gates / Alex Chicilo).
- Review count + rating (sync with `SITE_STATS`).
- Service list, service area, key facts, contact, important page URLs.

### 6. Sitemap — `app/sitemap.ts`

Next.js generates `/sitemap.xml` from this file at build time. New static pages under `app/` are usually picked up automatically (verify after adding). The legacy `public/sitemap.xml*` files are unused fallbacks — leave them alone or delete in a separate PR.

---

## Common tasks

### Add a new service-area landing page

1. Copy `app/areas/aurora/` to `app/areas/<new-city>/` (page.tsx + content.tsx).
2. **Rewrite `content.tsx` with genuinely unique local content** — hail history, neighborhoods, real projects, city-specific FAQs. Thin templated pages get ignored or penalized; distinctive ones get cited.
3. `page.tsx` already renders `<PageSchema route="/areas/<new-city>" />` if you used the template.
4. Run `npm run update:dates` to add the route to `page-dates.json`.
5. If `app/sitemap.ts` has an explicit route list, add the new route there.
6. `npm run build` — verify no errors.

### Add a new blog post

1. Append a new `BlogPost` to the `blogPosts` array in `app/blog/posts.ts`.
2. `publishDate = today`. Leave `updatedDate` undefined.
3. `content` is an array of paragraphs; `H2` headings are recognized by the renderer.
4. Add a cover image to `public/images/blog/` if used.
5. The post auto-appears at `/blog/<slug>`.

### Refresh a page's "last updated" date

- **Blog:** set/bump `updatedDate` on the post in `app/blog/posts.ts`.
- **Landing page:** edit the page's `content.tsx`, then `npm run update:dates`. The git commit date of the content file becomes the new `dateModified`.

### Add a new schema type

1. Add a builder function to `lib/schema.ts`.
2. Call it from the page that needs it, render via **native** `<script>` (see gotcha above).
3. Validate the output in Google's Rich Results Test before merging.

### Update the review count / rating

1. Edit `lib/site-stats.ts` (`SITE_STATS.reviewCount` / `starRating`).
2. `grep -rn '<old number>' app lib` — find and update every hardcoded instance.
3. Update `public/llms.txt`.
4. (The Google Places sync cron, once shipped, will automate steps 1+3 — but the hardcoded grep step remains until the SITE_STATS refactor lands.)

### Diagnose "AI crawlers can't see my schema"

1. View page source on the live page (Cmd+U). Cmd+F for `<script type="application/ld+json"`.
2. If you see **real `<script>` tags** with JSON — schema is server-rendered, you're fine.
3. If you only see escaped occurrences inside `self.__next_f.push(...)` — schema is client-only. The page is using `<Script>` from `next/script` (the bug). Convert to native `<script>`.
4. Run the live curl test:
   ```bash
   curl -sL -A "GPTBot/1.0" https://www.gatesroof.com/<path> \
     | grep -oE '<script[^>]*application/ld\+json' | wc -l
   ```
   Should be ≥ 5 for the homepage, ≥ 7 for most landing pages.

---

## Crons (once implemented)

See `gatesroof-geo-automation-prompt.md` in the GEO docs for the full setup brief. Summary:

- All endpoints live at `app/api/cron/*` and are gated by `Bearer ${CRON_SECRET}`.
- Scheduled via `vercel.json` `crons` array.
- Notifications post to Discord webhooks: `DISCORD_WEBHOOK_ALERTS` / `WINS` / `TODOS`.

| Cron | Schedule (UTC) | What it does |
|---|---|---|
| `crawler-health` | `0 14 * * *` | Fetch 6 pages as 4 AI bots; alert on regression |
| `stale-content` | `0 14 * * 1` | Flag landing pages with `dateModified` > 120 days |
| `page-dates` refresh (GitHub Action) | `0 13 * * 1` | Auto-PR with fresh `page-dates.json` |
| `google-places` review sync (GitHub Action) | `30 13 * * *` | Auto-PR if `SITE_STATS` is out of date |
| `ai-visibility` | `0 15 * * 5` | Weekly 10-query baseline via OpenAI + Perplexity APIs |
| `schema-check` | `0 14 * * 2` | Validate 5 sample URLs against Rich Results Test |

### Env vars (set in Vercel project settings)

| Var | Purpose |
|---|---|
| `CRON_SECRET` | Gates the cron endpoints |
| `DISCORD_WEBHOOK_ALERTS` / `WINS` / `TODOS` | Notification channels |
| `GOOGLE_PLACES_API_KEY` | Review-stat sync |
| `GOOGLE_PLACES_PLACE_ID` | Gates' GBP listing ID |
| `OPENAI_API_KEY` | AI visibility tracker |
| `PERPLEXITY_API_KEY` | AI visibility tracker |

A `.env.example` should document each. **Never commit real keys.**

---

## Pitfalls (saved you a re-discovery)

- **`next/script` for JSON-LD** — see above. The single biggest mistake possible here.
- **Hardcoded review counts in 147 files** — when bumping, grep the whole repo.
- **Fabricated dates** — `updatedDate` should reflect real revisions; never bulk-set to "today" to look fresh. AI engines compound trust over time and inconsistency leaks through.
- **Auto-merging cron PRs** — they surface state for human review. Auto-merge silently mutates production.
- **Pushing to `main` without a PR** — Vercel auto-deploys `main`; PRs are the review checkpoint.
- **Removing schema `<script>` tags during a "cleanup" pass** — they look like dead code if you don't recognize JSON-LD. Always check the type attribute.

---

## When you change something here, also update

- `gatesroof-cowork-charter.md` if the team rhythm changes.
- `gatesroof-geo-automation-prompt.md` if cron behavior changes.
- `gatesroof-geo-baseline-tracker.xlsx` if the priority-query list changes.
- This file's *Cheat sheet* if you move/rename anything.

---

## Reference docs (Alex's GEO planning folder, `~/Desktop/gateswebsite/`)

- `gatesroof-geo-execution-plan.pdf` — the original strategic plan (largely now implemented).
- `gatesroof-cowork-charter.md` — operating rhythm + Q1–Q4 build queue + win conditions.
- `gatesroof-geo-automation-prompt.md` — cron setup brief.
- `gatesroof-geo-baseline-tracker.xlsx` — AI visibility tracker.

These live outside the repo because they're cross-tool (Cowork sessions, Excel for the tracker, etc.). Don't migrate them into the repo unless they become developer-relevant.
