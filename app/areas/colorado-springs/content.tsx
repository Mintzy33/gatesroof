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
    q: "How often should Colorado Springs homeowners inspect their roof?",
    a: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Colorado Springs sits at the base of Pikes Peak where Palmer Divide storms regularly track through, making annual inspections critical for catching hidden damage before it leads to costly repairs."
  },
  {
    q: "Does Gates Enterprises work with insurance companies on storm damage in Colorado Springs?",
    a: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. After major events like the June 2023 storm that caused $1.4 billion in damage, our team helped hundreds of homeowners navigate their claims."
  },
  {
    q: "What type of shingles hold up best against Colorado Springs hail?",
    a: "We recommend Class 3 or Class 4 impact resistant shingles for Colorado Springs homes. Given the city's position in a heavy hail corridor, impact resistant shingles provide significantly better protection. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed."
  },
  {
    q: "Does Gates Enterprises handle HOA requirements in Colorado Springs?",
    a: "Yes. Many Colorado Springs neighborhoods like Briargate, Flying Horse, and Wolf Ranch have strict HOA guidelines for roofing materials, colors, and styles. We work within your HOA's requirements and can assist with the approval process to ensure your new roof meets all community standards."
  },
  {
    q: "Who handles building permits for roofing in Colorado Springs?",
    a: "The Pikes Peak Regional Building Department handles all roofing permits in the Colorado Springs area. Gates Enterprises LLC manages the permitting process for you, ensuring your project meets all local building codes and passes inspection."
  },
  {
    q: "Do you work with military families at Fort Carson and the Air Force bases?",
    a: "Absolutely. Colorado Springs is home to Fort Carson, Peterson Space Force Base, Schriever Space Force Base, and the United States Air Force Academy. We understand that military families face frequent PCS moves and that roof condition directly impacts resale value. We provide thorough inspections and quality repairs on timelines that work with military schedules."
  },
  {
    q: "Is there a cost for the initial roof inspection in Colorado Springs?",
    a: "No. Gates Enterprises LLC offers free roof inspections and estimates for Colorado Springs homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation."
  }
];

const NEIGHBORHOODS = [
  "Broadmoor", "Briargate", "Northgate", "Flying Horse", "Old Colorado City",
  "Manitou Springs Area", "Black Forest", "Falcon", "Cimarron Hills",
  "Security-Widefield", "Rockrimmon", "Stetson Hills", "Powers Corridor",
  "Wolf Ranch", "Cordera", "Cheyenne Mountain", "Gold Hill Mesa",
  "Patty Jewett", "Skyway", "Kissing Camels", "Mesa Springs",
  "Peregrine", "Gleneagle", "Monument Hill", "Woodmen Valley",
  "University Park", "Ivywild", "Stratton Meadows", "Garden of the Gods Area",
  "Downtown Colorado Springs"
];

const HAIL_EVENTS = [
  { date: "June 2018", desc: "A powerful supercell produced baseball-sized hail across Colorado Springs, damaging thousands of roofs and vehicles. Entire neighborhoods in the Powers Corridor and Briargate areas required full roof replacements." },
  { date: "June 13, 2023", desc: "One of the costliest hailstorms in Colorado history struck Colorado Springs, causing an estimated $1.4 billion in insured damage. Hailstones up to 2.5 inches battered neighborhoods across the city, overwhelming roofing contractors for months." },
  { date: "July 2016", desc: "Severe thunderstorms tracking off the Palmer Divide dropped large hail across the northern reaches of Colorado Springs, impacting Briargate, Northgate, and Black Forest communities." },
  { date: "August 2019", desc: "Multiple rounds of severe storms moved through El Paso County over several weeks, with repeated hail impacts in Stetson Hills, Falcon, and Security-Widefield." },
  { date: "May 2017", desc: "The same supercell system that devastated the Denver metro tracked south into northern El Paso County, producing golf ball sized hail in Monument, Gleneagle, and northern Colorado Springs." }
];

const SERVICES = [
  {
    title: "Storm Damage Restoration",
    desc: "Colorado Springs sits in one of the most active hail corridors in Colorado, with Palmer Divide storms regularly tracking through the city. Gates Enterprises LLC responds quickly with detailed inspections, thorough damage documentation, and expert restoration. We are an insurance restoration expert, guiding you through the entire process so your home is fully protected.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether your Colorado Springs home needs a new roof after storm damage or your existing roof has reached the end of its lifespan, Gates Enterprises LLC delivers premium installations using materials from GAF, Owens Corning, Malarkey, and CertainTeed. Our four manufacturer certifications mean you qualify for the best extended warranty options available.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Leaks, missing shingles, flashing issues, and minor storm damage don't always require a full replacement. Our experienced crews diagnose and repair roofing problems of all sizes across Colorado Springs. We fix the actual issue instead of recommending unnecessary work.",
    href: "/services/roof-repair"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Hail doesn't just damage roofs. Colorado Springs homeowners frequently need siding repair or replacement after storms. Gates Enterprises LLC installs and repairs all types of siding to protect your home and restore its curb appeal.",
    href: "/services/siding-exterior"
  },
  {
    title: "Gutters",
    desc: "Your gutter system protects your foundation, landscaping, and exterior walls from water damage. We install and repair gutters designed to handle Colorado Springs' intense spring runoff and heavy summer downpours that roll off the mountains.",
    href: "/services/gutters-guards"
  },
  {
    title: "Windows",
    desc: "Cracked, fogged, or outdated windows reduce your home's energy efficiency and comfort. Gates Enterprises LLC installs high performance replacement windows that improve insulation and add long term value to your Colorado Springs home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Complete your home's exterior transformation with professional painting from Gates Enterprises LLC. We prepare surfaces properly, use premium materials, and deliver finishes that stand up to Colorado Springs' sun exposure, wind, and dramatic temperature swings.",
    href: "/services/paint"
  },
  {
    title: "Insurance Claims Assistance",
    desc: "Gates Enterprises LLC is an insurance restoration expert serving Colorado Springs and the entire Front Range. We manage the restoration process from initial damage inspection through final project completion. Thorough documentation. Clear communication. Quality results.",
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
    desc: "Owens Corning Preferred Contractors meet strict standards for professionalism, reliability, and quality workmanship. Colorado Springs homeowners who choose Gates Enterprises gain access to Owens Corning's enhanced warranty programs and premium product lines."
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Malarkey Roofing Products leads the industry in sustainable, high performance roofing materials. As an Emerald Premium contractor, Gates Enterprises is specially trained to install Malarkey's advanced shingle lines, including their NEX\u00AE Polymer Modified asphalt technology for superior durability."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires completion of master level training in advanced shingle application. This certification ensures Colorado Springs homeowners receive installations that meet CertainTeed's highest standards, qualifying for their best warranty coverage."
  }
];

const INTERNAL_LINKS = [
  { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Windows", href: "/services/windows" },
  { label: "Painting", href: "/services/paint" },
  { label: "Roofing Contractor Denver CO", href: "/areas/denver" },
  { label: "Roofing Contractor Castle Rock CO", href: "/areas/castle-rock" },
  { label: "Roofing Contractor Centennial CO", href: "/areas/centennial" },
  { label: "Roofing Contractor Aurora CO", href: "/areas/aurora" },
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
      <section className="colorado-springs-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Colorado Springs</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Roofing Contractor in Colorado Springs, CO | Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Manufacturer Certified. 306+ Five Star Reviews. 7,200+ Roofs Completed.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Colorado Springs sits at the base of Pikes Peak, directly in the path of severe Palmer Divide storms that deliver some of the most damaging hail in Colorado. Your roof is your home's first line of defense, and it deserves a contractor who brings real credentials. Gates Enterprises LLC holds four premium manufacturer certifications, maintains a 4.9 star rating across 306+ Google reviews, and has completed over 7,200 roofing projects across Colorado's Front Range. From historic homes in Old Colorado City to planned communities in Briargate and Flying Horse, we deliver the same quality and care on every project.
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
      <CityGallery city="Colorado Springs" />

      {/* --- 2. WHY COLORADO SPRINGS HOMEOWNERS CHOOSE GATES --- */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Colorado Springs Homeowners Trust Gates Enterprises LLC
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors in the United States hold even one premium manufacturer certification. Gates Enterprises holds four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. For Colorado Springs homeowners, this means access to the best warranty programs and highest quality roofing materials on the market.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>306+ Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Colorado Springs homeowners have no shortage of roofing contractors to choose from. They keep choosing Gates Enterprises because we deliver honest assessments, quality craftsmanship, and straightforward communication. Our 4.9 star rating across 306+ reviews reflects that consistency.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>7,200+ Roofs Completed Across Colorado.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises LLC was founded in May 2017 and has completed over 7,200 roofing and exterior projects across Colorado's Front Range. We understand Pikes Peak Regional Building Department codes, El Paso County HOA requirements, and the unique challenges that come with roofing in a city that sees some of the most extreme weather in the state.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Experts.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Colorado Springs gets hit hard by hail. The June 2023 storm alone caused $1.4 billion in damage across the city. Gates Enterprises LLC is an insurance restoration expert. We inspect your property thoroughly, document every detail, and manage the restoration process from start to finish so you can focus on your life instead of your roof.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Built for Colorado Springs' Unique Needs.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Colorado Springs is Colorado's second largest city, home to multiple military installations and communities ranging from the tile roofed estates in Broadmoor to new construction in Wolf Ranch and Cordera. Military families on PCS timelines need reliable contractors who can work on their schedule. HOA-governed neighborhoods need contractors who understand approval processes. Our team tailors every project to the homeowner's specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. COLORADO SPRINGS HAIL AND STORM HISTORY --- */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Colorado Springs: A Heavy Hail Corridor
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Colorado Springs sits at the convergence of two major storm-producing features: the Rocky Mountain Front Range and the Palmer Divide. When warm, moist air from the plains collides with cold air descending from Pikes Peak and the surrounding mountains, the result is intense supercell thunderstorms that can produce hailstones larger than baseballs. El Paso County consistently ranks among the top counties in the nation for insured hail losses.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            The city's geography makes it uniquely vulnerable. Storms that build over the Palmer Divide frequently track directly through Colorado Springs, and the city's rapid growth means more homes are in the path of these storms every year. Architectural asphalt shingles are the most common roof type in the metro, with tile roofs concentrated in the Broadmoor area and some metal roofing scattered throughout.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable hail events affecting Colorado Springs include:
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
            Colorado Springs' hail season runs from April through September, peaking in May, June, and July. If your home has been through a storm season without a professional inspection, there may be hidden damage shortening the life of your roof.
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
            Roofing and Exterior Services in Colorado Springs, CO
          </h2>
          <div className="colorado-springs-services-list" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
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
            Quadruple Manufacturer Certified: What That Means for Colorado Springs Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            With hundreds of roofing contractors operating in the Colorado Springs area, credentials matter. Gates Enterprises LLC holds four premium manufacturer certifications, a distinction achieved by fewer than 2% of roofers nationwide. These certifications are not purchased. They are earned through rigorous vetting, ongoing training, proven customer satisfaction, and demonstrated installation excellence.
          </p>
          <div className="colorado-springs-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
            Colorado Springs Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises LLC serves homeowners across the Colorado Springs metro area. From the established estates of Broadmoor to the growing communities of Wolf Ranch and Cordera, our team delivers quality roofing and exterior services throughout El Paso County.
          </p>
          <div className="colorado-springs-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            If your Colorado Springs neighborhood is not listed, we still serve you. Gates Enterprises LLC covers the entire El Paso County area and Colorado's Front Range.
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
            What Colorado Springs Homeowners Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            With 306+ Google reviews and a 4.9 star rating, Gates Enterprises LLC is one of the most trusted roofing contractors serving Colorado Springs. Our reviews come from real homeowners across the Front Range. Here is what they have to say.
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
            Frequently Asked Questions: Roofing in Colorado Springs, CO
          </h2>
          <div style={{ borderTop: `1px solid rgba(13,33,55,0.08)` }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* --- 9. ADDITIONAL CTA SECTION --- */}
      <CTA
        title="Colorado Springs Storm Season Hits Hard. Is Your Roof Ready?"
        subtitle="Every year, Palmer Divide storms deliver some of the most damaging hail in the state directly into Colorado Springs neighborhoods. The best time to assess your roof's condition is before the next storm hits. Gates Enterprises LLC offers free inspections, honest assessments, and quality repairs and replacements backed by four manufacturer certifications. Don't wait until the next hailstorm reveals a problem. Get ahead of it today."
      />

      {/* --- 10. INTERNAL LINKS SECTION --- */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="colorado-springs-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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

      {/* --- SERVICES IN COLORADO SPRINGS --- */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Colorado Springs, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Colorado Springs.</p>
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
              <Link key={svc.s} href={`/services/${svc.s}/colorado-springs`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HailScoreCard citySlug="colorado-springs" cityName="Colorado Springs" />

      <LocalSEOInfo citySlug="colorado-springs" cityName="Colorado Springs" showMapsLink />

      <Footer />

      {/* --- RESPONSIVE STYLES --- */}
      <style>{`
        @media (max-width: 768px) {
          .colorado-springs-hero { padding: 120px 20px 60px !important; }
          .colorado-springs-certs-grid { grid-template-columns: 1fr !important; }
          .colorado-springs-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .colorado-springs-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .colorado-springs-hero { padding: 110px 16px 48px !important; }
          .colorado-springs-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
