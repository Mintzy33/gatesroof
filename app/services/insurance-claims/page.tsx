import type { Metadata } from "next";
import Script from "next/script";
import InsuranceContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Insurance Claim Help Denver | Gates",
  description: "We handle your roofing insurance claim from inspection to completion. Free damage assessment, adjuster meetings & claim advocacy. Call Gates Enterprises at (720) 766-3377.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Insurance Claims Assistance",
  "name": "Roofing Insurance Claims Help in Colorado",
  "description": "Full insurance claims assistance from free inspection through claim filing and adjuster meetings. We advocate for homeowners to get the coverage they deserve.",
  "url": "https://gatesroof.com/services/insurance-claims",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How does the roof insurance claim process work in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "You (or we) file a claim with your insurance company. They send an adjuster to inspect. The adjuster writes an estimate. If the estimate is accurate, we proceed with repairs. If it's short, we submit supplements. Once approved, we do the work, you pay your deductible, and insurance covers the rest. After completion, you collect any recoverable depreciation holdback."}},
    {"@type": "Question", "name": "What is recoverable depreciation?", "acceptedAnswer": {"@type": "Answer", "text": "Your insurance company withholds a portion of your claim (called depreciation) until the work is completed. Once we finish the job and you submit the final invoice, your insurance company releases the remaining funds. We help you collect every dollar."}},
    {"@type": "Question", "name": "How long does a roofing insurance claim take?", "acceptedAnswer": {"@type": "Answer", "text": "From filing to final payment, most claims take 4 to 8 weeks. Claims that require supplements or re-inspections may take longer. We keep the process moving and communicate with your insurance company throughout."}},
    {"@type": "Question", "name": "Can Gates Enterprises help if my claim was already denied?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We review denied claims regularly. If we believe the denial was incorrect, we request a re-inspection and present additional documentation. Many denied claims get overturned."}},
    {"@type": "Question", "name": "Do I need to pay Gates Enterprises upfront?", "acceptedAnswer": {"@type": "Answer", "text": "No. For insurance claims, your out of pocket cost is your deductible. We work directly with your insurance company and collect payment from the approved claim. No upfront costs for insured projects."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Insurance Claims", "item": "https://gatesroof.com/services/insurance-claims"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsuranceContent />
    </>
  );
}
