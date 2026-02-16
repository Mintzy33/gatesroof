import type { Metadata } from "next";
import Script from "next/script";
import SidingContent from "./content";

export const metadata: Metadata = {
  title: "Siding Installation Denver | James Hardie & More",
  description: "Expert siding installation in Denver and Lakewood. James Hardie fiber cement, vinyl, and wood siding. Exterior painting and full exterior renovation. Call (720) 766-3377.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Siding Installation & Repair",
  "name": "Siding & Exterior Services in Colorado",
  "description": "Professional siding installation and repair including James Hardie fiber cement, vinyl, and wood siding. Storm damage siding replacement available.",
  "url": "https://gatesroof.com/services/siding-exterior",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does James Hardie siding cost in Denver?", "acceptedAnswer": {"@type": "Answer", "text": "James Hardie fiber cement siding typically runs $8 to $14 per square foot installed, depending on the product and complexity of your home. A full re-side for an average home ranges from $15,000 to $35,000. We provide exact pricing in your proposal."}},
    {"@type": "Question", "name": "Is siding damage covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "If the damage is caused by hail or wind, yes. We document siding damage and include it in your storm claim. It's often approved alongside roof replacement."}},
    {"@type": "Question", "name": "How long does a siding installation take?", "acceptedAnswer": {"@type": "Answer", "text": "Most full re-sides take 1 to 2 weeks depending on home size and product selection. Partial repairs are usually completed in 1 to 3 days."}},
    {"@type": "Question", "name": "What's the best siding for Colorado hail?", "acceptedAnswer": {"@type": "Answer", "text": "James Hardie fiber cement is the most hail resistant option for residential siding. It resists cracking and denting far better than vinyl. For areas with extreme hail exposure, it's our top recommendation."}},
    {"@type": "Question", "name": "Do you handle the permit process?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. If your municipality requires a permit for siding installation, we handle the application and inspections."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Siding & Exterior", "item": "https://gatesroof.com/services/siding-exterior"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SidingContent />
    </>
  );
}
