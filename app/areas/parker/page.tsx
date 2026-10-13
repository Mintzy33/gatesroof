import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Parker CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
  description: `Parker hail season is here. Gates Enterprises has replaced ${SITE_STATS.totalRoofs} roofs across Douglas County. ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), free inspection. Call (720) 766-3377.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/parker" },
  openGraph: {
    title: `Parker CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
    description: `Parker hail season is here. Gates Enterprises has replaced ${SITE_STATS.totalRoofs} roofs across Douglas County. ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars), free inspection. Call (720) 766-3377.`,
    url: "https://www.gatesroof.com/areas/parker",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises - Roofing Contractor in Parker, CO" }],
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
          "name": "Parker",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Douglas County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("parker").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    },
    {
      "@type": "Service",
      "name": "Roofing Services in Parker, CO",
      "provider": {
        "@type": "RoofingContractor",
        "@id": "https://www.gatesroof.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Parker",
        "containedInPlace": { "@type": "State", "name": "Colorado" }
      },
      "serviceType": "Roofing Contractor",
      "description": `Complete roofing services for Parker, CO homeowners including roof replacement, storm damage restoration, roof repair, inspections, gutters, siding, windows, and painting. Quadruple manufacturer certified with ${SITE_STATS.reviewCount} Google reviews and 4.9 stars.`,
      "offers": {
        "@type": "Offer",
        "description": "Free Roof Inspection in Parker CO",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Parker", "parker");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/parker" />
      <script id="parker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script id="parker-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
