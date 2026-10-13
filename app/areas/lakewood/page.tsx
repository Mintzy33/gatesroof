import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Lakewood CO Roofer | Local HQ, Hail Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
  description: `Gates Enterprises is headquartered in Lakewood. ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), 4x certified, ${SITE_STATS.totalRoofs} roofs. Hail damage or full replacement — free inspection today.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/lakewood" },
  openGraph: {
    title: `Lakewood CO Roofer | Local HQ, Hail Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
    description: `Gates Enterprises is headquartered in Lakewood. ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), 4x certified, ${SITE_STATS.totalRoofs} roofs. Hail damage or full replacement — free inspection today.`,
    url: "https://www.gatesroof.com/areas/lakewood",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Lakewood, CO" }],
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
          "name": "Lakewood",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Jefferson County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("lakewood").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Lakewood", "lakewood");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/lakewood" />
      <script id="lakewood-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="lakewood-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
