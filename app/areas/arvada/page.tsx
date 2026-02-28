import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Contractor in Arvada, CO | Gates Enterprises",
  description: "Arvada's trusted roofer. Roof replacement, storm damage repair, siding & gutters. GAF Master Elite certified. Free estimate. Call (720) 766-3377.",
  alternates: { canonical: "https://gatesroof.com/areas/arvada" },
  openGraph: {
    title: "Roofing Contractor in Arvada, CO | Gates Enterprises",
    description: "Arvada's trusted roofer. Roof replacement, storm damage repair, siding & gutters. GAF Master Elite certified. Free estimate. Call (720) 766-3377.",
    url: "https://gatesroof.com/areas/arvada",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Arvada, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://gatesroof.com/areas/arvada",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.8028, "longitude": -105.0875 },
  "areaServed": { "@type": "City", "name": "Arvada", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "294", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <CityContent />
    </>
  );
}
