import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Broomfield CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
  description: `Broomfield hail damage? Gates Enterprises is 4x manufacturer certified with ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars). ${SITE_STATS.totalRoofs} roofs replaced on the Front Range. Free inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/broomfield" },
  openGraph: {
    title: `Broomfield CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
    description: `Broomfield hail damage? Gates Enterprises is 4x manufacturer certified with ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars). ${SITE_STATS.totalRoofs} roofs replaced on the Front Range. Free inspection.`,
    url: "https://www.gatesroof.com/areas/broomfield",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Broomfield, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Broomfield", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Broomfield", "broomfield");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("broomfield"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("broomfield").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/broomfield" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="broomfield-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="broomfield-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
