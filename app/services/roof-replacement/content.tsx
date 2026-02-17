"use client";
import ServicePage from "../../components/ServicePage";
export default function RoofReplacementContent() {
  return (
    <ServicePage
      breadcrumb="Roof Replacement"
      h1="Roof Replacement Across Colorado's Front Range"
      heroCopy="A new roof Colorado homeowners can count on starts with the right contractor. Gates Enterprises has been replacing roofs across the Denver metro and beyond for over a decade, and we do it the right way every single time. Full tear off, proper deck inspection, manufacturer certified installation, and a warranty that actually means something."
      sections={[
        {
          title: "Full Tear Off Roof Replacement Done Right",
          content: [
            "We never overlay. Every Gates roof replacement starts with a complete tear off down to the deck. That lets us inspect the wood sheathing for rot, check for proper ventilation, and make sure your new roof sits on a solid foundation. Cutting corners here is how other contractors create problems five years down the road. We fix problems before they get buried under shingles.",
            "Our crews install according to manufacturer specifications every time. That matters because it\u2019s the only way to activate the full warranty from GAF, CertainTeed, or Malarkey. Miss one step and your warranty could be void. We don\u2019t miss steps."
          ]
        },
        {
          title: "Class 4 Impact Resistant Shingles for Colorado Weather",
          content: [
            "Colorado gets hit with hail. A lot. That\u2019s why we recommend Class 4 impact resistant shingles for every roof replacement across the Front Range. These shingles are tested to withstand a 2 inch steel ball dropped from 20 feet. They cost a bit more upfront, but most insurance companies offer a 20 to 30% discount on your premium once they\u2019re installed. Over the life of your roof, they pay for themselves.",
            "We carry Class 4 options from GAF, CertainTeed, Malarkey, and Owens Corning. Each has a slightly different look and price point, and we\u2019ll walk you through the differences so you can make the right call for your home and budget."
          ]
        },
        {
          title: "The GAF Golden Pledge Warranty",
          content: [
            "As a GAF Master Elite contractor (top 2% in the country), we can offer the GAF Golden Pledge warranty. This is the strongest warranty in residential roofing. It covers materials for 50 years and includes 25 years of workmanship coverage, backed directly by GAF, not by us. If Gates Enterprises ever closed its doors, your warranty would still stand. That\u2019s a level of protection most contractors simply cannot offer."
          ]
        },
        {
          title: "Insurance Claim Support for Your Roof Replacement",
          content: [
            "If your roof replacement is the result of storm or hail damage, we handle the insurance process for you. We document damage with photos and measurements, meet your adjuster on site, and submit supplements when the initial estimate falls short. Our team knows Xactimate line items inside and out, and we fight to make sure your insurance company pays what your roof actually costs. You shouldn\u2019t have to become an insurance expert just to get a new roof."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Free Inspection", desc: "We climb your roof, check every slope, and document what we find with photos and measurements. No drones, no guesswork." },
        { step: "02", title: "Detailed Estimate", desc: "You get a written scope of work with material options, warranty details, and pricing. No surprises." },
        { step: "03", title: "Insurance Coordination", desc: "We file your claim, meet your adjuster, and handle supplement requests so you don\u2019t have to." },
        { step: "04", title: "Material Selection", desc: "Pick your shingle style, color, and manufacturer. We bring samples to your door." },
        { step: "05", title: "Installation", desc: "Full tear off, deck inspection, ice and water shield, synthetic underlayment, and new shingles. Typically completed in one day for most homes." },
        { step: "06", title: "Final Walkthrough", desc: "We inspect the finished roof together, answer your questions, and register your warranty." },
      ]}
      whyGates={[
        { bold: "Quadruple manufacturer certified.", rest: "GAF Master Elite, CertainTeed Platinum Preferred, Malarkey Certified, and Emerald Premium. No other local contractor holds all four." },
        { bold: "Up to 50 year warranty.", rest: "Not a marketing gimmick. The GAF Golden Pledge warranty is the real deal, backed by the manufacturer." },
        { bold: "Insurance claim experts.", rest: "We\u2019ve navigated thousands of claims and know how to get your roof fully covered." },
        { bold: "Locally owned, 10+ years in Lakewood.", rest: "We live here. Our reputation is everything." },
      ]}
      faqs={[
        { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in a single day. Larger or more complex roofs may take two days. We\u2019ll give you a specific timeline before we start." },
        { q: "How much does a roof replacement cost in Denver?", a: "A typical roof replacement in the Denver metro area ranges from $8,000 to $20,000 depending on size, pitch, material choice, and complexity. If insurance is covering the claim, your out of pocket cost is usually just your deductible." },
        { q: "Can I stay home during the roof replacement?", a: "Absolutely. We ask that you move vehicles out of the driveway and let us know about any pets. Otherwise, go about your day. We handle the rest." },
        { q: "What\u2019s the difference between a 25 year and 50 year warranty?", a: "The standard GAF System Plus warranty covers materials for 50 years and workmanship for 10. The Golden Pledge upgrades workmanship coverage to 25 years and is backed directly by GAF. We recommend Golden Pledge for every customer." },
        { q: "Do you offer financing?", a: "Yes. We offer flexible financing options so you can get the roof you need without waiting. Ask us for details during your estimate." },
      ]}
      ctaTitle="Ready for a new roof?"
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377 for a free roof inspection. We\u2019ll tell you exactly what you need, what it costs, and how to get it covered."
    />
  );
}
