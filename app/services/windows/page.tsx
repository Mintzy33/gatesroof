import type { Metadata } from "next";
import Script from "next/script";
import WindowsContent from "./content";

export const metadata: Metadata = {
  title: "Window Replacement Colorado | Gates Enterprises LLC",
  description: "Energy efficient window replacement in Colorado. Vinyl, fiberglass, and wood options. Free estimates from Gates Enterprises.",
  alternates: { canonical: "https://gatesroof.com/services/windows" },
  openGraph: {
    title: "Window Replacement Colorado | Gates Enterprises LLC",
    description: "Energy efficient window replacement in Colorado. Vinyl, fiberglass, and wood options. Free estimates from Gates Enterprises.",
    url: "https://gatesroof.com/services/windows",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Window Replacement",
  "name": "Window Replacement in Colorado",
  "description": "Professional window replacement across Colorado's Front Range. Energy efficient vinyl, fiberglass, and wood options backed by manufacturer warranties.",
  "url": "https://gatesroof.com/services/windows",
  "provider": { "@id": "https://gatesroof.com/#organization" },
  "areaServed": { "@type": "State", "name": "Colorado" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I know if my windows need to be replaced?", "acceptedAnswer": { "@type": "Answer", "text": "Drafts, condensation between panes, difficulty opening or closing, and rising energy bills are common signs. We offer free inspections to help you decide." } },
    { "@type": "Question", "name": "What type of window is best for Colorado?", "acceptedAnswer": { "@type": "Answer", "text": "Double pane vinyl or fiberglass with Low-E glass and argon fill. These options offer excellent insulation against Colorado's temperature extremes." } },
    { "@type": "Question", "name": "How long does window replacement take?", "acceptedAnswer": { "@type": "Answer", "text": "Most homes can be completed in one to two days depending on the number of windows being replaced." } },
    { "@type": "Question", "name": "Are broken windows covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "If the damage was caused by hail or wind, yes. We include window damage in storm damage restorations and handle the documentation." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Windows", "item": "https://gatesroof.com/services/windows" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WindowsContent />
    </>
  );
}
