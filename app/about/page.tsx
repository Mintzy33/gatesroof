import type { Metadata } from "next";
import Script from "next/script";
import AboutContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "About Gates Enterprises | Colorado's Most Certified Roofer",
  description:
    "Meet Gates Enterprises, Colorado's most certified roofing company. Owner Alex Chicilo built the company on quality craftsmanship and manufacturer certifications that less than 1% of roofers hold.",
  alternates: { canonical: "https://www.gatesroof.com/about" },
  openGraph: {
    title: "About Gates Enterprises | Colorado's Most Certified Roofer",
    description: "Meet Gates Enterprises, Colorado's most certified roofing company. Owner Alex Chicilo built the company on quality craftsmanship and manufacturer certifications that less than 1% of roofers hold.",
    url: "https://www.gatesroof.com/about",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "About Gates Enterprises - Colorado's Most Certified Roofing Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gates Enterprises | Colorado's Most Certified Roofer",
    description: "Meet Gates Enterprises, Colorado's most certified roofing company. Owner Alex Chicilo built the company on quality craftsmanship and manufacturer certifications that less than 1% of roofers hold.",
    images: ["https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov"],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "About", url: "https://www.gatesroof.com/about" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <AboutContent />
    </>
  );
}
