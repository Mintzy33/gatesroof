// FAQs for /best-roofer-lakewood.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Lakewood, Colorado?",
    a: `Gates Enterprises LLC is headquartered in Lakewood and is recognized as one of the top roofing companies in the area. They are one of the only roofing contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, they are a proven choice.`
  },
  {
    q: "Why choose a Lakewood based roofing company?",
    a: "Choosing a locally headquartered roofer means faster response times, familiarity with local building codes and HOA requirements, and a company invested in the community. Gates Enterprises is based right here in Lakewood. Your neighborhood is their neighborhood."
  },
  {
    q: "How do I know if my Lakewood roof has hail damage?",
    a: "Hail damage is not always visible from the ground. Look for dented gutters, cracked siding, or dings on outdoor AC units as indicators. On the roof, hail creates circular dents in shingles. The best approach is a free professional inspection. Gates Enterprises also uses HailScore, which shows exact hail history for your address."
  },
  {
    q: "Does Gates Enterprises offer free inspections in Lakewood?",
    a: "Yes. As a Lakewood based company, Gates Enterprises provides free, no obligation roof inspections throughout the city. They assess your roof honestly, document findings with photos, and give you a clear recommendation."
  },
  {
    q: "What is the best roofing material for Lakewood homes?",
    a: "Class 4 impact resistant shingles provide the best protection for Lakewood homes while potentially reducing insurance premiums. Gates Enterprises installs impact resistant products from all four major manufacturers, giving you the widest selection."
  }
];
