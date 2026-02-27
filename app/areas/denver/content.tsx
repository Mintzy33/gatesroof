"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ReviewCarousel from "../../components/ReviewCarousel";

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

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FAQS = [
  {
    q: "How often should Denver homeowners inspect their roof?",
    a: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Denver's position in the hail corridor means your roof takes more punishment than homes in most other cities. Annual inspections catch small problems before they become expensive repairs."
  },
  {
    q: "Does Gates Enterprises work with insurance companies on storm damage?",
    a: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and work directly with your insurance company throughout the restoration process. Our goal is to ensure your home is fully restored."
  },
  {
    q: "Can you work on older Denver homes with unique roof designs?",
    a: "Absolutely. Denver has a wide range of architectural styles, from Victorian homes in Capitol Hill to Craftsman bungalows in Park Hill to mid century ranches in Harvey Park. Our crews have experience with steep pitches, complex valleys, slate to shingle conversions, and everything in between."
  },
  {
    q: "What type of shingles hold up best in Denver's climate?",
    a: "We recommend Class 3 or Class 4 impact resistant shingles for Denver homes. These shingles are specifically designed to withstand hail impacts. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed."
  },
  {
    q: "How long does a typical roof replacement take?",
    a: "Most residential roof replacements in Denver are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions. We coordinate closely with you on scheduling and keep you informed throughout the project."
  },
  {
    q: "Does Gates Enterprises serve the entire Denver metro?",
    a: "Yes. While this page focuses on Denver proper, Gates Enterprises LLC serves homeowners across Colorado's Front Range, including Lakewood, Parker, Aurora, Arvada, Westminster, Littleton, Centennial, and surrounding communities."
  },
  {
    q: "Is there a cost for the initial roof inspection?",
    a: "No. Gates Enterprises LLC offers free roof inspections and estimates for Denver homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation."
  }
];

const NEIGHBORHOODS = [
  "Washington Park (Wash Park)", "Cherry Creek", "Highlands (LoHi and West Highlands)",
  "RiNo (River North Art District)", "Park Hill", "Central Park (formerly Stapleton)",
  "Green Valley Ranch", "Montbello", "Lowry", "Congress Park", "Capitol Hill", "Baker",
  "Sloan's Lake", "Berkeley", "Hale", "Virginia Village", "University Hills", "Harvey Park",
  "Bear Valley", "Athmar Park", "Mar Lee", "Ruby Hill", "Platt Park", "Hilltop",
  "Cory Merrill", "Bonnie Brae", "Observatory Park", "Hampden South", "Goldsmith",
  "Northeast Park Hill", "Elyria Swansea", "Globeville", "Sunnyside", "Regis"
];

const HAIL_EVENTS = [
  { date: "May 8, 2017", desc: "A devastating hailstorm struck the Denver metro, producing hailstones up to 2.75 inches in diameter. Insured losses exceeded $2.3 billion, making it one of the costliest hailstorms in Colorado history." },
  { date: "June 18, 2018", desc: "Severe storms tracked across the metro area with golf ball sized hail, damaging thousands of roofs from Highlands to Park Hill." },
  { date: "July 2018", desc: "Multiple rounds of hail throughout the month impacted neighborhoods across south and east Denver." },
  { date: "June 2019", desc: "Repeated hailstorms battered the Denver metro over several weeks, with some areas getting hit multiple times in a single season." },
  { date: "April 2021", desc: "An early season supercell dropped tennis ball sized hail in parts of the Denver metro, catching many homeowners off guard before the traditional storm season." },
  { date: "June 2023", desc: "Multiple hail events across June caused widespread damage throughout Denver County and surrounding areas." }
];

const SERVICES = [
  {
    title: "Storm Damage Restoration",
    desc: "Denver's severe storm season means thousands of homes sustain hail and wind damage every year. Gates Enterprises LLC responds quickly with detailed inspections, thorough damage documentation, and expert restoration. We are an insurance restoration expert, guiding you through the entire restoration process so your home is fully protected.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether your Denver home needs a new roof after storm damage or your existing roof has reached the end of its lifespan, Gates Enterprises LLC delivers premium installations using materials from GAF, Owens Corning, Malarkey, and CertainTeed. Our four manufacturer certifications mean you qualify for the best extended warranty options available.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Leaks, missing shingles, flashing issues, and minor storm damage don't always require a full replacement. Our experienced crews diagnose and repair roofing problems of all sizes across Denver. We fix the actual issue instead of recommending unnecessary work.",
    href: "/services/roof-repair"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Hail doesn't just damage roofs. Denver homeowners frequently need siding repair or replacement after storms. Gates Enterprises LLC installs and repairs all types of siding to protect your home and restore its curb appeal.",
    href: "/services/siding-exterior"
  },
  {
    title: "Gutters",
    desc: "Your gutter system protects your foundation, landscaping, and exterior walls from water damage. We install and repair gutters designed to handle Denver's intense spring runoff and heavy summer downpours.",
    href: "/services/gutters-guards"
  },
  {
    title: "Windows",
    desc: "Cracked, fogged, or outdated windows reduce your home's energy efficiency and comfort. Gates Enterprises LLC installs high performance replacement windows that improve insulation and add long term value to your Denver home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Complete your home's exterior transformation with professional painting from Gates Enterprises LLC. We prepare surfaces properly, use premium materials, and deliver finishes that stand up to Denver's sun, wind, and temperature swings.",
    href: "/services/paint"
  },
  {
    title: "Insurance Restoration",
    desc: "Gates Enterprises LLC is an insurance restoration expert serving Denver and the entire Front Range. We manage the restoration process from initial damage inspection through final project completion. Thorough documentation. Clear communication. Quality results.",
    href: "/services/insurance-claims"
  }
];

const CERTIFICATIONS = [
  {
    name: "GAF Master Elite\u00AE",
    desc: "GAF is the largest roofing manufacturer in North America. Their Master Elite program accepts only the top 2% of contractors, granting access to GAF's most comprehensive warranty options including the Golden Pledge\u00AE Limited Warranty with 25 year workmanship coverage."
  },
  {
    name: "Owens Corning Preferred Contractor",
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, reliability, and quality workmanship. Denver homeowners who choose Gates Enterprises gain access to Owens Corning's enhanced warranty programs and premium product lines."
  },
  {
    name: "Malarkey Emerald Pro",
    desc: "Malarkey Roofing Products leads the industry in sustainable, high performance roofing materials. As an Emerald Pro contractor, Gates Enterprises is specially trained to install Malarkey's advanced shingle lines, including their NEX\u00AE Polymer Modified asphalt technology for superior durability."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires completion of master level training in advanced shingle application. This certification ensures Denver homeowners receive installations that meet CertainTeed's highest standards, qualifying for their best warranty coverage."
  }
];

const INTERNAL_LINKS = [
  { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Windows", href: "/services/windows" },
  { label: "Painting", href: "/services/paint" },
  { label: "Roofing Contractor Parker CO", href: "/areas/parker" },
  { label: "Roofing Contractor Lakewood CO", href: "/areas/lakewood" },
  { label: "About Gates Enterprises", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid rgba(13,33,55,0.08)` }}>
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

      {/* ─── 1. HERO SECTION ─── */}
      <section className="denver-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Denver</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Roofing Contractor in Denver, CO | Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Manufacturer Certified. 294+ Five Star Reviews. Protecting Denver Homes for 8+ Years.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Denver sits in one of the most active hail corridors in North America. Every spring and summer, severe storms roll off the Rocky Mountains and pound neighborhoods across the metro area. Your roof is your home's first line of defense, and it deserves a contractor who brings real credentials, not just a truck and a ladder. Gates Enterprises LLC holds four premium manufacturer certifications, maintains a 4.9 star rating across 294+ Google reviews, and has been serving Denver homeowners since 2017. From historic bungalows in Washington Park to new construction in Green Valley Ranch, we deliver the same quality and care on every project.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection &amp; Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. WHY DENVER HOMEOWNERS CHOOSE GATES ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Denver Homeowners Trust Gates Enterprises LLC
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors in the United States hold even one premium manufacturer certification. Gates Enterprises holds four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master Pro. For Denver homeowners, this means access to the best warranty programs and highest quality roofing materials on the market.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>294+ Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Denver homeowners have hundreds of roofing contractors to choose from. They keep choosing Gates Enterprises because we deliver honest assessments, quality craftsmanship, and straightforward communication. Our 4.9 star rating across 294+ reviews reflects that consistency.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>8+ Years on Colorado's Front Range.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises LLC was founded in May 2017 and has completed thousands of roofing and exterior projects across the Denver metro area. We understand Denver's building codes, HOA requirements, and the unique challenges that come with both historic and modern construction.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Specialists.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Denver gets hit hard by hail, and the aftermath can be stressful. Gates Enterprises LLC is an insurance restoration expert. We inspect your property thoroughly, document every detail, and manage the restoration process from start to finish so you can focus on your life instead of your roof.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Built for Denver's Diversity.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Denver's housing stock ranges from 100 year old Victorians in Capitol Hill to brand new builds in Central Park. Our team has experience with every type of roof, slope, and material. We tailor our approach to your specific home rather than applying a one size fits all solution.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. DENVER HAIL AND STORM HISTORY ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Denver, CO: A Major Hail Corridor
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Denver County sits squarely in what meteorologists call &ldquo;Hail Alley,&rdquo; the stretch of the Great Plains and Front Range that experiences more damaging hail events per year than anywhere else on Earth. The combination of warm moist air from the south, cold air descending from the Rockies, and strong atmospheric instability creates the perfect recipe for severe thunderstorms.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Colorado ranks number one in the nation for insured hail losses, and Denver is ground zero. According to NOAA Storm Events data and the Rocky Mountain Insurance Information Association, Denver metro area homes sustain billions of dollars in hail damage over the course of a typical decade.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable hail events affecting Denver include:
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
            Denver's hail season runs from April through September, peaking in May, June, and July. If your home has been through a storm season without a professional inspection, there may be hidden damage shortening the life of your roof.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Request a Free Inspection &amp; Estimate &rarr;
          </Link>
        </div>
      </section>

      {/* ─── 4. FULL SERVICES LIST ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Roofing and Exterior Services in Denver, CO
          </h2>
          <div className="denver-services-list" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
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

      {/* ─── 5. CERTIFICATIONS SECTION ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified: What That Means for Denver Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            With thousands of roofing contractors operating in the Denver metro, credentials matter. Gates Enterprises LLC holds four premium manufacturer certifications, a distinction achieved by fewer than 2% of roofers nationwide. These certifications are not purchased. They are earned through rigorous vetting, ongoing training, proven customer satisfaction, and demonstrated installation excellence.
          </p>
          <div className="denver-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
              Request a Free Inspection &amp; Estimate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. NEIGHBORHOODS SERVED ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Denver Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises LLC serves homeowners in every Denver neighborhood. From historic homes with steep, complex roof lines to modern new builds, our team delivers quality roofing and exterior services across the entire city.
          </p>
          <div className="denver-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            If your Denver neighborhood is not listed, we still serve you. Gates Enterprises LLC covers the entire Denver metro area and Colorado's Front Range.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection &amp; Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: NAVY, border: `1px solid rgba(13,33,55,0.15)`, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. GOOGLE REVIEWS SECTION ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Denver Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 294+ Google reviews and a 4.9 star rating, Gates Enterprises LLC is one of the most trusted roofing contractors in the Denver metro. Our reviews come from real homeowners across Denver's neighborhoods. Here is what they have to say.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(294+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All 294+ Reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* ─── 8. FAQ SECTION ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions: Roofing in Denver, CO
          </h2>
          <div style={{ borderTop: `1px solid rgba(13,33,55,0.08)` }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ─── 9. ADDITIONAL CTA SECTION ─── */}
      <CTA
        title="Denver's Storm Season is Coming. Is Your Roof Ready?"
        subtitle="Every year, Denver homeowners face some of the most severe hailstorms in the country. The best time to assess your roof's condition is before the next storm hits. Gates Enterprises LLC offers free inspections, honest assessments, and quality repairs and replacements backed by four manufacturer certifications. Don't wait until the next hailstorm reveals a problem. Get ahead of it today."
      />

      {/* ─── 10. INTERNAL LINKS SECTION ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="denver-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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

      <Footer />

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        @media (max-width: 768px) {
          .denver-hero { padding: 120px 20px 60px !important; }
          .denver-certs-grid { grid-template-columns: 1fr !important; }
          .denver-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .denver-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .denver-hero { padding: 110px 16px 48px !important; }
          .denver-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
