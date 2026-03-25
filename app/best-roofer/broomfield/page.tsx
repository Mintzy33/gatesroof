import type { Metadata } from "next";
import Script from "next/script";
import BestRooferCityContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofer in Broomfield 2026 | Gates Enterprises",
  description: "Looking for the best roofer in Broomfield? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer/broomfield" },
  openGraph: {
    title: "Best Roofer in Broomfield 2026 | Gates Enterprises",
    description: "Looking for the best roofer in Broomfield? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars.",
    url: "https://www.gatesroof.com/best-roofer/broomfield",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofer in Broomfield Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Broomfield?",
    a: "Gates Enterprises is widely recognized as one of the top roofing companies serving Broomfield. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 305+ Google reviews and a 4.8 star rating, their track record speaks for itself."
  },
  {
    q: "What certifications should a Broomfield roofer have?",
    a: "The most important certifications are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, installation quality, and customer satisfaction. They also unlock the best warranty programs for homeowners."
  },
  {
    q: "How do I choose a roofing company in Broomfield?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado's unique weather challenges, especially hail. Look for a company that offers free inspections with no pressure."
  },
  {
    q: "Does Gates Enterprises serve Broomfield?",
    a: "Yes. Gates Enterprises serves Broomfield and the entire Front Range. They provide free, no obligation roof inspections for Broomfield homeowners. Their inspectors assess your roof's condition honestly, document any damage with photos, and provide a clear recommendation with no pressure."
  },
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Broomfield", url: "https://www.gatesroof.com/best-roofer/broomfield" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-broomfield-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-broomfield-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferCityContent />
    </>
  );
}
