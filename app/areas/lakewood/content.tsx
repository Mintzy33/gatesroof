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

const FAQS = [
  {
    q: "Is Gates Enterprises actually based in Lakewood?",
    a: "Yes. Gates Enterprises LLC is headquartered in Lakewood, CO. This is our home and has been since we were founded in May 2017. When you hire us, you are hiring your neighbors."
  },
  {
    q: "How do I know if my Lakewood home has hail damage?",
    a: "Hail damage is often invisible from the ground. Signs to watch for include dented gutters, granule accumulation in downspout splash zones, and cracked or bruised shingles. The most reliable way to know is a professional inspection. Gates Enterprises LLC offers free inspections for Lakewood homeowners."
  },
  {
    q: "Does Gates Enterprises work with my insurance company?",
    a: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all damage with detailed photos and measurements, provide comprehensive reports, and work directly with your insurance company throughout the entire restoration process."
  },
  {
    q: "What roofing materials work best for Lakewood homes?",
    a: "We recommend Class 3 or Class 4 impact resistant shingles for Lakewood homes due to the frequency of hail in Jefferson County. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed. We help you choose the best option for your budget, style, and warranty preferences."
  },
  {
    q: "How quickly can you inspect my roof after a storm?",
    a: "Because we are headquartered in Lakewood, we can typically schedule inspections within days of a storm event. During peak storm season, demand increases, so we recommend reaching out as soon as possible to secure your spot."
  },
  {
    q: "What warranties are available through Gates Enterprises?",
    a: "Our four manufacturer certifications unlock the highest tier warranties available from each manufacturer. That includes GAF's Golden Pledge\u00AE with 25 year workmanship coverage, Owens Corning's Platinum Protection, Malarkey's Emerald level warranties, and CertainTeed's SureStart PLUS\u2122 coverage. We walk you through every option so you can make an informed decision."
  },
  {
    q: "Does Gates Enterprises offer free inspections and estimates?",
    a: "Yes. We offer completely free roof inspections and estimates for all Lakewood homeowners. No pressure, no obligation. We assess your roof's condition, explain what we find, and give you a clear recommendation."
  }
];

const NEIGHBORHOODS = [
  "Green Mountain", "Bear Creek", "Belmar", "Applewood", "Eiber", "Morse Park",
  "Daniels Gardens", "O'Kane Park", "Carmody", "Clements", "Westland", "Foothills",
  "Molholm/Two Creeks", "Bancroft", "Union Square", "Creekside", "Lakewood Estates",
  "Meadow Glen", "Sunset Ridge", "Kendrick Lake", "Harvey Park South (bordering Lakewood)",
  "Mar Lee (bordering Lakewood)", "Glennon Heights"
];

const HAIL_EVENTS = [
  { date: "May 8, 2017", desc: "The same storm that caused over $2.3 billion in insured losses across the Denver metro dropped damaging hail across Lakewood neighborhoods, including Green Mountain and Bear Creek. This storm was a defining moment for Gates Enterprises LLC, which was founded that same month and immediately began helping neighbors restore their homes." },
  { date: "June 2018", desc: "Multiple rounds of severe hail tracked across Jefferson County throughout June, with some Lakewood neighborhoods sustaining repeated damage." },
  { date: "June 2019", desc: "A series of intense hailstorms hit Lakewood and surrounding areas, producing hailstones exceeding 1.5 inches across the Belmar and Applewood neighborhoods." },
  { date: "2021 and 2022", desc: "Both years brought significant hail events to Lakewood, with Jefferson County recording dozens of severe thunderstorm warnings each summer." },
  { date: "June 2023", desc: "Lakewood was again impacted by damaging hail during a particularly active early summer storm pattern across the Front Range." }
];

const SERVICES = [
  {
    title: "Storm Damage Restoration",
    desc: "When hail and wind tear through Lakewood, Gates Enterprises LLC is already here, ready to respond. As your locally headquartered roofing contractor, we provide fast inspections, thorough damage documentation, and expert restoration. We are an insurance restoration expert, managing the entire restoration process so your home is fully restored.",
    href: "/services/storm-hail-damage"
  },
  {
    title: "Roof Replacement",
    desc: "Whether storm damage or age has compromised your Lakewood home's roof, Gates Enterprises LLC delivers premium roof replacements using top tier materials from GAF, Owens Corning, Malarkey, and CertainTeed. Our four manufacturer certifications unlock the best extended warranty programs available in the industry.",
    href: "/services/roof-replacement"
  },
  {
    title: "Roof Repair",
    desc: "Not every roofing issue requires a full replacement. Gates Enterprises LLC handles repairs of all sizes for Lakewood homeowners. From a few missing shingles to flashing repairs and minor leak fixes, we diagnose the problem accurately and solve it the first time.",
    href: "/services/roof-repair"
  },
  {
    title: "Siding Installation and Repair",
    desc: "Hail and wind damage frequently extends beyond the roof to your siding. Gates Enterprises LLC installs and repairs siding for Lakewood homes, restoring both protection and curb appeal after storm damage.",
    href: "/services/siding-exterior"
  },
  {
    title: "Gutters",
    desc: "Your gutters are critical for directing water away from your foundation and landscaping. We install and repair gutter systems built to handle the heavy rain and rapid snowmelt that Lakewood experiences throughout the year.",
    href: "/services/gutters-guards"
  },
  {
    title: "Windows",
    desc: "Old or damaged windows waste energy and reduce your home's comfort. Gates Enterprises LLC installs high performance replacement windows that improve insulation and add lasting value to your Lakewood home.",
    href: "/services/windows"
  },
  {
    title: "Painting",
    desc: "Finish your home's exterior renovation with professional painting from your local Lakewood contractor. Gates Enterprises LLC uses quality materials and proper surface preparation to deliver finishes that withstand Colorado's intense sun, wind, and temperature changes.",
    href: "/services/paint"
  },
  {
    title: "Insurance Restoration",
    desc: "Gates Enterprises LLC is an insurance restoration expert headquartered right here in Lakewood. We manage the entire restoration process, from initial damage documentation through completed installation. Clear communication, thorough work, and a fully restored home.",
    href: "/services/insurance-claims"
  }
];

const CERTIFICATIONS = [
  {
    name: "GAF Master Elite\u00AE",
    desc: "GAF is the largest roofing manufacturer in North America. Only the top 2% of contractors qualify for Master Elite status. This gives Lakewood homeowners access to GAF's premier warranty programs, including the Golden Pledge\u00AE Limited Warranty with 25 year workmanship coverage."
  },
  {
    name: "Owens Corning Preferred Contractor",
    desc: "Owens Corning Preferred Contractors meet strict requirements for professionalism, customer satisfaction, and installation quality. Lakewood homeowners benefit from Owens Corning's enhanced warranty programs and a verified, trustworthy contractor."
  },
  {
    name: "Malarkey Emerald Pro",
    desc: "Malarkey is known for innovation and sustainability in roofing materials. As an Emerald Pro contractor, Gates Enterprises is trained to install Malarkey's advanced product lines, including their NEX\u00AE Polymer Modified asphalt shingles, which deliver exceptional durability in Colorado's harsh climate."
  },
  {
    name: "CertainTeed Shingle Master Pro\u2122",
    desc: "CertainTeed's Shingle Master Pro credential requires master level training in shingle installation. This ensures Lakewood homeowners receive installations that meet the highest standards in the industry, qualifying for CertainTeed's top warranty coverage."
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
  { label: "Roofing Contractor Parker CO", href: "/areas/parker" },
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
      <section className="lakewood-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Service Areas &rarr; Lakewood</Link>

          {/* Headquartered Here badge */}
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 100, padding: "6px 16px", marginTop: 20, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Headquartered in Lakewood</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
            Roofing Contractor in Lakewood, CO | Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Locally Headquartered. Quadruple Manufacturer Certified. 294+ Five Star Reviews. Your Neighbors. Your Roofer.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Gates Enterprises LLC is not just another roofing company that shows up after a hailstorm and disappears. We are headquartered right here in Lakewood. This is our home. We live here, work here, and raise our families here. When a storm hits Lakewood, we are already on the ground, ready to help our neighbors. Since 2017, we have built our reputation on honest assessments, quality craftsmanship, and four manufacturer certifications that fewer than 2% of roofers nationwide can claim. With 294+ Google reviews and a 4.9 star rating, Lakewood homeowners trust us because they know us.
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

      {/* ─── 2. WHY LAKEWOOD HOMEOWNERS CHOOSE GATES ─── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Lakewood Homeowners Trust Their Local Roofer
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>We Live Here. We Work Here.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises LLC is headquartered in Lakewood, CO. When you hire us, you are hiring your neighbors. We shop at the same stores, eat at the same restaurants, and deal with the same storms you do. Our reputation in this community matters to us personally, and that shows in every project we complete.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fewer than 2% of roofing contractors in the United States hold even one premium manufacturer certification. Gates Enterprises holds four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master Pro. Lakewood homeowners get access to the best warranty options and highest quality materials available, installed by a local team they can trust.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>294+ Google Reviews. 4.9 Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Our reviews are not from strangers across the country. They are from your Lakewood neighbors, from families in Green Mountain, Belmar, Applewood, and every corner of our city. We have earned a 4.9 star rating one project at a time by showing up, doing quality work, and treating every home like it is our own.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>8+ Years Serving Colorado's Front Range.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Founded in May 2017, Gates Enterprises LLC has grown from a local startup into one of the most trusted roofing companies on Colorado's Front Range. We have completed thousands of projects across Jefferson County and the greater Denver metro, and our roots remain firmly planted in Lakewood.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Specialists.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Lakewood gets hit by hail regularly, and the restoration process can be confusing. Gates Enterprises LLC is an insurance restoration expert. We document damage meticulously, provide clear reports, and manage the restoration process from your initial inspection through the final installation. You get a fully restored home without the stress.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. LAKEWOOD HAIL AND STORM HISTORY ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Lakewood, CO: Hail is a Fact of Life
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Lakewood sits at the base of the Front Range foothills, right in the path of severe thunderstorms that develop along the mountains and push eastward across the metro area. Jefferson County is one of the most frequently impacted counties in Colorado for hail damage, and Lakewood takes a direct hit year after year.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            The geography of the Front Range creates ideal conditions for hail formation. Warm moist air from the plains collides with cold air descending from the mountains, producing powerful updrafts that generate large hailstones. Lakewood's position means storms often intensify right as they reach our neighborhoods.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 20 }}>
            Notable hail events affecting Lakewood include:
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
            Hail season in Lakewood typically runs from April through September. If your roof has not been inspected after recent storms, hidden damage could be cutting years off its lifespan.
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
            Roofing and Exterior Services in Lakewood, CO
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
            Quadruple Manufacturer Certified: Your Lakewood Neighbors Hold the Industry's Top Credentials
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            When you hire Gates Enterprises LLC, you are hiring a Lakewood based team with credentials that fewer than 2% of roofers nationwide can match. Our four premium manufacturer certifications are earned through rigorous evaluation, ongoing training, and consistent customer satisfaction. They are not decorations on a website. They translate directly to better warranties, better materials, and better installations for your home.
          </p>
          <div className="lakewood-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
            Lakewood Neighborhoods We Serve. Because This is Home.
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises LLC is headquartered in Lakewood and serves every neighborhood in our city. We know these streets because we drive them every day. We know these homes because they are our neighbors' homes.
          </p>
          <div className="lakewood-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 32 }}>
            Every Lakewood neighborhood. Every type of home. One local team you can count on.
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
            What Your Lakewood Neighbors Say About Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            We have earned 294+ Google reviews and a 4.9 star rating, and many of those reviews come from right here in Lakewood. When your neighbors trust us with their homes, that is the highest compliment we can receive. Here is what they have to say.
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
            Frequently Asked Questions: Roofing in Lakewood, CO
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ─── 9. ADDITIONAL CTA SECTION ─── */}
      <CTA
        title="Your Local Lakewood Roofer. Ready When You Need Us."
        subtitle="Gates Enterprises LLC was born in Lakewood, built in Lakewood, and serves Lakewood homeowners every single day. When the next hailstorm rolls off the mountains and hits our neighborhoods, we will be here. We are not a company that chases storms across the country. We are your neighbors, and we are staying right here. If your roof needs attention, whether from recent storm damage, age, or just peace of mind, reach out today. The inspection is free. The conversation is honest. And the work is guaranteed."
      />

      {/* ─── 10. INTERNAL LINKS SECTION ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="lakewood-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
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
          .lakewood-hero { padding: 120px 20px 60px !important; }
          .lakewood-certs-grid { grid-template-columns: 1fr !important; }
          .lakewood-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .lakewood-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .lakewood-hero { padding: 110px 16px 48px !important; }
          .lakewood-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
