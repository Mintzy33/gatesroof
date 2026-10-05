import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import WhyGatesContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: "Why Gates Enterprises? | 4x Certified, 7,200+ Roofs",
  description: "Why Colorado homeowners choose Gates Enterprises. 4x certified, 7,200+ roofs, NOAA hail history via the independent third-party HailScore tool, and warranties others cannot offer.",
  alternates: { canonical: "https://www.gatesroof.com/why-gates-enterprises" },
  openGraph: {
    title: "Why Gates Enterprises? | 4x Certified, 7,200+ Roofs",
    description: "Why Colorado homeowners choose Gates Enterprises. 4x certified, 7,200+ roofs, NOAA hail history via the independent third-party HailScore tool, and warranties others cannot offer.",
    url: "https://www.gatesroof.com/why-gates-enterprises",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Why Choose Gates Enterprises - Colorado's Most Certified Roofer" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Why Gates Enterprises", url: "https://www.gatesroof.com/why-gates-enterprises" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/why-gates-enterprises" />
      <script id="why-gates-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="why-gates-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <WhyGatesContent />
    </>
  );
}
