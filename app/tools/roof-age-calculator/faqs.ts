// FAQs for /tools/roof-age-calculator.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible list) both read this
// array, so the marked-up Q/A cannot drift from what the page renders.
// content.tsx held these inline inside a .map(); page.tsx hand-maintained a second, abbreviated copy inside its JSON-LD.
export const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does a roof replacement cost in Colorado?",
    a: "Most Colorado roof replacements cost between $8,000 and $25,000 for asphalt shingles, depending on home size, roof complexity, and material choice. Impact-resistant (Class 4) shingles, which may qualify for insurance discounts, typically run $9,000 to $40,000. Premium materials like metal or tile could cost significantly more.",
  },
  {
    q: "Could my insurance cover roof replacement?",
    a: "If your roof has storm damage from hail or wind, your homeowner's insurance policy may cover much of the replacement cost, depending on your policy and the cause of damage. If a claim is approved, your out-of-pocket is typically your policy deductible.",
  },
  {
    q: "What factors affect roof replacement cost?",
    a: "The biggest factors include roof material, home square footage (which determines the number of roofing squares), number of stories (taller homes require more labor and safety equipment), roof complexity (dormers, valleys, steep pitch), and your location in Colorado. Mountain area projects may cost more due to access and logistics.",
  },
  {
    q: "Why choose Gates Enterprises for roof replacement?",
    a: "Gates Enterprises is one of Colorado's only quadruple manufacturer certified roofers, holding GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster certifications. This means access to the best warranty options and installation standards from every major manufacturer.",
  },
];
