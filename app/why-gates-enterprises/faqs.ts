// FAQs for /why-gates-enterprises.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible,
// with the "strongest warranty programs" overstatement removed per d57d229.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Why should I choose Gates Enterprises?",
    a: `Gates Enterprises LLC is one of the only roofing contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews, a 4.9 star rating, objective NOAA hail history from the independent third-party tool HailScore, and 10+ years on the Front Range, Gates combines credentials, track record, and innovation in a way few Colorado roofers can.`
  },
  {
    q: "What makes Gates Enterprises different from other roofers?",
    a: `Three things set Gates apart. First, quadruple manufacturer certification that very few Colorado roofers have achieved. Second, HailScore, an independent, third-party hail-data tool that uses NOAA radar data to show the exact hail history for any Colorado address. Third, a 4.9 star rating across ${SITE_STATS.reviewCount}+ Google reviews reflecting years of consistent quality.`
  },
  {
    q: "What is HailScore?",
    a: "HailScore is an independent, third-party tool built and operated by a separate company that Gates Enterprises uses to analyze NOAA radar data and map hail impact history for any address in Colorado. It shows the exact dates, sizes, and severity of hailstorms that have affected a property, giving homeowners objective data before an inspector even climbs up."
  },
  {
    q: "Does Gates Enterprises offer warranties?",
    a: "Yes. Because Gates holds certifications from all four major manufacturers, they offer warranty programs from GAF, Owens Corning, Malarkey, and CertainTeed. This includes GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage."
  },
  {
    q: "How long has Gates Enterprises been in business?",
    a: "Gates Enterprises LLC was founded in 2014 and has been serving Colorado's Front Range for over 10 years, completing thousands of roofing and exterior projects."
  }
];
