import type { Metadata } from "next";
import Script from "next/script";
import ServicesContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Services | Gates Enterprises",
  description:
    "Full-service roofing contractor in Denver. Roof replacement, storm damage repair, siding, gutters, windows, and insurance claims. 305 reviews, 4.8 stars. Free inspections.",
  alternates: { canonical: "https://www.gatesroof.com/services" },
  openGraph: {
    title: "Roofing Services | Gates Enterprises",
    description:
      "Full-service roofing contractor in Denver. Roof replacement, storm damage repair, siding, gutters, windows, and insurance claims. 305 reviews, 4.8 stars. Free inspections.",
    url: "https://www.gatesroof.com/services",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
        width: 1200,
        height: 630,
        alt: "Gates Enterprises - Full-Service Roofing and Exteriors in Colorado",
      },
    ],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Services", url: "https://www.gatesroof.com/services" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServicesContent />
    </>
  );
}
