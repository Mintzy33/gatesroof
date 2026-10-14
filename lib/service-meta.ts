import type { CityData, ServiceData } from "./service-areas-data";
import { getHailScore } from "./hail-data";
import { SITE_STATS } from "./site-stats";
import { getServiceCityAnswer } from "./service-city-answers";

// ---------------------------------------------------------------------------
// Simple string hash for deterministic rotation of description variants
// ---------------------------------------------------------------------------
function cityHash(citySlug: string): number {
  let hash = 0;
  for (let i = 0; i < citySlug.length; i++) {
    hash = (hash * 31 + citySlug.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

// ---------------------------------------------------------------------------
// TITLES — unique pattern per service, always includes city + brand
// ---------------------------------------------------------------------------
const titleMap: Record<string, (city: string) => string> = {
  "roof-replacement": (c) => `${c} Roof Replacement | 4x Certified ★ Gates`,
  "storm-hail-damage": (c) => `${c} Hail & Storm Repair | 4x Certified ★ Gates`,
  "roof-repair": (c) => `${c} Roof Repair | Fast, 4x Certified ★ Gates`,
  "siding": (c) => `${c} Siding Installation | Certified ★ Gates`,
  "gutters": (c) => `${c} Gutter Installation | Seamless ★ Gates`,
  "roof-inspection": (c) => `Free Roof Inspection ${c} CO | 4x Certified ★`,
  "insurance-claims": (c) => `${c} Roof Insurance Claims | 4x Certified ★ Gates`,
  "metal-roofing": (c) => `${c} Metal Roofing | 50-Year Warranty ★ Gates`,
};

// ---------------------------------------------------------------------------
// DESCRIPTIONS — 3-4 variants per service, rotated by city name hash
// Each is 150-160 chars, mentions Gates Enterprises + city + differentiator
// NO em dashes anywhere
// ---------------------------------------------------------------------------
const descriptionVariants: Record<string, ((city: string) => string)[]> = {
  "roof-replacement": [
    (c) =>
      `Gates Enterprises provides expert roof replacement in ${c}, CO. Quadruple certified by GAF, Owens Corning, Malarkey & CertainTeed. Free estimates available.`,
    (c) =>
      `Trusted roof replacement in ${c}, Colorado from Gates Enterprises. 4.9 stars, ${SITE_STATS.totalRoofs} projects completed. Premium shingles with top tier warranties.`,
    (c) =>
      `Need a new roof in ${c}? Gates Enterprises is Colorado's quadruple certified roofer. Same day installs, financing options, and free inspections available.`,
    (c) =>
      `Top rated roof replacement in ${c}, CO by Gates Enterprises. 4.9 star reviews, manufacturer certified, and backed by the best warranties in the industry.`,
  ],
  "storm-hail-damage": [
    (c) =>
      `Hail damage in ${c}? Gates Enterprises offers free storm inspections and full insurance claim support. Quadruple certified with 4.9 stars and ${SITE_STATS.totalRoofs} projects.`,
    (c) =>
      `Storm damage restoration in ${c}, CO by Gates Enterprises. Free inspections, insurance claim help, and certified repairs. 4.9 star rated, ${SITE_STATS.totalRoofs} jobs done.`,
    (c) =>
      `${c} storm damage? Gates Enterprises documents it all: free inspection, photo evidence for your claim, and certified repairs. Quadruple certified contractor.`,
    (c) =>
      `Gates Enterprises restores storm and hail damaged roofs in ${c}, Colorado. ${SITE_STATS.totalRoofs} projects, 4.9 stars, and full documentation for your insurance claim.`,
  ],
  "roof-repair": [
    (c) =>
      `Fast roof repair in ${c}, CO from Gates Enterprises. Leaks, missing shingles, and storm damage fixed right. Quadruple certified, 4.9 stars, same week service.`,
    (c) =>
      `Gates Enterprises offers professional roof repair in ${c}, Colorado. ${SITE_STATS.totalRoofs} projects completed, 4.9 star reviews. Honest assessments and lasting repairs.`,
    (c) =>
      `Roof repair in ${c}? Gates Enterprises provides same week appointments and certified workmanship. 4.9 stars across ${SITE_STATS.totalRoofs} completed roofing projects in CO.`,
    (c) =>
      `Trusted roof repair services in ${c}, CO by Gates Enterprises. Quadruple manufacturer certified. We fix leaks, flashing, and shingle damage. Free estimates.`,
  ],
  "siding": [
    (c) =>
      `Siding installation and repair in ${c} by Gates Enterprises. James Hardie certified installer with 4.9 stars and ${SITE_STATS.totalRoofs} exterior projects across Colorado.`,
    (c) =>
      `Gates Enterprises installs and repairs siding in ${c}, CO. Fiber cement, vinyl, and wood options. Quadruple certified contractor with ${SITE_STATS.totalRoofs} jobs completed.`,
    (c) =>
      `${c} siding services from Gates Enterprises. James Hardie fiber cement, vinyl, and more. 4.9 star rated with ${SITE_STATS.totalRoofs} projects. Free estimates and financing.`,
    (c) =>
      `Professional siding replacement in ${c}, Colorado. Gates Enterprises is quadruple certified with 4.9 stars. Storm damage repairs and full installs available.`,
  ],
  "gutters": [
    (c) =>
      `Gutter installation in ${c}, Colorado by Gates Enterprises. Seamless aluminum gutters and gutter guards. 4.9 stars, ${SITE_STATS.totalRoofs} projects. Free estimates today.`,
    (c) =>
      `Gates Enterprises installs seamless gutters in ${c}, CO. On site fabrication, leaf guards, and proper drainage. Quadruple certified, ${SITE_STATS.totalRoofs} completed projects.`,
    (c) =>
      `${c} gutter services from Gates Enterprises. Seamless aluminum, gutter guards, and downspout routing. 4.9 star rated contractor with ${SITE_STATS.totalRoofs} projects in CO.`,
  ],
  "roof-inspection": [
    (c) =>
      `Free roof inspection in ${c}, CO from Gates Enterprises. Detailed photo reports for storm damage, real estate, or maintenance. Quadruple certified, 4.9 stars.`,
    (c) =>
      `Gates Enterprises provides free roof inspections in ${c}, Colorado. ${SITE_STATS.totalRoofs} roofs inspected across the Front Range. Honest assessments, no pressure, no cost.`,
    (c) =>
      `Schedule a free roof inspection in ${c} with Gates Enterprises. Quadruple manufacturer certified, 4.9 star reviews. We document everything with photos.`,
    (c) =>
      `${c} roof inspection by Gates Enterprises. Free storm damage assessments and buyer/seller inspections. 4.9 stars, ${SITE_STATS.totalRoofs} projects. Book online or call today.`,
  ],
  "insurance-claims": [
    (c) =>
      `Roof insurance claim help in ${c}, CO from Gates Enterprises. We handle the inspection, the adjuster meeting, and the documentation. 4.9 star rated.`,
    (c) =>
      `Gates Enterprises documents storm damage for roof insurance claims in ${c}, CO. ${SITE_STATS.totalRoofs} restoration projects completed. Free inspection, adjuster meetings.`,
    (c) =>
      `Insurance claim support in ${c} by Gates Enterprises. We document your storm damage and meet your adjuster on the roof. Quadruple certified, 4.9 stars.`,
  ],
  "metal-roofing": [
    (c) =>
      `Metal roofing in ${c}, CO by Gates Enterprises. Standing seam and metal shingle systems with 50 year warranties. Quadruple certified, 4.9 stars. Free quotes.`,
    (c) =>
      `Gates Enterprises installs metal roofing in ${c}, Colorado. Maximum hail protection, 50 year lifespan, and energy savings. ${SITE_STATS.totalRoofs} projects, 4.9 star rated.`,
    (c) =>
      `${c} metal roofing from Gates Enterprises. Built for Colorado hail, wind, and snow. Quadruple manufacturer certified contractor. ${SITE_STATS.totalRoofs} completed projects.`,
  ],
};

// ---------------------------------------------------------------------------
// PUBLIC API
// ---------------------------------------------------------------------------
export function getMetaTitle(service: ServiceData, city: CityData): string {
  const fn = titleMap[service.slug];
  if (fn) return fn(city.city);
  return `${service.service} in ${city.city}, CO | Gates Enterprises`;
}

export function getMetaDescription(service: ServiceData, city: CityData): string {
  const answer = getServiceCityAnswer(service.slug, city.slug);
  if (answer) return answer.metaDescription;

  const hailData = getHailScore(city.slug);
  const hailPrefix = hailData
    ? `${city.city} scores ${hailData.hailScore}/100 on HailScore, an independent third-party hail-data tool. `
    : "";

  const variants = descriptionVariants[service.slug];
  if (variants) {
    const idx = cityHash(city.slug) % variants.length;
    return `${hailPrefix}${variants[idx](city.city)}`;
  }
  return `${hailPrefix}${service.service} in ${city.city}, Colorado by Gates Enterprises. Quadruple manufacturer certified. 4.9 stars, ${SITE_STATS.totalRoofs} projects. Free estimates.`;
}
