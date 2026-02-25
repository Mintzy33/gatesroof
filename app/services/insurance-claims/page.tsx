import type { Metadata } from "next";
import Script from "next/script";
import InsuranceContent from "./content";

export const metadata: Metadata = {
  title: "Insurance Restoration | Gates Enterprises LLC",
  description: "Full service insurance restoration for storm damage in Colorado. We work with your insurance company from inspection to completion. Call (720) 766-3377.",
  alternates: { canonical: "https://gatesroof.com/services/insurance-claims" },
  openGraph: {
    title: "Insurance Restoration | Gates Enterprises LLC",
    description: "Full service insurance restoration for storm damage in Colorado. We work with your insurance company from inspection to completion. Call (720) 766-3377.",
    url: "https://gatesroof.com/services/insurance-claims",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Insurance Restoration",
  "name": "Roofing Insurance Restoration in Colorado",
  "description": "Full insurance restoration support from free inspection through adjuster meetings and project completion. We advocate for homeowners to get the coverage they deserve.",
  "url": "https://gatesroof.com/services/insurance-claims",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How does the insurance restoration process work in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Your insurance company sends an adjuster to inspect. The adjuster writes an estimate. If the estimate is accurate, we proceed with repairs. If it's short, we submit supplements with additional documentation. Once approved, we do the work, you pay your deductible, and insurance covers the rest. After completion, you collect any recoverable depreciation holdback."}},
    {"@type": "Question", "name": "What is recoverable depreciation?", "acceptedAnswer": {"@type": "Answer", "text": "Your insurance company withholds a portion of your payout (called depreciation) until the work is completed. Once we finish the job and you submit the final invoice, your insurance company releases the remaining funds. We help you collect every dollar."}},
    {"@type": "Question", "name": "How long does an insurance restoration project take?", "acceptedAnswer": {"@type": "Answer", "text": "From start to final payment, most projects take 4 to 8 weeks. Projects that require supplements or re-inspections may take longer. We keep the process moving and communicate with your insurance company throughout."}},
    {"@type": "Question", "name": "Can Gates Enterprises help if my insurance estimate seems low?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We review insurance estimates regularly. If we believe the estimate doesn't reflect the full scope of damage, we submit additional documentation and request a re-inspection. Many undervalued estimates get corrected."}},
    {"@type": "Question", "name": "Do I need to pay Gates Enterprises upfront?", "acceptedAnswer": {"@type": "Answer", "text": "No. For insured projects, your out of pocket cost is your deductible. We work directly with your insurance company and collect payment from the approved amount. No upfront costs for insured projects."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Insurance Restoration", "item": "https://gatesroof.com/services/insurance-claims"}
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
