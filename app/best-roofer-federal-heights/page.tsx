import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferFederalHeightsContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Federal Heights CO (2026) | 4x Certified ★ ${SITE_STATS.reviewCount}+ Reviews`,
  description: "Top rated Federal Heights roofer with four manufacturer certifications and 7,200+ completed roofs. Warranties up to 50 years. Free inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-federal-heights" },
  openGraph: {
    title: `Best Roofer Federal Heights CO (2026) | 4x Certified ★ ${SITE_STATS.reviewCount}+ Reviews`,
    description: "Top rated Federal Heights roofer with four manufacturer certifications and 7,200+ completed roofs. Warranties up to 50 years. Free inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-federal-heights",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Federal Heights Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Federal Heights", url: "https://www.gatesroof.com/best-roofer-federal-heights" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-federal-heights" />
      <script id="best-roofer-federal-heights-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-federal-heights-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferFederalHeightsContent />
    </>
  );
}
