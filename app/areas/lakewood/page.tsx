import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";
import FAQSection from "@/app/components/FAQSection";

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

const faqItems = getCityFAQItems("lakewood");

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.gatesroof.com/areas/lakewood#localbusiness",
      "name": "Gates Enterprises LLC",
      "image": "https://www.gatesroof.com/logo.png",
      "url": "https://www.gatesroof.com",
      "telephone": "(720) 766-3377",
      "foundingDate": "2014",
      "description": `Locally headquartered roofing contractor in Lakewood, CO. Gates Enterprises LLC is quadruple manufacturer certified with ${SITE_STATS.reviewCount}+ Google reviews and 4.9 stars. Serving Lakewood and Colorado's Front Range since 2014.`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1445 Holland St",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "postalCode": "80215",
        "addressCountry": "US"
      },
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
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.7047,
          "longitude": -105.0814
        },
        "geoRadius": "30"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing and Exterior Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration", "url": "https://www.gatesroof.com/services/storm-hail-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://www.gatesroof.com/services/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://www.gatesroof.com/services/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding", "url": "https://www.gatesroof.com/services/siding-exterior" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutters", "url": "https://www.gatesroof.com/services/gutters-guards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows", "url": "https://www.gatesroof.com/services/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting", "url": "https://www.gatesroof.com/services/paint" } }
        ]
      },
      "sameAs": [
        "https://www.google.com/maps/place/Gates+Enterprises+LLC",
        "https://www.facebook.com/GatesEnterprisesLLC/",
        "https://www.instagram.com/gatesroofing"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((f) => ({
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
      <CityContent faqSection={<FAQSection items={faqItems} title="Frequently Asked Questions: Roofing in Lakewood, CO" background="#FFFFFF" />} />
    </>
  );
}
