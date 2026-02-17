"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../../components/GSAPAnimations";
import { Search, FileText, Shield, Palette, Hammer, CheckCircle, Award, ShieldCheck, MapPin } from "lucide-react";

const NAVY = "#0D2137";
const DEEP = "#06263f";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const PROCESS_STEPS = [
  { Icon: Search, step: "01", title: "Free Inspection", desc: "We climb your roof, check every slope, and document what we find with photos and measurements. No drones, no guesswork." },
  { Icon: FileText, step: "02", title: "Detailed Estimate", desc: "You get a written scope of work with material options, warranty details, and pricing. No surprises." },
  { Icon: Shield, step: "03", title: "Insurance Coordination", desc: "We file your claim, meet your adjuster, and handle supplement requests so you don\u2019t have to." },
  { Icon: Palette, step: "04", title: "Material Selection", desc: "Pick your shingle style, color, and manufacturer. We bring samples to your door." },
  { Icon: Hammer, step: "05", title: "Installation", desc: "Full tear off, deck inspection, ice and water shield, synthetic underlayment, and new shingles. Typically completed in one day for most homes." },
  { Icon: CheckCircle, step: "06", title: "Final Walkthrough", desc: "We inspect the finished roof together, answer your questions, and register your warranty." },
];

const WHY_GATES = [
  { Icon: Award, bold: "Quadruple manufacturer certified.", rest: "GAF Master Elite, CertainTeed Platinum Preferred, Malarkey Certified, and Emerald Premium. No other local contractor holds all four." },
  { Icon: ShieldCheck, bold: "Up to 50 year warranty.", rest: "Not a marketing gimmick. The GAF Golden Pledge warranty is the real deal, backed by the manufacturer." },
  { Icon: Shield, bold: "Insurance claim experts.", rest: "We\u2019ve navigated thousands of claims and know how to get your roof fully covered." },
  { Icon: MapPin, bold: "Locally owned, 10+ years in Lakewood.", rest: "We live here. Our reputation is everything." },
];

const FAQS = [
  { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in a single day. Larger or more complex roofs may take two days. We\u2019ll give you a specific timeline before we start." },
  { q: "How much does a roof replacement cost in Denver?", a: "A typical roof replacement in the Denver metro area ranges from $8,000 to $20,000 depending on size, pitch, material choice, and complexity. If insurance is covering the claim, your out of pocket cost is usually just your deductible." },
  { q: "Can I stay home during the roof replacement?", a: "Absolutely. We ask that you move vehicles out of the driveway and let us know about any pets. Otherwise, go about your day. We handle the rest." },
  { q: "What\u2019s the difference between a 25 year and 50 year warranty?", a: "The standard GAF System Plus warranty covers materials for 50 years and workmanship for 10. The Golden Pledge upgrades workmanship coverage to 25 years and is backed directly by GAF. We recommend Golden Pledge for every customer." },
  { q: "Do you offer financing?", a: "Yes. We offer flexible financing options so you can get the roof you need without waiting. Ask us for details during your estimate." },
];

export default function RoofReplacementContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="rr-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: DEEP }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Roof Replacement
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Roof Replacement Across Colorado&apos;s Front Range
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            A new roof Colorado homeowners can count on starts with the right contractor. Gates Enterprises has been replacing roofs across the Denver metro and beyond for over a decade, and we do it the right way every single time. Full tear off, proper deck inspection, manufacturer certified installation, and a warranty that actually means something.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Get a Free Estimate &rarr;
          </Link>
        </div>
      </section>

      {/* ─── SECTION 1: Full Tear Off — text left, image right ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div className="rr-split" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COMPLETE REPLACEMENT</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: NAVY, margin: "0 0 16px", lineHeight: 1.15 }}>
                Full Tear Off Roof Replacement Done Right
              </h2>
              <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, marginBottom: 16 }}>
                We never overlay. Every Gates roof replacement starts with a complete tear off down to the deck. That lets us inspect the wood sheathing for rot, check for proper ventilation, and make sure your new roof sits on a solid foundation. Cutting corners here is how other contractors create problems five years down the road. We fix problems before they get buried under shingles.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, margin: 0 }}>
                Our crews install according to manufacturer specifications every time. That matters because it&apos;s the only way to activate the full warranty from GAF, CertainTeed, or Malarkey. Miss one step and your warranty could be void. We don&apos;t miss steps.
              </p>
            </div>
            <div style={{ background: "rgba(13,33,55,0.06)", borderRadius: 20, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Photo placeholder</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── SECTION 2: Class 4 Shingles — image left, text right ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div className="rr-split rr-split-reverse" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "center" }}>
            <div style={{ background: "rgba(13,33,55,0.06)", borderRadius: 20, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Photo placeholder</span>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COLORADO TOUGH</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: NAVY, margin: "0 0 16px", lineHeight: 1.15 }}>
                Class 4 Impact Resistant Shingles for Colorado Weather
              </h2>
              <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, marginBottom: 16 }}>
                Colorado gets hit with hail. A lot. That&apos;s why we recommend Class 4 impact resistant shingles for every roof replacement across the Front Range. These shingles are tested to withstand a 2 inch steel ball dropped from 20 feet. They cost a bit more upfront, but most insurance companies offer a 20 to 30% discount on your premium once they&apos;re installed. Over the life of your roof, they pay for themselves.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, margin: 0 }}>
                We carry Class 4 options from GAF, CertainTeed, Malarkey, and Owens Corning. Each has a slightly different look and price point, and we&apos;ll walk you through the differences so you can make the right call for your home and budget.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── SECTION 3: GAF Warranty — full width dark premium ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: DEEP, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,168,83,0.06) 0%, transparent 50%)" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>WARRANTY</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.12 }}>
              The GAF Golden Pledge Warranty
            </h2>
            <div style={{ width: 48, height: 3, background: GOLD, borderRadius: 2, margin: "0 auto 32px" }} />
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.8)", maxWidth: 700, margin: "0 auto" }}>
              As a GAF Master Elite contractor (top 2% in the country), we can offer the GAF Golden Pledge warranty. This is the strongest warranty in residential roofing. It covers materials for 50 years and includes 25 years of workmanship coverage, backed directly by GAF, not by us. If Gates Enterprises ever closed its doors, your warranty would still stand. That&apos;s a level of protection most contractors simply cannot offer.
            </p>
            <div className="rr-warranty-stats" style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 48 }}>
              <div>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 800, color: GOLD }}>
                  <CounterGSAP end={50} suffix=" yrs" duration={2} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Material Coverage</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 800, color: GOLD }}>
                  <CounterGSAP end={25} suffix=" yrs" duration={2} delay={0.3} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Workmanship Coverage</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── SECTION 4: Insurance Claims — text left, image right ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div className="rr-split" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>INSURANCE CLAIMS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: NAVY, margin: "0 0 16px", lineHeight: 1.15 }}>
                Insurance Claim Support for Your Roof Replacement
              </h2>
              <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, margin: 0 }}>
                If your roof replacement is the result of storm or hail damage, we handle the insurance process for you. We document damage with photos and measurements, meet your adjuster on site, and submit supplements when the initial estimate falls short. Our team knows Xactimate line items inside and out, and we fight to make sure your insurance company pays what your roof actually costs. You shouldn&apos;t have to become an insurance expert just to get a new roof.
              </p>
            </div>
            <div style={{ background: "rgba(13,33,55,0.06)", borderRadius: 20, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Photo placeholder</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── PROCESS — horizontal stepper (desktop) / vertical timeline (mobile) ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: 0 }}>Our Process</h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <StaggerCards
          className="rr-process-desktop"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}
          stagger={0.1}
          distance={40}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" as const, position: "relative", padding: "0 4px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", position: "relative", zIndex: 2 }}>
                <s.Icon size={26} color={ACCENT} strokeWidth={1.8} />
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="rr-step-line" style={{ position: "absolute", top: 30, left: "calc(50% + 34px)", width: "calc(100% - 52px)", height: 2, background: "rgba(37,99,235,0.15)", zIndex: 1 }} />
              )}
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{s.step}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerCards>

        {/* Mobile: vertical timeline */}
        <div className="rr-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
          <StaggerCards style={{ position: "relative", paddingLeft: 48 }} stagger={0.1} distance={40}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${ACCENT}, #60A5FA)`, borderRadius: 2 }} />
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i < PROCESS_STEPS.length - 1 ? 36 : 0, paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: -40, top: 2, width: 42, height: 42, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                  <s.Icon size={20} color={ACCENT} strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{s.step}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 6px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── WHY GATES — 2x2 grid cards ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE GATES DIFFERENCE</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: 0 }}>Why Gates</h2>
          </div>
          <StaggerCards
            className="rr-why-grid"
            style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            stagger={0.12}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="rr-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", gap: 16, alignItems: "flex-start", cursor: "default" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 6, lineHeight: 1.3 }}>{item.bold}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.rest}</p>
                </div>
              </div>
            ))}
          </StaggerCards>
        </section>
      </ScrollReveal>

      {/* ─── MID-PAGE CTA — blue accent ─── */}
      <section className="rr-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Ready for a roof you can trust?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free roof inspection.
          </p>
          <div className="rr-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get Free Estimate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ — collapsible accordions ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COMMON QUESTIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: 0 }}>Frequently Asked Questions</h2>
            </div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, marginBottom: 12, border: "1px solid rgba(13,33,55,0.05)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: NAVY, margin: 0, lineHeight: 1.4 }}>{faq.q}</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: 16, transition: "transform 0.3s ease", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
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
      <CTA title="Ready for a new roof?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free roof inspection. We'll tell you exactly what you need, what it costs, and how to get it covered." />

      <Footer />

      <style>{`
        .rr-process-mobile { display: none; }
        .rr-why-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .rr-split { grid-template-columns: 1fr !important; gap: 32px !important; }
          .rr-process-desktop { display: none !important; }
          .rr-process-mobile { display: block !important; }
          .rr-hero { min-height: 65vh !important; }
          .rr-warranty-stats { gap: 40px !important; }
        }
        @media (max-width: 480px) {
          .rr-why-grid { grid-template-columns: 1fr !important; }
          .rr-mid-cta-btns { flex-direction: column !important; }
          .rr-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .rr-warranty-stats { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
