import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: "Evergreen CO Roofer | 4x Certified ★ Mountain Experts",
  description: `Evergreen mountain roofing experts. Snow load, ice dam, and storm damage solutions. 4x certified with ${SITE_STATS.totalRoofs} roofs completed. Free mountain home inspection.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/evergreen" },
  openGraph: {
    title: "Evergreen CO Roofer | 4x Certified ★ Mountain Experts",
    description: `Evergreen mountain roofing experts. Snow load, ice dam, and storm damage solutions. 4x certified with ${SITE_STATS.totalRoofs} roofs completed. Free mountain home inspection.`,
    url: "https://www.gatesroof.com/areas/evergreen",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Evergreen, CO" }],
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
          "name": "Evergreen",
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
      "mainEntity": getCityFAQItems("evergreen").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Evergreen", "evergreen");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/evergreen" />
      <script id="evergreen-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="evergreen-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
