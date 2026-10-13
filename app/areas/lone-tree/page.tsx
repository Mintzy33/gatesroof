import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Lone Tree CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: "Lone Tree CO roofing by a top rated contractor. Insurance claims assistance, premium shingles, and warranties up to 50 years. Schedule your free inspection.",
  alternates: { canonical: "https://www.gatesroof.com/areas/lone-tree" },
  openGraph: {
    title: `Lone Tree CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: "Lone Tree CO roofing by a top rated contractor. Insurance claims assistance, premium shingles, and warranties up to 50 years. Schedule your free inspection.",
    url: "https://www.gatesroof.com/areas/lone-tree",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Lone Tree, CO" }],
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
          "name": "Lone Tree",
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
      "mainEntity": getCityFAQItems("lone-tree").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Lone Tree", "lone-tree");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/lone-tree" />
      <script id="lone-tree-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="lone-tree-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
