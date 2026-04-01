"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ReviewCarousel from "../../components/ReviewCarousel";

import LocalSEOInfo from "../../components/LocalSEOInfo";
import HailScoreCard from "../../components/HailScoreCard";
import CityGallery from "../../components/CityGallery";
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

const FAQS = [
  {
    q: "How much does a new roof cost in Parker CO?",
    a: "A new roof in Parker typically costs between $8,000 and $25,000+ depending on the size of your home, the roofing materials selected, and the complexity of the roof. Many Parker homeowners pay little to nothing out of pocket when their roof replacement is covered by a legitimate insurance claim for storm damage. Gates Enterprises offers free inspections and detailed estimates so you know exactly what to expect before any work begins."
  },
  {
    q: "Does insurance cover hail damage in Parker?",
    a: "In most cases, yes. Standard homeowners insurance policies in Colorado typically cover hail damage to your roof. Parker sits along the Palmer Divide, one of the most active hail corridors in the country, so insurers in this area are familiar with storm damage claims. Gates Enterprises documents all damage thoroughly and works directly with your insurance company to support your claim."
  },
  {
    q: "How do I know if my Parker home has hail damage?",
    a: "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. Soft metal damage on AC units, mailboxes, and window trim can also indicate roof damage. The most reliable way to know is to schedule a professional inspection. Gates Enterprises offers free roof inspections for Parker homeowners."
  },
  {
    q: "Does Gates Enterprises work with my insurance company?",
    a: "Yes. Gates Enterprises is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports with photo evidence, and coordinate documentation with your insurance company throughout the restoration process to ensure nothing is missed."
  },
  {
    q: "Why does Parker get so much hail?",
    a: "Parker sits along the Palmer Divide, a ridge of higher elevation terrain between Denver and Colorado Springs. This geography creates strong updrafts during storm season that produce frequent and often severe hailstorms. Douglas County consistently ranks among the most hail prone counties in Colorado, with 3 to 5 significant hail events in a typical year."
  },
  {
    q: "What roofing materials are best for Parker's hail corridor?",
    a: "Given Parker's position along the Palmer Divide hail corridor, we recommend impact resistant shingles rated Class 3 or Class 4. These shingles are designed to withstand hail impact and may qualify you for insurance premium discounts. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed, each offering excellent hail resistance and long term durability."
  },
  {
    q: "How long does a roof replacement take in Parker?",
    a: "Most residential roof replacements in Parker are completed in one to two days, depending on the size and complexity of the roof. Larger or more complex projects may take an additional day. Gates Enterprises coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family."
  },
  {
    q: "Is Gates Enterprises licensed and insured in Douglas County?",
    a: "Yes. Gates Enterprises is fully licensed and insured to perform roofing and exterior work in Douglas County, the Town of Parker, and throughout Colorado's Front Range."
  },
  {
    q: "How soon should I get an inspection after a hailstorm?",
    a: "As soon as possible. Most insurance policies have a deadline for filing storm damage claims, often within one year of the event. However, hidden damage can worsen over time if left unaddressed, potentially leading to leaks, mold, or structural issues. We recommend scheduling a free inspection within a few weeks of any significant storm."
  }
];

const NEIGHBORHOODS = [
  "Stonegate", "Pradera", "Stroh Ranch", "Idyllwilde", "Lincoln Creek",
  "Canterberry Crossing", "Clarke Farms", "Cottonwood", "The Pinery", "Woodlands",
  "Motsenbocker", "Bar CCC Ranch", "Heirloom", "Iron Horse", "Pine Lane Estates",
  "Meridian Village", "Meridian", "Reata North", "Timbers at the Pinery", "Challenger Park",
  "Parker Hilltop", "Homestead at Crystal Valley", "Parker North", "Castle Pines Village"
];

const HAIL_EVENTS = [
  { date: "May 8, 2017", desc: "A severe hailstorm produced golf ball sized hail across southern Douglas County, causing widespread roof and vehicle damage throughout Parker neighborhoods including Stonegate and Stroh Ranch." },
  { date: "June 18, 2018", desc: "Multiple supercell thunderstorms tracked across the Palmer Divide, dropping 1.75 inch hail on Parker and the Pinery area. Thousands of homes sustained roof damage." },
  { date: "June 2019", desc: "Back to back storms throughout June brought repeated rounds of damaging hail to Parker, with some neighborhoods sustaining damage from two separate events in the same week." },
  { date: "July 2023", desc: "A late season hailstorm produced up to 2 inch hail in parts of southern Douglas County, resulting in thousands of roof damage claims across Parker and surrounding communities." },
  { date: "Ongoing Risk", desc: "Parker averages 3 to 5 significant hail events per year due to its position along the Palmer Divide. Many Parker homes built between 2000 and 2015 are now reaching the age where storm damage compounds existing wear." }
];

const SERVICES = [
  {
    title: "Storm and Hail Damage Restoration",
    desc: "When hail or wind damages your Parker home, Gates Enterprises responds quickly with thorough inspections and expert restoration. We document all damage and guide you through the insurance restoration process so your home is restored to its full protective condition.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether your roof has reached the end of its lifespan or sustained irreparable storm damage, Gates Enterprises delivers premium roof replacements using materials from GAF, Owens Corning, Malarkey, and CertainTeed. Our quadruple certification means you get access to the best extended warranty options in the industry.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Not every issue requires a full replacement. From missing shingles to minor leaks, our team provides roof repairs of all sizes for Parker homeowners. We diagnose the problem accurately and fix it right the first time.",
    href: "/services/roof-repair"
  },
  {
    title: "Free Roof Inspections",
    desc: "Not sure if your Parker home has storm damage? Gates Enterprises provides free, no obligation roof inspections. Our certified inspectors evaluate your roof's condition and provide a detailed report you can use for insurance claims or future planning.",
    href: "/contact"
  },
  {
    title: "Emergency Roof Repair",
    desc: "When storm damage requires immediate attention, Gates Enterprises is available for emergency tarping and temporary repairs to prevent further damage to your Parker home. Protecting your interior from water intrusion is our top priority after a severe weather event.",
    href: "/services/roof-repair"
  },
  {
    title: "Gutter Installation",
    desc: "Properly functioning gutters are essential for protecting your Parker home's foundation, landscaping, and exterior. We install and repair gutter systems designed to handle Colorado's intense spring runoff and summer storms.",
    href: "/services/gutters-guards"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Hail and wind don't just damage roofs. Your siding takes a hit too. Gates Enterprises installs and repairs siding to protect your home's exterior and boost curb appeal.",
    href: "/services/siding-exterior"
  },
  {
    title: "Windows",
    desc: "Damaged or outdated windows cost you energy and comfort. Gates Enterprises installs high performance replacement windows that improve insulation and add value to your Parker home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Complete your home's exterior transformation with professional painting services. We prep surfaces properly, use quality materials, and deliver results that last through Colorado's demanding climate.",
    href: "/services/paint"
  },
  {
    title: "Insurance Restoration",
    desc: "Gates Enterprises is an insurance restoration expert serving Parker and all of Douglas County. We guide Parker homeowners through the restoration process from the initial damage assessment through project completion, ensuring nothing falls through the cracks.",
    href: "/services/insurance-claims"
  }
];

const CERTIFICATIONS = [
  {
    name: "GAF Master Elite\u00AE",
    desc: "GAF is North America's largest roofing manufacturer. Master Elite status is reserved for the top 2% of roofers and unlocks GAF's best warranty offerings, including the Golden Pledge\u00AE Limited Warranty with 25 year workmanship coverage."
  },
  {
    name: "Owens Corning Preferred Contractor",
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, customer satisfaction, and installation quality. This certification gives Parker homeowners access to Owens Corning's enhanced warranty programs."
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Malarkey Roofing Products are known for sustainability and durability. Emerald Premium contractors are specially trained to install Malarkey's premium shingle lines, including their industry leading NEX\u00AE Polymer Modified asphalt shingles."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires master level training in shingle installation techniques. This certification ensures Parker homeowners receive installations that meet CertainTeed's highest standards and qualify for top tier warranty coverage."
  }
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
  { label: "Roofing Contractor Castle Rock CO", href: "/areas/castle-rock" },
  { label: "Roofing Contractor Lone Tree CO", href: "/areas/lone-tree" },
  { label: "Roofing Contractor Centennial CO", href: "/areas/centennial" },
  { label: "Roofing Contractor Aurora CO", href: "/areas/aurora" },
  { label: "Roofing Contractor Highlands Ranch CO", href: "/areas/highlands-ranch" },
  { label: "Roofing Contractor Denver CO", href: "/areas/denver" },
  { label: "Parker Colorado Hail Damage Guide", href: "/blog/parker-colorado-hail-damage-homeowner-guide" },
  { label: "Best Roofing Companies in Parker", href: "/blog/best-roofing-companies-parker-colorado" },
  { label: "The Palmer Divide Hail Corridor", href: "/blog/palmer-divide-colorado-hail-corridor" },
  { label: "What Does Hail Damage Look Like on a Roof?", href: "/blog/what-does-hail-damage-look-like-on-roof" },
  { label: "Colorado Hail Season 2026 Guide", href: "/blog/colorado-hail-season-2026-homeowners-guide" },
  { label: "How to Navigate Hail Damage Insurance in CO", href: "/blog/hail-damage-insurance-claim-colorado" },
  { label: "Class 4 Impact Resistant Shingles", href: "/blog/class-4-impact-resistant-shingles-colorado" },
  { label: "About Gates Enterprises", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(13,33,55,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left" as const,
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: NAVY, lineHeight: 1.5 }}>{q}</span>
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT}
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: "0 0 24px", paddingRight: 36 }}>{a}</p>
      </div>
    </div>
  );
}

export default function CityContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* 1. HERO SECTION */}
      <section className="parker-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Parker</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Parker, Colorado's Most Trusted Roofing Company
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Manufacturer Certified &middot; 306 Five Star Reviews &middot; 7,200+ Completed Projects
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Parker homeowners deserve a roofing contractor who understands the unique challenges of living along the Palmer Divide. From sudden summer hailstorms to heavy spring snow loads, your roof takes a beating year after year. Gates Enterprises has been protecting homes across Parker and Douglas County for over a decade. We bring quadruple manufacturer certifications, a 4.9 star reputation across 306 Google reviews, and a commitment to honest, quality work on every project.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Parker &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT PHOTOS */}
      <CityGallery city="Parker" />

      {/* 2. TRUST SIGNALS BAR */}
      <section style={{ padding: "48px 24px", background: WHITE, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div className="parker-trust-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32, textAlign: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>306</div>
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

      {/* 3. WHY PARKER HOMEOWNERS CHOOSE GATES */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Parker Homeowners Trust Gates Enterprises
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors nationwide hold even one premium manufacturer certification. Gates Enterprises holds four: <Link href="/blog/manufacturer-certified-roofer-colorado" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro</Link>. That means Parker homeowners get access to the best warranty options and highest quality materials available.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>306 Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Our reputation speaks for itself. Parker families consistently rate Gates Enterprises among the top roofing contractors on Colorado's Front Range. We earn every review through transparent communication, quality craftsmanship, and respect for your home and property.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>7,200+ Completed Projects Across Colorado</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              With over 7,200 completed roofing and exterior projects across Douglas County and the greater Denver metro, Gates Enterprises has the experience Parker homeowners can count on. We know Parker. We know the weather patterns. We know the building codes. And we know how to get the job done right.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Experts</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              When a hailstorm damages your roof, the restoration process can feel overwhelming. Gates Enterprises is an <Link href="/services/insurance-claims" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>insurance restoration expert</Link>, guiding Parker homeowners through the restoration process from initial inspection through final installation. We document damage thoroughly and work with your insurance adjuster to support your claim.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Douglas County Building Code Experts</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The Town of Parker and Douglas County have specific building codes and permitting requirements for roofing projects. Gates Enterprises pulls all required permits and ensures every installation meets or exceeds local code requirements. You should never have to worry about whether your new roof was installed to code.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Local and Accessible</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises is headquartered right here on Colorado's Front Range. When you call, you reach our team directly. No call centers. No runaround.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PARKER HAIL AND STORM HISTORY */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Parker, CO: One of Colorado's Most Active Hail Corridors
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Parker sits along the Palmer Divide, a geographic ridge that runs east to west between Denver and Colorado Springs. This elevated terrain creates unique atmospheric conditions that produce some of the most frequent and damaging hailstorms anywhere in the United States. Parker typically experiences 3 to 5 significant hail events per year, making it one of the most hail prone communities in all of Colorado.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Many Parker homes were built between 2000 and 2015, meaning roofs in neighborhoods like Stonegate, Idyllwilde, Pradera, Lincoln Creek, and Castle Pines Village are now 10 to 25 years old. At this age, accumulated storm damage can significantly reduce the remaining lifespan of your roof, even if no single event caused obvious failure.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Douglas County regularly ranks among the top counties in Colorado for hail damage insurance claims. The National Oceanic and Atmospheric Administration (NOAA) data confirms that Colorado's Front Range averages more damaging hail events per year than nearly any other region in the country. Learn more about <Link href="/blog/what-does-hail-damage-look-like-on-roof" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>what hail damage looks like on a roof</Link> and <Link href="/blog/colorado-hail-season-2026-homeowners-guide" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>how to prepare for Colorado hail season</Link>.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable hail events affecting Parker and Douglas County:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
            {HAIL_EVENTS.map((event, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: ACCENT, marginBottom: 6 }}>{event.date}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{event.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Hail season in Parker typically runs from April through September, with peak activity in May, June, and July. If your home has been through any recent storm season without an inspection, there could be hidden damage affecting the lifespan of your roof. Consider upgrading to <Link href="/blog/class-4-impact-resistant-shingles-colorado" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Class 4 impact resistant shingles</Link> for better protection.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Get a Free Roof Inspection in Parker &rarr;
          </Link>
        </div>
      </section>

      {/* PARKER ROOF TYPES AND NEIGHBORHOODS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Common Roof Types Across Parker Neighborhoods
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Parker's neighborhoods span several decades of construction, and the roofing materials vary significantly depending on when and where a home was built. Understanding what is on your roof helps you make better decisions about repair, replacement, and insurance coverage.
          </p>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Stonegate and Stroh Ranch (2000s Construction)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Most homes in Stonegate and Stroh Ranch were built between 2000 and 2010 with standard three tab or early architectural asphalt shingles. These roofs are now 15 to 25 years old, which means many are nearing the end of their expected lifespan even without storm damage. Homes in these neighborhoods that have been through multiple hail events often have accumulated hidden damage that reduces the remaining roof life significantly. We recommend a professional inspection for any Stonegate or Stroh Ranch home that has not had one in the past two years.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>The Pinery and Cottonwood (Established Communities)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The Pinery is one of Parker's most established communities, with homes dating from the 1980s through the 2000s. Many Pinery homes sit on larger lots with mature pine trees, which creates unique roofing challenges including needle debris accumulation, shade patterns that can trap moisture, and increased vulnerability to fallen limbs during storms. Cottonwood homes face similar conditions. Roofing materials in these neighborhoods range from original wood shake (now rare) to architectural shingles installed during previous replacements.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Lincoln Creek, Canterberry Crossing, and Meridian Village (Newer Builds)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Newer Parker developments like Lincoln Creek, Canterberry Crossing, and Meridian Village tend to have builder grade architectural shingles installed during original construction. While these roofs are younger, builder grade materials are often the most basic products available from each manufacturer. They lack the <Link href="/blog/class-4-impact-resistant-shingles-colorado" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Class 4 impact resistance</Link> that is strongly recommended for homes along the Palmer Divide. If your home was built in the last five to ten years, it likely has a functional roof, but upgrading to impact resistant shingles at the next replacement will save you money on insurance and provide significantly better hail protection.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Parker Proper and Hilltop (Historic Parker)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Older Parker homes near downtown and the Hilltop area represent some of the most diverse roofing situations in town. You will find everything from original composition roofing to metal accents to more recent replacements. These homes often have steeper roof pitches and unique architectural details that require experienced installation crews. Gates Enterprises has worked on historic and older Parker homes throughout our history and understands the care these projects require.
            </p>
          </div>
        </div>
      </section>

      {/* PARKER BUILDING CODES AND HOA REQUIREMENTS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Parker Building Codes, Permits, and HOA Requirements
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Roofing projects in Parker require compliance with both the Town of Parker building codes and, in most cases, your HOA's architectural guidelines. Understanding these requirements before your project starts prevents delays, fines, and costly rework.
          </p>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Town of Parker Permits</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The Town of Parker requires a building permit for roof replacements. This includes a plan review and a final inspection to verify the work meets the adopted International Building Code (IBC) and International Residential Code (IRC). Parker follows Douglas County building codes, which require proper underlayment, flashing, ventilation, and ice and water shield at vulnerable areas. Gates Enterprises handles all permit applications and coordinates inspections so you do not have to navigate the process yourself.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>HOA Architectural Review</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Most Parker neighborhoods have active HOAs with architectural review requirements. Before any exterior work begins, you typically need to submit a modification request that includes the shingle brand, color, and profile. Communities like Stonegate, The Pinery, Canterberry Crossing, Pradera, and Stroh Ranch each have their own architectural standards and approval timelines. Some HOAs restrict shingle colors to an approved palette. Others require specific product lines. Gates Enterprises has completed projects in nearly every Parker HOA community and can provide the documentation your review committee needs for quick approval.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Impact Resistant Shingle Requirements</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              While neither the Town of Parker nor Douglas County currently mandates Class 4 impact resistant shingles, the insurance math makes them the smart choice for every Parker home. Most Colorado insurers offer 15 to 35 percent premium discounts for Class 4 roofs. Given Parker's position along the <Link href="/blog/palmer-divide-colorado-hail-corridor" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Palmer Divide hail corridor</Link>, the upgrade typically pays for itself within three to five years through insurance savings alone. Several Parker HOAs now strongly encourage or recommend impact resistant shingles for replacements.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Why Quadruple Certification Matters for Parker Homeowners</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Parker sits in one of the most hail active zones in the entire country. That means your roof is not just protecting your home from rain. It is absorbing repeated impacts from ice stones that can range from marble to softball size. Working with a quadruple certified contractor means your installer has been vetted and trained by all four major shingle manufacturers. You get access to the best warranty programs, the widest selection of premium materials, and the confidence that your roof was installed to the highest standard in the industry. When the next Palmer Divide hailstorm rolls through, that certification is not just a credential. It is your roof's insurance policy.
            </p>
          </div>
        </div>
      </section>

      {/* PARKER HAIL DAMAGE BLOG CALLOUT */}
      <section style={{ padding: "48px 24px", background: WHITE, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", background: `linear-gradient(135deg, ${NAVY} 0%, #0F2A42 100%)`, borderRadius: 16, padding: "40px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: ACCENT, letterSpacing: "0.15em" }}>PARKER HOMEOWNER GUIDE</span>
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 800, color: WHITE, lineHeight: 1.3, margin: 0 }}>
            Parker Colorado Hail Damage: What Every Homeowner Needs to Know
          </h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            Living on the Palmer Divide means your roof faces more hail than almost anywhere in the country. Our complete guide covers Parker's hail history, how to spot damage, the insurance claim process, and how to protect your home for the long term.
          </p>
          <Link href="/blog/parker-colorado-hail-damage-homeowner-guide" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "14px 28px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, marginTop: 8, alignSelf: "flex-start" }}>
            Read the Full Guide &rarr;
          </Link>
        </div>
      </section>

      {/* 5. FULL SERVICES LIST */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Roofing and Exterior Services in Parker, CO
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Gates Enterprises provides complete roofing and exterior services for Parker homeowners, from storm damage restoration and roof replacement to siding, gutters, windows, and painting.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>{s.desc}</p>
                <Link href={s.href} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
                  Learn more about {s.title.toLowerCase()} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified: What That Means for Parker Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Fewer than 2% of roofing contractors in the United States hold even one top tier manufacturer certification. Gates Enterprises holds four. This is not a marketing gimmick. These certifications are earned through rigorous vetting, ongoing training, and demonstrated excellence in installation quality. For Parker homeowners, this means access to the longest warranties, highest quality materials, and the confidence that your roof was installed by a contractor the manufacturers themselves trust.
          </p>
          <div className="parker-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
              Get a Free Roof Inspection in Parker &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NEIGHBORHOODS SERVED */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Parker Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises proudly serves homeowners in every Parker neighborhood. Whether you live in a newer development or an established community, our team knows the area and delivers the same quality service across every project.
          </p>
          <div className="parker-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
            If your neighborhood is not listed, we still serve you. Gates Enterprises works throughout Parker and all of Douglas County. We also serve nearby communities including <Link href="/areas/castle-rock" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Castle Rock</Link>, <Link href="/areas/lone-tree" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Lone Tree</Link>, <Link href="/areas/highlands-ranch" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Highlands Ranch</Link>, <Link href="/areas/centennial" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Centennial</Link>, and <Link href="/areas/aurora" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Aurora</Link>.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Parker &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: NAVY, border: "1px solid rgba(13,33,55,0.15)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE REVIEWS SECTION */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Parker Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 306 Google reviews and a 4.9 star rating, Gates Enterprises is one of the highest rated roofing contractors on Colorado's Front Range. Don't just take our word for it. See what your Parker neighbors have to say.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306 Reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All 306 Reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions: Roofing in Parker, CO
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* 10. ADDITIONAL CTA SECTION */}
      <CTA
        title="Get a Free Roof Inspection in Parker"
        subtitle="Your roof is the first line of defense for your family and your investment. Whether you need a post storm inspection, a full roof replacement, or exterior repairs, Gates Enterprises is ready to help. With 10+ years of experience, quadruple manufacturer certifications, 7,200+ completed projects, and 306 five star reviews, you can trust us to get it right. Call (720) 766-3377 or request your free inspection online."
      />

      {/* 11. SERVICES IN PARKER */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Roofing Services in Parker, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Parker, Colorado.</p>
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
              <Link key={svc.s} href={`/services/${svc.s}/parker`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="parker-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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

      <HailScoreCard citySlug="parker" cityName="Parker" />
      <LocalSEOInfo citySlug="parker" cityName="Parker" showMapsLink />

      <Footer />

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .parker-hero { padding: 120px 20px 60px !important; }
          .parker-trust-grid { grid-template-columns: 1fr 1fr !important; }
          .parker-certs-grid { grid-template-columns: 1fr !important; }
          .parker-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .parker-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .parker-hero { padding: 110px 16px 48px !important; }
          .parker-trust-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .parker-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
