// FAQs for /best-roofer-arvada.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Arvada?",
    a: `Gates Enterprises LLC is widely recognized as one of the top roofing companies in Arvada. They are one of the only roofing contractors in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, their track record speaks for itself.`
  },
  {
    q: "What certifications should a Arvada roofer have?",
    a: "The most important certifications are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, installation quality, and customer satisfaction. They also unlock the best warranty programs for homeowners. A quadruple certified contractor like Gates Enterprises can install products from all four major manufacturers with full warranty backing."
  },
  {
    q: "How do I choose a roofing company in Arvada?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado's unique weather challenges, especially hail. Look for a company that offers free inspections with no pressure."
  },
  {
    q: "Why do manufacturer certifications matter for Arvada roofing?",
    a: "Manufacturer certifications are earned, not purchased. They require contractors to demonstrate installation excellence, maintain customer satisfaction scores, and complete ongoing training. Certified contractors can offer extended manufacturer warranties that uncertified roofers cannot. For Arvada homeowners, this means better protection and longer lasting roofs."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Arvada?",
    a: "Yes. Gates Enterprises LLC provides free, no obligation roof inspections for Arvada homeowners. Their inspectors assess your roof's condition honestly, document any damage with photos, and provide a clear recommendation. There is no pressure to commit to any work."
  }
];
