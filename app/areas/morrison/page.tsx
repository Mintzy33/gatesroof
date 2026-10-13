import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: "Morrison CO Roofer | 4x Certified ★ Mountain Experts",
  description: "Morrison CO mountain roofing specialists. Wind, hail, and snow damage repair. Locally operated with 10+ years of foothills experience. Free inspection.",
  alternates: { canonical: "https://www.gatesroof.com/areas/morrison" },
  openGraph: {
    title: "Morrison CO Roofer | 4x Certified ★ Mountain Experts",
    description: "Morrison CO mountain roofing specialists. Wind, hail, and snow damage repair. Locally operated with 10+ years of foothills experience. Free inspection.",
    url: "https://www.gatesroof.com/areas/morrison",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Morrison, CO" }],
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
          "name": "Morrison",
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
      "mainEntity": getCityFAQItems("morrison").map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      }))
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Morrison", "morrison");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/morrison" />
      <script id="morrison-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="morrison-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}
