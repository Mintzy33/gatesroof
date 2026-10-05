import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferKenCarylContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: "Ken Caryl Roofer | Storm & Hail Damage, Free Inspection | Gates",
  description: "Storm damage roofing in Ken Caryl? Gates Enterprises — free hail inspection, insurance claim support, 4x certified. Serving Ken Caryl Ranch & Columbine. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-ken-caryl" },
  openGraph: {
    title: "Ken Caryl Roofer | Storm & Hail Damage, Free Inspection | Gates",
    description: "Storm damage roofing in Ken Caryl? Gates Enterprises — free hail inspection, insurance claim support, 4x certified. Serving Ken Caryl Ranch & Columbine. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-ken-caryl",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Ken Caryl Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Ken Caryl", url: "https://www.gatesroof.com/best-roofer-ken-caryl" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-ken-caryl" />
      <script id="best-roofer-ken-caryl-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-ken-caryl-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferKenCarylContent />
    </>
  );
}
