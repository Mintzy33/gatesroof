"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ReviewCarousel from "../components/ReviewCarousel";

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
    q: "Who is the best roofer in Aurora, Colorado?",
    a: "Gates Enterprises LLC is widely regarded as one of the top roofing companies serving Aurora. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 308+ Google reviews and a 4.8 star rating, their reputation is built on consistent results."
  },
  {
    q: "How often does Aurora get hail damage?",
    a: "Aurora sits along Colorado's Front Range hail corridor and experiences significant hail events nearly every year. Some years bring multiple storms with golf ball sized or larger hailstones. The eastern portions of Aurora tend to see the largest and most frequent hail. Regular roof inspections after storms are essential."
  },
  {
    q: "What certifications should my Aurora roofer have?",
    a: "The most valuable certifications come from the major shingle manufacturers: GAF, Owens Corning, Malarkey, and CertainTeed. These certifications are earned through demonstrated quality, not purchased. They unlock the best warranty programs. Gates Enterprises holds all four."
  },
  {
    q: "Does Gates Enterprises offer free roof inspections in Aurora?",
    a: "Yes. Gates Enterprises provides free, no obligation roof inspections for Aurora homeowners. They assess your roof honestly, document findings with photos, and deliver a clear recommendation with no pressure to commit."
  },
  {
    q: "Can Gates Enterprises work with my insurance company on hail damage?",
    a: "Yes. Gates Enterprises is an insurance restoration specialist. They perform detailed damage inspections, create thorough documentation, and communicate directly with your insurance company throughout the restoration process."
  }
];

const CHECKLIST = [
  { label: "Manufacturer certifications from all four major brands" },
  { label: "308+ verified Google reviews" },
  { label: "4.8 star average rating" },
  { label: "8+ years serving Colorado's Front Range" },
  { label: "Proprietary HailScore radar technology" },
  { label: "Free inspections with zero pressure" },
  { label: "Insurance restoration expertise" },
  { label: "Products from GAF, Owens Corning, Malarkey, and CertainTeed" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(13,33,55,0.08)" }}>
      <button onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const, gap: 16 }}>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: NAVY, lineHeight: 1.5 }}>{q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: "0 0 24px", paddingRight: 36 }}>{a}</p>
      </div>
    </div>
  );
}

export default function BestRooferAuroraContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Best Roofer Aurora</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Best Roofing Company in Aurora, Colorado (2026)
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Colorado's Only Quadruple Certified Roofing Contractor. 308+ Reviews. 4.8 Stars.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Aurora is Colorado's third largest city and one of the most hail impacted communities along the Front Range. Stretching from the eastern edge of Denver across Arapahoe and Adams counties, Aurora's sprawling neighborhoods face severe storm exposure every year. When it is time to repair or replace your roof, the contractor you choose matters more here than almost anywhere else. This guide covers what to look for in an Aurora roofing company and why Gates Enterprises LLC consistently rises to the top.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO LOOK FOR */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Aurora Homeowners Should Look for in a Roofer
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Aurora's size means there is no shortage of roofing companies knocking on doors after every storm. Here is how to separate the professionals from the fly by night operators.
          </p>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Manufacturer Certifications</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The most reliable indicator of a quality roofer is manufacturer certification. GAF, Owens Corning, Malarkey, and CertainTeed each vet contractors for installation quality, business practices, and customer satisfaction before granting certification. Most roofers hold none. Gates Enterprises LLC holds all four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. No other roofer in Colorado can say the same.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Hundreds of Verified Reviews</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              A few five star reviews can be bought or faked. Hundreds cannot. Gates Enterprises has earned 308+ Google reviews with a 4.8 star average over years of consistent work across the Denver metro, including Aurora. That volume of positive feedback reflects genuine, repeatable quality.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Radar Backed Hail Data with HailScore</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Aurora's eastern neighborhoods sit where storms from the mountains meet the open plains, creating some of the most intense hail in the state. Gates Enterprises developed <Link href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>HailScore</Link>, a proprietary tool that pulls NOAA radar data to reveal the exact hail history for any Aurora address. Before the inspector even climbs your roof, they know which storms have impacted your home, the hailstone sizes, and how many events your property has endured. No other Aurora roofer offers this.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Experience</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              With Aurora's hail exposure, many roof replacements involve insurance claims. The best roofers understand how to document damage comprehensively, communicate with adjusters, and ensure your property is fully restored. Gates Enterprises is an insurance restoration specialist that has helped thousands of Colorado homeowners navigate the process.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Local Presence, Not Storm Chasing</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              After every major storm, Aurora gets flooded with out of state contractors who knock on doors, offer rock bottom prices, do the work, and vanish. Gates Enterprises has been roofing along the Front Range since 2017 and is headquartered in the Denver metro. They will be here for warranty service, follow ups, and anything else you need years down the road.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            How Gates Enterprises Stacks Up
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: WHITE, borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, lineHeight: 1.6 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Quadruple Certified: What It Means for Aurora Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Fewer than 2% of roofers nationwide hold even one premium manufacturer certification. Gates Enterprises holds all four, giving Aurora homeowners unmatched product selection and warranty protection.
          </p>
          <div className="best-roofer-aurora-certs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
            {[
              { name: "GAF Master Elite\u00AE", desc: "Top 2% of roofing contractors in North America. Access to GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage." },
              { name: "Owens Corning Preferred", desc: "Highest tier in Owens Corning's contractor network. Enhanced warranty programs and premium product access." },
              { name: "Malarkey Emerald Premium", desc: "Certified expertise in Malarkey's NEX Polymer Modified asphalt technology for superior Colorado durability." },
              { name: "CertainTeed Shingle Master Pro\u2122", desc: "Master level training in advanced shingle application. Access to CertainTeed's strongest warranty programs." },
            ].map((cert, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{cert.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Aurora Homeowners Are Saying
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.8 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(308+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More
          </h2>
          <div className="best-roofer-aurora-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Best Roofer Denver", href: "/best-roofer-denver" },
              { label: "Roofing Contractor Aurora", href: "/areas/aurora" },
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
              { label: "Impact Resistant Shingles", href: "/impact-resistant-shingles" },
              { label: "Our Reviews", href: "/reviews" },
              { label: "Contact Us", href: "/contact" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Aurora's Hail Season Demands Colorado's Best Roofer"
        subtitle="Free inspections. Quadruple certified quality. 308+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .best-roofer-aurora-certs { grid-template-columns: 1fr !important; }
          .best-roofer-aurora-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
