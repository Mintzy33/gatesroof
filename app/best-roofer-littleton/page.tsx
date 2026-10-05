import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferLittletonContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Littleton CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
  description: "Littleton's top rated roofing team. Four certifications, 4.9 star rating, and 10+ years serving the South Metro area. Free roof inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-littleton" },
  openGraph: {
    title: `Best Roofer Littleton CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
    description: "Littleton's top rated roofing team. Four certifications, 4.9 star rating, and 10+ years serving the South Metro area. Free roof inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-littleton",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Littleton Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Littleton", url: "https://www.gatesroof.com/best-roofer-littleton" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-littleton" />
      <script id="best-roofer-littleton-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-littleton-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferLittletonContent />
    </>
  );
}
