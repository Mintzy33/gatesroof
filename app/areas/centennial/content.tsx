"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import LocalSEOInfo from "../../components/LocalSEOInfo";
import FAQAccordion from "../../components/FAQAccordion";
import { getCityFAQItems } from "../../../lib/faq-data";
import HailScoreCard from "../../components/HailScoreCard";
import CityGallery from "../../components/CityGallery";
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
export default function CityContent() {
  const faqItems = getCityFAQItems("centennial");
  return (
    <div style={{ background: WHITE }}>
      <Header />
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Centennial</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>Roofing Contractor in Centennial, CO</h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>Arapahoe County · Premium Materials · GAF Master Elite Certified · HOA Specialists</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>Centennial homeowners in Foxridge, Willow Creek, and Smoky Hill expect premium quality — and Gates Enterprises delivers it. As a GAF Master Elite contractor, we offer the manufacturer's highest warranty tier, including the GAF Golden Pledge, making us one of very few contractors in Arapahoe County qualified to provide this level of coverage.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Request a Free Inspection and Estimate →</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Your Local Centennial Roofing Experts</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Centennial's well-maintained neighborhoods have a high standard for contractor quality, and that's exactly the kind of work Gates Enterprises delivers. Neighborhoods like Foxridge, Willow Creek, and Smoky Hill are primarily HOA governed, and homeowners expect their roofing contractor to understand that environment — from submitting the correct material specifications to HOA architectural review boards to ensuring the finished product matches what was approved.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>As one of only a handful of GAF Master Elite certified contractors in the south Denver metro, Gates Enterprises is qualified to offer the GAF Golden Pledge warranty — a fifty year, fully transferable manufacturer warranty that covers both materials and labor. For homeowners in Centennial's higher end market, this is the kind of protection that matters at resale and for long term peace of mind.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>Centennial sits in an active hail zone in Arapahoe County, and even well maintained homes in premium neighborhoods face real storm risk. Our inspectors provide thorough, photo documented assessments that are useful for insurance restoration claims and for homeowners who simply want a factual picture of their roof's current condition.</p>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Our Services in Centennial</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              { t: "Roof Replacement", d: "Full tear off and certified installation with warranties up to 50 years.", h: "/services/roof-replacement" },
              { t: "Storm and Hail Damage", d: "Free inspections and full insurance restoration support.", h: "/services/storm-hail-damage" },
              { t: "Roof Repair", d: "Fast leak repair, emergency tarping, and honest assessments.", h: "/services/roof-repair" },
              { t: "Siding and Exterior", d: "James Hardie, vinyl, and wood siding installation and repair.", h: "/services/siding-exterior" },
              { t: "Gutters and Guards", d: "Seamless gutter fabrication and gutter guard systems.", h: "/services/gutters-guards" },
              { t: "Insurance Restoration", d: "We help document damage and work with your adjuster. Xactimate certified.", h: "/services/insurance-claims" },
            ].map((s, i) => (
              <Link key={i} href={s.h} style={{ textDecoration: "none" }}>
                <div style={{ background: LIGHT_BG, borderRadius: 16, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.04)", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Why Centennial Homeowners Choose Gates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              "GAF Master Elite certified — qualified to offer GAF Golden Pledge warranty",
              "Experienced with Centennial and Arapahoe County HOA approval processes",
              "Full insurance restoration support on hail and storm claims",
              "Premium materials including impact resistant Class 4 options",
              "thousands of roofs completed across the Denver metro",
              "4.8 star Google rating from 308+ verified reviews",
              "CertainTeed Shingle Master Pro and Owens Corning Preferred certified",
              "Free inspections with detailed photo documentation",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
            <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions: Roofing in Centennial, CO"
      />

      {/* ─── NEIGHBORHOOD GUIDE ─── */}
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Roofing by Centennial Neighborhood</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Centennial spans a wide range of neighborhoods, each with different roofing needs depending on the era the homes were built and the HOA requirements in the community.</p>
          
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12, marginTop: 32 }}>Southglenn and Walnut Hills</h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>Many homes in Southglenn and Walnut Hills were built in the 1970s and 1980s. If the roof has never been replaced, it is well past its useful life. These neighborhoods have seen significant hail events over the past decade, and older three-tab shingles provide minimal impact resistance. We recommend upgrading to architectural shingles with a Class 4 impact rating, which can also qualify for insurance premium discounts.</p>

          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12, marginTop: 32 }}>Piney Creek and Cherry Knolls</h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>Built primarily in the 1980s and 1990s, homes in Piney Creek and Cherry Knolls typically have architectural shingles that may be on their second or third roof. These established communities often have HOA architectural review requirements. Gates Enterprises handles the full HOA submission process, including material specifications, color samples, and manufacturer documentation.</p>

          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12, marginTop: 32 }}>Foxfield and Greenwood South</h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>These are some of Centennial's premium neighborhoods with larger lots and higher-end homes. Homeowners here expect top-tier materials and workmanship. Our quadruple manufacturer certification (GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master) means we can offer the highest warranty tiers available from any major manufacturer, including the GAF Golden Pledge 50-year warranty.</p>

          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12, marginTop: 32 }}>The Knolls</h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>The Knolls features a mix of building eras and roofing materials. Whether you have a 1980s ranch with original three-tab shingles or a newer build with architectural shingles, our inspectors provide a thorough assessment with photo documentation so you know exactly where your roof stands.</p>
        </div>
      </section>

      {/* ─── HAIL EXPOSURE + INSURANCE ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Centennial Hail Exposure and Insurance Claims</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Centennial sits in the south Denver metro, one of the most hail-active corridors in the United States. Its proximity to the Palmer Divide means severe thunderstorms frequently track through Arapahoe County during spring and summer months. According to NOAA data, the Denver metro area averages 3 to 4 significant hail events per year, with many of them impacting south metro communities like Centennial, <Link href="/areas/highlands-ranch" style={{ color: ACCENT, textDecoration: "none" }}>Highlands Ranch</Link>, and <Link href="/areas/parker" style={{ color: ACCENT, textDecoration: "none" }}>Parker</Link>.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Most hail damage is not visible from the ground. Granule loss, hairline fractures in shingles, and compromised flashing often go undetected until a small leak turns into a major problem. That is why we recommend a professional inspection after every significant storm event in the Centennial area.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Gates Enterprises handles insurance restoration claims every day across Arapahoe County. We document damage with detailed photography, prepare Xactimate estimates that match what your insurance adjuster expects, and work directly with your insurance company throughout the process. Most homeowners only pay their deductible. <Link href="/services/insurance-claims" style={{ color: ACCENT, textDecoration: "none" }}>Learn more about our insurance claims process</Link>.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>For Centennial homeowners looking to reduce future risk, we recommend impact-resistant Class 4 shingles. These products are tested to withstand 2-inch hail impacts and many Colorado insurance providers offer premium discounts of 15% to 30% for homes with Class 4 roofing installed.</p>
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12, marginTop: 32 }}>Arapahoe County Building Permits</h3>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>Roof replacements in Centennial require a building permit through Arapahoe County. Gates Enterprises handles the entire permitting process for you, including application, inspection scheduling, and final sign-off. We pull permits on every job because it protects your warranty and your home's resale value.</p>
          <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid rgba(13,33,55,0.06)`, marginTop: 32 }}>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.7, margin: 0 }}>📖 <strong>Related guide:</strong> <Link href="/blog/centennial-colorado-hail-damage" style={{ color: ACCENT, textDecoration: "none" }}>Centennial Colorado Hail Damage: What South Metro Homeowners Need to Know</Link></p>
          </div>
        </div>
      </section>

      {/* ─── NEARBY AREAS ─── */}
      <section style={{ padding: "48px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 800, color: NAVY, marginBottom: 16 }}>We Also Serve These Nearby Communities</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { name: "Parker", slug: "parker" },
              { name: "Highlands Ranch", slug: "highlands-ranch" },
              { name: "Littleton", slug: "littleton" },
              { name: "Aurora", slug: "aurora" },
              { name: "Denver", slug: "denver" },
              { name: "Castle Rock", slug: "castle-rock" },
            ].map((city) => (
              <Link key={city.slug} href={`/areas/${city.slug}`} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 16px", background: LIGHT_BG, borderRadius: 100, border: `1px solid rgba(37,99,235,0.1)` }}>{city.name}</Link>
            ))}
          </div>
        </div>
      </section>

<CTA title="Need a roofer in Centennial?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection. We offer the premium warranties and HOA expertise that Centennial homeowners expect." />

      {/* ─── SERVICES IN CENTENNIAL ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Centennial, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Centennial.</p>
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
              <Link key={svc.s} href={`/services/${svc.s}/centennial`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HailScoreCard citySlug="centennial" cityName="Centennial" />

      <LocalSEOInfo citySlug="centennial" cityName="Centennial" showMapsLink />

      <Footer />
    </div>
  );
}
