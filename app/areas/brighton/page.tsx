import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Brighton CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: `Trusted Brighton CO roofer with ${SITE_STATS.reviewCount}+ Google reviews. Hail and storm repair, full replacements, and 50-year warranty options. Free inspection available.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/brighton" },
  openGraph: {
    title: `Brighton CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: `Trusted Brighton CO roofer with ${SITE_STATS.reviewCount}+ Google reviews. Hail and storm repair, full replacements, and 50-year warranty options. Free inspection available.`,
    url: "https://www.gatesroof.com/areas/brighton",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Brighton, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://www.gatesroof.com/#organization",
      "name": "Gates Enterprises LLC",
      "foundingDate": "2014",
      "areaServed": [
        {
          "@type": "City",
          "name": "Brighton",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Adams County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("brighton").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Brighton", "brighton");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/brighton" />
      <script id="brighton-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="brighton-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
