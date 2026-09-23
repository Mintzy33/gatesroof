import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { getCityFAQItems } from "../../../lib/faq-data";
import FAQSection from "@/app/components/FAQSection";

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

const faqItems = getCityFAQItems("colorado-springs");

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.gatesroof.com/areas/colorado-springs#localbusiness",
      "name": "Gates Enterprises LLC",
      "image": "https://www.gatesroof.com/logo.png",
      "url": "https://www.gatesroof.com",
      "telephone": "(720) 766-3377",
      "foundingDate": "2014",
      "description": `Quadruple manufacturer certified roofing contractor serving Colorado Springs, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed ShingleMaster. ${SITE_STATS.reviewCount}+ Google reviews, 4.9 stars.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
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
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 38.8339,
          "longitude": -104.8214
        },
        "geoRadius": "40"
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

const areaBreadcrumbs = cityBreadcrumb("Colorado Springs", "colorado-springs");

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/colorado-springs" />
      <script id="colorado-springs-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script id="colorado-springs-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent faqSection={<FAQSection items={faqItems} title="Frequently Asked Questions: Roofing in Colorado Springs, CO" background="#FFFFFF" />} />
    </>
  );
}
