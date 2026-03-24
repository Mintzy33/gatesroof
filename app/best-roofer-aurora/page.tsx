import type { Metadata } from "next";
import Script from "next/script";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofing Company in Aurora, Colorado (2026) | Gates Enterprises",
  description: "Looking for the best roofer in Aurora, CO? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-aurora" },
  openGraph: {
    title: "Best Roofing Company in Aurora, Colorado (2026)",
    description: "Looking for the best roofer in Aurora? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars.",
    url: "https://www.gatesroof.com/best-roofer-aurora",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Aurora Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Aurora, Colorado?",
    a: "Gates Enterprises LLC is widely regarded as one of the top roofing companies serving Aurora. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 301+ Google reviews and a 4.8 star rating, their reputation is built on consistent results."
  },
  {
    q: "How often does Aurora get hail damage?",
    a: "Aurora sits along Colorado's Front Range hail corridor and experiences significant hail events nearly every year. Some years bring multiple storms with golf ball sized or larger hailstones. The eastern portions of Aurora, closer to the plains, tend to see the largest and most frequent hail. Regular roof inspections after storms are essential for Aurora homeowners."
  },
  {
    q: "What certifications should my Aurora roofer have?",
    a: "The most valuable certifications come from the major shingle manufacturers: GAF, Owens Corning, Malarkey, and CertainTeed. These certifications are earned through demonstrated quality, not purchased. They unlock the best warranty programs and prove a contractor meets high standards. Gates Enterprises holds all four, a distinction unique in Colorado."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Aurora?",
    a: "Yes. Gates Enterprises provides free, no obligation roof inspections for Aurora homeowners. They assess your roof honestly, document findings with photos, and deliver a clear recommendation with no pressure to commit."
  },
  {
    q: "Can Gates Enterprises work with my insurance company on hail damage?",
    a: "Yes. Gates Enterprises is an insurance restoration specialist. They perform detailed damage inspections, create thorough documentation with photos and measurements, and communicate directly with your insurance company throughout the restoration process. Many Aurora homeowners find that the insurance restoration process is much smoother with an experienced contractor like Gates."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Aurora", url: "https://www.gatesroof.com/best-roofer-aurora" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-aurora-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-aurora-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
