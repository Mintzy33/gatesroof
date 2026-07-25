# Gates Enterprises — GEO Operating System

*The running playbook for getting gatesroof.com cited and recommended by AI answer engines. Scope: gatesroof.com ONLY — never mixed with HailScore or any other entity. Established 2026-06-10.*

## The win thesis (what actually moves the needle)
GEO compounds over ~3–6 months; it is not a switch. But the winning formula is already proven from our Run 001 data: **when Gates has an answer-first page that ranks, it gets cited** (the Denver cost-guide is the #1 source in Google's AI Overview). Where it doesn't rank, it's invisible (Perplexity 0/8). So we win by running two tracks relentlessly and measuring monthly:

1. **On-site content (automated):** grind the ~35 target queries, 1–2 answer-first pages/week, built to the cost-guide formula, kept fresh.
2. **Off-site authority (human — the lever that decides "best roofer" + Map-pack queries):** Google review velocity, GBP optimization, NAP consistency, third-party citations/links. Reviews are the single biggest local-AI trust signal; no on-site work wins "best roofer in Denver" without it.

Entity-trust fixes (founding year, cert names, author, schema) were table stakes — shipped on branch `geo/entity-fixes`. What compounds from here is **cadence + measurement.**

## Division of labor
| Automated (Claude, scheduled) | Human (Alex — only you can) |
|---|---|
| Draft/refresh answer-first pages → Gates GEO Drive | Review + `git push` (deploy) |
| Re-run citation matrix, track movement | Google review requests (5–8/mo) |
| Competitor + decay monitoring, scorecard | GBP posts + optimization |
| Draft GBP posts + review-request copy | Yelp/BBB/NAP listing fixes |
| Surface the single highest-priority next action | Anything needing a login/account |

## Cadence — the scheduled loop (all Gates-only, → Gates GEO Drive folder, no auto-deploy)
| Task ID | When (MT) | What it does |
|---|---|---|
| `gates-geo-content` | Tue 8:00am | Drafts 1–2 answer-first pages/refreshes for the next priority query + an off-site punch list. Saves drafts to Drive for you to apply. |
| `gates-geo-tracking` | Thu 9:00am | Re-runs a 7-prompt slice (always the 4 priority gaps) on Perplexity + Google AIO; logs movement, decay, competitor moves. |
| `gates-geo-monthly-scorecard` | 2nd of month, 9am | Full 35-prompt matrix + scorecard refresh + month-over-month delta. |
| `gates-geo-quarterly-reaudit` | 1st of Jan/Apr/Jul/Oct, 9am | Full Phase-1 re-audit (7 layers) + competitor re-check, comparable to prior quarter. |

**The human loop:** Claude drafts Tue/Thu → you run a ~30-min Friday session (review + deploy the branch, post to GBP, send review requests, fix any flagged listing) → we measure monthly → re-audit quarterly.

### Chrome default for scheduled GEO (mandatory — added 2026-07-24)

Weekly tracking has been **proxy-only for 7+ runs** when multiple Chromes are paired (generic "Browser 1/2/3" + risk of HailScore profile). Fix:

1. Dedicated Chrome profile named **Gates** (Gates Google only).
2. Before Thu 9am MT: only that profile open for Claude-in-Chrome.
3. Never select a HailScore-named browser for gates-geo-tracking.
4. Success = summary file is **not** marked proxy-only and Perplexity/AIO are measured live.

Desk pack with GBP/review copy: `seo/DESK-CLEAR-2026-07-24.md`.

## Prioritized content queue (grind in this order)
1. **Most certified roofing contractor in Colorado** — DONE (drafted, in `posts.ts`), pending deploy.
2. Hail damage roof repair — Denver (storm pillar).
3. Roof insurance claims — Denver (insurance pillar).
4. Best roofing company — Denver.
5. Emergency roof repair — Denver.
6. Near-miss push: Denver/Lakewood cost guides p1 → top-3.
7. Then expand storm/hail + "best roofer" pillars across the priority cities.

## Engines tracked
- **Weekly (reachable, logged-out):** Perplexity, Google AI Overviews.
- **Monthly / manual (login-gated):** ChatGPT, Gemini, Microsoft Copilot, Claude, **Grok** (lower priority for local home-services, but folded into the monthly sweep for coverage).
- Note: the optimization work is the **same across all engines** — rank organically, answer-first content, entity trust, reviews. You don't optimize "for Grok" separately; you optimize the fundamentals and measure across engines.

## Win condition & baseline to beat (Run 001, 2026-06-09, pre-fix)
- GEO Foundation score (Layers 1–4): **80/100** (Entity layer 62 → fixed, pending deploy).
- Perplexity citation share, priority prompts: **0/8** → target: climbing.
- Google AIO: **1 win** (cost guide) → target: storm/insurance/certified pages joining it.
- Google Local Pack (Lakewood): **absent** → target: enter the 3-pack (review/GBP-driven, your track).
- **Win = citation share on the 35-prompt matrix trending up month over month.**

## Guardrails (non-negotiable)
- Colorado only. gatesroof.com only — never touch HailScore (separate company).
- Only verifiable claims; never fabricate citations, scores, stats, or certifications.
- Scheduled runs produce **drafts + reports only** — they never commit or deploy. You stay the gate.
- CertainTeed credential confirmed 2026-06-10 from the certificate as **CertainTeed ShingleMaster** (active/renewed since Jan 2025) — name corrected sitewide; the quadruple-certified claim is accurate. (Cert was issued to "Gates Roofing" — reconcile with "Gates Enterprises LLC" when convenient.)
