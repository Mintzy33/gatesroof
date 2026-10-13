import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: `Superior CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
  description: `Superior CO roofing backed by four manufacturer certifications. Storm damage, reroof, and exterior services. ${SITE_STATS.totalRoofs} projects completed. Free estimate.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/superior" },
  openGraph: {
    title: `Superior CO Roofer | 4x Certified, ${SITE_STATS.reviewCount}+ Reviews ★`,
    description: `Superior CO roofing backed by four manufacturer certifications. Storm damage, reroof, and exterior services. ${SITE_STATS.totalRoofs} projects completed. Free estimate.`,
    url: "https://www.gatesroof.com/areas/superior",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Superior, CO" }],
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
          "name": "Superior",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Boulder County, Colorado"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": getCityFAQItems("superior").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Superior", "superior");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/superior" />
      <script id="superior-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="superior-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
