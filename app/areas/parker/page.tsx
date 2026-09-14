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
      "@type": "LocalBusiness",
      "@id": "https://www.gatesroof.com/areas/parker#localbusiness",
      "name": "Gates Enterprises LLC",
      "image": "https://www.gatesroof.com/logo.png",
      "url": "https://www.gatesroof.com",
      "telephone": "(720) 766-3377",
      "foundingDate": "2014",
      "description": `Quadruple manufacturer certified roofing contractor serving Parker, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed ShingleMaster. ${SITE_STATS.reviewCount} Google reviews, 4.9 stars. 7,200+ completed projects. Roof replacement, hail damage repair, and storm restoration for Parker homeowners along the Palmer Divide hail corridor.`,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Parker",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.5186,
        "longitude": -104.7614
      },
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
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.5186,
          "longitude": -104.7614
        },
        "geoRadius": "30"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing and Exterior Services in Parker CO",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement in Parker CO", "url": "https://www.gatesroof.com/services/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration in Parker CO", "url": "https://www.gatesroof.com/services/storm-hail-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair in Parker CO", "url": "https://www.gatesroof.com/services/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspection in Parker CO", "url": "https://www.gatesroof.com/areas/parker" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Installation in Parker CO", "url": "https://www.gatesroof.com/services/gutters-guards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation in Parker CO", "url": "https://www.gatesroof.com/services/siding-exterior" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Replacement in Parker CO", "url": "https://www.gatesroof.com/services/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting in Parker CO", "url": "https://www.gatesroof.com/services/paint" } }
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
        "@type": "LocalBusiness",
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
