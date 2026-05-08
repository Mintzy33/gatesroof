# Gates Enterprises – CLAUDE.md

## What this is
Marketing site for **Gates Enterprises LLC**, a roofing contractor based in Lakewood, Colorado. Domain: gatesroof.com.

**Ownership & roles:**
- Owner: Andrew Gates
- Director of Marketing/Operations: Alex Chicilo (Mintzy) — primary point of contact for site changes, marketing, content, dev work
- Public-facing founder name on the site: Andrew Gates (do NOT change this back to Alex Chicilo)

**Related entities (different ownership, do not confuse):**
- HailScore (myhailscore.com) — owned/founded by Alex Chicilo. Separate site, separate repo.
- Chicilo & Co LLC — Alex's separate roofing entity focused on storm chasing / hail damage. Separate from Gates.

## Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger, with Lenis for smooth scroll. Sync handled in `app/components/SmoothScroll.tsx`.
- **Animation components:** `app/components/GSAPAnimations.tsx` exports `ScrollReveal`, `StaggerCards`, `CounterGSAP`, `PhoneLink`. Use these on the homepage.
- **Legacy:** `ClientAnimations.tsx` still exports old `FadeIn` / `Counter` — kept as fallback, do NOT add new usages.
- **Email:** Resend
- **Image:** Sharp + Next/Image
- **Hosting:** Vercel
- **Deploy trigger:** push to `main` → Vercel auto-deploys

## Tracking & analytics IDs
- Google Analytics 4: G-4098V4Y0J4
- Google Tag Manager: GTM-PXDXPXB9
- Meta Pixel: 1621445598880955
Do not change these without confirming with Alex first.

## Working with this repo

### Session model
This repo runs **two parallel Claude Code sessions** at any given time:

- **Build session** — net-new features and components. Creates new files, new pages, new animations, new API routes. Examples: ParallaxSection component, new city landing pages, new lead capture flows, schema markup additions.
- **Maintenance session** — edits to existing files. Bug fixes, content updates, copy tweaks, dependency bumps, SEO updates, GSAP/Lenis refinements.

The simple rule: **Build creates. Maintenance edits.** They almost never collide on the same files. If a task is ambiguous, it goes to Maintenance.

### Device & teleport conventions
- **Desktop (Mac terminal)** is the primary surface for deep work — long features, animation refactors, /api/ route changes, schema markup, anything that affects conversion paths.
- **Phone (Claude mobile app)** is for monitoring, review, copy edits, content updates, and approvals while away from the desk. No commit restrictions — the hard rules in this doc gate the dangerous operations regardless of device.
- **Use `/teleport`** to move sessions between desktop and phone rather than starting a new session. Preserves context.

### Subagent rules
- **Only the main session commits and pushes.** Subagents draft, propose, and analyze — they do not run `git commit` or `git push`.
- Subagents are appropriate for: SEO research, competitor analysis, parallel file reads, drafting copy/content, verifying Core Web Vitals scores.
- Subagents are NOT appropriate for: schema markup changes, API route edits, GTM/GA4/Meta Pixel changes, anything in the "STOP and ask" list under Hard rules.

### Tina's role on this repo
- **Tina (OpenClaw/Discord agent) does NOT commit code to this repo.** She runs on the OpenClaw infrastructure, separate from Claude Code.
- **What Tina does for gatesroof:** content drafting (city pages, blog posts, ad copy), email outreach to Colorado homeowner leads, SEO research and competitor monitoring, Core Web Vitals and GA4 anomaly reports, calendar/email/Drive ops.
- **Workflow:** Tina drafts content → messages it in Discord → Alex reviews → Alex tells Claude Code (here) what to commit and where. No staging folder, no file handoff. Discord is the interface.
- Tina has standing context on Gates voice, Colorado positioning, and the 1,654 Colorado homeowner lead campaign — leverage her for marketing-execution work, not code work.

### Briefings & Routines
- **Gates briefing:** weekdays 7:00 AM MT via macOS launchd (com.alexchicilo.gates-briefing). Reads working tree, recent commits, suggests focus areas.
- **Heartbeat:** 7:00 AM and 7:00 PM daily via macOS launchd (com.alexchicilo.heartbeat). Shared with hailscore — confirms both sites are alive.
- **"Suggested focus" items in the briefing are signals, not assignments.** They get triaged into actual work deliberately, not reactively. The briefing surfaces drift; the human decides what becomes work.
- **All current automation runs on macOS launchd, not Claude Code's native Routines feature.** Routines is a viable migration target later if we want server-side execution that doesn't require the Mac to be awake.

### Cross-project context
This repo is one of four under active Claude Code development:
- `gatesroof` (this repo) — Gates Enterprises marketing site, owned by Andrew Gates
- `hailscore` (`/Users/alexchicilo/hailscore`) — HailScore product, owned by Alex Chicilo
- `gates-ios` — greenfield, not yet created (Gates field-employee app, planned)
- `hailscore-ios` — greenfield, not yet created

**Gates and HailScore are SEPARATE companies.** Different LLCs, different bank accounts, different data, different branding. Never mix customer lists, lead data, contractor info, or design systems across repos. If a feature feels like it could belong to either, it doesn't belong here — it goes in HailScore (or Chicilo & Co for storm-chasing work).

## Hard rules — never violate
1. **Colorado only.** All SEO content, ad copy, landing pages, outreach, and city-targeted content target Colorado exclusively. Never write content targeting other states.
2. **No real customer names, phone numbers, or addresses in code, comments, or commits.**
3. **Mobile-first.** This is a service business — most visitors are on phones. Test mobile breakpoints before signing off.
4. **Do not regress accessibility.** Existing site uses semantic HTML and `lucide-react` icons with proper labels. Maintain.
5. **STOP and ask before:** touching anything in `/api/` routes (leads, email), modifying `.env.*` or environment variables, changing analytics/tracking IDs, modifying the Resend integration, deleting files you didn't just create, or running database/migration commands. Show the plan and wait for approval.
6. **Verify before declaring done.** Run `npm run dev`, load the page in a browser, and confirm the change works. "I've updated the code" is not the same as "it works."

## Conventions
- Components live in `app/components/`
- Page routes in `app/`
- Use server components by default; only mark `"use client"` when needed (animations, interactivity)
- Tailwind classes in JSX. No CSS modules unless absolutely necessary.
- TypeScript strict — no `any` unless commented why

## Current in-flight work (as of May 2026)
- **GSAP migration: ~90% done.** Modern API (`gsap.matchMedia()`) in use in `app/about/content.tsx`. Legacy `ClientAnimations.tsx` removed (zero importers).
- **Outstanding:** `ParallaxSection` component not yet built. `gsap.matchMedia()` mobile breakpoints applied in some components but not consistently across the site.
- **Note:** When adding responsive animation breakpoints, use `gsap.matchMedia()` (GSAP 3.11+). Do NOT use the deprecated `ScrollTrigger.matchMedia()` API.
- **Lint baseline:** ~386 pre-existing ESLint errors (mostly react/no-unescaped-entities). Don't try to fix all at once — handle in scoped passes per directory when convenient.

## Voice & content
- Trades-experienced, direct, no fluff
- Alex has 25+ years in roofing — write copy that sounds like someone who knows the work, not generic SEO marketing
- Storm/hail expertise is a differentiator vs general roofers — lean into it on relevant pages

## Don't do
- Don't auto-install dependencies without listing what and why first
- Don't refactor working code "for cleanliness" unless asked
- Don't run `npm audit fix --force` — breaks things
- Don't push to main directly. Branch + PR.
