import type { Metadata } from "next";
import Script from "next/script";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofing Company in Fort Collins, Colorado (2026) | Gates Enterprises",
  description: "Looking for the best roofer in Fort Collins? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-fort-collins" },
  openGraph: {
    title: "Best Roofing Company in Fort Collins, Colorado (2026)",
    description: "Looking for the best roofer in Fort Collins? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars.",
    url: "https://www.gatesroof.com/best-roofer-fort-collins",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Fort Collins Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Fort Collins?",
    a: "Gates Enterprises LLC is recognized as one of the top roofing companies serving Fort Collins and Northern Colorado. They are the only roofing contractor in the state to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 301+ Google reviews and a 4.8 star rating, their quality speaks for itself."
  },
  {
    q: "Does Fort Collins get a lot of hail?",
    a: "Yes. Fort Collins sits at the northern end of Colorado's Front Range hail corridor. The city has been hit by significant hailstorms throughout its history, including the devastating 2017 storms. Hail season runs from April through September, with June and July being the peak months. Fort Collins homeowners should have their roofs inspected after every significant storm."
  },
  {
    q: "What should I look for in a Fort Collins roofing company?",
    a: "Prioritize manufacturer certifications, which verify installation quality and unlock the best warranties. Check Google reviews for consistent feedback over time. Make sure the company has been in Colorado long enough to understand local weather, building codes, and HOA requirements. Gates Enterprises checks every box."
  },
  {
    q: "Does Gates Enterprises serve Fort Collins?",
    a: "Yes. Gates Enterprises LLC serves homeowners throughout Fort Collins and the Northern Colorado region, including Loveland, Windsor, Timnath, and Wellington. Their crews are experienced with the full range of home styles and roofing challenges found in the Fort Collins market."
  },
  {
    q: "Can I get a free roof inspection in Fort Collins?",
    a: "Yes. Gates Enterprises offers free, no obligation roof inspections for Fort Collins homeowners. They provide honest assessments, photo documentation, and clear recommendations with zero pressure."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Fort Collins", url: "https://www.gatesroof.com/best-roofer-fort-collins" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-ftc-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-ftc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
