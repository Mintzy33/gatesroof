import type { Metadata } from "next";
import Script from "next/script";
import DroneContent from "./content";

export const metadata: Metadata = {
  title: "Drone Roof Inspections CO | HD Aerial Assessments | Gates",
  description: "Free drone roof inspections in Colorado. HD aerial photos and video for insurance claims and damage assessment. FAA-certified pilots. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/services/drone-inspections" },
  openGraph: {
    title: "Drone Roof Inspections CO | HD Aerial Assessments | Gates",
    description: "Free drone roof inspections in Colorado. HD aerial photos and video for insurance claims and damage assessment. FAA-certified pilots. Call (720) 766-3377.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long does a drone roof inspection take?", "acceptedAnswer": { "@type": "Answer", "text": "A full drone inspection typically takes 15 to 20 minutes to capture HD imagery of your entire roof from multiple angles. Traditional ladder inspections can take hours by comparison." } },
    { "@type": "Question", "name": "Is the drone inspection really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our drone inspections are completely free with no obligation. We believe in honest assessments — if your roof doesn't need work, we'll tell you." } },
    { "@type": "Question", "name": "Are your drone pilots FAA certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All of our drone pilots hold FAA Part 107 Remote Pilot Certificates and follow all federal aviation regulations during every inspection." } },
    { "@type": "Question", "name": "Can drone footage be used for insurance claims?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our drone footage provides timestamped, geotagged HD imagery that insurance adjusters can use to verify damage. We've handled over 7,200 roofs and know exactly what adjusters need to see." } },
    { "@type": "Question", "name": "Do I get copies of the photos and video?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You receive all high-resolution aerial photos and video from your inspection. This documentation is yours to keep and use for insurance claims or your own records." } },
  ],
};

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
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DroneContent />
    </>
  );
}
