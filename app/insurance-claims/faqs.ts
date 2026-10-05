// FAQs for /insurance-claims.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// page.tsx previously hand-maintained a second, abbreviated copy inside its
// JSON-LD; the wording here is the copy that was visible on the page.
export const FAQS: { q: string; a: string }[] = [
  { q: "How much will I pay out of pocket?", a: "If your claim is approved, your out-of-pocket is typically your policy deductible. Your homeowner\u2019s insurance coverage depends on your specific policy and the cause of damage. As required by Colorado law, homeowners are responsible for paying their deductible." },
  { q: "What is your claim success rate?", a: "When Gates Enterprises recommends filing a claim, our success rate is over 99%. We only recommend filing when we\u2019re confident the damage warrants it. We never pressure homeowners to file unnecessary claims." },
  { q: "What are supplements?", a: "Supplements are additional documentation submitted to your insurance company when the initial estimate doesn\u2019t cover the full scope of work. Most homeowners don\u2019t know they exist. We prepare and submit supplement documentation, which often results in thousands of additional dollars toward your project." },
  { q: "Do you meet with my adjuster?", a: "Yes. We attend every adjuster meeting on site. We walk the roof with your adjuster, point out all documented damage, and support a fair and accurate estimate." },
  { q: "Does my insurance really cover a full roof replacement?", a: "Most Colorado homeowner\u2019s insurance policies may cover much of the replacement cost of a storm-damaged roof, depending on your coverage. Many homeowners don\u2019t realize this. We help you understand your coverage and work with your insurance company to pursue the coverage your policy provides." },
  { q: "How long does the process take?", a: "From initial inspection to completed installation, most projects take 4 to 8 weeks. The timeline depends on insurance company response times, supplement reviews, and weather. We keep the process moving and communicate with you at every step." },
  { q: "Is there a deadline to file a claim?", a: "Most policies have a time limit, often one year from the date of the storm. Schedule an inspection as soon as possible to protect your eligibility." },
];
