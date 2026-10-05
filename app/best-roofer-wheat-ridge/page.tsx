import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferWheatRidgeContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Wheat Ridge CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
  description: "Wheat Ridge top rated roofer near our Lakewood HQ. 7,200+ roofs completed, 4.9 star rating, and claims support included. Free inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-wheat-ridge" },
  openGraph: {
    title: `Best Roofer Wheat Ridge CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
    description: "Wheat Ridge top rated roofer near our Lakewood HQ. 7,200+ roofs completed, 4.9 star rating, and claims support included. Free inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-wheat-ridge",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Wheat Ridge Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Wheat Ridge", url: "https://www.gatesroof.com/best-roofer-wheat-ridge" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-wheat-ridge" />
      <script id="best-roofer-wheat-ridge-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-wheat-ridge-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferWheatRidgeContent />
    </>
  );
}
