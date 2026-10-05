import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import EmergencyContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Emergency Roof Repair Colorado | 24/7 Response | (720) 766-3377",
  description:
    "Emergency roof repair across Colorado. Rapid response for active leaks, storm damage, and tarping. 4x certified, locally operated. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/emergency-roofing" },
  openGraph: {
    title: "Emergency Roof Repair Colorado | 24/7 Response | Gates Enterprises",
    description:
      "Emergency roof repair across Colorado. Rapid response for active leaks, storm damage, and tarping. Call (720) 766-3377.",
    url: "https://www.gatesroof.com/emergency-roofing",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
        width: 1200,
        height: 630,
        alt: "Gates Enterprises LLC - Emergency Roof Repair Colorado",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Roof Repair",
  name: "Emergency Roof Repair in Colorado",
  description:
    "24/7 emergency roofing services including tarping, temporary repairs, storm damage response, and urgent leak repair across Colorado's Front Range.",
  url: "https://www.gatesroof.com/emergency-roofing",
  provider: { "@id": "https://www.gatesroof.com/#organization" },
  areaServed: { "@type": "State", name: "Colorado" },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: "+17207663377",
    availableLanguage: "English",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.gatesroof.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Emergency Roofing",
      item: "https://www.gatesroof.com/emergency-roofing",
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/emergency-roofing" />
      <script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EmergencyContent />
    </>
  );
}
