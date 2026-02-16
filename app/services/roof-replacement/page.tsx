import type { Metadata } from "next";
import Script from "next/script";
import RoofReplacementContent from "./content";

export const metadata: Metadata = {
  title: "Roof Replacement Denver & Lakewood CO | Gates Roofing",
  description: "Need a new roof? Gates Enterprises offers expert roof replacement with GAF, CertainTeed & Malarkey shingles. Warranties up to 50 years. Free estimate — call (720) 766-3377.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Roof Replacement",
  "name": "Roof Replacement in Colorado",
  "description": "Complete roof replacement services using GAF, CertainTeed, and Malarkey shingle systems. Backed by manufacturer warranties up to 50 years.",
  "url": "https://gatesroof.com/services/roof-replacement",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roof Replacement Options",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "GAF Timberline HDZ Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Class 4 Impact-Resistant Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CertainTeed Landmark Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Malarkey Vista AR Roof Replacement"}}
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How long does a roof replacement take?", "acceptedAnswer": {"@type": "Answer", "text": "Most residential roof replacements are completed in a single day. Larger or more complex roofs may take two days. We'll give you a specific timeline before we start."}},
    {"@type": "Question", "name": "How much does a roof replacement cost in Denver?", "acceptedAnswer": {"@type": "Answer", "text": "A typical roof replacement in the Denver metro area ranges from $8,000 to $20,000 depending on size, pitch, material choice, and complexity. If insurance is covering the claim, your out of pocket cost is usually just your deductible."}},
    {"@type": "Question", "name": "Can I stay home during the roof replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. We ask that you move vehicles out of the driveway and let us know about any pets. Otherwise, go about your day. We handle the rest."}},
    {"@type": "Question", "name": "What's the difference between a 25 year and 50 year warranty?", "acceptedAnswer": {"@type": "Answer", "text": "The standard GAF System Plus warranty covers materials for 50 years and workmanship for 10. The Golden Pledge upgrades workmanship coverage to 25 years and is backed directly by GAF. We recommend Golden Pledge for every customer."}},
    {"@type": "Question", "name": "Do you offer financing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We offer flexible financing options so you can get the roof you need without waiting. Ask us for details during your estimate."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Roof Replacement", "item": "https://gatesroof.com/services/roof-replacement"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RoofReplacementContent />
    </>
  );
}
