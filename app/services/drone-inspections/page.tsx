import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import DroneContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Drone Roof Inspections CO | HD Aerial Assessments | Gates",
  description: "HD drone roof inspections with FAA-certified pilots. See damage up close without climbing your roof. Great for insurance claims. Book your free flight today.",
  alternates: { canonical: "https://www.gatesroof.com/services/drone-inspections" },
  openGraph: {
    title: "Drone Roof Inspections CO | HD Aerial Assessments | Gates",
    description: "HD drone roof inspections with FAA-certified pilots. See damage up close without climbing your roof. Great for insurance claims. Book your free flight today.",
    url: "https://www.gatesroof.com/services/drone-inspections",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Drone Roof Inspections" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Drone Roof Inspection",
  "name": "Drone Roof Inspections in Colorado",
  "description": "FAA-certified drone roof inspections with HD aerial photos and video. Perfect for insurance claims, storm damage assessment, and annual roof health checkups.",
  "url": "https://www.gatesroof.com/services/drone-inspections",
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
    { "@type": "ListItem", "position": 3, "name": "Drone Inspections", "item": "https://www.gatesroof.com/services/drone-inspections" },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/drone-inspections" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DroneContent />
    </>
  );
}
