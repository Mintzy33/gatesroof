"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../components/GSAPAnimations";
import { Shield, Award, CheckCircle, DollarSign, Hammer, ShieldCheck, MapPin, Zap, Star, HelpCircle } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const BRANDS = [
  {
    name: "GAF Timberline AS II",
    cert: "Master Elite",
    desc: "The most popular impact resistant shingle in America. StainGuard Plus algae protection, LayerLock technology for 130 MPH wind resistance, and a lifetime limited warranty.",
    highlight: "America\u2019s #1 selling shingle brand",
  },
  {
    name: "Owens Corning Duration FLEX",
    cert: "Preferred Contractor",
    desc: "SBS modified asphalt makes this shingle flexible even in extreme cold. TruDefinition color technology, patented SureNail strip, and a lifetime limited warranty.",
    highlight: "Flexible in extreme cold",
  },
  {
    name: "Malarkey Vista AR",
    cert: "Emerald Pro",
    desc: "Rubberized SBS polymer modified asphalt for superior impact and flexibility. NEX polymer modified technology, Scotchgard protector, and upcycled materials in every shingle.",
    highlight: "Sustainable manufacturing",
  },
  {
    name: "CertainTeed Presidential Impact",
    cert: "Shingle Master Pro",
    desc: "Premium luxury profile with Class 4 impact resistance. Thick, dimensional appearance that mimics natural slate. Backed by CertainTeed\u2019s SureStart Plus warranty protection.",
    highlight: "Luxury slate appearance",
  },
];

const BENEFITS = [
  { Icon: DollarSign, bold: "Insurance premium savings.", rest: "Many Colorado homeowners save up to 28% on their homeowner\u2019s insurance premiums with a Class 4 rated roof. Savings vary by carrier and policy." },
  { Icon: Shield, bold: "Superior storm protection.", rest: "Class 4 shingles withstand impacts that would crack or split standard shingles. In Colorado\u2019s hail corridor, that means fewer claims and less damage." },
  { Icon: Zap, bold: "Longer product life.", rest: "Impact resistant shingles use enhanced polymers and rubberized asphalt that extend the life of your roof beyond standard architectural shingles." },
  { Icon: DollarSign, bold: "Higher home resale value.", rest: "Buyers in Colorado specifically look for impact resistant roofs. It\u2019s a selling point that translates directly to value." },
  { Icon: CheckCircle, bold: "Colorado law on your side.", rest: "CRS 10-4-110.8 requires Colorado insurers to offer premium discounts for impact resistant roofing. Your savings are backed by state law." },
  { Icon: Award, bold: "Manufacturer backed warranties.", rest: "Every impact resistant shingle we install comes with a manufacturer warranty, not just a contractor warranty. If Gates ever closed its doors, your warranty still stands." },
];

const FAQS = [
  { q: "What are Class 4 impact resistant shingles?", a: "Class 4 is the highest impact resistance rating under the UL 2218 testing standard. During the test, a two-inch steel ball is dropped from 20 feet onto the shingle. To earn a Class 4 rating, the shingle must show no cracking, splitting, or fracturing after repeated impacts. It\u2019s the gold standard for hail prone regions like Colorado." },
  { q: "How much will I save on insurance?", a: "Many Colorado homeowners save up to 28% on their homeowner\u2019s insurance premiums after installing a Class 4 impact resistant roof. Savings vary by insurance carrier and policy. We recommend contacting your insurance company for a specific quote based on your policy." },
  { q: "Does Colorado law require insurance discounts for impact resistant roofs?", a: "Yes. Colorado Revised Statutes (CRS 10-4-110.8) requires insurance companies operating in Colorado to offer premium discounts or credits for roofs constructed with impact resistant materials that meet the UL 2218 Class 4 standard." },
  { q: "Which brand of impact resistant shingle is best?", a: "All four major manufacturers produce excellent Class 4 shingles. GAF Timberline AS II, Owens Corning Duration FLEX, Malarkey Vista AR, and CertainTeed Presidential Impact each have strengths. Because Gates Enterprises holds the highest certification from all four, we can recommend the best option for your specific situation without brand bias." },
  { q: "Can I upgrade to impact resistant shingles during an insurance claim?", a: "In many cases, yes. Your insurance company covers the cost of a like-for-like replacement. The upgrade cost to impact resistant shingles is often modest, and the long-term insurance premium savings typically offset the difference within a few years." },
  { q: "How long do impact resistant shingles last?", a: "Most Class 4 impact resistant shingles carry lifetime limited warranties from the manufacturer. The enhanced polymers and rubberized asphalt used in impact resistant shingles generally extend the functional life of the roof compared to standard architectural shingles." },
  { q: "Do impact resistant shingles look different from regular shingles?", a: "No. Modern impact resistant shingles are virtually indistinguishable from standard architectural shingles. They come in the same colors, profiles, and styles. The CertainTeed Presidential Impact actually offers a premium luxury appearance that mimics natural slate." },
];

export default function ImpactResistantContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="ir-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Impact Resistant Shingles
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Class 4 Impact Resistant Shingles for Colorado Homes
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 12, maxWidth: 700 }}>
            Protect your home from Colorado hail with the highest rated impact resistant shingles on the market. Installed by Colorado&apos;s only quadruple certified roofing contractor.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: GOLD, lineHeight: 1.6, marginBottom: 32, maxWidth: 700, fontWeight: 600 }}>
            Many Colorado homeowners save up to 28% on insurance premiums with a Class 4 roof.
          </p>
          <div className="ir-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHAT ARE IMPACT RESISTANT SHINGLES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE STANDARD</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              What Are Class 4 Impact Resistant Shingles?
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto 16px" }}>
              Impact resistance in roofing shingles is measured by the UL 2218 test. A two-inch steel ball is dropped from 20 feet onto the shingle. Class 4 is the highest rating, meaning the shingle showed no cracking, splitting, or fracturing after repeated impacts.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              In Colorado, where hail is a fact of life, Class 4 shingles are the smart choice. They resist the kind of damage that destroys standard shingles, and Colorado law requires your insurance company to reward you for installing them.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="ir-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={28} suffix="%" duration={2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Potential Premium Savings*</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>4</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Manufacturer Certifications</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={7204} suffix="+" duration={2.2} delay={0.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Roofs Completed</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={10} suffix="+" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Years in Colorado</div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>WHY UPGRADE</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Benefits of Impact Resistant Shingles</h2>
          </div>
          <StaggerCards
            className="ir-benefits-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {BENEFITS.map((item, i) => (
              <div key={i} className="ir-benefit-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 0, lineHeight: 1.3 }}>{item.bold}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.rest}</p>
              </div>
            ))}
          </StaggerCards>
        </section>
      </ScrollReveal>

      {/* ─── UL 2218 EXPLAINED ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE SCIENCE</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>UL 2218 Testing Standard Explained</h2>
            </div>
            <StaggerCards
              className="ir-class-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
              stagger={0.1}
            >
              {[
                { cls: "Class 1", ball: '1.25"', height: "12 ft", desc: "Minimal impact resistance. Fails under moderate hail." },
                { cls: "Class 2", ball: '1.50"', height: "15 ft", desc: "Low impact resistance. Vulnerable in Colorado storms." },
                { cls: "Class 3", ball: '1.75"', height: "17 ft", desc: "Moderate resistance. Better, but not hail corridor rated." },
                { cls: "Class 4", ball: '2.00"', height: "20 ft", desc: "Highest rating. The Colorado standard. No damage after impact.", accent: true },
              ].map((c, i) => (
                <div key={i} style={{ background: c.accent ? NAVY : WHITE, borderRadius: 20, padding: "28px 20px", textAlign: "center" as const, border: c.accent ? `2px solid ${GOLD}` : "2px solid transparent", transition: "transform 0.25s ease", position: "relative", overflow: "hidden" }}>
                  {c.accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: GOLD }} />}
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: c.accent ? GOLD : ACCENT, letterSpacing: "0.15em", marginBottom: 8 }}>{c.cls.toUpperCase()}</div>
                  <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: c.accent ? WHITE : DEEP, marginBottom: 4 }}>{c.ball}</div>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: c.accent ? "rgba(255,255,255,0.5)" : TEXT_LIGHT, marginBottom: 12 }}>steel ball from {c.height}</div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: c.accent ? "rgba(255,255,255,0.75)" : TEXT_LIGHT, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── BRANDS WE INSTALL ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>QUADRUPLE CERTIFIED</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 12px" }}>We Install All Four Major Brands</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.75, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              Gates Enterprises holds the highest certification from every major shingle manufacturer. That means we recommend the best product for your home, not the one that pays us the most.
            </p>
          </div>
          <StaggerCards
            className="ir-brands-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            stagger={0.12}
          >
            {BRANDS.map((b, i) => (
              <div key={i} className="ir-brand-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 28px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Star size={24} color={ACCENT} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, margin: 0, lineHeight: 1.3 }}>{b.name}</h3>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: ACCENT }}>{b.cert} Certified</span>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: "0 0 12px" }}>{b.desc}</p>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: GOLD, background: "rgba(212,168,83,0.1)", padding: "4px 12px", borderRadius: 100 }}>{b.highlight}</span>
              </div>
            ))}
          </StaggerCards>
        </section>
      </ScrollReveal>

      {/* ─── MID CTA ─── */}
      <section className="ir-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Ready to Upgrade to Impact Resistant Shingles?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free inspection and estimate. We&apos;ll help you choose the right product and maximize your insurance savings.
          </p>
          <div className="ir-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Estimate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTERNAL LINKS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>RELATED SERVICES</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: DEEP, margin: "0 0 32px" }}>Learn More</h2>
            <StaggerCards
              className="ir-related"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
              stagger={0.1}
            >
              <Link href="/services/roof-replacement" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <Hammer size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Roof Replacement</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Full tear off, manufacturer certified installation, and warranties up to 50 years.</p>
              </Link>
              <Link href="/insurance-claims" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <ShieldCheck size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Insurance Claims</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>We help document damage and support you through the entire insurance claim process.</p>
              </Link>
              <Link href="/services/storm-hail-damage" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <Shield size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Storm &amp; Hail Damage</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Free storm damage inspections. We document everything and help you understand your options.</p>
              </Link>
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── FAQ ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COMMON QUESTIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Frequently Asked Questions</h2>
            </div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 16, marginBottom: 12, border: "1px solid rgba(13,33,55,0.05)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: DEEP, margin: 0, lineHeight: 1.4 }}>{faq.q}</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: 16, transition: "transform 0.3s ease", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, padding: "0 28px 24px", margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── BOTTOM CTA ─── */}
      <CTA title="Protect Your Home With Impact Resistant Shingles" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection and estimate. We'll recommend the right Class 4 shingle for your home and help you start saving on insurance." />

      {/* ─── SERVICE AREAS ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Impact Resistant Shingle Installation Areas</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>We install Class 4 impact resistant shingles across the Colorado Front Range.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
            {[
              { n: "Denver", s: "denver" }, { n: "Lakewood", s: "lakewood" }, { n: "Aurora", s: "aurora" },
              { n: "Parker", s: "parker" }, { n: "Centennial", s: "centennial" }, { n: "Arvada", s: "arvada" },
              { n: "Westminster", s: "westminster" }, { n: "Thornton", s: "thornton" }, { n: "Boulder", s: "boulder" },
              { n: "Littleton", s: "littleton" }, { n: "Golden", s: "golden" }, { n: "Highlands Ranch", s: "highlands-ranch" },
            ].map((c) => (
              <Link key={c.s} href={`/areas/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section style={{ padding: "32px 24px", background: WHITE, borderTop: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, textAlign: "center" as const }}>
            *Insurance premium savings vary by carrier and policy. The 28% figure represents savings reported by some Colorado homeowners and is not a guarantee. Contact your insurance company for specific discount information based on your policy. Colorado Revised Statutes (CRS 10-4-110.8) requires insurers to offer discounts for impact resistant roofing materials.
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        .ir-benefit-card:hover, .ir-brand-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .ir-hero { min-height: 65vh !important; }
          .ir-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .ir-benefits-grid { grid-template-columns: 1fr !important; }
          .ir-brands-grid { grid-template-columns: 1fr !important; }
          .ir-class-grid { grid-template-columns: 1fr 1fr !important; }
          .ir-related { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .ir-mid-cta-btns { flex-direction: column !important; }
          .ir-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .ir-stats { gap: 20px !important; }
          .ir-hero-btns { flex-direction: column !important; }
          .ir-hero-btns a { text-align: center !important; }
          .ir-class-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
