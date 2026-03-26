import type { Metadata } from "next";
import Script from "next/script";
import FinancingContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roof Financing | $0 Down Options ★ Gates Enterprises",
  description:
    "Flexible roof financing with $0 down payment options. Insurance claim help included. 7,200+ roofs, 4.8★ from 305 reviews. Free estimates. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/financing" },
  openGraph: {
    title: "Roof Financing | $0 Down Options ★ Gates Enterprises",
    description:
      "Flexible roof financing with $0 down payment options. Insurance claim help included. 7,200+ roofs, 4.8★ from 305 reviews. Free estimates. (720) 766-3377",
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
      "Flexible roof financing with $0 down payment options. Insurance claim help included. 7,200+ roofs, 4.8★ from 305 reviews. Free estimates. (720) 766-3377",
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
