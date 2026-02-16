"use client";
import ServicePage from "../../components/ServicePage";
export default function StormContent() {
  return (
    <ServicePage
      breadcrumb="Storm & Hail Damage"
      h1="Hail Damage Roof Repair in Denver, Colorado"
      subheadline="Colorado's storm damage roofing experts. We handle the inspection, the insurance company, and the repairs."
      heroCopy="Colorado averages more damaging hailstorms than any other state. If your roof took a hit, you need a contractor who knows storm damage inside and out. Gates Enterprises has repaired thousands of hail damaged roofs across Denver and Lakewood, and we specialize in making sure your insurance company pays for every bit of it."
      sections={[
        {
          title: "Identifying Hail and Storm Damage on Your Roof",
          content: [
            "Hail damage isn't always obvious from the ground. A trained eye can spot the soft spots, granule displacement, and cracked shingles that indicate impact damage. We also check gutters, downspouts, siding, window screens, and soft metals like vents and flashing. All of these are indicators that help build a complete picture of the storm's impact on your property.",
            "We document everything with close-up photos and detailed notes. This documentation is critical when filing your insurance claim, and it's something many contractors skip or do poorly."
          ]
        },
        {
          title: "How Colorado Hailstorms Affect Your Roof",
          content: [
            "Not every hailstorm causes damage that needs immediate repair. But when stones reach 1 inch or larger, they can bruise shingles in ways that shorten your roof's lifespan by 5 to 10 years. The damage might not leak today, but it compromises the shingle's ability to shed water over time.",
            "Colorado's Front Range sees an average of 7 to 9 significant hailstorms per year. If you're in Denver, Lakewood, Arvada, or anywhere along the I-70 corridor, your roof has likely been hit more than once. Regular inspections after major storms are the best way to catch problems before they turn into leaks."
          ]
        },
        {
          title: "Our Storm Damage Insurance Claim Process",
          content: [
            "This is where we separate ourselves from every other storm damage roofing company in Colorado. We don't just fix roofs. We manage the entire insurance claim from start to finish. That means filing the claim, meeting your adjuster, documenting every line item in Xactimate, submitting supplements when the initial estimate is too low, and negotiating for overhead and profit when your insurance company tries to leave it off.",
            "Most homeowners don't realize that the first estimate from their insurance company is a starting point, not a final offer. We've recovered tens of thousands of additional dollars for homeowners through the supplement process alone."
          ]
        },
        {
          title: "Supplement Requests and O&P Recovery",
          content: [
            "Insurance adjusters work fast. They walk a roof in 15 minutes and write an estimate that often misses items. Missing starter strip? Missing drip edge replacement? No allowance for steep slope charges? These are common gaps we catch every week.",
            "We submit detailed supplement requests with photo evidence and Xactimate documentation. We also fight for overhead and profit (O&P) when your insurance company tries to remove it. O&P typically adds 20% to the claim and covers the real cost of hiring a licensed, insured contractor to manage your project. You're entitled to it."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Free Storm Damage Inspection", desc: "We inspect your entire roof, siding, gutters, and exterior for hail and wind damage." },
        { step: "02", title: "Damage Documentation", desc: "Every impact, crack, and dent gets photographed and cataloged." },
        { step: "03", title: "Claim Filing", desc: "We help you file your claim with all the documentation your insurance company needs." },
        { step: "04", title: "Adjuster Meeting", desc: "We meet your adjuster on the roof, walk the damage together, and make sure nothing gets missed." },
        { step: "05", title: "Supplement Submission", desc: "If the initial estimate falls short (it usually does), we submit supplements with supporting evidence." },
        { step: "06", title: "Repairs or Replacement", desc: "Once approved, we complete the work to manufacturer specifications and register your warranty." },
      ]}
      whyGates={[
        { bold: "7,200+ roofs completed.", rest: "We've seen every type of storm damage Colorado can throw at a roof." },
        { bold: "Insurance claim specialists.", rest: "We know Xactimate, we know supplement language, and we know how to get full payouts." },
        { bold: "Transparent communication.", rest: "You'll know exactly where your claim stands at every stage. No guessing." },
        { bold: "BBB A+ rated.", rest: "Our reputation speaks for itself. Check our 200+ Google reviews." },
      ]}
      faqs={[
        { q: "Should I file an insurance claim for hail damage?", a: "If your roof has confirmed hail damage, yes. Most Colorado homeowner policies cover hail damage with no impact on your premium for weather related claims. We'll inspect first and give you an honest recommendation." },
        { q: "How long do I have to file a hail damage claim?", a: "Most Colorado insurance policies allow one year from the date of the storm. Some allow longer. Don't wait. The sooner you file, the easier it is to document the damage and get approved." },
        { q: "Will my insurance premium go up if I file a claim?", a: "In Colorado, insurance companies generally cannot raise your rate for a single weather related claim. Hail is considered an act of nature, not negligence." },
        { q: "What if my insurance company denies my claim?", a: "We see this happen, and it's not always the final answer. We review denied claims, submit additional documentation, and request re-inspections. Many denied claims get approved on the second round." },
        { q: "Do I have to pay anything out of pocket?", a: "You're responsible for your deductible. That's it. If your roof is approved for replacement through insurance, your deductible is typically your only cost." },
      ]}
      ctaTitle="Think your roof took hail damage?"
      ctaSubtitle="Don't wait. Call Gates Enterprises at (720) 766-3377 for a free storm damage inspection. We'll tell you honestly whether you have a claim and walk you through every step."
    />
  );
}
