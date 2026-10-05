import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: "Best Roofer Lakewood CO (2026) | Local HQ ★ 4x Certified",
  description: `Lakewood's top rated roofer, headquartered right here. 4x certified, ${SITE_STATS.reviewCount} Google reviews, and up to 50-year warranties. Free inspection. (720) 766-3377`,
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-lakewood" },
  openGraph: {
    title: "Best Roofer Lakewood CO (2026) | Local HQ ★ 4x Certified",
    description: `Lakewood's top rated roofer, headquartered right here. 4x certified, ${SITE_STATS.reviewCount} Google reviews, and up to 50-year warranties. Free inspection. (720) 766-3377`,
    url: "https://www.gatesroof.com/best-roofer-lakewood",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Lakewood Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Lakewood", url: "https://www.gatesroof.com/best-roofer-lakewood" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-lakewood" />
      <script id="best-roofer-lakewood-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-lakewood-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
