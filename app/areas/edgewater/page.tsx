import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Edgewater CO Roofer | 4x Certified, 306+ Reviews ★",
  description: "Edgewater CO roofing and storm restoration. Locally operated with 10+ years experience and 7,200+ completed projects. Get a free roof inspection today.",
  alternates: { canonical: "https://www.gatesroof.com/areas/edgewater" },
  openGraph: {
    title: "Edgewater CO Roofer | 4x Certified, 306+ Reviews ★",
    description: "Edgewater CO roofing and storm restoration. Locally operated with 10+ years experience and 7,200+ completed projects. Get a free roof inspection today.",
    url: "https://www.gatesroof.com/areas/edgewater",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Edgewater, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/edgewater",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.7467, "longitude": -105.0694 },
  "areaServed": { "@type": "City", "name": "Edgewater", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "306", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Edgewater", "edgewater");
const areaFaqs = faqSchema(cityFaqItems("Edgewater"));

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="edgewater-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <Script id="edgewater-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
