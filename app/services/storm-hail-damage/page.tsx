import type { Metadata } from "next";
import Script from "next/script";
import StormContent from "./content";

export const metadata: Metadata = {
  title: "Hail Damage Roof Repair Denver | Storm Experts",
  description: "Colorado hail damage experts. Free storm damage inspections, insurance claim assistance, and fast repairs. 7,200+ roofs completed. Call Gates Enterprises at (720) 766-3377.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Storm & Hail Damage Repair",
  "name": "Storm & Hail Damage Roof Repair in Colorado",
  "description": "Expert hail and storm damage assessment, repair, and full replacement. We work directly with your insurance company to maximize your claim.",
  "url": "https://gatesroof.com/services/storm-hail-damage",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Should I file an insurance claim for hail damage?", "acceptedAnswer": {"@type": "Answer", "text": "If your roof has confirmed hail damage, yes. Most Colorado homeowner policies cover hail damage with no impact on your premium for weather related claims. We'll inspect first and give you an honest recommendation."}},
    {"@type": "Question", "name": "How long do I have to file a hail damage claim?", "acceptedAnswer": {"@type": "Answer", "text": "Most Colorado insurance policies allow one year from the date of the storm. Some allow longer. Don't wait. The sooner you file, the easier it is to document the damage and get approved."}},
    {"@type": "Question", "name": "Will my insurance premium go up if I file a claim?", "acceptedAnswer": {"@type": "Answer", "text": "In Colorado, insurance companies generally cannot raise your rate for a single weather related claim. Hail is considered an act of nature, not negligence."}},
    {"@type": "Question", "name": "What if my insurance company denies my claim?", "acceptedAnswer": {"@type": "Answer", "text": "We see this happen, and it's not always the final answer. We review denied claims, submit additional documentation, and request re-inspections. Many denied claims get approved on the second round."}},
    {"@type": "Question", "name": "Do I have to pay anything out of pocket?", "acceptedAnswer": {"@type": "Answer", "text": "You're responsible for your deductible. That's it. If your roof is approved for replacement through insurance, your deductible is typically your only cost."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Storm & Hail Damage", "item": "https://gatesroof.com/services/storm-hail-damage"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StormContent />
    </>
  );
}
