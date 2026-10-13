import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Commerce City Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: `Commerce City roofing with 10+ years of local experience. Storm damage, insurance claims support, and new roofs. ${SITE_STATS.starRating} stars. Schedule a free inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/commerce-city" },
  openGraph: {
    title: `Commerce City Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: `Commerce City roofing with 10+ years of local experience. Storm damage, insurance claims support, and new roofs. ${SITE_STATS.starRating} stars. Schedule a free inspection.`,
    url: "https://www.gatesroof.com/areas/commerce-city",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Commerce City, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Commerce City", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Commerce City", "commerce-city");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("commerce-city"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("commerce-city").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/commerce-city" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="commerce-city-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="commerce-city-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
