"use client";
import ServicePage from "../../components/ServicePage";
export default function InsuranceContent() {
  return (
    <ServicePage
      breadcrumb="Insurance Claims"
      h1="Roofing Insurance Claim Help in Denver, Colorado"
      subheadline="We don't just fix your roof. We fight for your full payout."
      heroCopy="Filing a roof insurance claim in Colorado shouldn't feel like a second job. But if you've ever dealt with a denied claim, a lowball estimate, or an adjuster who 'missed' half the damage, you know how frustrating it gets. Gates Enterprises has managed thousands of storm damage insurance claims across Denver, and we know exactly how to get homeowners the payout they're owed."
      sections={[
        {
          title: "Why Your Insurance Claim Needs a Roofing Expert",
          content: [
            "Here's the reality most homeowners don't know. Your insurance adjuster is not your advocate. Their job is to settle your claim quickly and for as little as possible. They're not bad people. They're just doing their job, and their job is to save their employer money.",
            "Your contractor should be your advocate. At Gates Enterprises, we represent your interests throughout the entire storm damage insurance claim process. We document damage that adjusters miss, submit supplements for items left off the initial estimate, and negotiate for the full scope of work your home actually needs.",
            "The difference between having an experienced claims contractor and going it alone? Often $3,000 to $10,000 or more on a single claim."
          ]
        },
        {
          title: "Our Xactimate Expertise",
          content: [
            "Insurance claims are written in Xactimate, a software platform that prices every component of a roofing job using line items, labor rates, and regional pricing. Most contractors don't use Xactimate. They submit a generic bid and hope for the best.",
            "We write our estimates in Xactimate. That means our scope of work speaks the same language as your insurance company's estimate. When we submit a supplement, it's formatted exactly the way the adjuster's desk reviewer expects to see it. This dramatically increases approval rates and speeds up the process.",
            "We know which line items get commonly missed. Drip edge replacement. Pipe boot upgrades. Steep slope charges. Ice and water shield in valleys. Ridge vent replacement. These items add up fast, and leaving them off means you're paying out of pocket for work your policy should cover."
          ]
        },
        {
          title: "The Supplement Process Explained",
          content: [
            "Your insurance company's first estimate is rarely the final number. Think of it as a starting offer. The supplement process is how we close the gap between what they initially approved and what your roof actually costs to replace properly.",
            "Here's how it works. After the initial adjuster inspection, we review their estimate line by line. We identify missing items, incorrect measurements, and pricing that doesn't reflect the actual scope of work. Then we submit a formal supplement request with photo documentation, manufacturer specifications, and Xactimate line items.",
            "We've submitted thousands of supplements. Our approval rate is well above industry average because we document thoroughly and we know the language that gets results. Most supplements are resolved within 2 to 4 weeks."
          ]
        },
        {
          title: "Overhead and Profit (O&P) Recovery",
          content: [
            "This is the big one that many contractors don't even bother with. Overhead and profit, commonly called O&P, is a 20% addition to your claim (10% overhead, 10% profit) that covers the cost of hiring a general contractor to manage your project.",
            "Insurance companies routinely leave O&P off initial estimates, even though it's a legitimate and widely accepted industry charge. If three or more trades are involved in your project (roofing, gutters, siding, for example), O&P should be included. On a $15,000 roof replacement, that's an additional $3,000 your insurance company owes you.",
            "We fight for O&P on every qualifying claim. It's your money. You should get it."
          ]
        },
        {
          title: "Denied Claims and Re-Inspections",
          content: [
            "A denied claim is not the end of the road. Insurance companies deny claims for all sorts of reasons. The adjuster didn't see damage. The photos were unclear. The claim was filed late. Sometimes the denial is legitimate. Sometimes it's not.",
            "When we believe a denial is incorrect, we request a re-inspection. We meet the second adjuster on the roof with detailed documentation, additional photos, and a clear scope of the damage. A significant percentage of re-inspections result in approval.",
            "If your claim has been denied and you believe your roof was damaged in a storm, call us. We'll inspect for free and tell you honestly whether it's worth pursuing."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Free Storm Damage Inspection", desc: "We climb every slope and document all damage with detailed photos and measurements." },
        { step: "02", title: "Claim Filing Assistance", desc: "We help you file your claim with complete documentation so nothing gets overlooked from day one." },
        { step: "03", title: "Adjuster Meeting", desc: "We meet your insurance adjuster on your roof. We walk the damage together and ensure every area is inspected." },
        { step: "04", title: "Estimate Review", desc: "We compare the adjuster's Xactimate estimate against our documentation. We identify every gap." },
        { step: "05", title: "Supplement Submission", desc: "We submit detailed supplement requests for missing line items, incorrect quantities, and O&P when applicable." },
        { step: "06", title: "Negotiation", desc: "We communicate directly with your insurance company's desk adjuster or review team until the estimate reflects the true scope." },
        { step: "07", title: "Repair or Replacement", desc: "Once the claim is finalized, we complete the work. You pay your deductible. Insurance covers the rest." },
        { step: "08", title: "Final Payment Collection", desc: "We help you collect depreciation holdback (recoverable depreciation) after the job is complete." },
      ]}
      whyGates={[
        { bold: "Thousands of claims managed.", rest: "We know the roof insurance claim process in Colorado better than most adjusters." },
        { bold: "Xactimate proficient.", rest: "We write estimates in the same software your insurance company uses. That's a game changer." },
        { bold: "O&P recovery specialists.", rest: "We don't leave money on the table. If your claim qualifies for overhead and profit, we fight for it." },
        { bold: "Transparent communication.", rest: "You'll get updates throughout the process. No radio silence, no surprises. We treat your claim like it matters, because it does." },
      ]}
      faqs={[
        { q: "How does the roof insurance claim process work in Colorado?", a: "You (or we) file a claim with your insurance company. They send an adjuster to inspect. The adjuster writes an estimate. If the estimate is accurate, we proceed with repairs. If it's short, we submit supplements. Once approved, we do the work, you pay your deductible, and insurance covers the rest. After completion, you collect any recoverable depreciation holdback." },
        { q: "What is recoverable depreciation?", a: "Your insurance company withholds a portion of your claim (called depreciation) until the work is completed. Once we finish the job and you submit the final invoice, your insurance company releases the remaining funds. We help you collect every dollar." },
        { q: "How long does a roofing insurance claim take?", a: "From filing to final payment, most claims take 4 to 8 weeks. Claims that require supplements or re-inspections may take longer. We keep the process moving and communicate with your insurance company throughout." },
        { q: "Can Gates Enterprises help if my claim was already denied?", a: "Yes. We review denied claims regularly. If we believe the denial was incorrect, we request a re-inspection and present additional documentation. Many denied claims get overturned." },
        { q: "Do I need to pay Gates Enterprises upfront?", a: "No. For insurance claims, your out of pocket cost is your deductible. We work directly with your insurance company and collect payment from the approved claim. No upfront costs for insured projects." },
      ]}
      ctaTitle="Don't let your insurance company shortchange you."
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377 for a free storm damage inspection and insurance claim consultation. We'll review your situation, tell you exactly where you stand, and fight for the payout your policy promises."
    />
  );
}
