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

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FAQS = [
  {
    q: "How often should Fort Collins homeowners inspect their roof?",
    a: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Fort Collins sits in the Northern Colorado hail corridor where severe storms form along the foothills and track across the city. Annual inspections catch small problems before they become expensive repairs."
  },
  {
    q: "Does Gates Enterprises work with insurance companies on storm damage in Fort Collins?",
    a: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. Fort Collins homeowners deal with frequent hail claims, and we handle the process from start to finish."
  },
  {
    q: "What type of shingles hold up best in Fort Collins?",
    a: "We recommend Class 3 or Class 4 impact resistant shingles for Fort Collins homes. Given the frequency of hail along the I-25 corridor, impact rated shingles provide the best long term protection. Our four manufacturer certifications give you access to the best product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
  },
  {
    q: "Can you work on older homes in Old Town Fort Collins?",
    a: "Absolutely. Old Town Fort Collins has a mix of historic homes, some with original wood shake roofs. Our crews have experience with steep pitches, complex valleys, and transitioning older wood shake roofs to modern architectural shingles while preserving the character of the home."
  },
  {
    q: "Does Fort Collins require permits for roof replacement?",
    a: "Yes. The City of Fort Collins requires building permits for roof replacements. Fort Collins also has strict green building standards. Gates Enterprises LLC handles the permitting process for you and ensures all work meets or exceeds local code requirements."
  },
  {
    q: "Do you serve Timnath, Windsor, and Loveland as well?",
    a: "Yes. Gates Enterprises LLC serves the entire Northern Colorado region, including Timnath, Windsor, Loveland, Greeley, Longmont, and surrounding communities. We also serve Boulder, Denver, and the rest of the Front Range."
  },
  {
    q: "How long does a roof replacement take in Fort Collins?",
    a: "Most residential roof replacements in Fort Collins are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions. We coordinate closely with you on scheduling and keep you informed throughout the project."
  }
];

const NEIGHBORHOODS = [
  "Old Town", "Midtown", "South Fort Collins", "Timnath", "Windsor (nearby)",
  "Loveland (nearby)", "Harmony Corridor", "Fossil Creek", "Front Range Village",
  "Rigden Farm", "Bucking Horse", "Jessup Farm", "Campus West", "Prospect",
  "Mountain Vista", "Richards Lake", "Mail Creek", "Huntington Hills",
  "Warren Farms", "Maple Hill", "Clarendon Hills", "Trilby Heights",
  "Southridge Greens", "Westfield", "Paragon Point", "Wagon Trail"
];

const HAIL_EVENTS = [
  { date: "May 8, 2017", desc: "A devastating hailstorm tracked across Northern Colorado, producing hailstones exceeding 2 inches in diameter. Widespread roof and vehicle damage across Fort Collins and the I-25 corridor. Insured losses in the region exceeded $2 billion." },
  { date: "June 2019", desc: "Repeated severe hailstorms battered Fort Collins and surrounding communities over several weeks. Some neighborhoods were hit multiple times in a single season, overwhelming local contractors and creating months-long repair backlogs." },
  { date: "July 2021", desc: "A supercell produced golf ball to tennis ball sized hail in parts of Fort Collins and Loveland, damaging thousands of roofs across Larimer County." },
  { date: "June 2023", desc: "Multiple hail events struck Northern Colorado throughout June, with significant damage reported in Fort Collins, Timnath, Windsor, and Loveland. Many homeowners discovered hidden damage weeks after the storms passed." },
  { date: "Recurring Pattern", desc: "Fort Collins sits where moisture from the plains meets cold air descending from the foothills, creating a persistent hail corridor along the I-25 corridor. Severe hail is not a question of if but when." }
];

const SERVICES = [
  {
    title: "Storm Damage Restoration",
    desc: "Fort Collins sits in one of the most active hail corridors in the state. Gates Enterprises LLC responds quickly with detailed inspections, thorough damage documentation, and expert restoration. We are an insurance restoration expert, guiding you through the entire process so your home is fully protected.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether your Fort Collins home needs a new roof after storm damage or your existing roof has reached the end of its lifespan, Gates Enterprises LLC delivers premium installations using materials from GAF, Owens Corning, Malarkey, and CertainTeed. Our four manufacturer certifications mean you qualify for the best extended warranty options available.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Leaks, missing shingles, flashing issues, and minor storm damage don't always require a full replacement. Our experienced crews diagnose and repair roofing problems of all sizes across Fort Collins and Northern Colorado. We fix the actual issue instead of recommending unnecessary work.",
    href: "/services/roof-repair"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Hail doesn't just damage roofs. Fort Collins homeowners frequently need siding repair or replacement after storms. Gates Enterprises LLC installs and repairs all types of siding to protect your home and restore its curb appeal.",
    href: "/services/siding-exterior"
  },
  {
    title: "Gutters",
    desc: "Your gutter system protects your foundation, landscaping, and exterior walls from water damage. We install and repair gutters designed to handle Fort Collins' intense spring runoff and heavy summer downpours from foothill storms.",
    href: "/services/gutters-guards"
  },
  {
    title: "Windows",
    desc: "Cracked, fogged, or outdated windows reduce your home's energy efficiency and comfort. Gates Enterprises LLC installs high performance replacement windows that improve insulation and add long term value to your Fort Collins home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Complete your home's exterior transformation with professional painting from Gates Enterprises LLC. We prepare surfaces properly, use premium materials, and deliver finishes that stand up to Fort Collins' sun, wind, and temperature swings.",
    href: "/services/paint"
  },
  {
    title: "Insurance Claims Assistance",
    desc: "Gates Enterprises LLC is an insurance restoration expert serving Fort Collins and the entire Northern Colorado region. We manage the restoration process from initial damage inspection through final project completion. Thorough documentation. Clear communication. Quality results.",
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
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, reliability, and quality workmanship. Fort Collins homeowners who choose Gates Enterprises gain access to Owens Corning's enhanced warranty programs and premium product lines."
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Malarkey Roofing Products leads the industry in sustainable, high performance roofing materials. As an Emerald Premium contractor, Gates Enterprises is specially trained to install Malarkey's advanced shingle lines, including their NEX\u00AE Polymer Modified asphalt technology for superior durability."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires completion of master level training in advanced shingle application. This certification ensures Fort Collins homeowners receive installations that meet CertainTeed's highest standards, qualifying for their best warranty coverage."
  }
];

const INTERNAL_LINKS = [
  { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Windows", href: "/services/windows" },
  { label: "Painting", href: "/services/paint" },
  { label: "Roofing Contractor Greeley CO", href: "/areas/greeley" },
  { label: "Roofing Contractor Boulder CO", href: "/areas/boulder" },
  { label: "Roofing Contractor Longmont CO", href: "/areas/longmont" },
  { label: "Roofing Contractor Denver CO", href: "/areas/denver" },
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

      {/* --- 1. HERO SECTION --- */}
      <section className="fort-collins-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Fort Collins</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Roofing Contractor in Fort Collins, CO | Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Manufacturer Certified. 306+ Five Star Reviews. Serving Northern Colorado for 8+ Years.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Fort Collins sits at the northern end of Colorado's Front Range, where storms forming along the foothills produce some of the most frequent and severe hail in the state. With a population of roughly 175,000 and rapid growth pushing east into Timnath and beyond, thousands of homes face hail damage every season. Your roof is your home's first line of defense, and it deserves a contractor who brings real credentials, not just a truck and a ladder. Gates Enterprises LLC holds four premium manufacturer certifications, maintains a 4.9 star rating across 306+ Google reviews, and has completed 7,200+ roofs across Colorado. From historic bungalows in Old Town to new construction in Rigden Farm, we deliver the same quality and care on every project.
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

      {/* --- PROJECT PHOTOS --- */}
      <CityGallery city="Fort Collins" />

      {/* --- 2. WHY FORT COLLINS HOMEOWNERS CHOOSE GATES --- */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Fort Collins Homeowners Trust Gates Enterprises LLC
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors in the United States hold even one premium manufacturer certification. Gates Enterprises holds four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. For Fort Collins homeowners, this means access to the best warranty programs and highest quality roofing materials on the market.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>306+ Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Northern Colorado homeowners have plenty of roofing contractors to choose from. They keep choosing Gates Enterprises because we deliver honest assessments, quality craftsmanship, and straightforward communication. Our 4.9 star rating across 306+ reviews reflects that consistency.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>10+ Years on Colorado's Front Range.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises LLC was founded in May 2017 and has completed over 7,200 roofing and exterior projects across the Front Range. We understand Fort Collins' building codes, its strict green building standards, HOA requirements, and the unique challenges that come with both historic Old Town homes and rapid new construction in areas like Timnath and east Fort Collins.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Experts.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fort Collins gets hit hard by hail, and the aftermath can be stressful. Gates Enterprises LLC is an insurance restoration expert. We inspect your property thoroughly, document every detail, and manage the restoration process from start to finish so you can focus on your life instead of your roof.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Built for Northern Colorado's Housing Mix.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fort Collins' housing ranges from century-old homes with wood shake roofs in Old Town to brand new builds in Timnath and the Harmony corridor. The city is also home to Colorado State University, where student rental properties often have deferred maintenance and aging roofs. Our team has experience with every type of roof, slope, and material. We tailor our approach to your specific home rather than applying a one size fits all solution.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. FORT COLLINS HAIL AND STORM HISTORY --- */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Fort Collins, CO: Northern Colorado's Hail Corridor
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Fort Collins and Larimer County sit in one of the most active hail zones in North America. Severe thunderstorms form regularly along the foothills west of the city, then track east across Fort Collins, Timnath, and Windsor along the I-25 corridor. The combination of warm moist air rising from the plains and cold air descending from the Rocky Mountains creates ideal conditions for large hail production.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Colorado ranks number one in the nation for insured hail losses, and Northern Colorado is consistently one of the hardest hit regions. According to NOAA Storm Events data, Fort Collins area homes sustain significant hail damage year after year, with major events often producing hailstones exceeding 1.5 inches in diameter.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable hail events affecting Fort Collins include:
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
            Fort Collins' hail season runs from April through September, peaking in May, June, and July. If your home has been through a storm season without a professional inspection, there may be hidden damage shortening the life of your roof.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Request a Free Inspection &amp; Estimate &rarr;
          </Link>
        </div>
      </section>

      {/* --- 4. FULL SERVICES LIST --- */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Roofing and Exterior Services in Fort Collins, CO
          </h2>
          <div className="fort-collins-services-list" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
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

      {/* --- 5. CERTIFICATIONS SECTION --- */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified: What That Means for Fort Collins Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            With many roofing contractors operating in Northern Colorado, credentials matter. Gates Enterprises LLC holds four premium manufacturer certifications, a distinction achieved by fewer than 2% of roofers nationwide. These certifications are not purchased. They are earned through rigorous vetting, ongoing training, proven customer satisfaction, and demonstrated installation excellence.
          </p>
          <div className="fort-collins-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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

      {/* --- 6. NEIGHBORHOODS SERVED --- */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Fort Collins Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises LLC serves homeowners across Fort Collins and the surrounding Northern Colorado communities. From historic homes with complex roof lines in Old Town to modern new builds in Timnath and the Harmony corridor, our team delivers quality roofing and exterior services throughout Larimer County.
          </p>
          <div className="fort-collins-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            If your Fort Collins neighborhood is not listed, we still serve you. Gates Enterprises LLC covers all of Northern Colorado and the entire Front Range.
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

      {/* --- 7. GOOGLE REVIEWS SECTION --- */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Fort Collins Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 306+ Google reviews and a 4.9 star rating, Gates Enterprises LLC is one of the most trusted roofing contractors serving Northern Colorado. Our reviews come from real homeowners across the Front Range. Here is what they have to say.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All 306+ Reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* --- 8. FAQ SECTION --- */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions: Roofing in Fort Collins, CO
          </h2>
          <div style={{ borderTop: `1px solid rgba(13,33,55,0.08)` }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* --- 9. ADDITIONAL CTA SECTION --- */}
      <CTA
        title="Northern Colorado's Storm Season is Coming. Is Your Roof Ready?"
        subtitle="Every year, Fort Collins homeowners face some of the most frequent and severe hailstorms in Colorado. The best time to assess your roof's condition is before the next storm hits. Gates Enterprises LLC offers free inspections, honest assessments, and quality repairs and replacements backed by four manufacturer certifications. Don't wait until the next hailstorm reveals a problem. Get ahead of it today."
      />

      {/* --- 10. INTERNAL LINKS SECTION --- */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="fort-collins-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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

      {/* --- SERVICES IN FORT COLLINS --- */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Fort Collins, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Fort Collins and Northern Colorado.</p>
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
              <Link key={svc.s} href={`/services/${svc.s}/fort-collins`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HailScoreCard citySlug="fort-collins" cityName="Fort Collins" />

      <LocalSEOInfo citySlug="fort-collins" cityName="Fort Collins" showMapsLink />

      <Footer />

      {/* --- RESPONSIVE STYLES --- */}
      <style>{`
        @media (max-width: 768px) {
          .fort-collins-hero { padding: 120px 20px 60px !important; }
          .fort-collins-certs-grid { grid-template-columns: 1fr !important; }
          .fort-collins-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .fort-collins-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .fort-collins-hero { padding: 110px 16px 48px !important; }
          .fort-collins-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
