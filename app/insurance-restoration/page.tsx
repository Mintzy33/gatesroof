import type { Metadata } from "next";
import Script from "next/script";
import InsuranceRestorationContent from "./content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Colorado's Premier Insurance Restoration Roofer | Gates Enterprises",
  description: "Gates Enterprises is Colorado's leading insurance restoration roofing contractor. Quadruple certified, 301+ reviews, 4.8 stars. We document damage so your insurance company can process your claim accurately. Free inspections. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/insurance-restoration" },
  openGraph: {
    title: "Colorado's Premier Insurance Restoration Roofer | Gates Enterprises",
    description: "Gates Enterprises is Colorado's leading insurance restoration roofing contractor. We document damage so your insurance company can process your claim accurately.",
    url: "https://www.gatesroof.com/insurance-restoration",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Insurance Restoration Roofer Colorado - Gates Enterprises" }],
  },
};

const FAQS = [
  {
    q: "Does homeowners insurance cover hail damage to my roof?",
    a: "Most standard homeowners insurance policies in Colorado cover hail damage to your roof, siding, and gutters under dwelling coverage. You are typically responsible for your deductible, and the insurance company may cover the remaining cost of repairs or replacement. Coverage details vary by carrier and policy, so reviewing your specific policy is important. Gates Enterprises provides free inspections and thorough documentation to help support your claim."
  },
  {
    q: "How does the insurance claim process work for roof damage?",
    a: "The process typically begins with a professional roof inspection to identify and document storm damage. You then file a claim with your insurance company. The insurance company sends an adjuster to assess the damage. Your roofing contractor meets with the adjuster to ensure all damage is accurately documented. Once approved, the insurance company issues payment and the restoration work begins. Gates Enterprises guides you through each step."
  },
  {
    q: "What do I pay out of pocket for insurance restoration?",
    a: "For an approved insurance claim, homeowners are typically responsible for their deductible. The insurance company may cover the remaining cost of the restoration. The exact amount depends on your policy, deductible, and the scope of damage. Gates Enterprises provides a detailed scope of work that helps ensure your claim reflects the full extent of the damage."
  },
  {
    q: "How long does the insurance restoration process take?",
    a: "The timeline varies depending on the complexity of the damage, insurance company response times, and weather conditions. From initial inspection to project completion, the process typically takes several weeks to a few months. The actual construction work for most residential roof replacements is completed in one to three days. Gates Enterprises coordinates the timeline and keeps you informed throughout."
  },
  {
    q: "What if my insurance company denies my claim?",
    a: "If your claim is initially denied, it does not necessarily mean the damage is not covered. Denials can result from incomplete documentation, adjuster oversight, or policy interpretation differences. Gates Enterprises provides thorough documentation and may recommend a re-inspection or supplement to ensure all damage is properly accounted for. You also have the right to request a second opinion or file an appeal with your insurance company."
  }
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Insurance Restoration", url: "https://www.gatesroof.com/insurance-restoration" },
]);

export default function Page() {
  return (
    <>
      <Script id="insurance-restoration-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="insurance-restoration-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <InsuranceRestorationContent />
    </>
  );
}
