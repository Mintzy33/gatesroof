import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferGoldenContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Golden CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
  description: `Golden's top rated roofer. Foothills wind and hail specialists with 4.9 stars and ${SITE_STATS.reviewCount}+ Google reviews. Free roof inspection. (720) 766-3377`,
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-golden" },
  openGraph: {
    title: `Best Roofer Golden CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
    description: `Golden's top rated roofer. Foothills wind and hail specialists with 4.9 stars and ${SITE_STATS.reviewCount}+ Google reviews. Free roof inspection. (720) 766-3377`,
    url: "https://www.gatesroof.com/best-roofer-golden",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Golden Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Golden", url: "https://www.gatesroof.com/best-roofer-golden" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-golden" />
      <script id="best-roofer-golden-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-golden-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferGoldenContent />
    </>
  );
}
