// FAQs for /services/drone-inspections.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// page.tsx previously hand-maintained a second, abbreviated copy inside its
// JSON-LD; the wording here is the copy that was visible on the page.
export const FAQS: { q: string; a: string }[] = [
  { q: "How long does a drone roof inspection take?", a: "A full drone inspection typically takes 15 to 20 minutes to capture HD imagery of your entire roof from multiple angles. Traditional ladder inspections can take hours by comparison." },
  { q: "Is the drone inspection really free?", a: "Yes. Our drone inspections are completely free with no obligation. We believe in honest assessments \u2014 if your roof doesn\u2019t need work, we\u2019ll tell you." },
  { q: "Are your drone pilots FAA certified?", a: "Yes. All of our drone pilots hold FAA Part 107 Remote Pilot Certificates and follow all federal aviation regulations during every inspection." },
  { q: "Can drone footage be used for insurance claims?", a: "Absolutely. Our drone footage provides timestamped, geotagged HD imagery that insurance adjusters can use to verify damage. We\u2019ve handled over 7,200 roofs and know exactly what adjusters need to see." },
  { q: "Do I get copies of the photos and video?", a: "Yes. You receive all high-resolution aerial photos and video from your inspection. This documentation is yours to keep and use for insurance claims or your own records." },
];
