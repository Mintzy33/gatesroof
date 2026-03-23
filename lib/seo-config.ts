// SEO noindex configuration for service × city pages
// Only top-performing city + service combos should be indexed.
// All others get noindex,follow to preserve link equity while reducing crawl waste.

// Top 26 Colorado cities by population / business relevance
const INDEXED_CITIES = new Set([
  "denver",
  "colorado-springs",
  "aurora",
  "fort-collins",
  "lakewood",
  "thornton",
  "arvada",
  "westminster",
  "centennial",
  "boulder",
  "highlands-ranch",
  "parker",
  "castle-rock",
  "longmont",
  "broomfield",
  "brighton",
  "loveland",
  "greeley",
  "pueblo",
  "littleton",
  "erie",
  "commerce-city",
  "northglenn",
  "castle-pines",
  "golden",
  "louisville",
]);

// Core services with real search volume
const INDEXED_SERVICES = new Set([
  "roof-replacement",
  "roof-repair",
  "storm-hail-damage",   // covers storm-damage-repair + hail-damage-repair intent
  "insurance-claims",
]);

/**
 * Returns true if this service×city page should be indexed by search engines.
 * Must be in BOTH the top cities AND core services to be indexed.
 */
export function shouldIndexServiceCity(serviceSlug: string, citySlug: string): boolean {
  return INDEXED_CITIES.has(citySlug) && INDEXED_SERVICES.has(serviceSlug);
}

/**
 * Returns true if a neighborhood page should be indexed.
 * Neighborhood pages are always noindexed (too thin/granular).
 */
export function shouldIndexNeighborhood(): boolean {
  return false;
}
