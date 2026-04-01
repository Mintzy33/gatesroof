import type { Metadata } from "next";
import Script from "next/script";
import HowItWorksContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "How It Works | Roofing Process | Gates Enterprises",
  description:
    "Your roof replacement in 5 simple steps. Free inspection, material selection, insurance help, and expert installation. See our proven process.",
  alternates: { canonical: "https://www.gatesroof.com/how-it-works" },
  openGraph: {
    title: "How It Works | Roofing Process | Gates Enterprises",
    description:
      "Your roof replacement in 5 simple steps. Free inspection, material selection, insurance help, and expert installation. See our proven process.",
    url: "https://www.gatesroof.com/how-it-works",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
        width: 1200,
        height: 630,
        alt: "Roofing Process - Gates Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Roofing Process | Gates Enterprises",
    description:
      "Your roof replacement in 5 simple steps. Free inspection, material selection, insurance help, and expert installation. See our proven process.",
    images: [
      "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
    ],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "How It Works", url: "https://www.gatesroof.com/how-it-works" },
]);

const faqs = faqSchema([
  {
    q: "How long does the entire roofing process take from inspection to completion?",
    a: "The typical timeline from initial inspection to completed installation is 2 to 4 weeks. This includes the inspection, assessment, material ordering, and installation. Emergency repairs and storm damage projects may be expedited. Most residential roof installations are completed in just 1 to 2 days once materials arrive.",
  },
  {
    q: "Do I need to be home during the roof inspection?",
    a: "We recommend being home for the initial inspection so we can walk you through our findings in person. The inspection takes approximately 15 minutes. We use drone technology to assess your roof thoroughly without needing to climb on it, so there is minimal disruption to your day.",
  },
  {
    q: "Will my insurance cover the cost of a new roof?",
    a: "If your roof has storm damage, most homeowners insurance policies cover the replacement cost minus your deductible. Our team documents all damage, files the claim on your behalf, and meets with your insurance adjuster to ensure nothing is missed. You typically only pay your deductible.",
  },
  {
    q: "What happens if you inspect my roof and there is no damage?",
    a: "We tell you exactly that. Our inspections are free with no obligation, and we do not upsell or pressure homeowners into unnecessary work. If your roof is in good shape, we will let you know and recommend when to schedule your next inspection.",
  },
]);

export default function Page() {
  return (
    <>
      <Script
        id="how-it-works-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Script
        id="how-it-works-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
      <HowItWorksContent />
    </>
  );
}
