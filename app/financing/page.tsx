import type { Metadata } from "next";
import Script from "next/script";
import FinancingContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roof Financing | $0 Down Options ★ Gates Enterprises",
  description:
    "Affordable roof financing with $0 down options for Colorado homeowners. Multiple plans available to fit your budget. Get a free estimate today.",
  alternates: { canonical: "https://www.gatesroof.com/financing" },
  openGraph: {
    title: "Roof Financing | $0 Down Options ★ Gates Enterprises",
    description:
      "Affordable roof financing with $0 down options for Colorado homeowners. Multiple plans available to fit your budget. Get a free estimate today.",
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
    title: "Roof Financing | $0 Down Options ★ Gates Enterprises",
    description:
      "Affordable roof financing with $0 down options for Colorado homeowners. Multiple plans available to fit your budget. Get a free estimate today.",
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
