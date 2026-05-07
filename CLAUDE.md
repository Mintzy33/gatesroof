# Gates Enterprises – CLAUDE.md

## What this is
Marketing site for Gates Enterprises LLC, a roofing contractor based in Lakewood, Colorado. Domain: gatesroof.com. Owned by Alex Chicilo (Mintzy). Sister site/business: HailScore (myhailscore.com). Separate roofing entity: Chicilo & Co LLC (storm chasing / hail damage focus).

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
- GSAP migration: ~80% done
- Outstanding: `ParallaxSection` component not yet built; ScrollTrigger.matchMedia() mobile breakpoints not yet added
- Legacy FadeIn/Counter need eventual cleanup once parallax is verified working

## Voice & content
- Trades-experienced, direct, no fluff
- Alex has 25+ years in roofing — write copy that sounds like someone who knows the work, not generic SEO marketing
- Storm/hail expertise is a differentiator vs general roofers — lean into it on relevant pages

## Don't do
- Don't auto-install dependencies without listing what and why first
- Don't refactor working code "for cleanliness" unless asked
- Don't run `npm audit fix --force` — breaks things
- Don't push to main directly. Branch + PR.
