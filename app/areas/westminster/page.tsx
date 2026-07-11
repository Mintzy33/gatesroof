import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Westminster CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
  description: `Westminster hail damage? Gates Enterprises has ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars) and ${SITE_STATS.totalRoofs} roofs replaced across the Front Range. Free inspection. 4x certified.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/westminster" },
  openGraph: {
    title: `Westminster CO Roofer | Hail Damage Experts, ${SITE_STATS.reviewCount} Reviews, ${SITE_STATS.starRating} Stars`,
    description: `Westminster hail damage? Gates Enterprises has ${SITE_STATS.reviewCount} Google reviews (${SITE_STATS.starRating} stars) and ${SITE_STATS.totalRoofs} roofs replaced across the Front Range. Free inspection. 4x certified.`,
    url: "https://www.gatesroof.com/areas/westminster",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Westminster, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/westminster",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.8367, "longitude": -105.0372 },
  "areaServed": { "@type": "City", "name": "Westminster", "addressRegion": "CO" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": String(SITE_STATS.starRating), "reviewCount": String(SITE_STATS.reviewCount), "bestRating": "5" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Westminster", "westminster");
const areaFaqs = faqSchema(cityFaqItems("Westminster"));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/westminster" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="westminster-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="westminster-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
