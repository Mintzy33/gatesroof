import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Highlands Ranch Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
  description: `Highlands Ranch gets hit hard every hail season. Gates Enterprises: ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), 4x certified, ${SITE_STATS.totalRoofs} roofs. Free inspection — call (720) 766-3377.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/highlands-ranch" },
  openGraph: {
    title: `Highlands Ranch Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
    description: `Highlands Ranch gets hit hard every hail season. Gates Enterprises: ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), 4x certified, ${SITE_STATS.totalRoofs} roofs. Free inspection — call (720) 766-3377.`,
    url: "https://www.gatesroof.com/areas/highlands-ranch",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Highlands Ranch, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Highlands Ranch", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Highlands Ranch", "highlands-ranch");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("highlands-ranch"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("highlands-ranch").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/highlands-ranch" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="highlands-ranch-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="highlands-ranch-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
