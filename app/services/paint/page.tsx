import type { Metadata } from "next";
import Script from "next/script";
import PaintContent from "./content";

export const metadata: Metadata = {
  title: "Exterior Painting Colorado | Gates Enterprises LLC",
  description: "Professional interior and exterior painting in Colorado. Boost curb appeal and protect your home. Free estimates from Gates Enterprises.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Interior and Exterior Painting",
  "name": "Interior and Exterior Painting in Colorado",
  "description": "Professional interior and exterior painting across Colorado's Front Range. Surface preparation, premium paints, and lasting results.",
  "url": "https://gatesroof.com/services/paint",
  "provider": { "@id": "https://gatesroof.com/#organization" },
  "areaServed": { "@type": "State", "name": "Colorado" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long does a typical paint job take?", "acceptedAnswer": { "@type": "Answer", "text": "Most interior rooms take 1 to 2 days. Full exterior projects take 3 to 5 days depending on size and condition." } },
    { "@type": "Question", "name": "Do you handle surface repairs before painting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We repair cracks, holes, peeling, and other damage during prep. Proper preparation is essential." } },
    { "@type": "Question", "name": "What kind of paint do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Premium, low VOC paints from trusted brands formulated for Colorado's climate." } },
    { "@type": "Question", "name": "Can you paint my home's exterior after a hail storm?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We can repair and repaint, and assist with insurance restoration if covered." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Painting", "item": "https://gatesroof.com/services/paint" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PaintContent />
    </>
  );
}
