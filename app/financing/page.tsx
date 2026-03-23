import type { Metadata } from "next";
import Script from "next/script";
import FinancingContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Financing & Payment Options | Gates Enterprises",
  description:
    "Flexible payment options for your roofing project. Insurance claim assistance, payment plans, and free estimates. Gates Enterprises, Denver's most certified roofer.",
  alternates: { canonical: "https://www.gatesroof.com/financing" },
  openGraph: {
    title: "Roofing Financing & Payment Options | Gates Enterprises",
    description:
      "Flexible payment options for your roofing project. Insurance claim assistance, payment plans, and free estimates. Gates Enterprises, Denver's most certified roofer.",
    url: "https://www.gatesroof.com/financing",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
        width: 1200,
        height: 630,
        alt: "Roofing Financing & Payment Options - Gates Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Financing & Payment Options | Gates Enterprises",
    description:
      "Flexible payment options for your roofing project. Insurance claim assistance, payment plans, and free estimates. Gates Enterprises, Denver's most certified roofer.",
    images: [
      "https://res.cloudinary.com/dyr5their/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
    ],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Financing", url: "https://www.gatesroof.com/financing" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="financing-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FinancingContent />
    </>
  );
}
