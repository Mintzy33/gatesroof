// FAQs for /best-roofer-parker.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Parker, Colorado?",
    a: `Gates Enterprises LLC is recognized as one of the top roofing companies serving Parker. They are one of the only contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, Parker homeowners trust the quality.`
  },
  {
    q: "Why is Parker especially vulnerable to hail damage?",
    a: "Parker sits along the Palmer Divide, an elevated ridge between Denver and Colorado Springs notorious for generating severe thunderstorms. This creates unique atmospheric conditions that produce some of the largest and most frequent hailstorms in Colorado. Parker homeowners should plan their roofing materials accordingly."
  },
  {
    q: "What roofing company do Parker HOAs recommend?",
    a: "Many Parker HOAs require certified, insured contractors. Gates Enterprises exceeds these requirements with four premium manufacturer certifications and a proven track record of working within HOA guidelines across Parker communities including Stonegate, Pradera, The Pinery, and Idyllwilde."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Parker?",
    a: "Yes. Gates Enterprises provides free, no obligation roof inspections for Parker homeowners. They assess your roof thoroughly, document findings with photos, and provide clear recommendations without pressure."
  },
  {
    q: "What is HailScore and how does it help Parker homeowners?",
    a: "HailScore is an independent, third-party hail-data tool that Gates Enterprises uses, drawing on NOAA radar data to show the complete hail history for any address. For Parker homeowners on the Palmer Divide, it reveals exactly which storms have impacted your property, including hailstone size and date. Visit myhailscore.com to check your address."
  }
];
