import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Colorado Springs CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews`,
  description: `Colorado Springs roofer serving the Pikes Peak region. 4x certified, ${SITE_STATS.starRating} stars, and warranties up to 50 years. Book your free roof inspection today.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/colorado-springs" },
  openGraph: {
    title: `Colorado Springs CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews`,
    description: `Colorado Springs roofer serving the Pikes Peak region. 4x certified, ${SITE_STATS.starRating} stars, and warranties up to 50 years. Book your free roof inspection today.`,
    url: "https://www.gatesroof.com/areas/colorado-springs",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Colorado Springs, CO" }],
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
          "name": "Colorado Springs",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "El Paso County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("colorado-springs").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Colorado Springs", "colorado-springs");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/colorado-springs" />
      <script id="colorado-springs-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script id="colorado-springs-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
