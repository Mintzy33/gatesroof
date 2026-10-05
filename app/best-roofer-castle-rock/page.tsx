import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferCastleRockContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Castle Rock CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
  description: "Castle Rock's top rated roofing team. 7,200+ roofs, four manufacturer certifications, and insurance claims support. Free estimate. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-castle-rock" },
  openGraph: {
    title: `Best Roofer Castle Rock CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
    description: "Castle Rock's top rated roofing team. 7,200+ roofs, four manufacturer certifications, and insurance claims support. Free estimate. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-castle-rock",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Castle Rock Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Castle Rock", url: "https://www.gatesroof.com/best-roofer-castle-rock" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-castle-rock" />
      <script id="best-roofer-castle-rock-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-castle-rock-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferCastleRockContent />
    </>
  );
}
