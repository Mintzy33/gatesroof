import type { Metadata } from "next";
import Script from "next/script";
import FaqContent from "./content";

export const metadata: Metadata = {
  title: "Roofing FAQ | 4x Certified Colorado Roofer",
  description: "Get answers on roofing costs, insurance claims, hail damage & warranties from Colorado's 4x certified roofer. 7,200+ roofs completed. Free inspections",
  alternates: { canonical: "https://www.gatesroof.com/faq" },
  openGraph: {
    title: "Roofing FAQ | 4x Certified Colorado Roofer",
    description: "Get answers on roofing costs, insurance claims, hail damage & warranties from Colorado's 4x certified roofer. 7,200+ roofs completed. Free inspections",
    url: "https://www.gatesroof.com/faq",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const faqData = [
  {
    section: "Costs & Financing",
    items: [
      {
        q: "How much does a roof replacement cost in Colorado?",
        a: "Roof replacement costs in Colorado typically range from $10,000 to $30,000 for a standard residential home, though larger or more complex roofs can exceed that. The final price depends on your roof's size, pitch, material choice, and the condition of the decking underneath. Many Colorado homeowners pay only their insurance deductible because hail and storm damage claims cover the rest. During your free inspection, we document everything and provide a detailed estimate so there are no surprises. We work with GAF, Owens Corning, Malarkey, and CertainTeed shingle systems at various price points.",
      },
      {
        q: "Will I pay anything beyond my insurance deductible?",
        a: "In most insurance roof replacement projects, your deductible is your primary out-of-pocket cost. Your homeowners insurance policy typically covers the approved scope of work minus your deductible. If the adjuster's initial estimate falls short, we file supplements with additional documentation to support the full cost of proper installation. Gates Enterprises has helped homeowners secure supplement approvals that other contractors leave on the table. We never cut corners to match a low estimate. We document thoroughly to support the full scope your roof needs.",
      },
      {
        q: "Does Gates offer financing?",
        a: "Yes, we offer flexible financing options for homeowners who need a new roof but prefer to spread payments over time. Whether you're paying out of pocket for a cash job or covering your insurance deductible, we have plans that fit most budgets. Ask about our zero-down payment options during your free roof inspection. Financing is available for roof replacement, siding, gutters, and other exterior services. Our team will walk you through the options so you can make the best decision for your family.",
      },
      {
        q: "How much do gutters cost?",
        a: "Seamless gutter installation in Colorado typically costs between $1,500 and $4,500 for a standard home, depending on the linear footage, material, and whether you add gutter guards. Aluminum seamless gutters are the most popular choice for Colorado homes due to their durability in our freeze-thaw climate. If your gutters were damaged in a hailstorm, insurance often covers replacement alongside your roof claim. We recommend pairing new gutters with every roof replacement for maximum protection. Visit our gutters and guards page for more details on materials and pricing.",
      },
    ],
  },
  {
    section: "Insurance Claims",
    items: [
      {
        q: "How do I file a hail damage insurance claim?",
        a: "Start by calling your insurance company to report potential storm damage — you don't need proof yet, just the date of the storm. Then schedule a free roof inspection with Gates Enterprises. We'll document every point of damage with photos and measurements so you have a professional report before the adjuster arrives. We'll meet with your adjuster on-site to make sure nothing is missed. Our insurance restoration team assists you through the process from claim filing through final payment, so you can focus on your life instead of paperwork.",
      },
      {
        q: "What if my insurance denies my claim?",
        a: "A denied claim doesn't mean the damage isn't real. Insurance companies deny claims for many reasons — insufficient documentation, missed filing deadlines, or adjuster oversight. Gates Enterprises has helped homeowners appeal denied claims by providing thorough re-inspections, detailed photo documentation, and professional damage reports. We can request a re-inspection with a different adjuster or help you escalate through your carrier's appeals process. In some cases, a public adjuster or attorney may be the right next step, and we can point you in the right direction.",
      },
      {
        q: "What is depreciation vs replacement cost value (RCV)?",
        a: "Replacement cost value (RCV) is the full cost to replace your roof with new materials at today's prices. Depreciation is the amount your insurance company withholds upfront based on the age and condition of your roof. Most Colorado homeowners policies are RCV policies, meaning you get the depreciated amount first, then recover the withheld depreciation after the work is completed. This is called recoverable depreciation. Gates Enterprises handles the documentation needed to recover your full depreciation so you're not leaving money on the table.",
      },
      {
        q: "What is the supplement process?",
        a: "A supplement is a request for additional funds when the insurance adjuster's initial estimate doesn't cover the full scope of work required. This happens frequently — adjusters often miss items like drip edge, ice and water shield, pipe boots, or proper ventilation. Our insurance restoration team reviews every line of your estimate and files supplements for anything that was underpaid or overlooked. Gates Enterprises has helped homeowners secure supplement approvals for Colorado homeowners. The process typically takes 2-4 weeks and requires no additional effort from you.",
      },
      {
        q: "How long does an insurance roof replacement take?",
        a: "The full insurance roof replacement timeline from claim to completion typically takes 30 to 90 days, depending on your insurance company's response time and the supplement process. The actual roof installation is usually completed in a single day. Here's the typical timeline: file your claim (day 1), free inspection and adjuster meeting (week 1-2), estimate approval and material selection (week 2-4), supplements if needed (week 4-8), and installation (scheduled within 1-2 weeks of approval). Gates Enterprises keeps you updated at every step so you always know where things stand.",
      },
    ],
  },
  {
    section: "Certifications & Quality",
    items: [
      {
        q: "What does GAF Master Elite mean?",
        a: "GAF Master Elite is the highest certification offered by GAF, the largest roofing manufacturer in North America. Only the top 2% of roofing contractors nationwide earn this designation. It requires proven installation expertise, proper licensing and insurance, a strong reputation, and ongoing factory training. For homeowners, the biggest benefit is access to the GAF Golden Pledge Warranty — 25 years of workmanship coverage and 50 years of material coverage, backed directly by GAF, not just the contractor. Gates Enterprises has maintained GAF Master Elite status since 2018.",
      },
      {
        q: "What does quadruple manufacturer certified mean?",
        a: "Gates Enterprises holds the highest certification from all four major shingle manufacturers: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. Fewer than 1% of roofing contractors in the country hold all four. This means we're factory-trained to install every major shingle brand to manufacturer specifications, giving you access to the best warranties available from whichever brand you choose. It also means we're not locked into selling one brand — we recommend what's genuinely best for your roof and budget.",
      },
      {
        q: "What warranty do I get with a Gates roof?",
        a: "Every Gates roof comes with both a manufacturer warranty and our workmanship warranty. The specific coverage depends on the shingle brand and system you choose. Our most popular option — the GAF Golden Pledge — includes 50-year material coverage and 25-year workmanship coverage backed by GAF. Owens Corning and CertainTeed offer similar extended warranty programs through our preferred contractor status. Our own Gates workmanship warranty covers installation quality beyond what the manufacturer provides. During your estimate, we'll explain exactly which warranty options are available for your project.",
      },
      {
        q: "What's the difference between manufacturer and workmanship warranties?",
        a: "A manufacturer warranty covers defects in the shingle or roofing material itself — things like premature cracking, curling, or granule loss. A workmanship warranty covers the quality of the installation — things like improper nailing, flashing failures, or ventilation issues that lead to leaks. Most roofing problems stem from poor installation, not defective materials, so workmanship coverage is critical. Standard manufacturer warranties only cover materials. Our certified contractor status unlocks enhanced warranties that cover both, giving you complete protection for decades.",
      },
    ],
  },
  {
    section: "Hail & Storm Damage",
    items: [
      {
        q: "How do I know if my roof has hail damage?",
        a: "Most hail damage is invisible from the ground. Look for warning signs around your property first: dented gutters or downspouts, chipped paint on window sills, dings on outdoor AC units, or cracked siding. If you see any of these, your roof was almost certainly hit too. On the roof itself, hail damage appears as dark circular marks on shingles where granules have been knocked loose, exposing the asphalt mat underneath. Only a trained inspector can distinguish hail damage from normal wear. Schedule a free roof inspection with Gates and we'll document everything with photos.",
      },
      {
        q: "Should I get a roof inspection after a hailstorm?",
        a: "Absolutely. Colorado's Front Range sees multiple damaging hailstorms every year, and even moderate hail can compromise your roof's integrity without any visible signs from the ground. A professional inspection after a major storm protects you in two ways: it catches damage early before leaks develop, and it documents the damage while it's fresh for your insurance claim. Gates Enterprises offers free, no-obligation storm damage inspections. Our certified inspectors know exactly what adjusters look for and will provide a detailed report you can use to file your claim.",
      },
      {
        q: "How big does hail need to be to damage a roof?",
        a: "Hail as small as 1 inch in diameter (about quarter-sized) can damage standard asphalt shingles. At 1.5 inches (golf ball size), damage is highly likely on most residential roofing materials. Colorado regularly sees hailstones exceeding 2 inches, which can crack shingles, dent metal flashing, and damage gutters. Impact-resistant Class 4 shingles are engineered to withstand hail up to 2 inches without functional damage, which is why we recommend them for every Colorado roof. Many insurance companies offer premium discounts of 15-28% for Class 4 shingles, making them a smart investment.",
      },
      {
        q: "Can I wait to file my hail damage claim?",
        a: "You can, but you shouldn't. Most Colorado homeowners insurance policies have a one-year filing deadline from the date of the storm, and some carriers have shortened that window. Waiting creates several risks: additional weathering makes damage harder to document, your insurance company may argue the damage is from wear and tear instead of the storm, and small hail hits can develop into leaks over time. The sooner you file, the stronger your claim. Contact Gates Enterprises for a free inspection as soon as possible after a hailstorm so we can document the damage while it's fresh.",
      },
    ],
  },
  {
    section: "Process",
    items: [
      {
        q: "How long does a roof replacement take?",
        a: "Most residential roof replacements are completed in a single day. Our crews arrive early in the morning, tear off the old shingles, inspect and repair the decking as needed, install new underlayment and shingles, and clean up before they leave. Larger homes, steep pitches, or complex roof designs may require a second day. We always provide a specific timeline before work begins so you can plan accordingly. Weather delays are rare but possible during Colorado's spring storm season — we'll communicate any schedule changes immediately.",
      },
      {
        q: "What happens during a free roof inspection?",
        a: "One of our certified inspectors will come to your home and conduct a thorough examination of your entire roof system. We check every slope for hail hits, wind damage, cracked or missing shingles, and wear patterns. We also inspect flashing around chimneys, vents, and skylights, examine your gutters and downspouts, and check your attic ventilation if accessible. Everything is documented with timestamped photos. After the inspection, we'll review our findings with you on the spot and recommend next steps — whether that's filing an insurance claim, scheduling a repair, or simply keeping an eye on things.",
      },
      {
        q: "Do I need to be home during the roof replacement?",
        a: "No, you don't need to be home during installation. We ask that you move vehicles out of the driveway and garage, secure any outdoor furniture or decorations near the house, and let us know about pets or any specific access instructions. Our project manager will walk you through everything before installation day. Many homeowners choose to be at work while we handle the replacement. We'll send you photo updates throughout the day and do a final walkthrough with you when you're available to make sure everything meets your expectations.",
      },
      {
        q: "How do I choose between shingle brands?",
        a: "As a quadruple-certified contractor, we install GAF, Owens Corning, Malarkey, and CertainTeed — the four top shingle manufacturers. Each brand offers different aesthetics, warranty structures, and price points. GAF Timberline HDZ is our most popular choice for insurance replacements due to its strong warranty program. Malarkey shingles use recycled materials and offer excellent impact resistance for Colorado's hail. Owens Corning is known for vibrant color options. CertainTeed offers premium designer profiles. During your estimate, we'll show you samples and explain the real differences so you can choose with confidence.",
      },
      {
        q: "What are impact-resistant shingles and do I need them?",
        a: "Impact-resistant (IR) shingles carry a Class 4 rating — the highest impact resistance grade for roofing materials. They're engineered with a reinforced mat or polymer-modified asphalt that absorbs hail impact without cracking or losing granules. In Colorado, where hailstorms are a yearly occurrence, Class 4 shingles are the smartest investment you can make. Most insurance companies offer premium discounts of 15-28% for verified Class 4 installations, which often pays for the upgrade within a few years. Malarkey and GAF both offer excellent Class 4 options that we install regularly.",
      },
    ],
  },
  {
    section: "Local",
    items: [
      {
        q: "What areas does Gates Enterprises serve?",
        a: "Gates Enterprises is headquartered in Lakewood, Colorado and serves the entire Denver metro area and Front Range. Our primary service area includes Denver, Aurora, Arvada, Westminster, Thornton, Centennial, Littleton, Englewood, Broomfield, Golden, Highlands Ranch, Parker, Castle Rock, Commerce City, Northglenn, Wheat Ridge, Federal Heights, Edgewater, Conifer, and dozens more communities. We also serve Colorado Springs, Fort Collins, and surrounding areas for larger projects. With thousands of roofs completed across the Front Range, chances are we've already worked on a home in your neighborhood.",
      },
      {
        q: "Why choose a local Colorado roofer over a storm chaser?",
        a: "Storm chasers flood into Colorado after every major hailstorm, install roofs quickly, and leave town before warranty issues surface. When something goes wrong — and it often does — there's no one to call. Gates Enterprises has been based in Lakewood since 2014. We have a permanent office, a local crew of over 100 employees, and a reputation built on thousands of completed roofs. Our manufacturer certifications require ongoing local operations, which means we'll be here for the full life of your warranty. We answer our own phones, and your project manager lives in the same community you do.",
      },
      {
        q: "Does Gates work in my city?",
        a: "Most likely, yes. We serve over 65 cities across Colorado's Front Range, including Denver, Lakewood, Aurora, Arvada, Westminster, Thornton, Centennial, Littleton, Englewood, Golden, Broomfield, Highlands Ranch, Parker, Castle Rock, Commerce City, Northglenn, Wheat Ridge, Federal Heights, Edgewater, Conifer, Morrison, Ken Caryl, Columbine, Sheridan, Greenwood Village, Cherry Hills Village, Glendale, Bow Mar, Foxfield, Lone Tree, Castle Pines, Franktown, Elizabeth, Watkins, Bennett, Brighton, Henderson, Frederick, Firestone, Dacono, Erie, Louisville, Lafayette, Superior, and more. Check our service areas page or call us at (720) 766-3377 to confirm.",
      },
    ],
  },
];

// Build FAQ schema for all questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gatesroof.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.gatesroof.com/faq" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FaqContent faqData={faqData} />
    </>
  );
}
