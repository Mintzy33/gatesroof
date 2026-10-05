// FAQs for /insurance-restoration.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// page.tsx previously hand-maintained a second, abbreviated copy inside its
// JSON-LD; the wording here is the copy that was visible on the page.
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Does homeowners insurance cover hail damage to my roof?",
    a: "Many standard homeowners policies in Colorado may cover sudden hail damage to your roof, siding, and gutters, though coverage depends on your specific policy. You are typically responsible for your deductible, and the insurance company may cover the remaining cost. Coverage details vary by carrier and policy, so reviewing your specific policy is important. Gates Enterprises provides free inspections and thorough documentation to help support your claim."
  },
  {
    q: "How does the insurance claim process work for roof damage?",
    a: "The process typically begins with a professional roof inspection to identify and document storm damage. You file a claim with your insurance company. An adjuster assesses the damage. Your roofing contractor meets with the adjuster to ensure all damage is documented. Once approved, the insurance company issues payment and restoration work begins. Gates Enterprises guides you through each step."
  },
  {
    q: "What do I pay out of pocket for insurance restoration?",
    a: "For an approved claim, homeowners are typically responsible for their deductible. The insurance company may cover the remaining restoration cost. The exact amount depends on your policy, deductible, and scope of damage. Gates Enterprises provides detailed documentation to help ensure your claim reflects the full extent of the damage."
  },
  {
    q: "How long does the insurance restoration process take?",
    a: "From initial inspection to project completion, the process typically takes several weeks to a few months depending on complexity and insurance company response times. The actual roof replacement is usually completed in one to three days. Gates Enterprises coordinates the timeline and keeps you informed throughout."
  },
  {
    q: "What if my insurance company denies my claim?",
    a: "A denial does not necessarily mean the damage is not covered. Denials can result from incomplete documentation or adjuster oversight. Gates Enterprises provides thorough documentation and may recommend a re-inspection or supplement. You also have the right to request a second opinion or file an appeal."
  }
];
