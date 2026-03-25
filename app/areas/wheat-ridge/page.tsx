import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Trusted Wheat Ridge Roofing Company | Storm Damage Experts | Gates Enterprises",
  description: "Wheat Ridge homeowners trust Gates Enterprises. 305 reviews, 4.8 stars, 4x certified. Free roof inspections. Call (720) 766-3377 today.",
  alternates: { canonical: "https://www.gatesroof.com/areas/wheat-ridge" },
  openGraph: {
    title: "Trusted Wheat Ridge Roofing Company | Storm Damage Experts | Gates Enterprises",
    description: "Wheat Ridge homeowners trust Gates Enterprises. 305 reviews, 4.8 stars, 4x certified. Free roof inspections. Call (720) 766-3377 today.",
    url: "https://www.gatesroof.com/areas/wheat-ridge",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Wheat Ridge, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/wheat-ridge",
  "telephone": "+17207663377",
  "email": "info@gatesroof.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1445 Holland St",
    "addressLocality": "Lakewood",
    "addressRegion": "CO",
    "postalCode": "80215",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 39.7661, "longitude": -105.0772 },
  "areaServed": { "@type": "City", "name": "Wheat Ridge", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "305", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Wheat Ridge", "wheat-ridge");
const areaFaqs = faqSchema(cityFaqItems("Wheat Ridge"));

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="wheat-ridge-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <Script id="wheat-ridge-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
