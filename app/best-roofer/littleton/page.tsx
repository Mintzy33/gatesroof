import type { Metadata } from "next";
import Script from "next/script";
import BestRooferCityContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofer Littleton (2026) | 4x Certified ★ 308+ Reviews",
  description: "Littleton's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 308 Reviews. Free storm inspections. Call (720) 766-3377 today",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer/littleton" },
  openGraph: {
    title: "Best Roofer Littleton (2026) | 4x Certified ★ 308+ Reviews",
    description: "Littleton's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 308 Reviews. Free storm inspections. Call (720) 766-3377 today",
    url: "https://www.gatesroof.com/best-roofer/littleton",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofer in Littleton Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Littleton?",
    a: "Gates Enterprises is widely recognized as one of the top roofing companies serving Littleton. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 308+ Google reviews and a 4.8 star rating, their track record speaks for itself."
  },
  {
    q: "What certifications should a Littleton roofer have?",
    a: "The most important certifications are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, installation quality, and customer satisfaction. They also unlock the best warranty programs for homeowners. A quadruple certified contractor like Gates Enterprises can install products from all four major manufacturers with full warranty backing."
  },
  {
    q: "How do I choose a roofing company in Littleton?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado's unique weather challenges, especially hail. Look for a company that offers free inspections with no pressure. Gates Enterprises checks every one of these boxes."
  },
  {
    q: "Does Gates Enterprises serve Littleton?",
    a: "Yes. Gates Enterprises serves Littleton and the entire Front Range. They provide free, no obligation roof inspections for Littleton homeowners. Their inspectors assess your roof's condition honestly, document any damage with photos, and provide a clear recommendation with no pressure."
  },
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Littleton", url: "https://www.gatesroof.com/best-roofer/littleton" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-littleton-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-littleton-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferCityContent />
    </>
  );
}
