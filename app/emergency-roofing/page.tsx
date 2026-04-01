import type { Metadata } from "next";
import Script from "next/script";
import EmergencyContent from "./content";

export const metadata: Metadata = {
  title: "Emergency Roof Repair Colorado | 24/7 Response | (720) 766-3377",
  description:
    "Emergency roof repair in Denver and across Colorado. 24/7 rapid response for storm damage, active leaks, and urgent repairs. 7,200+ roofs, 4.9 stars, 306 reviews. Call (720) 766-3377 now.",
  alternates: { canonical: "https://www.gatesroof.com/emergency-roofing" },
  openGraph: {
    title: "Emergency Roof Repair Colorado | 24/7 Response | Gates Enterprises",
    description:
      "24/7 emergency roof repair across Colorado. Rapid response for active leaks, storm damage, and urgent roofing needs. Call (720) 766-3377.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Gates Enterprises respond to a roofing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We prioritize emergency calls and aim to have a crew on site as fast as possible. With over 100 team members across Colorado's Front Range, we have the capacity to respond rapidly after storms and other urgent situations. Call (720) 766-3377 any time.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifies as an emergency roof repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An emergency roof repair is needed when your home is actively taking on water, a tree or debris has punctured or collapsed part of the roof, storm damage has exposed the decking or underlayment, or structural damage makes the home unsafe. If you are unsure, call us and we will help you assess the situation.",
      },
    },
    {
      "@type": "Question",
      name: "Does insurance cover emergency roof repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most homeowner insurance policies cover emergency repairs caused by sudden events like storms, fallen trees, or hail. Your policy typically covers temporary protective measures like tarping as well as permanent repairs, minus your deductible. We document everything and coordinate documentation with your insurance company to support your claim.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during an emergency roof tarping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our crew secures heavy-duty tarps over the damaged area to stop water intrusion immediately. We anchor the tarps to prevent wind uplift and ensure your home is protected until permanent repairs can be completed. Tarping is a temporary measure designed to prevent further interior damage while the full scope of work is assessed.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait until the storm passes to call for emergency roof repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call as soon as it is safe to do so. The sooner we know about the damage, the sooner we can schedule a response. Waiting allows water to cause secondary damage to insulation, drywall, and electrical systems, which can significantly increase repair costs.",
      },
    },
  ],
};

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
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EmergencyContent />
    </>
  );
}
