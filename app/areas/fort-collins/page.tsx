import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Fort Collins CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews`,
  description: `Fort Collins roofing with ${SITE_STATS.totalRoofs} completed projects across Northern Colorado. Hail repair, full replacements, and claims support. Free inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/fort-collins" },
  openGraph: {
    title: `Fort Collins CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews`,
    description: `Fort Collins roofing with ${SITE_STATS.totalRoofs} completed projects across Northern Colorado. Hail repair, full replacements, and claims support. Free inspection.`,
    url: "https://www.gatesroof.com/areas/fort-collins",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Fort Collins, CO" }],
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
          "name": "Fort Collins",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Larimer County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("fort-collins").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Fort Collins", "fort-collins");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/fort-collins" />
      <script id="fort-collins-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script id="fort-collins-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
