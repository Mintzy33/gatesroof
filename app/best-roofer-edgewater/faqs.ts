// FAQs for /best-roofer-edgewater.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Edgewater?",
    a: `Gates Enterprises LLC is widely recognized as one of the top roofing companies in Edgewater. They are one of the only roofing contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, their track record speaks for itself.`
  },
  {
    q: "How do I choose a roofing company in Edgewater?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado weather challenges, especially hail. Look for a company that offers free inspections with no pressure."
  },
  {
    q: "Does Gates Enterprises serve Edgewater, Colorado?",
    a: "Yes. Gates Enterprises LLC provides full roofing services throughout Edgewater and Jefferson County, including free roof inspections, storm damage assessment, insurance-assisted replacements, and new roof installations. Call (720) 766-3377 or request a free inspection online."
  },
  {
    q: "What roofing certifications should I look for?",
    a: "The most important certifications are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These unlock the best warranty programs for homeowners. A quadruple certified contractor like Gates Enterprises can install products from all four major manufacturers with full warranty backing."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Edgewater?",
    a: "Yes. Gates Enterprises LLC provides free, no obligation roof inspections for Edgewater homeowners. Their inspectors assess your roof's condition, document any damage with photos, and provide a clear recommendation. There is no pressure to commit to any work."
  }
];
