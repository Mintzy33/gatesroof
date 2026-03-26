import type { Metadata } from "next";
import Script from "next/script";
import StormChasersContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Local Roofer vs Storm Chasers | Why It Matters",
  description: "Storm chasers disappear after the job. Gates Enterprises is local, 4x certified, 7,200+ roofs, 305 reviews. Protect your home with a trusted roofer",
  alternates: { canonical: "https://www.gatesroof.com/compare/storm-chasers" },
  openGraph: {
    title: "Local Roofer vs Storm Chasers | Why It Matters",
    description: "Storm chasers disappear after the job. Gates Enterprises is local, 4x certified, 7,200+ roofs, 305 reviews. Protect your home with a trusted roofer",
    url: "https://www.gatesroof.com/compare/storm-chasers",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises vs Storm Chasers - Why Local Matters" }],
  },
};

const FAQS = [
  {
    q: "What is a storm chaser in roofing?",
    a: "A storm chaser is an out-of-state roofing contractor who follows severe weather events from city to city. After a major hail or wind storm, they arrive in affected areas, knock on doors, and offer quick roof repairs or replacements. Once the work is done and they have been paid, they move on to the next storm, often leaving homeowners without warranty support or recourse if problems arise."
  },
  {
    q: "Why are storm chasers risky for homeowners?",
    a: "Storm chasers carry several risks. They have no local presence, so if your roof leaks six months later, you cannot reach them. Their warranties are often meaningless because the company may not exist or be reachable when you need service. They frequently use subcontractors with unknown qualifications. And they often use high-pressure sales tactics to get homeowners to sign contracts on the spot before they can research alternatives."
  },
  {
    q: "How can I tell if a roofer is a storm chaser?",
    a: "Look for these warning signs: they knocked on your door unsolicited right after a storm, they have an out-of-state phone number or address, they cannot provide local references, they pressure you to sign immediately, they offer to cover your insurance deductible (which is illegal in Colorado), or they have few or no Google reviews in your area. A legitimate local contractor will have years of reviews, a permanent local presence, and will never pressure you into a decision."
  },
  {
    q: "Is Gates Enterprises a local Colorado roofing company?",
    a: "Yes. Gates Enterprises has been roofing along Colorado's Front Range since 2017. They have a permanent local presence, 305+ Google reviews from Colorado homeowners, and hold all four major manufacturer certifications. They are not going anywhere, and their warranties are backed by both the manufacturer and their own workmanship guarantee."
  },
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Compare", url: "https://www.gatesroof.com/compare" },
  { name: "vs Storm Chasers", url: "https://www.gatesroof.com/compare/storm-chasers" },
]);

export default function Page() {
  return (
    <>
      <Script id="storm-chasers-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="storm-chasers-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <StormChasersContent />
    </>
  );
}
