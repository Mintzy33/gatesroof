import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import InsuranceRestorationContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: "Insurance Restoration Roofer CO | 4x Certified ★",
  description: "Insurance roof restoration in Colorado. Free inspections, adjuster meeting support, and quality repairs. 4x certified with 7,200+ completed projects.",
  alternates: { canonical: "https://www.gatesroof.com/insurance-restoration" },
  openGraph: {
    title: "Insurance Restoration Roofer CO | 4x Certified ★",
    description: "Insurance roof restoration in Colorado. Free inspections, adjuster meeting support, and quality repairs. 4x certified with 7,200+ completed projects.",
    url: "https://www.gatesroof.com/insurance-restoration",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Insurance Restoration Roofer Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Insurance Restoration", url: "https://www.gatesroof.com/insurance-restoration" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/insurance-restoration" />
      <script id="insurance-restoration-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="insurance-restoration-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <InsuranceRestorationContent />
    </>
  );
}
