import type { Metadata } from "next";
import Script from "next/script";
import InsuranceContent from "./content";

export const metadata: Metadata = {
  title: "Roof Insurance Claims CO | We Handle Everything",
  description: "Full roof insurance claim assistance from inspection to final payment. Adjuster meetings, paperwork, and repairs handled for you. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/services/insurance-claims" },
  openGraph: {
    title: "Roof Insurance Claims CO | We Handle Everything",
    description: "Full roof insurance claim assistance from inspection to final payment. Adjuster meetings, paperwork, and repairs handled for you. Call (720) 766-3377.",
    url: "https://www.gatesroof.com/services/insurance-claims",
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
  "url": "https://www.gatesroof.com/services/insurance-claims",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Do I have to pay anything out of pocket for an insurance claim?", "acceptedAnswer": {"@type": "Answer", "text": "You are typically responsible for your deductible. Beyond that, most storm damage repairs may be covered by your homeowners insurance depending on your policy and extent of damage."}},
    {"@type": "Question", "name": "How long does the insurance claim process take?", "acceptedAnswer": {"@type": "Answer", "text": "The typical insurance claim process runs four to eight weeks from filing to completed restoration. The largest variable is your insurance company's adjuster scheduling."}},
    {"@type": "Question", "name": "Can I choose my own contractor for an insurance claim?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Colorado law gives you the right to choose your own contractor regardless of what your insurance company suggests. Insurance company preferred vendor programs exist to benefit the insurer, not the homeowner."}},
    {"@type": "Question", "name": "What if my insurance estimate seems too low?", "acceptedAnswer": {"@type": "Answer", "text": "We review every insurance estimate line by line. If the estimate falls short, we prepare detailed supplements with additional documentation, photos, and manufacturer specifications."}},
    {"@type": "Question", "name": "What if my insurance claim gets denied?", "acceptedAnswer": {"@type": "Answer", "text": "A denial is not always the final answer. We help you understand why coverage was denied and whether a re-inspection or supplement is worth pursuing. We have successfully overturned many denied claims."}},
    {"@type": "Question", "name": "Is there a deadline to file a roof insurance claim in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Most policies have a one-year window from the date of the storm to file a claim. Schedule an inspection as soon as possible to protect your eligibility."}},
    {"@type": "Question", "name": "What types of damage does homeowners insurance cover?", "acceptedAnswer": {"@type": "Answer", "text": "Homeowners insurance covers damage from hail, wind, fallen trees, lightning, and other sudden events. Normal wear and tear and deferred maintenance are typically not covered."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Insurance Restoration", "item": "https://www.gatesroof.com/services/insurance-claims"}
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
