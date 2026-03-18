import type { CityData, ServiceData } from "./service-areas-data";
import { getHailScore } from "./hail-data";

type HailRisk = CityData["hailRisk"];

const titleMap: Record<string, (city: string) => string> = {
  "storm-hail-damage": (c) => `${c} Hail Damage Roof Repair | Free Inspection`,
  "roof-replacement": (c) => `${c} Roof Replacement | GAF & Owens Corning`,
  "roof-repair": (c) => `${c} Roof Repair | Same-Week Service`,
  "insurance-claims": (c) => `${c} Roof Insurance Claims | We Handle It All`,
  "roof-inspection": (c) => `Free Roof Inspection ${c} CO | Gates Enterprises`,
  "gutters": (c) => `${c} Gutter Installation & Repair | Gates Roofing`,
  "siding": (c) => `${c} Siding Installation | James Hardie Certified`,
  "metal-roofing": (c) => `${c} Metal Roofing | 50-Year Warranty Available`,
};

const descriptionMap: Record<string, Record<HailRisk, (city: string) => string>> = {
  "storm-hail-damage": {
    high: (c) =>
      `${c} gets hit hard by hail. Free storm damage inspection from Colorado's only 4x certified roofer. 301 reviews, 4.8 stars. We handle your claim.`,
    moderate: (c) =>
      `Storm damage in ${c}? Free inspections and full insurance claim support. 4x manufacturer certified, 4.8 star rated. Book your free inspection today.`,
    low: (c) =>
      `Hail or wind damage in ${c}? Gates Enterprises offers free storm inspections. 4x certified, 301 reviews, 4.8 stars. We work with your insurance.`,
  },
  "roof-replacement": {
    high: (c) =>
      `Need a roof replacement in ${c}? Impact-resistant shingles from Colorado's only 4x certified contractor. Insurance-approved, 4.8 stars, free estimates.`,
    moderate: (c) =>
      `Trusted roof replacement in ${c}, CO. GAF, Owens Corning, Malarkey & CertainTeed certified. 301 reviews, 4.8 stars. Free estimate, financing available.`,
    low: (c) =>
      `Quality roof replacement in ${c}, CO. Choose from GAF, Owens Corning, Malarkey & CertainTeed products. 4x certified, 4.8 stars. Free estimate today.`,
  },
  "roof-repair": {
    high: (c) =>
      `Fast roof repair in ${c} from Colorado's only 4x certified roofer. Storm damage, leaks, missing shingles. Same-week service. 301 reviews, 4.8 stars.`,
    moderate: (c) =>
      `Roof repair in ${c}, CO. Leaks, missing shingles, storm damage fixed fast. 4x manufacturer certified, 301 reviews, 4.8 stars. Same-week appointments.`,
    low: (c) =>
      `Professional roof repair in ${c}. Leaks, wear, and damage repaired quickly by 4x certified pros. 301 reviews, 4.8 stars. Book a free estimate today.`,
  },
  "insurance-claims": {
    high: (c) =>
      `${c} homeowners: we handle your entire roof insurance claim. Free inspection, adjuster meetings, paperwork. 4x certified, 4.8 stars, 301 reviews.`,
    moderate: (c) =>
      `Roof insurance claim in ${c}? Gates handles everything: inspection, adjuster meeting, paperwork. 4x manufacturer certified. 301 reviews, 4.8 stars.`,
    low: (c) =>
      `Need help with a roof insurance claim in ${c}? We manage the full process. Free inspection, adjuster coordination. 4x certified, 4.8 star rated.`,
  },
  "roof-inspection": {
    high: (c) =>
      `Free roof inspection in ${c}, CO. Know your roof's condition before the next hail season. 4x manufacturer certified, 301 reviews, 4.8 stars.`,
    moderate: (c) =>
      `Free roof inspection in ${c}. Catch small issues before they become big repairs. 4x certified, 301 reviews, 4.8 stars. Book online or call today.`,
    low: (c) =>
      `Schedule a free roof inspection in ${c}, CO. Detailed assessment from 4x certified pros. 301 reviews, 4.8 stars. No obligation, no pressure.`,
  },
  "gutters": {
    high: (c) =>
      `Gutter installation and repair in ${c}, CO. Protect your home from Colorado storms. 4x certified contractor, 301 reviews, 4.8 stars. Free estimates.`,
    moderate: (c) =>
      `Professional gutter installation and repair in ${c}. Seamless gutters, leaf guards, and downspouts. 4x certified, 301 reviews, 4.8 stars.`,
    low: (c) =>
      `Gutter services in ${c}, CO. New seamless gutters, repairs, and leaf protection. 4x manufacturer certified. 301 reviews, 4.8 stars. Free estimate.`,
  },
  "siding": {
    high: (c) =>
      `Siding installation in ${c} built to handle Colorado hail. James Hardie certified. 4x manufacturer certified contractor, 301 reviews, 4.8 stars.`,
    moderate: (c) =>
      `Professional siding installation in ${c}, CO. James Hardie fiber cement and vinyl options. 4x certified, 301 reviews, 4.8 stars. Free estimate.`,
    low: (c) =>
      `Siding installation and replacement in ${c}. James Hardie certified installer. Boost curb appeal and protection. 301 reviews, 4.8 stars.`,
  },
  "metal-roofing": {
    high: (c) =>
      `Metal roofing in ${c}, CO. Maximum hail protection with 50-year warranty options. 4x manufacturer certified, 301 reviews, 4.8 stars. Free estimate.`,
    moderate: (c) =>
      `Metal roofing installation in ${c}. Durable, energy-efficient, 50-year warranty available. 4x certified contractor, 301 reviews, 4.8 stars.`,
    low: (c) =>
      `Metal roofing in ${c}, CO. Long-lasting, energy-efficient, and low-maintenance. 50-year warranty available. 4x certified, 301 reviews, 4.8 stars.`,
  },
};

export function getMetaTitle(service: ServiceData, city: CityData): string {
  const fn = titleMap[service.slug];
  if (fn) return fn(city.city);
  return `${service.service} in ${city.city}, CO | Gates Enterprises`;
}

export function getMetaDescription(service: ServiceData, city: CityData): string {
  const hailData = getHailScore(city.slug);
  const hailPrefix = hailData
    ? `${city.city} has a HailScore of ${hailData.hailScore}/100. `
    : "";

  const serviceDescs = descriptionMap[service.slug];
  if (serviceDescs) {
    const fn = serviceDescs[city.hailRisk];
    if (fn) return `${hailPrefix}${fn(city.city)}`;
  }
  return `${hailPrefix}${service.service} in ${city.city}, Colorado. 4x manufacturer certified. 301 reviews, 4.8 stars. Free estimates.`;
}
