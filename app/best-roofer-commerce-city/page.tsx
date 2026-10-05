import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import BestRooferCommerceCityContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";

export const metadata: Metadata = {
  title: `Best Roofer Commerce City CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
  description: "Commerce City's top rated roofer. Locally operated, 4.9 star rated, and backed by four manufacturer certifications. Free storm inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-commerce-city" },
  openGraph: {
    title: `Best Roofer Commerce City CO (2026) | 4x Certified \u2605 ${SITE_STATS.reviewCount}+ Reviews`,
    description: "Commerce City's top rated roofer. Locally operated, 4.9 star rated, and backed by four manufacturer certifications. Free storm inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/best-roofer-commerce-city",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Commerce City Colorado - Gates Enterprises" }],
  },
};


const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Commerce City", url: "https://www.gatesroof.com/best-roofer-commerce-city" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/best-roofer-commerce-city" />
      <script id="best-roofer-commerce-city-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script id="best-roofer-commerce-city-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferCommerceCityContent />
    </>
  );
}
