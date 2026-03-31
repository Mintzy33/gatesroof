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
const RED = "#DC2626";
const GREEN = "#16A34A";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const COMPARISON_ROWS = [
  { label: "Local Colorado business", gates: true, chaser: false },
  { label: "Manufacturer certifications", gates: true, chaser: false },
  { label: "308+ verified Google reviews", gates: true, chaser: false },
  { label: "Warranty backed by manufacturer AND workmanship guarantee", gates: true, chaser: false },
  { label: "Will be here for warranty claims in 5+ years", gates: true, chaser: false },
  { label: "Free inspections with no pressure", gates: true, chaser: false },
  { label: "Insurance restoration expertise", gates: true, chaser: false },
  { label: "Permanent office and local team", gates: true, chaser: false },
  { label: "Licensed and insured in Colorado", gates: true, chaser: false },
  { label: "References from your neighborhood", gates: true, chaser: false },
];

const FAQS = [
  {
    q: "What is a storm chaser in roofing?",
    a: "A storm chaser is an out-of-state roofing contractor who follows severe weather events from city to city. After a major hail or wind storm, they arrive in affected areas, knock on doors, and offer quick roof repairs or replacements. Once the work is done and they have been paid, they move on to the next storm, often leaving homeowners without warranty support or recourse if problems arise."
  },
  {
    q: "Why are storm chasers risky for homeowners?",
    a: "Storm chasers carry several risks. They have no local presence, so if your roof leaks six months later, you cannot reach them. Their warranties are often meaningless because the company may not exist or be reachable when you need service. They frequently use subcontractors with unknown qualifications. And they often use high-pressure sales tactics to get homeowners to sign contracts on the spot before they can research alternatives."
  },
  {
    q: "How can I tell if a roofer is a storm chaser?",
    a: "Look for these warning signs: they knocked on your door unsolicited right after a storm, they have an out-of-state phone number or address, they cannot provide local references, they pressure you to sign immediately, they offer to cover your insurance deductible (which is illegal in Colorado), or they have few or no Google reviews in your area. A legitimate local contractor will have years of reviews, a permanent local presence, and will never pressure you into a decision."
  },
  {
    q: "Is Gates Enterprises a local Colorado roofing company?",
    a: "Yes. Gates Enterprises has been roofing along Colorado's Front Range since 2017. They have a permanent local presence, 308+ Google reviews from Colorado homeowners, and hold all four major manufacturer certifications. They are not going anywhere, and their warranties are backed by both the manufacturer and their own workmanship guarantee."
  },
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

export default function StormChasersContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 6px", fontSize: 13 }}>&rarr;</span>
          <Link href="/compare" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Compare</Link>
          <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 6px", fontSize: 13 }}>&rarr;</span>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>vs Storm Chasers</span>

          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Gates Enterprises vs Storm Chasers
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Why Choosing a Local, Certified Contractor Matters
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            After every major hail storm in Colorado, out-of-state contractors flood neighborhoods looking for quick jobs. They knock on your door, promise fast repairs, and disappear once they are paid. Here is how to spot them and why a certified local contractor is always the better choice.
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

      {/* WHAT ARE STORM CHASERS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Are Storm Chasers?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Storm chasers are roofing contractors who operate out of state and follow severe weather events across the country. When a major hailstorm hits Colorado, they show up within days, going door to door in affected neighborhoods. Their goal is simple: sign as many contracts as possible, complete the work quickly, collect payment, and move on to the next storm in another state.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            They often use aggressive sales tactics, urgency language ("your roof is severely damaged and needs immediate replacement"), and may even offer to waive your insurance deductible, which is illegal in Colorado.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            On the surface, their offer might sound appealing. But the risks far outweigh any short-term convenience.
          </p>
        </div>
      </section>

      {/* RISKS OF STORM CHASERS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            The Risks of Hiring a Storm Chaser
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "No Local Presence", desc: "Storm chasers do not have an office, warehouse, or team in Colorado. Once they leave, they are gone. If your roof develops a leak six months later, you have no one to call." },
              { title: "Worthless Warranties", desc: "A warranty is only as good as the company behind it. Storm chasers often provide warranties on paper, but when you try to file a claim, the phone number is disconnected or the company has dissolved. Without manufacturer certifications, they cannot offer the extended warranties that protect you long term." },
              { title: "No Accountability", desc: "If something goes wrong with the installation, a local contractor has a reputation to protect. A storm chaser has no local reviews, no community ties, and no reason to come back and make it right." },
              { title: "High-Pressure Sales Tactics", desc: "Storm chasers rely on urgency and fear. They want you to sign before you have time to research or get other estimates. Legitimate roofing companies give you time to make an informed decision." },
              { title: "Subcontractor Roulette", desc: "Many storm chasers hire temporary local labor to do the actual work. You have no idea who is on your roof, what their qualifications are, or whether they will follow manufacturer installation guidelines." },
              { title: "Deductible Fraud Risk", desc: "Offering to pay or waive your insurance deductible is illegal in Colorado. Storm chasers who make this offer are putting you at legal risk and signaling that they do not operate ethically." },
            ].map((risk, i) => (
              <div key={i} style={{ display: "flex", gap: 16, background: WHITE, borderRadius: 12, padding: "24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <WarningIcon />
                <div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{risk.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON GRID */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Side-by-Side Comparison
          </h2>

          {/* Table Header */}
          <div className="compare-grid-header" style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", gap: 0, borderBottom: `2px solid ${NAVY}`, paddingBottom: 16, marginBottom: 8 }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>
              What Matters
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, textTransform: "uppercase" as const, letterSpacing: 0.5, textAlign: "center" as const }}>
              Gates Enterprises
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: TEXT_LIGHT, textTransform: "uppercase" as const, letterSpacing: 0.5, textAlign: "center" as const }}>
              Storm Chasers
            </div>
          </div>

          {/* Table Rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div key={i} className="compare-grid-row" style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", gap: 0, padding: "16px 0", borderBottom: "1px solid rgba(13,33,55,0.06)", alignItems: "center" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.5 }}>
                {row.label}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {row.gates ? <CheckIcon /> : <XIcon />}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {row.chaser ? <CheckIcon /> : <XIcon />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GATES ADVANTAGE */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            The Gates Enterprises Advantage
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises is everything a storm chaser is not. Here is what you get when you choose a certified local contractor.
          </p>

          <div className="gates-advantage-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { title: "Local Since 2017", desc: "Gates Enterprises has been roofing along Colorado's Front Range since 2017. A permanent, local team that is here today and will be here when you need them." },
              { title: "Quadruple Certified", desc: "The only roofer in Colorado certified by all four major manufacturers: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro." },
              { title: "308+ Reviews, 4.8 Stars", desc: "Over 308 verified Google reviews from real Colorado homeowners with a 4.8 star average. Years of consistent five-star performance, not a flash in the pan." },
              { title: "Real Warranty Protection", desc: "Your warranty is backed by both the manufacturer AND a workmanship guarantee from Gates Enterprises. Not a piece of paper from a company that will not exist next year." },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Colorado Homeowners Say
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            Real reviews from real homeowners who chose a certified local contractor over storm chasers.
          </p>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTA
        title="Choose a Roofer Who Will Be Here Tomorrow"
        subtitle="Free inspections. Quadruple certified quality. 308+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .compare-grid-header, .compare-grid-row {
            grid-template-columns: 1fr 100px 100px !important;
          }
          .gates-advantage-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .compare-grid-header, .compare-grid-row {
            grid-template-columns: 1fr 80px 80px !important;
          }
        }
      `}</style>
    </div>
  );
}
