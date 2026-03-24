import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Commerce City Roof Repair & Replacement | 4x Certified | Gates Enterprises",
  description: "Commerce City's 4x certified roofing contractor. 303 Google reviews, 4.8 stars. Free storm damage inspections. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/areas/commerce-city" },
  openGraph: {
    title: "Commerce City Roof Repair & Replacement | 4x Certified | Gates Enterprises",
    description: "Commerce City's 4x certified roofing contractor. 303 Google reviews, 4.8 stars. Free storm damage inspections. Call (720) 766-3377.",
    url: "https://www.gatesroof.com/areas/commerce-city",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Commerce City, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/commerce-city",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.8083, "longitude": -104.9339 },
  "areaServed": { "@type": "City", "name": "Commerce City", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "303", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Commerce City", "commerce-city");
const areaFaqs = faqSchema(cityFaqItems("Commerce City"));

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="commerce-city-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <Script id="commerce-city-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
