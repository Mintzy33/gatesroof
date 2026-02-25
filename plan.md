# Plan: Replace FadeIn with GSAP ScrollTrigger Animations

## Current State
- `FadeIn` component uses IntersectionObserver + CSS transitions (opacity + translateY/X)
- `Counter` component uses IntersectionObserver + requestAnimationFrame
- GSAP 3.14 + Lenis already installed but unused
- Every section on the homepage wraps content in `<FadeIn>` wrappers

## What Changes

### 1. Create new `GSAPAnimations.tsx` client component
Replaces `ClientAnimations.tsx` with GSAP-powered versions:

- **`ScrollReveal`** — replaces `FadeIn`. Uses `gsap.from()` + `ScrollTrigger` for scroll-triggered entrance animations. Supports directions (up/left/right/scale), stagger delays, and custom easing. More dynamic than CSS transitions — elements can animate with spring physics, overshoot, and scrub-linked motion.

- **`CounterGSAP`** — replaces `Counter`. Uses `gsap.to()` with `snap` to animate a number object, triggered by ScrollTrigger. Smoother and synced with scroll position.

- **`StaggerCards`** — NEW. Wraps a group of cards (services, why-gates, reviews) and staggers their entrance as a batch using `ScrollTrigger.batch()`. Cards ripple in from left to right instead of all fading in together.

- **`ParallaxSection`** — NEW. Adds subtle parallax movement to section backgrounds or decorative elements on scroll using `scrub: true`.

### 2. Update `page.tsx` homepage
- Replace all `<FadeIn>` wrappers with `<ScrollReveal>`
- Replace `<Counter>` with `<CounterGSAP>`
- Wrap service cards grid in `<StaggerCards>`
- Wrap why-gates cards in `<StaggerCards>`
- Wrap review cards in `<StaggerCards>`
- Add parallax to the before/after section heading
- Keep `PhoneLink` unchanged (no animation needed)

### 3. Connect Lenis + GSAP ScrollTrigger
Update `SmoothScroll.tsx` to sync Lenis with GSAP's ScrollTrigger ticker, so scroll-linked animations stay perfectly smooth with the Lenis smooth scroll.

### 4. Animation Details

| Element | Current | New GSAP Animation |
|---------|---------|-------------------|
| Section headings | FadeIn up 0.7s | ScrollReveal: y:40 → 0, opacity 0→1, duration 0.8, ease: "power3.out" |
| Service cards | FadeIn up staggered | StaggerCards batch: y:60 → 0, opacity, stagger 0.12s, ease: "back.out(1.4)" with slight overshoot |
| Why Gates text | FadeIn up | ScrollReveal: y:30, scrub for parallax feel |
| Why Gates cards | FadeIn staggered | StaggerCards: scale:0.9 → 1, y:40 → 0, stagger 0.1s |
| Stats counters | IntersectionObserver RAF | GSAP tween with ScrollTrigger start, snapped integers |
| Review cards | FadeIn staggered | StaggerCards batch: x:-30 → 0, opacity, stagger 0.15s |
| Before/After heading | FadeIn up | ScrollReveal with slight scale: 0.95 → 1 |
| CTA section | FadeIn up | ScrollReveal: y:50, opacity, scale:0.97 → 1 |

### 5. Performance Considerations
- GSAP is ~28KB gzipped — already installed, no new bundle cost
- ScrollTrigger lazy-registered only when needed
- All animations use `will-change: transform` hints
- Mobile: reduce animation distances (y:60 → y:30) and disable parallax scrub for battery
- Use `ScrollTrigger.matchMedia()` for responsive animation breakpoints

### Files Modified
1. `app/components/GSAPAnimations.tsx` — NEW (replaces FadeIn/Counter usage)
2. `app/components/SmoothScroll.tsx` — UPDATED (Lenis ↔ ScrollTrigger sync)
3. `app/page.tsx` — UPDATED (swap FadeIn → ScrollReveal, add StaggerCards)
4. `app/components/ClientAnimations.tsx` — keep PhoneLink, remove FadeIn/Counter exports (or keep as fallback)
