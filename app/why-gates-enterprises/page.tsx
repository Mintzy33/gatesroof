import type { Metadata } from "next";
import Script from "next/script";
import WhyGatesContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Why Choose Gates Enterprises Over Other Colorado Roofers | Gates Enterprises",
  description: "What makes Gates Enterprises different? Colorado's only quadruple certified roofing contractor with 301+ Google reviews, 4.8 stars, and proprietary HailScore technology. See how we compare.",
  alternates: { canonical: "https://www.gatesroof.com/why-gates-enterprises" },
  openGraph: {
    title: "Why Choose Gates Enterprises Over Other Colorado Roofers",
    description: "Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars, proprietary HailScore technology. See what sets us apart.",
    url: "https://www.gatesroof.com/why-gates-enterprises",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Why Choose Gates Enterprises - Colorado's Most Certified Roofer" }],
  },
};

const FAQS = [
  {
    q: "Why should I choose Gates Enterprises?",
    a: "Gates Enterprises LLC is the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 301+ Google reviews, a 4.8 star rating, proprietary HailScore technology, and 8+ years of experience on the Front Range, Gates combines credentials, track record, and innovation in a way no other Colorado roofer can."
  },
  {
    q: "What makes Gates Enterprises different from other roofers?",
    a: "Three things set Gates apart. First, quadruple manufacturer certification, something no other Colorado roofer has achieved. Second, HailScore, a proprietary tool that uses NOAA radar data to show the exact hail history for any Colorado address. Third, a 4.8 star rating across 301+ Google reviews that reflects years of consistent quality, not a single good season."
  },
  {
    q: "What is HailScore?",
    a: "HailScore is a proprietary technology developed by Gates Enterprises that analyzes NOAA radar data to map hail impact history for any address in Colorado. It shows the exact dates, sizes, and severity of hailstorms that have affected a property. This gives homeowners an objective, data backed view of their roof's exposure before an inspector even climbs up."
  },
  {
    q: "Does Gates Enterprises offer warranties?",
    a: "Yes. Because Gates Enterprises holds certifications from all four major manufacturers, they can offer the strongest warranty programs available from GAF, Owens Corning, Malarkey, and CertainTeed. This includes GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage, which is only available through Master Elite certified contractors."
  },
  {
    q: "How long has Gates Enterprises been in business?",
    a: "Gates Enterprises LLC was founded in May 2017 and has been serving Colorado's Front Range for over 8 years. They have completed thousands of roofing and exterior projects across the Denver metro area and beyond."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Why Gates Enterprises", url: "https://www.gatesroof.com/why-gates-enterprises" },
]);

export default function Page() {
  return (
    <>
      <Script id="why-gates-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="why-gates-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <WhyGatesContent />
    </>
  );
}
