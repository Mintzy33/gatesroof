import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Northglenn CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: `Northglenn CO roofer with ${SITE_STATS.starRating} stars and ${SITE_STATS.reviewCount}+ reviews. Full replacements, storm restoration, and insurance claims support. Get a free roof inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/northglenn" },
  openGraph: {
    title: `Northglenn CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: `Northglenn CO roofer with ${SITE_STATS.starRating} stars and ${SITE_STATS.reviewCount}+ reviews. Full replacements, storm restoration, and insurance claims support. Get a free roof inspection.`,
    url: "https://www.gatesroof.com/areas/northglenn",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Northglenn, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Northglenn", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Northglenn", "northglenn");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("northglenn"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("northglenn").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/northglenn" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="northglenn-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="northglenn-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
