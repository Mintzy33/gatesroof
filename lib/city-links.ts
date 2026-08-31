/**
 * Canonical resolver for "link me to this city's page".
 *
 * WHY THIS EXISTS: the site markets "65+ cities served" but only 27 cities have an
 * /areas/<slug> hub page. Every emitter used to build `/areas/${slug}` unconditionally,
 * so a homeowner clicking their own city landed on a 404 that also served the wrong
 * <title>. A production crawl on 2026-08-31 found dead /areas/ links on 36 indexed pages.
 *
 * Every city in `cities[]` (lib/service-areas-data.ts) DOES have a live landing page —
 * the link was simply pointing at the wrong one. Resolution order:
 *   1. /areas/<slug>            — the full hub page, best destination when it exists
 *   2. /best-roofer-<slug>      — the programmatic landing page
 *   3. /services/roof-replacement/<slug> — always generated for every city in cities[]
 *
 * Import this anywhere you link to a city. Do not hand-build `/areas/${slug}`.
 *
 * KEEPING THESE IN SYNC: AREA_HUB_SLUGS must match the directories under app/areas/, and
 * BEST_ROOFER_SLUGS the app/best-roofer-* directories. `npm run check:city-links` asserts
 * both against the filesystem and fails the build if they drift.
 */

/** Cities with a full /areas/<slug> hub page (directories under app/areas/). */
export const AREA_HUB_SLUGS: ReadonlySet<string> = new Set([
  "arvada", "aurora", "brighton", "broomfield", "castle-rock", "centennial",
  "colorado-springs", "commerce-city", "conifer", "denver", "edgewater", "englewood",
  "evergreen", "federal-heights", "fort-collins", "golden", "highlands-ranch", "lakewood",
  "littleton", "lone-tree", "morrison", "northglenn", "parker", "superior", "thornton",
  "westminster", "wheat-ridge",
]);

/** Cities with a /best-roofer-<slug> landing page but no /areas hub. */
export const BEST_ROOFER_SLUGS: ReadonlySet<string> = new Set([
  "boulder", "cherry-hills-village", "erie", "greeley", "greenwood-village", "ken-caryl",
  "lafayette", "longmont", "louisville", "loveland", "sheridan",
]);

/** Resolve a city slug to a page that actually exists. Never returns a 404 for a city in cities[]. */
export function cityHref(slug: string): string {
  if (AREA_HUB_SLUGS.has(slug)) return `/areas/${slug}`;
  if (BEST_ROOFER_SLUGS.has(slug)) return `/best-roofer-${slug}`;
  return `/services/roof-replacement/${slug}`;
}

/** True when the city has a full hub page — use to decide whether to render a "see all services" style link. */
export function hasAreaHub(slug: string): boolean {
  return AREA_HUB_SLUGS.has(slug);
}
