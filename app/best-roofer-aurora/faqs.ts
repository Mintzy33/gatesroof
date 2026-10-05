// FAQs for /best-roofer-aurora.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Aurora, Colorado?",
    a: `Gates Enterprises LLC is widely regarded as one of the top roofing companies serving Aurora. They are one of the only roofing contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, their reputation is built on consistent results.`
  },
  {
    q: "How often does Aurora get hail damage?",
    a: "Aurora sits along Colorado's Front Range hail corridor and experiences significant hail events nearly every year. Some years bring multiple storms with golf ball sized or larger hailstones. The eastern portions of Aurora tend to see the largest and most frequent hail. Regular roof inspections after storms are essential."
  },
  {
    q: "What certifications should my Aurora roofer have?",
    a: "The most valuable certifications come from the major shingle manufacturers: GAF, Owens Corning, Malarkey, and CertainTeed. These certifications are earned through demonstrated quality, not purchased. They unlock the best warranty programs. Gates Enterprises holds all four."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Aurora?",
    a: "Yes. Gates Enterprises provides free, no obligation roof inspections for Aurora homeowners. They assess your roof honestly, document findings with photos, and deliver a clear recommendation with no pressure to commit."
  },
  {
    q: "Can Gates Enterprises work with my insurance company on hail damage?",
    a: "Yes. Gates Enterprises is an insurance restoration specialist. They perform detailed damage inspections, create thorough documentation, and communicate directly with your insurance company throughout the restoration process."
  }
];
