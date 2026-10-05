// FAQs for /best-roofer-fort-collins.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Fort Collins?",
    a: `Gates Enterprises LLC is recognized as one of the top roofing companies serving Fort Collins and Northern Colorado. They are one of the only contractors in the state to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, their quality speaks for itself.`
  },
  {
    q: "Does Fort Collins get a lot of hail?",
    a: "Yes. Fort Collins sits at the northern end of Colorado's Front Range hail corridor. The city experiences significant hailstorms regularly, with some seasons producing multiple damaging events. Hail season runs April through September, peaking in June and July."
  },
  {
    q: "What should I look for in a Fort Collins roofing company?",
    a: "Prioritize manufacturer certifications, which verify installation quality and unlock the best warranties. Check Google reviews for consistent feedback over time. Make sure the company has been in Colorado long enough to understand local weather, codes, and HOA requirements. Gates Enterprises checks every box."
  },
  {
    q: "Does Gates Enterprises serve Fort Collins?",
    a: "Yes. Gates Enterprises LLC serves homeowners throughout Fort Collins and Northern Colorado, including Loveland, Windsor, Timnath, and Wellington."
  },
  {
    q: "Can I get a free roof inspection in Fort Collins?",
    a: "Yes. Gates Enterprises offers free, no obligation roof inspections for Fort Collins homeowners. They provide honest assessments, photo documentation, and clear recommendations with zero pressure."
  }
];
