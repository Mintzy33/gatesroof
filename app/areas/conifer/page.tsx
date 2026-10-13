import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: "Conifer CO Roofer | 4x Certified ★ Mountain Experts",
  description: `Conifer CO mountain roofing by a 4x certified contractor. Built for altitude, snow, and Colorado storms. ${SITE_STATS.reviewCount}+ Google reviews. Free inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/conifer" },
  openGraph: {
    title: "Conifer CO Roofer | 4x Certified ★ Mountain Experts",
    description: `Conifer CO mountain roofing by a 4x certified contractor. Built for altitude, snow, and Colorado storms. ${SITE_STATS.reviewCount}+ Google reviews. Free inspection.`,
    url: "https://www.gatesroof.com/areas/conifer",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Conifer, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "areaServed": { "@type": "City", "name": "Conifer", "addressRegion": "CO" }
};


const areaBreadcrumbs = cityBreadcrumb("Conifer", "conifer");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("conifer"); this page previously emitted a
// different, generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("conifer").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/conifer" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="conifer-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="conifer-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
