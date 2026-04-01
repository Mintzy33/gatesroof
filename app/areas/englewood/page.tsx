import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Englewood CO Roofer | 4x Certified, 306+ Reviews ★",
  description: "Englewood CO roofing contractor rated 4.9 stars. Roof replacements, hail repair, and siding. Warranties up to 50 years. Get your free estimate today.",
  alternates: { canonical: "https://www.gatesroof.com/areas/englewood" },
  openGraph: {
    title: "Englewood CO Roofer | 4x Certified, 306+ Reviews ★",
    description: "Englewood CO roofing contractor rated 4.9 stars. Roof replacements, hail repair, and siding. Warranties up to 50 years. Get your free estimate today.",
    url: "https://www.gatesroof.com/areas/englewood",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Englewood, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/englewood",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.6483, "longitude": -104.9878 },
  "areaServed": { "@type": "City", "name": "Englewood", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "306", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Englewood", "englewood");
const areaFaqs = faqSchema(cityFaqItems("Englewood"));

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="englewood-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <Script id="englewood-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
