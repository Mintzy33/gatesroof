import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema } from "../../../lib/schema";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: `Aurora Roofer | Saddle Rock and Southlands Hail Experts | Gates`,
  description: `Aurora roofer for Saddle Rock, Southlands and Tallyn's Reach. ${SITE_STATS.reviewCount} reviews (${SITE_STATS.starRating} stars), HOA-ready materials, free hail inspection. (720) 766-3377.`,
  alternates: { canonical: "https://www.gatesroof.com/areas/aurora" },
  openGraph: {
    title: `Aurora Roofer | Saddle Rock and Southlands Hail Experts | Gates`,
    description: `Aurora roofer for Saddle Rock, Southlands and Tallyn's Reach. ${SITE_STATS.reviewCount} reviews (${SITE_STATS.starRating} stars), HOA-ready materials, free hail inspection. (720) 766-3377.`,
    url: "https://www.gatesroof.com/areas/aurora",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Aurora, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com/areas/aurora",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.7294, "longitude": -104.8319 },
  "areaServed": { "@type": "City", "name": "Aurora", "addressRegion": "CO" },
  "priceRange": "$$",
  "image": "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
  "sameAs": ["https://www.facebook.com/GatesEnterprisesLLC/", "https://www.instagram.com/gatesroofing", "https://www.linkedin.com/company/gatesenterprisesllc/"]
};


const areaBreadcrumbs = cityBreadcrumb("Aurora", "aurora");
// FAQPage markup must mirror the FAQs the page actually renders. content.tsx
// renders getCityFAQItems("aurora"); cityFaqItems() emitted a different,
// generic set, so the marked-up Q/A never appeared in the HTML.
const areaFaqs = faqSchema(getCityFAQItems("aurora").map((f) => ({ q: f.question, a: f.answer })));

export default function Page() {
  return (
    <>
      <PageSchema route="/areas/aurora" />
      <script id="city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <script id="aurora-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <script id="aurora-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqs) }} />
      <CityContent />
    </>
  );
}
