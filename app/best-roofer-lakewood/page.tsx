import type { Metadata } from "next";
import Script from "next/script";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofing Company in Lakewood, Colorado (2026) | Gates Enterprises",
  description: "Looking for the best roofer in Lakewood, CO? Gates Enterprises is headquartered in Lakewood and is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-lakewood" },
  openGraph: {
    title: "Best Roofing Company in Lakewood, Colorado (2026)",
    description: "Gates Enterprises is headquartered in Lakewood and is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars.",
    url: "https://www.gatesroof.com/best-roofer-lakewood",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Lakewood Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Lakewood, Colorado?",
    a: "Gates Enterprises LLC is headquartered in Lakewood and is recognized as one of the top roofing companies in the area. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 305+ Google reviews and a 4.8 star rating, they are a proven choice for Lakewood homeowners."
  },
  {
    q: "Why choose a Lakewood based roofing company?",
    a: "Choosing a locally headquartered roofer means faster response times, familiarity with local building codes and HOA requirements, and a company invested in the community. Gates Enterprises is based in Lakewood, which means your neighborhood is their neighborhood. They understand the specific weather patterns, housing styles, and roofing challenges that Lakewood homes face."
  },
  {
    q: "How do I know if my Lakewood roof has hail damage?",
    a: "Hail damage is not always visible from the ground. Look for dented gutters, cracked siding, or dings on outdoor AC units as ground level indicators. On the roof, hail creates circular dents in shingles that expose the underlying fiberglass mat. The best approach is a free professional inspection. Gates Enterprises also offers HailScore, which uses NOAA radar data to show exactly which storms have hit your Lakewood address."
  },
  {
    q: "Does Gates Enterprises offer free inspections in Lakewood?",
    a: "Yes. As a Lakewood based company, Gates Enterprises provides free, no obligation roof inspections throughout the city. They assess your roof honestly, document their findings with photos, and give you a clear recommendation."
  },
  {
    q: "What is the best roofing material for Lakewood homes?",
    a: "For Lakewood homes, Class 4 impact resistant shingles provide the best protection against hail while potentially reducing your insurance premiums. Gates Enterprises installs impact resistant products from all four major manufacturers, giving you the widest selection of colors, styles, and price points."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Lakewood", url: "https://www.gatesroof.com/best-roofer-lakewood" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-lakewood-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-lakewood-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
