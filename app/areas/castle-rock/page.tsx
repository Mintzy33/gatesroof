import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Castle Rock CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: "Castle Rock CO roofing from a GAF Master Elite contractor. Storm damage repair, insurance help, and warranties up to 50 years. Free inspection available.",
  alternates: { canonical: "https://www.gatesroof.com/areas/castle-rock" },
  openGraph: {
    title: `Castle Rock CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: "Castle Rock CO roofing from a GAF Master Elite contractor. Storm damage repair, insurance help, and warranties up to 50 years. Free inspection available.",
    url: "https://www.gatesroof.com/areas/castle-rock",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Castle Rock, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Castle Rock", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Castle Rock", "castle-rock");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("castle-rock"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("castle-rock").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/castle-rock" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="castle-rock-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="castle-rock-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
