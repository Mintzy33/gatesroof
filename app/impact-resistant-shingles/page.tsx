import type { Metadata } from "next";
import Script from "next/script";
import ImpactResistantContent from "./content";

export const metadata: Metadata = {
  title: "Class 4 Impact Resistant Shingles CO | Save 28%",
  description: "Class 4 impact resistant shingles may save you up to 28% on insurance premiums. Installed by a 4x certified Colorado roofer. Free estimate today.",
  alternates: { canonical: "https://www.gatesroof.com/impact-resistant-shingles" },
  openGraph: {
    title: "Class 4 Impact Resistant Shingles CO | Save 28%",
    description: "Class 4 impact resistant shingles may save you up to 28% on insurance premiums. Installed by a 4x certified Colorado roofer. Free estimate today.",
    url: "https://www.gatesroof.com/impact-resistant-shingles",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Impact Resistant Shingles Colorado" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Impact Resistant Shingle Installation",
  "name": "Class 4 Impact Resistant Shingles in Colorado",
  "description": "Professional installation of Class 4 impact resistant shingles. UL 2218 rated products from GAF, Owens Corning, Malarkey, and CertainTeed. Many Colorado homeowners save up to 28% on insurance premiums. Savings vary by carrier and policy.",
  "url": "https://www.gatesroof.com/impact-resistant-shingles",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "offers": {
    "@type": "Offer",
    "description": "Free roof inspection and impact resistant shingle consultation",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What are Class 4 impact resistant shingles?", "acceptedAnswer": {"@type": "Answer", "text": "Class 4 impact resistant shingles are roofing products that have passed the UL 2218 test, the highest impact resistance rating available. During testing, two-inch steel balls are dropped from 20 feet onto the shingle. Class 4 shingles show no cracking or damage after repeated impacts."}},
    {"@type": "Question", "name": "How much can I save on insurance with impact resistant shingles?", "acceptedAnswer": {"@type": "Answer", "text": "Many Colorado homeowners save up to 28% on their homeowner's insurance premiums with a Class 4 impact resistant roof. Savings vary by insurance carrier and policy. Colorado law requires insurers to offer premium discounts for impact resistant roofing materials."}},
    {"@type": "Question", "name": "Which brands of impact resistant shingles does Gates Enterprises install?", "acceptedAnswer": {"@type": "Answer", "text": "Gates Enterprises installs impact resistant shingles from all four major manufacturers: GAF Timberline AS II, Owens Corning Duration FLEX, Malarkey Vista AR, and CertainTeed Presidential Impact. We hold the highest certification from each manufacturer."}},
    {"@type": "Question", "name": "Are impact resistant shingles worth the investment in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "For most Colorado homeowners, yes. Between the insurance premium savings, reduced risk of future storm damage, and longer product life, impact resistant shingles typically pay for themselves within a few years of the premium savings alone."}},
    {"@type": "Question", "name": "Does Colorado require insurance discounts for impact resistant roofing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Colorado law (CRS 10-4-110.8) requires insurance companies to offer premium discounts or credits for roofs constructed with impact resistant materials that meet the UL 2218 Class 4 standard."}},
    {"@type": "Question", "name": "Can I get impact resistant shingles through my insurance claim?", "acceptedAnswer": {"@type": "Answer", "text": "In many cases, yes. If your roof is being replaced through an insurance claim, you can often upgrade to impact resistant shingles. The insurance company typically covers the cost of a like-for-like replacement, and the upgrade cost for impact resistant shingles may be partially or fully offset by the long-term premium savings."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Impact Resistant Shingles", "item": "https://www.gatesroof.com/impact-resistant-shingles"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ImpactResistantContent />
    </>
  );
}
