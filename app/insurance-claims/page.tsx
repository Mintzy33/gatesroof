import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import InsuranceClaimsContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Insurance Claims CO | We Fight for You ★",
  description: "We support you through your roof insurance claim: adjuster meetings, supplements and claims support. 7,200+ claims handled. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/insurance-claims" },
  openGraph: {
    title: "Roof Insurance Claims CO | We Fight for You ★",
    description: "We support you through your roof insurance claim: adjuster meetings, supplements and claims support. 7,200+ claims handled. (720) 766-3377",
    url: "https://www.gatesroof.com/insurance-claims",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roof Insurance Claims Colorado" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Roof Insurance Claim Assistance",
  "name": "Roof Insurance Claims in Colorado",
  "description": "Full-service roof insurance claim support. Free inspection, adjuster coordination, supplement handling, and certified installation.",
  "url": "https://www.gatesroof.com/insurance-claims",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "offers": {
    "@type": "Offer",
    "description": "Free roof inspection and insurance claim consultation",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Insurance Claims", "item": "https://www.gatesroof.com/insurance-claims"}
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Roof Insurance Claim Services",
  "brand": {"@type": "Brand", "name": "Gates Enterprises LLC"},
  "review": [
    {
      "@type": "Review",
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "author": {"@type": "Person", "name": "Colorado Homeowner"},
      "reviewBody": "We thought we'd have to pay thousands out of pocket. Gates documented everything and worked with our adjuster. We only paid our deductible."
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/insurance-claims" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <InsuranceClaimsContent />
    </>
  );
}
