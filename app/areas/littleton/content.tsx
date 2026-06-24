"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ReviewCarousel from "../../components/ReviewCarousel";
import LocalSEOInfo from "../../components/LocalSEOInfo";
import FAQAccordion from "../../components/FAQAccordion";
import HailScoreCard from "../../components/HailScoreCard";
import CityGallery from "../../components/CityGallery";
import { getCityFAQItems } from "../../../lib/faq-data";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HAIL_EVENTS = [
  {
    date: "June 22, 2023",
    size: "3.0 inches (golf ball)",
    desc: "The largest storm to hit the Littleton area in recent years. Radar data recorded 83 distinct hail cells across the south metro on this date, with the hardest-hit zones concentrated in the western half of Littleton near the foothills interface. Golf ball-sized hail at this density shreds asphalt shingles, dents aluminum gutters, and causes bruising damage that isn't always visible from the ground. If you haven't had a post-storm inspection since June 2023, schedule one — hidden impact fractures accelerate granule loss and shorten roof life significantly.",
  },
  {
    date: "July 20, 2023",
    size: "2.5 inches",
    desc: "A fast-moving storm in July 2023 delivered 2.5-inch hail across 17 radar cells in the Littleton area. Storms this size typically arrive with less warning than the large spring systems — they develop quickly in afternoon heat and move northeast off the mountains. Properties along the western edges of Littleton, including Ken Caryl and the Columbine area, were in the primary impact zone.",
  },
  {
    date: "April 27, 2024",
    size: "1.5 inches",
    desc: "Early-season hail. 43 radar cells recorded on April 27, 2024, with 1.5-inch hail concentrated in south Littleton and the Columbine Valley corridor. Spring hail events are dangerous precisely because many homeowners assume the season hasn't started — roofs go uninspected until summer, by which point underlying damage has had weeks to admit moisture. If your roof took April 2024 hail, a professional inspection is overdue.",
  },
  {
    date: "June 14, 2024",
    size: "1.75 inches",
    desc: "A mid-June 2024 storm produced 1.75-inch hail across 18 cells in the Littleton area, with the western zones toward Ken Caryl and Columbine seeing the largest stones. This was a broad-track storm that moved slowly, increasing dwell time over residential areas. Slow-moving hail storms cause disproportionate damage because each section of roof is exposed longer.",
  },
  {
    date: "June 17, 2025",
    size: "1.5 inches",
    desc: "A mid-June 2025 storm produced 1.5-inch hail along the Ken Caryl and Columbine foothills interface, with radar recording 22 distinct cells across the south metro storm track. The heaviest cells hit between 7:53 and 8:04 PM, concentrated along the western edge of Littleton where storm cells coming off the mountains are at peak intensity before tracking northeast. This storm is a textbook example of why Littleton's position at the foothills interface creates repeated exposure — the same corridor sees significant events year after year. If you're in Ken Caryl Ranch or Columbine and haven't booked a post-2025-season inspection, this corridor warrants a fresh look.",
  },
];

const NEIGHBORHOODS = [
  "Ken Caryl Ranch", "Columbine Valley", "Columbine Knolls", "Columbine West",
  "Governors Ranch", "Friendly Hills", "Sterne Park", "Cherry Knolls",
  "Heritage Hills", "Medema Park", "Historic Downtown Littleton", "Bemis Park",
  "South Suburban", "Kipling Hills", "Windermere", "Normandy Estates",
  "Grant Ranch", "Centennial Park", "Chatfield Farms", "Leawood",
  "Ridgeview Hills", "Sunrise Creek", "Village at Raccoon Creek", "Old Littleton",
];

const SERVICES = [
  {
    title: "Hail Damage Roof Replacement",
    desc: "Full roof system replacement following hail or wind events. We remove existing material, inspect the deck for soft spots and water infiltration, install ice-and-water shield at all eaves and valleys, and install your chosen manufacturer system with full manufacturer warranty. In Littleton, where storms can drop significant hail even in early spring, we prioritize fast response turnaround during peak season.",
    href: "/services/storm-hail-damage",
  },
  {
    title: "Roof Repair",
    desc: "Not every storm requires a full replacement. We perform targeted repairs — cracked or missing shingles, failed valley flashing, damaged ridge caps, compromised pipe boots and penetration seals. If repair is the right answer for your roof, we'll tell you. If replacement is, we'll tell you that too, with documentation showing why.",
    href: "/services/roof-repair",
  },
  {
    title: "New Roof Installation",
    desc: "For new construction or additions, we work directly with builders and GCs in the Littleton area. We coordinate permit scheduling with the City of Littleton Building Division and either Arapahoe or Douglas County inspectors depending on jurisdiction. We install all four manufacturer lines — GAF, Owens Corning, Malarkey, and CertainTeed — and can match the product specified in your build plans.",
    href: "/services/roof-replacement",
  },
  {
    title: "Siding Replacement and Repair",
    desc: "Colorado hail doesn't just damage roofs. Vinyl, fiber cement, and engineered wood siding all take impact damage in significant storms, and a roof-only inspection that misses siding damage leaves money on the table. We install James Hardie fiber cement and LP SmartSide engineered wood — both common in Littleton's 1990s–2000s construction era — as well as standard vinyl lines.",
    href: "/services/siding-exterior",
  },
  {
    title: "Gutter Installation and Replacement",
    desc: "Gutters are a functional part of your roof system, not an afterthought. We install 5-inch and 6-inch seamless aluminum gutters with gutter guard options for Littleton's mature-tree neighborhoods where debris accumulation is a year-round maintenance issue. Gutter damage is frequently covered under the same hail claim as roof damage — we document and include it as part of a full inspection.",
    href: "/services/gutters-guards",
  },
  {
    title: "Window Replacement",
    desc: "Impact-damaged windows are often a secondary casualty of hail events and are frequently overlooked during initial damage assessment. We replace single and double-pane windows across Littleton's residential housing stock — the casement and double-hung profiles common in 1970s–1990s construction are both within our standard scope.",
    href: "/services/windows",
  },
  {
    title: "Exterior Paint",
    desc: "We handle full exterior paint projects in conjunction with siding and trim work. Properly prepared and painted exteriors protect Littleton homes from moisture infiltration at all the points where siding, trim, and roofing transitions meet.",
    href: "/services/paint",
  },
  {
    title: "Flat and Low-Slope Roofing",
    desc: "Littleton has a notable stock of contemporary and mid-century flat-roof and low-slope residential properties, particularly in the older downtown-adjacent neighborhoods. We install TPO, EPDM, and modified bitumen systems on residential flat roofs — with proper drainage planning that accounts for Littleton's occasional heavy spring snowpack.",
    href: "/services/roof-replacement",
  },
  {
    title: "Storm Damage Inspection and Documentation",
    desc: "A professional inspection is the foundation of any insurance claim or repair decision. We inspect the full roof system — field, valleys, ridges, flashings, penetrations, and gutters — and provide written documentation of every item found. We use drone photography for steep-pitch and multi-story roofs. Inspections are provided free of charge to Littleton homeowners following a significant storm event.",
    href: "/contact",
  },
];

const CERTIFICATIONS = [
  {
    name: "GAF Master Elite",
    desc: "GAF is North America's largest roofing manufacturer. Master Elite status is reserved for the top 2% of roofers and unlocks GAF's best warranty offerings, including the Golden Pledge Limited Warranty with 25 year workmanship coverage.",
  },
  {
    name: "Owens Corning Preferred Contractor",
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, customer satisfaction, and installation quality. This certification gives Littleton homeowners access to Owens Corning's enhanced warranty programs.",
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Malarkey Roofing Products are known for sustainability and durability. Emerald Premium contractors are specially trained to install Malarkey's premium shingle lines, including their industry leading NEX Polymer Modified asphalt shingles.",
  },
  {
    name: "CertainTeed ShingleMaster",
    desc: "CertainTeed's ShingleMaster credential requires master level training in shingle installation techniques. This certification ensures Littleton homeowners receive installations that meet CertainTeed's highest standards and qualify for top tier warranty coverage.",
  },
];

const INTERNAL_LINKS = [
  { label: "Storm and Hail Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Insurance Claims", href: "/services/insurance-claims" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Windows", href: "/services/windows" },
  { label: "Painting", href: "/services/paint" },
  { label: "Roofing Contractor Lakewood CO", href: "/areas/lakewood" },
  { label: "Roofing Contractor Highlands Ranch CO", href: "/areas/highlands-ranch" },
  { label: "Roofing Contractor Centennial CO", href: "/areas/centennial" },
  { label: "Roofing Contractor Englewood CO", href: "/areas/englewood" },
  { label: "Roofing Contractor Lone Tree CO", href: "/areas/lone-tree" },
  { label: "Roofing Contractor Denver CO", href: "/areas/denver" },
  { label: "What Does Hail Damage Look Like on a Roof?", href: "/blog/what-does-hail-damage-look-like-on-roof" },
  { label: "Colorado Hail Season 2026 Guide", href: "/blog/colorado-hail-season-2026-homeowners-guide" },
  { label: "How to Navigate Hail Damage Insurance in CO", href: "/blog/hail-damage-insurance-claim-colorado" },
  { label: "Class 4 Impact Resistant Shingles", href: "/blog/class-4-impact-resistant-shingles-colorado" },
  { label: "About Gates Enterprises", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Best Roofer in Littleton", href: "/best-roofer-littleton" },
];

export default function CityContent() {
  const faqItems = getCityFAQItems("littleton");
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* 1. HERO */}
      <section className="littleton-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Littleton</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Littleton, Colorado&apos;s Most Trusted Roofing Contractor
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Certified · 7,200+ Projects Completed · Serving Arapahoe and Douglas Counties
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Littleton sits at the intersection of two county jurisdictions, three distinct housing eras, and one of the most active hail corridors on Colorado&apos;s Front Range. Whether you&apos;re in Ken Caryl Ranch, the historic neighborhoods near Downtown Littleton, or the newer builds along the Highlands Ranch border, your roof takes a beating. Gates Enterprises has been working Arapahoe and Douglas County roofs for over a decade — we know the permit offices, the HOA boards, and the storm patterns that cycle through this part of the metro every spring and summer.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Littleton →
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT PHOTOS */}
      <CityGallery city="Littleton" />

      {/* 2. TRUST SIGNALS */}
      <section style={{ padding: "48px 24px", background: WHITE, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div className="littleton-trust-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32, textAlign: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>339</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Google Reviews</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>4.9</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Star Rating</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>7,200+</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Completed Projects</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>4x</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Manufacturer Certified</div>
          </div>
        </div>
      </section>

      {/* 3. WHY LITTLETON HOMEOWNERS TRUST GATES */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Littleton Homeowners Choose Gates Enterprises
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Most roofing contractors in Colorado carry one or two manufacturer certifications at most. Gates Enterprises holds four: <Link href="/blog/manufacturer-certified-roofer-colorado" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster</Link>. Each certification requires verified installation training, minimum volume standards, and ongoing quality audits. The result for you is access to the top manufacturer warranty tiers — coverage that a non-certified installer simply cannot offer.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>339 Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              We&apos;ve earned 339 verified Google reviews from homeowners across the South Metro — Littleton, Englewood, Centennial, and beyond. A 4.9-star average isn&apos;t a marketing number, it&apos;s a reflection of how we operate on every job: clear communication, clean sites, no surprises on the invoice.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>7,200+ Completed Projects Across Colorado</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Since 2014, Gates Enterprises has completed more than 7,200 roofing and exterior projects statewide. That volume means our crews have seen every roof type, every permit process, and every insurance scenario the Front Range throws at them. Experience compounds — a crew that&apos;s done 7,000 roofs makes fewer mistakes than one that&apos;s done 700.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Claims Assistance</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Hail damage claims are one of the more complicated things a homeowner deals with. We&apos;ve assisted hundreds of Littleton homeowners through the documentation, inspection, and adjuster coordination process. We know what adjusters look for, how to document damage properly, and how to make sure your claim reflects the real scope of repair. You handle your deductible — we handle the rest of the process with you.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Arapahoe and Douglas County Building Code Experts</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Littleton is one of the few cities in Colorado that straddles two counties — Arapahoe to the north and east, Douglas to the south. That split creates real complexity: permit jurisdictions differ, inspection requirements differ, and some HOA-governed areas add a third layer of approval. We&apos;ve pulled permits in both counties, worked with both building departments, and navigated HOA architectural review on hundreds of Littleton jobs. This is not something you want to learn on your roof.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Local and Accessible</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Our office is in Lakewood, less than 10 miles from most Littleton neighborhoods. We&apos;re not a national chain subcontracting to whoever&apos;s available — we&apos;re a Front Range company with crews that live and work in this market. When you call, you talk to someone who knows your city.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HAIL HISTORY */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Littleton&apos;s Hail History — Why Your Roof Is at Risk
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Littleton sits at Colorado&apos;s foothills interface — storms forming over the front range organize and intensify against the mountains before tracking east, and Littleton, positioned just east of that interface, absorbs some of the heaviest cells. Between 2019 and 2025, NOAA radar recorded over 45 significant hail events within the Littleton metro area, with 11 storms delivering 2.0 inches or larger.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
            {HAIL_EVENTS.map((event, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{event.date}</div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 8 }}>Max Hail Size: {event.size}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{event.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Get a Free Roof Inspection in Littleton →
          </Link>
        </div>
      </section>

      {/* 5. ROOF TYPES BY NEIGHBORHOOD */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Common Roof Types Across Littleton Neighborhoods
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Littleton&apos;s housing stock spans five decades of construction, and each era brings different roofing materials, installation methods, and failure modes. Knowing your neighborhood&apos;s typical construction profile helps you understand what your roof is likely facing.
          </p>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Ken Caryl Ranch and Columbine (1970s–1980s Construction)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Ken Caryl Ranch and the Columbine area represent Littleton&apos;s primary post-WWII expansion — large single-family homes built mostly between 1972 and 1988. These homes typically have 3-tab asphalt shingles originally installed 35 to 50 years ago, many of which have been replaced once or twice but are now at or approaching end of life again. Pitch profiles in this area are varied — Ken Caryl&apos;s hillside lots frequently have complex multi-plane roofs with multiple valleys and transitions, which require experienced installation crews. If you&apos;re in Ken Caryl or Columbine and haven&apos;t had a full inspection in the last two years, the combination of age and recent storm activity makes it a priority.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Historic Downtown Littleton and Bemis Park (Pre-1960s)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The oldest residential areas in Littleton — the neighborhoods around Main Street, Bemis Park, and the Santa Fe corridor — feature a mix of original slate, clay tile, and older composition shingles. These homes require a different approach than production-era subdivisions. We&apos;ve worked extensively in this part of Littleton on partial re-roofs, valley replacements, and full system overhauls where original materials needed to be matched or upgraded carefully to maintain architectural character. If you own a historic Littleton property, material compatibility matters as much as price.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>South Suburban / Highlands Ranch Border (1990s–2000s Builds)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The southern edge of Littleton, where Arapahoe County transitions toward Douglas County and the Highlands Ranch master-planned community, is primarily 1990s and early-2000s construction. These homes were built during a period when dimensional (architectural) shingles became standard, and many are reaching the 25–30 year mark on their original roof systems. This era also featured a lot of CertainTeed and Tamko product that has since been superseded by higher-performance lines. We frequently upgrade these roofs to current Owens Corning Duration or GAF Timberline HDZ systems with full ice-and-water shield at the eaves.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Sterne Park and Cherry Knolls (Mature Established Neighborhoods)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The Sterne Park and Cherry Knolls areas — mid-Littleton, bounded roughly by Bowles and Belleview — are a mix of 1970s and 1980s ranch-style and tri-level homes with mature tree canopy. Mature trees accelerate shingle wear through shade (moisture retention) and debris accumulation in valleys. These neighborhoods also have a higher proportion of older wood shake roofs that have been converted to composition at various points — the quality of those conversions varies significantly. We inspect the full deck condition during these jobs, not just the surface material.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CODES, PERMITS, HOA */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Littleton Building Codes, Permits, and HOA Requirements
          </h2>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>City of Littleton Permits — Arapahoe and Douglas County Complexity</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
              Roofing permits in Littleton are administered through the City of Littleton Building Division for properties within city limits — but Littleton&apos;s city limits are not co-extensive with its county lines. Depending on your address, your property may fall under Arapahoe County jurisdiction, Douglas County jurisdiction, or City of Littleton municipal jurisdiction, each of which has different permit application processes, fee schedules, and inspection timelines.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
              Gates Enterprises pulls the appropriate permit for every job — we&apos;ve worked in all three jurisdictions and know which office to call and what documentation each requires. We do not start work without a permit in hand, and we schedule the required inspections as part of standard project management. For homeowners using insurance proceeds to fund a replacement, the permit is also often a condition of the claim being processed.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Additional complexity: Colorado&apos;s statewide adoption of the 2021 International Residential Code (IRC) includes updated requirements for ice barrier underlayment, ventilation, and valley flashing that some older installations don&apos;t meet. A permit-pulled replacement ensures your new roof is code-compliant — something that matters when you sell.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>HOA Architectural Review in Littleton</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
              Several Littleton communities have active HOA architectural control committees that must approve roofing material and color changes before work begins. Communities where HOA approval is commonly required include Ken Caryl Ranch, Columbine Valley, and the newer planned communities near the Highlands Ranch border. The approval process typically requires submitting a color sample, manufacturer spec sheet, and sometimes a photo of a comparable completed installation.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              We handle HOA submittal paperwork as part of our process — we&apos;ve worked with the Ken Caryl Ranch Master Association and other Littleton HOAs enough times to know what they require and how to get it through without delaying your project. HOA approval typically runs 7–14 days, so we factor this into the project schedule upfront.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FULL SERVICES LIST */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Roofing and Exterior Services in Littleton, CO
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Gates Enterprises provides complete roofing and exterior services for Littleton homeowners, from storm damage restoration and roof replacement to siding, gutters, windows, and painting.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>{s.desc}</p>
                <Link href={s.href} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
                  Learn more about {s.title.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified: What That Means for Littleton Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Fewer than 2% of roofing contractors in the United States hold even one top tier manufacturer certification. Gates Enterprises holds four. This is not a marketing gimmick. These certifications are earned through rigorous vetting, ongoing training, and demonstrated excellence in installation quality. For Littleton homeowners, this means access to the longest warranties, highest quality materials, and the confidence that your roof was installed by a contractor the manufacturers themselves trust.
          </p>
          <div className="littleton-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{cert.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{cert.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Littleton →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. NEIGHBORHOODS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Littleton Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises proudly serves homeowners in every Littleton neighborhood. Whether you live in a newer development or an established community, our team knows the area and delivers the same quality service across every project.
          </p>
          <div className="littleton-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
            If your neighborhood is not listed, we still serve you. Gates Enterprises works throughout Littleton, Arapahoe County, and Douglas County. We also serve nearby communities including <Link href="/areas/lakewood" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Lakewood</Link>, <Link href="/areas/highlands-ranch" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Highlands Ranch</Link>, <Link href="/areas/centennial" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Centennial</Link>, <Link href="/areas/englewood" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Englewood</Link>, and <Link href="/areas/lone-tree" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Lone Tree</Link>.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Littleton →
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: NAVY, border: "1px solid rgba(13,33,55,0.15)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Littleton Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 339 Google reviews and a 4.9 star rating, Gates Enterprises is one of the highest rated roofing contractors on Colorado&apos;s Front Range. Don&apos;t just take our word for it. See what your Littleton neighbors have to say.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(339 Reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All 339 Reviews on Google →
          </a>
        </div>
      </section>

      {/* 11. FAQ */}
      <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions: Roofing in Littleton, CO"
      />

      {/* 12. FINAL CTA */}
      <CTA
        title="Get a Free Roof Inspection in Littleton"
        subtitle="Your roof is the first line of defense for your family and your investment. Whether you need a post storm inspection, a full roof replacement, or exterior repairs, Gates Enterprises is ready to help. With 10+ years of experience, quadruple manufacturer certifications, 7,200+ completed projects, and 339 five star reviews, Littleton homeowners can trust us to get it right. Call (720) 766-3377 or request your free inspection online."
      />

      {/* 13. SERVICES TAIL */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Littleton, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Littleton.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { n: "Roof Replacement", s: "roof-replacement" },
              { n: "Storm & Hail Damage Repair", s: "storm-hail-damage" },
              { n: "Roof Repair", s: "roof-repair" },
              { n: "Siding Installation", s: "siding" },
              { n: "Gutter Installation", s: "gutters" },
              { n: "Roof Inspection", s: "roof-inspection" },
              { n: "Insurance Claims", s: "insurance-claims" },
              { n: "Metal Roofing", s: "metal-roofing" },
            ].map((svc) => (
              <Link key={svc.s} href={`/services/${svc.s}/littleton`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="littleton-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {INTERNAL_LINKS.map((link, i) => (
              <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HailScoreCard citySlug="littleton" cityName="Littleton" />
      <LocalSEOInfo citySlug="littleton" cityName="Littleton" showMapsLink />

      <Footer />

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .littleton-hero { padding: 120px 20px 60px !important; }
          .littleton-trust-grid { grid-template-columns: 1fr 1fr !important; }
          .littleton-certs-grid { grid-template-columns: 1fr !important; }
          .littleton-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .littleton-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .littleton-hero { padding: 110px 16px 48px !important; }
          .littleton-trust-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .littleton-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
