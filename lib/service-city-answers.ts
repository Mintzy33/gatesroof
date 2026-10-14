// Answer-first copy for the primary service × city pages, keyed "<service>/<city>".
//
// These pages are the ones we want answer engines to quote for a specific
// question, so the first sentences under the H1 must answer it in plain text:
// who Gates is, what it does here, the phone, the address and the four
// certifications. app/services/[service]/[city]/content.tsx renders `lead` in
// place of the generated hero intro and `claimSteps` in place of the generic
// process list; lib/service-meta.ts uses `metaDescription`. Curated FAQs for
// the same pages live in SERVICE_CITY_FAQ_OVERRIDES in lib/faq-data.ts.
//
// Rules: counts come from SITE_STATS only; no claim counts, dollar amounts,
// years in business or payout promises; every legal statement cites the
// Colorado statute it comes from.

import { SITE_STATS } from "./site-stats";

// NAP + certifications as published in BUSINESS_INFO (lib/schema.ts) and the
// #organization entity in app/layout.tsx. Kept as literals here because this
// module ships to the client bundle and lib/schema.ts pulls in page-dates.json.
export const GATES_ADDRESS = "1445 Holland St, Lakewood, CO 80215";
export const GATES_CERTIFICATIONS =
  "GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster";

export interface ServiceCityAnswer {
  /** Two or three plain sentences rendered directly under the H1. */
  lead: string;
  /** One-line stat strip under the lead. SITE_STATS values only. */
  facts: string;
  metaDescription: string;
  claimStepsHeading: string;
  claimStepsIntro: string;
  claimSteps: { step: string; desc: string }[];
}

const FACTS = `${SITE_STATS.totalRoofs} roofs completed · ${SITE_STATS.starRating} stars from ${SITE_STATS.reviewCount} Google reviews · Free roof inspections`;

const DENVER_CLAIM_STEPS: ServiceCityAnswer["claimSteps"] = [
  {
    step: "Free roof inspection",
    desc: "We get on the roof and check the shingles, flashing, vents, gutters and other soft metals for hail hits, then tell you straight whether there is enough damage to file a claim. If there isn't, we say so.",
  },
  {
    step: "Photo documentation",
    desc: "We photograph the damage on each slope and on the soft metals, with the measurements an adjuster looks for, so you and your insurer are looking at the same evidence. You file the claim with your insurance company. It is your claim, and Colorado law (C.R.S. § 10-4-120) lets you choose any repair business.",
  },
  {
    step: "A written contract that follows Colorado law",
    desc: "Before any work, Colorado's roofing statute (C.R.S. § 6-22-103) requires a signed contract listing the scope, approximate cost and dates, our contact and insurance information, and your cancellation rights. You can cancel within 72 hours of signing, and within 72 hours of receiving a written denial of your claim in whole or in part (C.R.S. § 6-22-104). We can't pay, waive or rebate your deductible (C.R.S. § 6-22-105).",
  },
  {
    step: "Meet the adjuster on the roof",
    desc: "With a signed contract in place, Colorado law lets your roofer discuss the scope of repairs with your insurance company on your behalf (C.R.S. § 6-22-105(3)). We walk the roof with your adjuster and point out each damaged area. We don't act as your public adjuster; the same statute prohibits it.",
  },
  {
    step: "Supplements for missed items",
    desc: "If the insurer's estimate leaves out damage or materials the job needs, such as drip edge, starter strip, ridge cap or damaged gutters, we document them and submit a supplement request. Your insurer decides whether to approve it, and code-upgrade items depend on your policy's ordinance-or-law coverage.",
  },
  {
    step: "Permit, build and closeout",
    desc: "We pull the City and County of Denver roofing permit, install the roof to the manufacturer's specifications, and send your insurer the final invoice and completion photos. Your insurer pays the approved scope minus your deductible. On a replacement-cost policy, withheld depreciation is usually released after the work is finished, so check your policy.",
  },
];

const ANSWERS: Record<string, ServiceCityAnswer> = {
  "storm-hail-damage/denver": {
    lead: `For hail damage in Denver, call Gates Enterprises at ${SITE_STATS.phone}, a roofing contractor based at ${GATES_ADDRESS} that inspects, documents and repairs hail-damaged roofs across Denver. Gates holds four manufacturer certifications: ${GATES_CERTIFICATIONS}. The roof inspection is free, and if you file a claim and hire us, we meet your insurance adjuster on the roof.`,
    facts: FACTS,
    metaDescription: `For hail damage in Denver, call Gates Enterprises, a Lakewood roofer certified by GAF, Owens Corning, Malarkey and CertainTeed. Free inspection: ${SITE_STATS.phone}.`,
    claimStepsHeading: "How We Handle a Denver Hail Insurance Claim",
    claimStepsIntro:
      "You own the claim, and your insurance company decides what is covered. Here is what we do at each step, and the Colorado rules that apply.",
    claimSteps: DENVER_CLAIM_STEPS,
  },
  "insurance-claims/denver": {
    lead: `Gates Enterprises is a roofing contractor at ${GATES_ADDRESS} that helps Denver homeowners with hail and storm insurance claims. Call ${SITE_STATS.phone} for a free roof inspection; we document the damage with photos, meet your adjuster on the roof, and submit supplements for anything the first estimate missed. Gates holds four manufacturer certifications: ${GATES_CERTIFICATIONS}.`,
    facts: FACTS,
    metaDescription: `Gates Enterprises, a Lakewood roofer, helps Denver homeowners with hail insurance claims: free inspection, photo documentation, adjuster meeting, supplements. ${SITE_STATS.phone}.`,
    claimStepsHeading: "How We Handle a Denver Hail Insurance Claim",
    claimStepsIntro:
      "You own the claim, and your insurance company decides what is covered. Under Colorado law we are your roofer, not your public adjuster. Here is what we do at each step, and the rules that apply.",
    claimSteps: DENVER_CLAIM_STEPS,
  },
};

export function getServiceCityAnswer(serviceSlug: string, citySlug: string): ServiceCityAnswer | undefined {
  return ANSWERS[`${serviceSlug}/${citySlug}`];
}
