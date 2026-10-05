import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import WindowsContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Replacement CO | Energy Efficient ★ Free Quote",
  description: "Vinyl, fiberglass, and wood window replacement in Colorado. Lower energy bills and improve comfort. Locally operated, 7,200+ projects. Free quote today.",
  alternates: { canonical: "https://www.gatesroof.com/services/windows" },
  openGraph: {
    title: "Window Replacement CO | Energy Efficient ★ Free Quote",
    description: "Vinyl, fiberglass, and wood window replacement in Colorado. Lower energy bills and improve comfort. Locally operated, 7,200+ projects. Free quote today.",
    url: "https://www.gatesroof.com/services/windows",
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
  "url": "https://www.gatesroof.com/services/windows",
  "provider": { "@id": "https://www.gatesroof.com/#organization" },
  "areaServed": { "@type": "State", "name": "Colorado" },
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gatesroof.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Windows", "item": "https://www.gatesroof.com/services/windows" },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/windows" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WindowsContent />
    </>
  );
}
