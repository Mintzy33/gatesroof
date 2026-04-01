import type { Metadata } from "next";
import Script from "next/script";
import WarrantyContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roof Warranty | Up to 50 Years ★ Gates Enterprises",
  description:
    "Roof warranties up to 50 years from four major manufacturers. Only 4x certified contractors qualify for this level of coverage. Learn your options.",
  alternates: { canonical: "https://www.gatesroof.com/warranty" },
  openGraph: {
    title: "Roof Warranty | Up to 50 Years ★ Gates Enterprises",
    description:
      "Roof warranties up to 50 years from four major manufacturers. Only 4x certified contractors qualify for this level of coverage. Learn your options.",
    url: "https://www.gatesroof.com/warranty",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
        width: 1200,
        height: 630,
        alt: "Roofing Warranty Information - Gates Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Warranty | Up to 50 Years ★ Gates Enterprises",
    description:
      "Roof warranties up to 50 years from four major manufacturers. Only 4x certified contractors qualify for this level of coverage. Learn your options.",
    images: [
      "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
    ],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Warranty", url: "https://www.gatesroof.com/warranty" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="warranty-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <WarrantyContent />
    </>
  );
}
