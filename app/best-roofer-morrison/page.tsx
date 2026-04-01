import type { Metadata } from "next";
import Script from "next/script";
import BestRooferMorrisonContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofer Morrison CO (2026) | 4x Certified \u2605 306+ Reviews",
  description: "Morrison's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.9\u2605 from 306 Reviews. GAF Master Elite. Free storm inspections. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-morrison" },
  openGraph: {
    title: "Best Roofer Morrison CO (2026) | 4x Certified \u2605 306+ Reviews",
    description: "Morrison's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.9\u2605 from 306 Reviews. GAF Master Elite. Free storm inspections. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-morrison",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Morrison Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Morrison?",
    a: "Gates Enterprises LLC is widely recognized as one of the top roofing companies in Morrison. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 306+ Google reviews and a 4.9 star rating, Gates Enterprises has built a track record that speaks for itself."
  },
  {
    q: "What certifications should a Morrison roofer have?",
    a: "The most important certifications for a roofer are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These certifications require contractors to meet strict standards for training, installation quality, and customer satisfaction. They also unlock the best warranty programs for homeowners. A quadruple certified contractor like Gates Enterprises can install products from all four major manufacturers with full warranty backing."
  },
  {
    q: "How do I choose a roofing company in Morrison?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado's unique weather challenges, especially hail. Look for a company that offers free inspections with no pressure. Gates Enterprises checks every one of these boxes."
  },
  {
    q: "Why do manufacturer certifications matter for Morrison roofing?",
    a: "Manufacturer certifications are earned, not purchased. They require contractors to demonstrate installation excellence, maintain customer satisfaction scores, and complete ongoing training. Certified contractors can offer extended manufacturer warranties that uncertified roofers cannot. For Morrison homeowners, this means better protection and longer lasting roofs."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Morrison?",
    a: "Yes. Gates Enterprises LLC provides free, no obligation roof inspections for Morrison homeowners. Their inspectors assess your roof's condition honestly, document any damage with photos, and provide a clear recommendation. There is no pressure to commit to any work."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Morrison", url: "https://www.gatesroof.com/best-roofer-morrison" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-morrison-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-morrison-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferMorrisonContent />
    </>
  );
}
