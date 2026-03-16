"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../components/GSAPAnimations";
import { Shield, Award, CheckCircle, DollarSign, Hammer, ShieldCheck, MapPin, Zap } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const SHINGLE_BRANDS = [
  {
    name: "GAF Timberline AS II",
    manufacturer: "GAF",
    highlights: ["Class 4 impact rated", "StainGuard Plus algae protection", "LayerLock technology for 130 MPH wind warranty", "America\u2019s #1 selling shingle brand"],
    warranty: "Lifetime limited with up to 25 year workmanship (Golden Pledge)",
  },
  {
    name: "Owens Corning Duration FLEX",
    manufacturer: "Owens Corning",
    highlights: ["Class 4 impact rated", "SureNail technology for enhanced wind resistance", "Patented polymer modified asphalt", "Flexible design resists cracking in cold weather"],
    warranty: "Lifetime limited with up to 25 year workmanship",
  },
  {
    name: "Malarkey Vista AR",
    manufacturer: "Malarkey",
    highlights: ["Class 4 impact rated", "Rubberized SBS modified asphalt", "Scotchgard protector from 3M", "NEX polymer modified for flexibility and durability"],
    warranty: "Lifetime limited with 10 year workmanship",
  },
  {
    name: "CertainTeed Presidential Impact",
    manufacturer: "CertainTeed",
    highlights: ["Class 4 impact rated", "Luxury presidential shake appearance", "Quad-layer construction for maximum durability", "StreakFighter algae resistance"],
    warranty: "Lifetime limited with up to 25 year workmanship (5 Star)",
  },
];

const UL_CLASSES = [
  { cls: "Class 1", ball: '1.25"', desc: "Basic impact resistance" },
  { cls: "Class 2", ball: '1.50"', desc: "Moderate impact resistance" },
  { cls: "Class 3", ball: '1.75"', desc: "High impact resistance" },
  { cls: "Class 4", ball: '2.00"', desc: "Maximum impact resistance", highlight: true },
];

const BENEFITS = [
  { Icon: DollarSign, bold: "Insurance premium savings.", rest: "Many Colorado homeowners save up to 28% on their homeowner\u2019s insurance premiums with Class 4 shingles. Colorado law requires insurers to offer discounts for impact resistant roofing. Savings vary by carrier and policy." },
  { Icon: Shield, bold: "Superior hail protection.", rest: "Class 4 shingles are engineered to withstand impacts that would crack or split standard shingles. In hail prone Colorado, that means fewer claims and a roof that lasts." },
  { Icon: Zap, bold: "Higher wind resistance.", rest: "Most Class 4 shingles carry wind warranties of 110 to 130 MPH. Colorado\u2019s Front Range is known for sudden high wind events. These shingles are built for it." },
  { Icon: CheckCircle, bold: "Longer lifespan.", rest: "The same engineering that makes these shingles impact resistant also makes them more durable overall. Expect a longer service life compared to standard architectural shingles." },
];

const FAQS = [
  { q: "What are Class 4 impact resistant shingles?", a: "Class 4 is the highest impact resistance rating for asphalt shingles under the UL 2218 testing standard. A 2 inch steel ball is dropped from 20 feet onto the shingle. To earn a Class 4 rating, the shingle must show no cracking, splitting, or tearing after two strikes in the same spot." },
  { q: "How much will I save on insurance?", a: "Many Colorado homeowners save up to 28% on their homeowner\u2019s insurance premiums with Class 4 impact resistant shingles. Colorado law requires insurers to offer discounts for impact resistant roofing. Savings vary by carrier and policy. Contact your insurance company for your specific discount amount." },
  { q: "Are Class 4 shingles more expensive?", a: "Yes, Class 4 shingles typically cost more than standard architectural shingles. However, the insurance premium savings often offset the price difference within a few years. And if your roof replacement is covered by an insurance claim, you may be able to upgrade to Class 4 at little or no additional cost depending on your policy." },
  { q: "Can I get Class 4 shingles through an insurance claim?", a: "In many cases, yes. If your insurance claim covers a full roof replacement, the approved amount may cover Class 4 shingles, or the upgrade cost may be minimal. Every policy is different. We help you understand your options during the estimate process." },
  { q: "Which Class 4 shingle is the best?", a: "Each manufacturer offers something slightly different. GAF Timberline AS II is the most popular. Malarkey Vista AR uses rubberized asphalt for flexibility. CertainTeed Presidential Impact has a luxury shake look. Owens Corning Duration FLEX excels in cold weather. We\u2019ll walk you through the differences and help you choose based on your home, budget, and priorities." },
  { q: "Does Gates Enterprises install all four brands?", a: "Yes. Gates Enterprises is quadruple manufacturer certified: GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Pro. We install Class 4 shingles from all four. No other local contractor holds all four certifications." },
  { q: "How long do Class 4 shingles last?", a: "Most Class 4 shingles carry lifetime limited warranties on materials, with workmanship coverage ranging from 10 to 25 years depending on the manufacturer and warranty tier. With proper installation, expect 30 to 50 years of service life." },
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
            Built to survive Colorado hail. Tested to the UL 2218 standard. And many homeowners save up to 28% on their insurance premiums.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: GOLD, lineHeight: 1.6, marginBottom: 32, maxWidth: 700, fontWeight: 600 }}>
            Colorado law requires insurers to offer discounts for impact resistant roofing.
          </p>
          <div className="ir-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHAT ARE CLASS 4 SHINGLES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div className="ir-split" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE BASICS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: DEEP, margin: "0 0 16px", lineHeight: 1.15 }}>
                What Are Class 4 Impact Resistant Shingles?
              </h2>
              <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, marginBottom: 16 }}>
                Class 4 is the highest impact resistance rating a shingle can earn. It means the shingle has been tested to the UL 2218 standard and can withstand a 2 inch steel ball dropped from 20 feet without cracking, splitting, or tearing.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, margin: 0 }}>
                For Colorado homeowners, that matters. The Front Range gets hit with hail regularly. Class 4 shingles are specifically engineered to survive the kind of impacts that destroy standard architectural shingles. They cost a bit more upfront, but between insurance premium savings and fewer claims, they often pay for themselves.
              </p>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/images/hail-on-shingles.jpg"
                alt="Hailstones on roof shingles after a Colorado hailstorm"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── UL 2218 EXPLAINER ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: DEEP, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,168,83,0.06) 0%, transparent 50%)" }} />
          <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>TESTING STANDARD</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px" }}>UL 2218 Impact Test, Explained</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", maxWidth: 650, margin: "0 auto" }}>
                The UL 2218 test fires steel balls at shingles to simulate hail. Larger balls = higher class rating. Class 4 is the toughest test there is.
              </p>
            </div>
            <StaggerCards
              className="ir-ul-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
              stagger={0.1}
            >
              {UL_CLASSES.map((item, i) => (
                <div key={i} style={{ background: item.highlight ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.04)", border: item.highlight ? `2px solid ${ACCENT}` : "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 20px", textAlign: "center" as const }}>
                  <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 800, color: item.highlight ? ACCENT : GOLD, marginBottom: 4 }}>{item.ball}</div>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Steel Ball Diameter</div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: item.highlight ? WHITE : "rgba(255,255,255,0.85)", marginBottom: 6 }}>{item.cls}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.55)", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── INSURANCE SAVINGS HOOK ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE BIG SAVINGS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              Save Up to 28% on Your Homeowner&apos;s Insurance
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto 16px" }}>
              Colorado law requires insurance companies to offer premium discounts for homes with impact resistant roofing. Many homeowners save up to 28% on their annual premiums after installing Class 4 shingles. On a $2,000 per year policy, that could be over $500 back in your pocket every year.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, maxWidth: 650, margin: "0 auto 32px" }}>
              Savings vary by carrier and policy. Contact your insurance company for your specific discount. We can provide documentation of your Class 4 shingle installation for your insurance provider.
            </p>
            <div className="ir-savings-stats" style={{ display: "flex", justifyContent: "center", gap: 60 }}>
              <div>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 800, color: ACCENT }}>
                  <CounterGSAP end={28} suffix="%" duration={2} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 4 }}>Potential Premium Savings</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 800, color: ACCENT }}>
                  $<CounterGSAP end={500} suffix="+" duration={2} delay={0.3} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 4 }}>Estimated Annual Savings</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── BENEFITS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>WHY CLASS 4</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Benefits of Impact Resistant Shingles</h2>
          </div>
          <StaggerCards
            className="ir-benefits-grid"
            style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            stagger={0.12}
          >
            {BENEFITS.map((item, i) => (
              <div key={i} className="ir-benefit-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", gap: 16, alignItems: "flex-start", cursor: "default" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 6, lineHeight: 1.3 }}>{item.bold}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.rest}</p>
                </div>
              </div>
            ))}
          </StaggerCards>
        </section>
      </ScrollReveal>

      {/* ─── SHINGLE BRANDS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>OUR PRODUCTS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 12px" }}>Class 4 Shingles We Install</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT_LIGHT, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Gates Enterprises is quadruple manufacturer certified. We install Class 4 shingles from all four major brands.
          </p>
        </div>
        <StaggerCards
          className="ir-brands-grid"
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
          stagger={0.1}
        >
          {SHINGLE_BRANDS.map((brand, i) => (
            <div key={i} className="ir-brand-card" style={{ background: WHITE, borderRadius: 20, padding: "28px 20px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", cursor: "default" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.15em", marginBottom: 8 }}>{brand.manufacturer.toUpperCase()}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 16, lineHeight: 1.3 }}>{brand.name}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                {brand.highlights.map((h, j) => (
                  <li key={j} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                    <span style={{ position: "absolute", left: 0, color: ACCENT }}>&#10003;</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid rgba(13,33,55,0.06)", paddingTop: 12 }}>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: TEXT_LIGHT, letterSpacing: "0.1em", marginBottom: 4 }}>WARRANTY</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.5, color: TEXT, margin: 0 }}>{brand.warranty}</p>
              </div>
            </div>
          ))}
        </StaggerCards>
      </section>

      {/* ─── FREE UPGRADE ANGLE ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: DEEP, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 50%)" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>INSURANCE CLAIMS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.15 }}>
              Upgrading to Class 4 Through Your Insurance Claim
            </h2>
            <div style={{ width: 48, height: 3, background: GOLD, borderRadius: 2, margin: "0 auto 24px" }} />
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.8)", maxWidth: 700, margin: "0 auto 16px" }}>
              If your roof is being replaced through an insurance claim, you may be able to upgrade to Class 4 impact resistant shingles at little or no additional cost beyond what your claim covers. Your coverage depends on your specific policy and the scope approved by your insurance company.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.8)", maxWidth: 700, margin: "0 auto 32px" }}>
              We help you understand your options and choose the right Class 4 shingle for your home. Between the insurance premium savings and superior hail protection, upgrading to Class 4 is one of the smartest investments a Colorado homeowner can make.
            </p>
            <Link href="/insurance-claims" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Learn About Our Insurance Claim Process &rarr;
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── WHY GATES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE GATES DIFFERENCE</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Why Gates for Class 4 Shingles</h2>
            </div>
            <div className="ir-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Award size={20} color={ACCENT} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 4, lineHeight: 1.3 }}>Quadruple manufacturer certified.</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Pro. No other local contractor holds all four certifications.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <ShieldCheck size={20} color={ACCENT} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 4, lineHeight: 1.3 }}>Every brand, every style.</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>Because we&apos;re certified with all four manufacturers, you get to choose the best shingle for your home. Not the only one your contractor can install.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <MapPin size={20} color={ACCENT} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 4, lineHeight: 1.3 }}>10+ years on the Front Range.</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>We know Colorado weather. We know which shingles perform best here. And we stand behind every installation with our 7 year workmanship warranty.</p>
                  </div>
                </div>
              </div>
              <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                <Image
                  src="/images/insurance-claim-home.jpg"
                  alt="Gates Enterprises completed roof replacement with Class 4 impact resistant shingles"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── MID CTA ─── */}
      <section className="ir-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Ready for a Roof That Fights Back?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free inspection and Class 4 shingle consultation.
          </p>
          <div className="ir-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Inspection &rarr;
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
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Full tear off, certified installation, and warranties up to 50 years.</p>
              </Link>
              <Link href="/insurance-claims" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <Shield size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Insurance Claims</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>We handle your insurance claim process from inspection to installation.</p>
              </Link>
              <Link href="/faq" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <CheckCircle size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>FAQ</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Common questions about roofing, insurance, and working with Gates.</p>
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
      <CTA title="Ready to Upgrade to Class 4?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection and Class 4 shingle estimate. We'll help you choose the right shingle, understand your insurance options, and protect your home for decades." />

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

      <Footer />

      <style>{`
        .ir-benefit-card:hover, .ir-brand-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .ir-split { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ir-hero { min-height: 65vh !important; }
          .ir-benefits-grid { grid-template-columns: 1fr !important; }
          .ir-brands-grid { grid-template-columns: 1fr 1fr !important; }
          .ir-ul-grid { grid-template-columns: 1fr 1fr !important; }
          .ir-related { grid-template-columns: 1fr !important; }
          .ir-savings-stats { flex-direction: column !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .ir-mid-cta-btns { flex-direction: column !important; }
          .ir-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .ir-brands-grid { grid-template-columns: 1fr !important; }
          .ir-ul-grid { grid-template-columns: 1fr 1fr !important; }
          .ir-hero-btns { flex-direction: column !important; }
          .ir-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
