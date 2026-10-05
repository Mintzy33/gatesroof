import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: "Best Roofer Fort Collins (2026) | 4x Certified ★",
  description: "Fort Collins' top rated roofer serving Northern Colorado. 7,200+ roofs, 4x certified, and claims support. Free inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-fort-collins" },
  openGraph: {
    title: "Best Roofer Fort Collins (2026) | 4x Certified ★",
    description: "Fort Collins' top rated roofer serving Northern Colorado. 7,200+ roofs, 4x certified, and claims support. Free inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-fort-collins",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Fort Collins Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Fort Collins", url: "https://www.gatesroof.com/best-roofer-fort-collins" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-fort-collins" />
      <script id="best-roofer-ftc-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-ftc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
