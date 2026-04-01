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
    q: "How do I know if my Evergreen home has hail damage?",
    a: "Hail damage is not always visible from the ground, and heavy tree cover in Evergreen can make it even harder to spot. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Evergreen homeowners."
  },
  {
    q: "Does Gates Enterprises work with my insurance company?",
    a: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and work directly with your insurance company throughout the restoration process. We ensure nothing is missed so your home is fully restored."
  },
  {
    q: "How does Evergreen's elevation affect roofing?",
    a: "At 7,220 feet elevation, Evergreen homes face extreme conditions including heavy snow loads, intense UV exposure, rapid temperature swings, hailstorms, and high winds. These factors accelerate shingle deterioration and make proper installation and material selection critical. Roofs in Evergreen typically endure more stress than those at lower elevations."
  },
  {
    q: "What roofing materials do you recommend for Evergreen homes?",
    a: "For Evergreen's high elevation mountain environment, we recommend impact resistant shingles rated Class 3 or Class 4 with high wind ratings and excellent snow load performance. Materials that handle extreme UV and freeze thaw cycles are essential at 7,220 feet. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
  },
  {
    q: "Does pine beetle tree damage affect roofs in Evergreen?",
    a: "Yes. Pine beetle damage has killed many trees throughout the Evergreen area, and dead trees are more likely to drop large branches onto roofs during storms or heavy snow. Falling debris can crack shingles, damage flashing, and compromise roof integrity. Regular inspections are especially important for homes surrounded by affected trees."
  },
  {
    q: "Is Gates Enterprises LLC licensed and insured in Jefferson County?",
    a: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Jefferson County, the Evergreen area, and throughout Colorado's Front Range."
  },
  {
    q: "How does heavy snow affect roofs in Evergreen?",
    a: "Evergreen receives significantly more snow than Denver and the surrounding plains. Heavy snow loads can stress roof structures, cause ice dams, and lead to moisture intrusion if the roof system is compromised. Proper ventilation, ice and water shield underlayment, and impact resistant shingles are all important for Evergreen homes."
  }
];

const NEIGHBORHOODS = [
  "Hiwan", "Bergen Park", "North Evergreen", "Marshdale",
  "Brook Forest", "Kittredge", "El Rancho", "Genesee",
  "Flying J Ranch"
];

const HAIL_EVENTS = [
  { date: "June 2017", desc: "Severe thunderstorms tracked through the mountain corridor, producing golf ball sized hail across Evergreen and Bergen Park. Many homeowners discovered damage only after professional inspections revealed hidden shingle impacts beneath tree debris." },
  { date: "June 2018", desc: "A series of supercell storms brought damaging hail and high winds to the Evergreen area. Mountain properties with steep pitches and surrounding pine trees sustained both impact and debris damage." },
  { date: "July 2020", desc: "Afternoon storms produced large hail across the foothills from Morrison through Evergreen. The combination of hail and falling branches from dead pine beetle trees caused extensive damage to roofs and gutters." },
  { date: "June 2023", desc: "Severe storms brought 1.5 inch hail to the Evergreen corridor, combined with significant wind damage. Many mountain homes required full roof inspections to assess the combined effects of hail, wind, and tree debris." }
];

const SERVICES = [
  {
    title: "Storm Damage Restoration",
    desc: "When hail, wind, or falling tree debris damages your Evergreen home, Gates Enterprises LLC responds quickly with thorough inspections and expert restoration. We understand the unique challenges of mountain properties and document all damage to guide you through the insurance restoration process.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether your roof has reached the end of its lifespan or sustained irreparable storm damage, Gates Enterprises LLC delivers premium roof replacements using materials rated for Evergreen's extreme mountain conditions. Our quadruple certification means you get access to the best extended warranty options in the industry.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Not every issue requires a full replacement. From missing shingles to leaks caused by ice dams, heavy snow, or falling debris, our team handles roof repairs of all sizes for Evergreen homeowners. We diagnose the problem accurately and fix it right the first time.",
    href: "/services/roof-repair"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Mountain weather and falling tree debris don't just damage roofs. Your siding takes a hit too. Gates Enterprises LLC installs and repairs siding to protect your home's exterior against Evergreen's demanding conditions.",
    href: "/services/siding-exterior"
  },
  {
    title: "Gutters",
    desc: "Properly functioning gutters are critical for mountain homes where heavy snowmelt, pine needles, and summer storms can cause significant water and debris issues. We install and repair gutter systems designed to handle Evergreen's unique challenges.",
    href: "/services/gutters-guards"
  },
  {
    title: "Windows",
    desc: "Damaged or outdated windows cost you energy and comfort, especially at 7,220 feet where temperature swings are extreme and heating costs are higher. Gates Enterprises LLC installs high performance replacement windows that improve insulation and add value to your Evergreen home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Complete your home's exterior transformation with professional painting services from Gates Enterprises LLC. We use quality materials rated for intense UV exposure, temperature extremes, and the demanding conditions of mountain living.",
    href: "/services/paint"
  },
  {
    title: "Insurance Restoration",
    desc: "Gates Enterprises LLC is an insurance restoration expert serving Evergreen and all of Jefferson County. We manage the restoration process from the initial damage assessment through project completion, ensuring nothing falls through the cracks.",
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
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, customer satisfaction, and installation quality. This certification gives Evergreen homeowners access to Owens Corning's enhanced warranty programs."
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Malarkey Roofing Products are known for sustainability and durability. Emerald Premium contractors are specially trained to install Malarkey's premium shingle lines, including their industry leading NEX\u00AE Polymer Modified asphalt shingles."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires master level training in shingle installation techniques. This certification ensures Evergreen homeowners receive installations that meet CertainTeed's highest standards and qualify for top tier warranty coverage."
  }
];

const INTERNAL_LINKS = [
  { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Windows", href: "/services/windows" },
  { label: "Painting", href: "/services/paint" },
  { label: "Roofing Contractor Morrison CO", href: "/areas/morrison" },
  { label: "Roofing Contractor Lakewood CO", href: "/areas/lakewood" },
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

      {/* ─── 1. HERO SECTION ─── */}
      <section className="evergreen-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Evergreen</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Roofing Contractor in Evergreen, CO | Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Manufacturer Certified. 300+ Five Star Reviews. Trusted Mountain Roofing Experts for 8+ Years.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            At 7,220 feet elevation, Evergreen homes face some of the most demanding roofing conditions in Colorado. Heavy snow loads, intense hailstorms, extreme UV exposure, and falling debris from pine beetle damaged trees all take their toll year after year. Gates Enterprises LLC has been protecting homes across Evergreen and Jefferson County since 2017. We bring quadruple manufacturer certifications, a 4.9 star reputation across 300+ Google reviews, and deep experience with mountain roofing that makes the difference between a roof that lasts and one that fails early.
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
      {/* ─── PROJECT PHOTOS ─── */}
      <CityGallery city="Evergreen" />

      {/* ─── 2. WHY EVERGREEN HOMEOWNERS CHOOSE GATES ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Evergreen Homeowners Trust Gates Enterprises LLC
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors nationwide hold even one premium manufacturer certification. Gates Enterprises holds four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. That means Evergreen homeowners get access to the best warranty options and highest quality materials available.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>300+ Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Our reputation speaks for itself. Families across the mountain communities consistently rate Gates Enterprises among the top roofing contractors on Colorado's Front Range. We earn every review through transparent communication, quality craftsmanship, and respect for your home and property.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>8+ Years Serving Colorado's Front Range.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Founded in May 2017, Gates Enterprises LLC has completed thousands of roofing and exterior projects across Jefferson County and the greater Denver metro. We know Evergreen. We understand high elevation weather, heavy snow loads, steep pitches, and the unique logistics of mountain properties.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Experts.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              When a hailstorm or falling tree damages your roof, the restoration process can feel overwhelming. Gates Enterprises LLC is an insurance restoration expert, guiding Evergreen homeowners through the restoration process from initial inspection through final installation. We document damage thoroughly and work with your insurance adjuster to support your claim.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Mountain Roofing Expertise.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Evergreen's steep terrain, winding roads, and complex roof architectures require a contractor with true mountain experience. Our crews are equipped and trained for high elevation installations with proper safety protocols, efficient logistics, and material choices designed for 7,000+ feet.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. EVERGREEN WEATHER AND STORM HISTORY ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Evergreen, CO: Mountain Roofing at 7,220 Feet
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Evergreen is a mountain community where roofs face a unique combination of threats. At 7,220 feet elevation, homes endure heavy snow loads that can exceed what plains homes ever see, intense UV radiation that degrades shingles faster, rapid temperature swings that stress roofing materials, and summer hailstorms that produce damaging stones. On top of all that, pine beetle damage has killed thousands of trees throughout the Evergreen area, creating a falling debris hazard that threatens roofs during every storm and heavy snowfall.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Jefferson County sees significant storm damage claims each year, and mountain communities like Evergreen often sustain damage that goes undetected without professional inspection due to heavy tree cover and difficult roof access.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable storm events affecting Evergreen and the mountain communities include:
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
            Storm season in Evergreen typically runs from April through September for hail, but heavy snow events can damage roofs from October through May. Year round vigilance is important for mountain homeowners.
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
            Roofing and Exterior Services in Evergreen, CO
          </h2>
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

      {/* ─── 5. CERTIFICATIONS SECTION ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified: What That Means for Evergreen Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Fewer than 2% of roofing contractors in the United States hold even one top tier manufacturer certification. Gates Enterprises LLC holds four. This is not a marketing gimmick. These certifications are earned through rigorous vetting, ongoing training, and demonstrated excellence in installation quality.
          </p>
          <div className="evergreen-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
            Areas We Serve in Evergreen, CO
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises LLC proudly serves homeowners throughout the Evergreen area and surrounding mountain communities. Whether you live near downtown Evergreen or in the surrounding neighborhoods, our team has the mountain roofing experience to handle your project.
          </p>
          <div className="evergreen-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            If your area is not listed, we still serve you. Gates Enterprises LLC works throughout Evergreen and all of Jefferson County.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection &amp; Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: NAVY, border: "1px solid rgba(13,33,55,0.15)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. GOOGLE REVIEWS SECTION ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Evergreen Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 300+ Google reviews and a 4.9 star rating, Gates Enterprises LLC is one of the highest rated roofing contractors on Colorado's Front Range. Don't just take our word for it. See what your Evergreen neighbors have to say.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(300+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All 300+ Reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* ─── 8. FAQ SECTION ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions: Roofing in Evergreen, CO
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ─── 9. ADDITIONAL CTA SECTION ─── */}
      <CTA
        title="Protect Your Evergreen Home Today"
        subtitle="Your roof is the first line of defense for your family and your investment. Whether you need a post storm inspection, a full roof replacement, debris damage repair, or exterior services, Gates Enterprises LLC is ready to help. With 8+ years of experience, quadruple manufacturer certifications, and 300+ five star reviews, you can trust us to get it right."
      />

      {/* ─── 10. INTERNAL LINKS SECTION ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="evergreen-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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


      {/* ─── SERVICES IN EVERGREEN ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Evergreen, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Evergreen.</p>
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
              <Link key={svc.s} href={`/services/${svc.s}/evergreen`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HailScoreCard citySlug="evergreen" cityName="Evergreen" />

      <LocalSEOInfo citySlug="evergreen" cityName="Evergreen" showMapsLink />

      <Footer />

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        @media (max-width: 768px) {
          .evergreen-hero { padding: 120px 20px 60px !important; }
          .evergreen-certs-grid { grid-template-columns: 1fr !important; }
          .evergreen-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .evergreen-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .evergreen-hero { padding: 110px 16px 48px !important; }
          .evergreen-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
