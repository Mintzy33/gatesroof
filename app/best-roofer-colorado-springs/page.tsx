import type { Metadata } from "next";
import Script from "next/script";
import BestRooferContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Best Roofing Company in Colorado Springs, CO (2026) | Gates Enterprises",
  description: "Looking for the best roofer in Colorado Springs? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/best-roofer-colorado-springs" },
  openGraph: {
    title: "Best Roofing Company in Colorado Springs, CO (2026)",
    description: "Looking for the best roofer in Colorado Springs? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 301+ Google reviews, 4.8 stars.",
    url: "https://www.gatesroof.com/best-roofer-colorado-springs",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Best Roofing Company in Colorado Springs - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Who is the best roofer in Colorado Springs?",
    a: "Gates Enterprises LLC is recognized as one of the top roofing companies serving Colorado Springs. They are the only contractor in the state to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 301+ Google reviews and a 4.8 star rating, their quality is well documented."
  },
  {
    q: "What certifications should a Colorado Springs roofer have?",
    a: "Look for manufacturer certifications from major brands like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, quality, and customer satisfaction. Certified roofers can offer extended warranties that uncertified companies cannot. Gates Enterprises holds all four, something no other Colorado roofer can claim."
  },
  {
    q: "How do I choose a roofing company in Colorado Springs?",
    a: "Check for manufacturer certifications first. Then look at Google reviews for consistent, recent feedback. Verify insurance and licensing. Ask about their experience with Colorado Springs hail and wind damage. Choose a company that offers free inspections without pressure. Gates Enterprises meets all of these criteria."
  },
  {
    q: "Does Gates Enterprises serve Colorado Springs?",
    a: "Yes. Gates Enterprises LLC serves homeowners throughout Colorado Springs and the Pikes Peak region. From Briargate to Broadmoor, their crews are experienced with every type of roof and home style found in the Colorado Springs market."
  },
  {
    q: "How much does a roof replacement cost in Colorado Springs?",
    a: "Roof replacement costs in Colorado Springs typically range from $10,000 to $30,000 depending on roof size, pitch, material choice, and existing conditions. Many Colorado Springs homeowners pay significantly less out of pocket when insurance covers storm damage. Contact Gates Enterprises for a free estimate specific to your home."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Best Roofer Colorado Springs", url: "https://www.gatesroof.com/best-roofer-colorado-springs" },
]);

export default function Page() {
  return (
    <>
      <Script id="best-roofer-cos-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="best-roofer-cos-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BestRooferContent />
    </>
  );
}
