import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "#1 Rated Federal Heights CO Roofer | Free Inspections | Gates Enterprises",
  description: "Federal Heights trusts Gates Enterprises. 303 reviews, 4.8 stars, quadruple certified. Book your free roof inspection today. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/areas/federal-heights" },
  openGraph: {
    title: "#1 Rated Federal Heights CO Roofer | Free Inspections | Gates Enterprises",
    description: "Federal Heights trusts Gates Enterprises. 303 reviews, 4.8 stars, quadruple certified. Book your free roof inspection today. (720) 766-3377.",
    url: "https://www.gatesroof.com/areas/federal-heights",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Federal Heights, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/federal-heights",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.8672, "longitude": -105.0136 },
  "areaServed": { "@type": "City", "name": "Federal Heights", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "303", "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Federal Heights", "federal-heights");
const areaFaqs = faqSchema(cityFaqItems("Federal Heights"));

export default function Page() {
  return (
    <>
      <Script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="federal-heights-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <Script id="federal-heights-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
