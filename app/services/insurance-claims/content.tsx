"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../../components/GSAPAnimations";
import { Search, FileText, Shield, Hammer, CheckCircle, Award, ShieldCheck, MapPin, Clock, Users } from "lucide-react";
import AnswerCapsule from "../../components/AnswerCapsule";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const PROCESS_STEPS = [
  { Icon: Search, step: "01", title: "Free Damage Inspection", desc: "Thorough, documented inspection of your roof, siding, gutters, windows, and paint. We photograph and catalog every area of damage." },
  { Icon: FileText, step: "02", title: "Documentation & Support", desc: "We prepare all documentation, photograph every detail, and provide the evidence needed to support your restoration project." },
  { Icon: Users, step: "03", title: "Adjuster Meeting Coordination", desc: "We meet with your adjuster on site to walk the damage together and ensure nothing is missed or undervalued." },
  { Icon: Hammer, step: "04", title: "Project Completion", desc: "We complete all repairs and replacements using certified installation methods and premium materials backed by manufacturer warranties." },
  { Icon: CheckCircle, step: "05", title: "Final Documentation", desc: "Complete records of all work performed for your files, plus assistance collecting any remaining recoverable depreciation." },
];

const WHY_GATES = [
  { Icon: Award, bold: "Thousands of restorations completed.", rest: "We know the insurance restoration process in Colorado better than most. Our experience is your advantage." },
  { Icon: FileText, bold: "Xactimate proficient.", rest: "We write estimates in the same software your insurance company uses. That means faster approvals and fewer disputes." },
  { Icon: ShieldCheck, bold: "O&P recovery specialists.", rest: "We don\u2019t leave money on the table. If your project qualifies for overhead and profit, we document and submit for every dollar your policy provides." },
  { Icon: Clock, bold: "Transparent communication.", rest: "You\u2019ll get updates throughout the process. No radio silence, no surprises. We treat your project like it matters, because it does." },
  { Icon: MapPin, bold: "Locally owned, 10+ years.", rest: "We live and work on Colorado\u2019s Front Range. Our reputation is built on doing right by our neighbors." },
  { Icon: Shield, bold: "Quadruple manufacturer certified.", rest: "GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Premium." },
];

const FAQS = [
  { q: "Do I have to pay anything out of pocket for an insurance claim?", a: "You are typically responsible for your deductible. Beyond that, most storm damage repairs may be covered by your homeowner's insurance, depending on your specific policy and the extent of damage. Gates Enterprises works to ensure the insurance company covers the full scope of work so there are no surprises." },
  { q: "Will you work with my insurance company?", a: "Yes. We coordinate with your insurance adjuster, attend on-site inspections, provide thorough documentation with photos and measurements, and support you throughout the entire restoration process. Our team knows Xactimate line items inside and out." },
  { q: "What if my insurance estimate seems too low?", a: "We review every insurance estimate line by line. If the estimate falls short, we prepare detailed supplements with additional documentation, photos, and manufacturer specifications. Our certifications and thorough documentation often help resolve discrepancies in your favor. We have successfully supplemented thousands of underpaid claims." },
  { q: "Is there a deadline to file a roof insurance claim in Colorado?", a: "Most policies have a one-year window from the date of the storm to file a claim. After that deadline passes, you may lose your right to coverage entirely. Schedule an inspection as soon as possible after a storm to protect your eligibility and document the damage while it is fresh." },
  { q: "Can I choose my own contractor for an insurance claim?", a: "Yes. Colorado law gives you the right to choose your own contractor regardless of what your insurance company suggests. Insurance company preferred vendor programs exist to benefit the insurer, not the homeowner. Gates Enterprises works for you, not for the insurance company. We document all damage thoroughly, meet adjusters on site, and fight for the full scope of work your home needs." },
  { q: "What if my insurance claim gets denied?", a: "A denial is not always the final answer. We help you understand why coverage was denied and whether a re-inspection or supplement is worth pursuing. In many cases, having a certified contractor present during the adjuster's inspection makes a significant difference in the outcome. We have successfully overturned many denied claims with additional documentation." },
  { q: "How long does the insurance claim process take?", a: "The typical insurance claim process runs four to eight weeks from filing to completed restoration. The largest variable is your insurance company's adjuster scheduling. Gates Enterprises handles all documentation, adjuster meetings, and supplements to keep the process moving as efficiently as possible." },
  { q: "What does the insurance claims process look like step by step?", a: "First, we perform a free inspection and document all damage with photos and measurements. Next, you file a claim with your insurance company. We then meet your adjuster on site to walk the roof together. Once the claim is approved, we schedule your project. If the initial estimate falls short, we submit supplements. Finally, we complete the restoration and handle the final walkthrough." },
  { q: "What types of damage does homeowners insurance cover?", a: "Homeowners insurance covers damage from hail, wind, fallen trees, lightning, and other sudden events. The most common claims in Colorado involve hail damage to roofing, siding, gutters, and windows. Normal wear and tear, deferred maintenance, and cosmetic-only damage are typically not covered. A free inspection from Gates Enterprises will determine if your damage is claim-worthy." },
  { q: "Do I need to get multiple estimates for my insurance claim?", a: "No. Your insurance company cannot require multiple estimates. You have the right to choose a single contractor you trust. Gates Enterprises provides a detailed scope of work that aligns with Xactimate pricing, which is the same software your insurance company uses. This ensures a smooth process without the hassle of shopping around." },
];

export default function InsuranceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="ic-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Insurance Restoration
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Insurance Restoration Experts That Put You First
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Navigate the insurance restoration process with confidence. Gates Enterprises is on your side from the first call to the final check.
          </p>
          <div className="ic-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection & Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── ANSWER CAPSULE ─── */}
      <AnswerCapsule text="Filing a roof insurance claim in Colorado starts with a professional inspection to document damage. Gates Enterprises assists you through the claims process, coordinating documentation with your adjuster. Most homeowners only pay their deductible." />

      {/* ─── INTRO ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>RESTORATION EXPERTS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              We Handle the Hard Part
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              Dealing with insurance after storm damage can feel overwhelming. Between adjuster meetings, paperwork, timelines, and unfamiliar terminology, it&apos;s easy to feel lost. Gates Enterprises has helped thousands of homeowners across Colorado&apos;s Front Range navigate the insurance restoration process with clarity and confidence.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── INSURANCE CLAIMS GALLERY ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: "#FAFBFD" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="ic-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image src="/images/services/roof-inspection-colorado-gates-enterprises.webp" alt="Roof inspection for insurance claim by Gates Enterprises in Colorado" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image src="/images/blog/completed-roof-replacement-gates-enterprises.webp" alt="Completed insurance restoration roof replacement by Gates Enterprises in Colorado" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 640px) { .ic-gallery { grid-template-columns: 1fr !important; } }`}</style>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="ic-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={7204} suffix="+" duration={2.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Roofs Completed</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={10} suffix="+" duration={2} delay={0.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Years in Colorado</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>4.9</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Google Rating</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={293} suffix="+" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Five Star Reviews</div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Our Restoration Process</h2>
        </div>

        <StaggerCards
          className="ic-process-desktop"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
          stagger={0.1}
          distance={40}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" as const, position: "relative", padding: "0 4px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", position: "relative", zIndex: 2 }}>
                <s.Icon size={26} color={ACCENT} strokeWidth={1.8} />
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div style={{ position: "absolute", top: 30, left: "calc(50% + 34px)", width: "calc(100% - 52px)", height: 2, background: "rgba(37,99,235,0.15)", zIndex: 1 }} />
              )}
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{s.step}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: DEEP, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerCards>

        <div className="ic-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
          <StaggerCards style={{ position: "relative", paddingLeft: 48 }} stagger={0.1} distance={40}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${ACCENT}, #60A5FA)`, borderRadius: 2 }} />
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i < PROCESS_STEPS.length - 1 ? 36 : 0, paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: -40, top: 2, width: 42, height: 42, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                  <s.Icon size={20} color={ACCENT} strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{s.step}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, margin: "0 0 6px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── WHY GATES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE GATES DIFFERENCE</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Why Gates Enterprises</h2>
          </div>
          <StaggerCards
            className="ic-why-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="ic-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
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

      {/* ─── MID CTA ─── */}
      <section className="ic-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Don&apos;t Navigate Insurance Restoration Alone
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free inspection and restoration consultation.
          </p>
          <div className="ic-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection & Estimate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COMMON QUESTIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Frequently Asked Questions</h2>
            </div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, marginBottom: 12, border: "1px solid rgba(13,33,55,0.05)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: DEEP, margin: 0, lineHeight: 1.4 }}>{faq.q}</h3>
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
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: NAVY, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
            Don&apos;t Navigate Insurance Restoration Alone
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 36px", lineHeight: 1.75 }}>
            Call Gates Enterprises at (720) 766-3377 or email info@gatesroof.com. We&apos;ll review your situation, tell you exactly where you stand, and work with your insurance company to support the restoration your home deserves.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 40px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700 }}>
            Request a Free Inspection & Estimate &rarr;
          </Link>
        </div>
      </section>

      {/* ─── BEST ROOFER LINKS ─── */}
      <section style={{ padding: "48px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>CERTIFIED ROOFERS NEAR YOU</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Best Roofer for Your Insurance Claim</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>A certified contractor makes all the difference in the insurance claims process. Find the top-rated roofer in your city.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
            {[
              { n: "Best Roofer in Denver", s: "denver" }, { n: "Best Roofer in Aurora", s: "aurora" }, { n: "Best Roofer in Lakewood", s: "lakewood" },
              { n: "Best Roofer in Arvada", s: "arvada" }, { n: "Best Roofer in Thornton", s: "thornton" }, { n: "Best Roofer in Westminster", s: "westminster" },
              { n: "Best Roofer in Littleton", s: "littleton" }, { n: "Best Roofer in Parker", s: "parker" }, { n: "Best Roofer in Centennial", s: "centennial" },
              { n: "Best Roofer in Englewood", s: "englewood" }, { n: "Best Roofer in Highlands Ranch", s: "highlands-ranch" }, { n: "Best Roofer in Castle Rock", s: "castle-rock" },
              { n: "Best Roofer in Broomfield", s: "broomfield" }, { n: "Best Roofer in Boulder", s: "boulder" }, { n: "Best Roofer in Fort Collins", s: "fort-collins" },
            ].map((c) => (
              <Link key={c.s} href={`/best-roofer-${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(37,99,235,0.25)", background: "rgba(37,99,235,0.04)", color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Insurance Claim Assistance Service Areas</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>We assist homeowners with insurance claims across the Colorado Front Range.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
            {[
              { n: "Denver", s: "denver" }, { n: "Aurora", s: "aurora" }, { n: "Lakewood", s: "lakewood" },
              { n: "Arvada", s: "arvada" }, { n: "Westminster", s: "westminster" }, { n: "Thornton", s: "thornton" },
              { n: "Broomfield", s: "broomfield" }, { n: "Northglenn", s: "northglenn" }, { n: "Federal Heights", s: "federal-heights" },
              { n: "Commerce City", s: "commerce-city" }, { n: "Brighton", s: "brighton" }, { n: "Littleton", s: "littleton" },
              { n: "Englewood", s: "englewood" }, { n: "Centennial", s: "centennial" }, { n: "Highlands Ranch", s: "highlands-ranch" },
              { n: "Parker", s: "parker" }, { n: "Castle Rock", s: "castle-rock" }, { n: "Lone Tree", s: "lone-tree" },
              { n: "Greenwood Village", s: "greenwood-village" }, { n: "Golden", s: "golden" }, { n: "Wheat Ridge", s: "wheat-ridge" },
              { n: "Edgewater", s: "edgewater" }, { n: "Superior", s: "superior" }, { n: "Louisville", s: "louisville" },
              { n: "Lafayette", s: "lafayette" }, { n: "Erie", s: "erie" }, { n: "Longmont", s: "longmont" },
              { n: "Loveland", s: "loveland" }, { n: "Fort Collins", s: "fort-collins" }, { n: "Conifer", s: "conifer" },
              { n: "Evergreen", s: "evergreen" }, { n: "Colorado Springs", s: "colorado-springs" }, { n: "Boulder", s: "boulder" },
            ].map((c) => (
              <Link key={c.s} href={`/services/insurance-claims/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEGAL DISCLAIMER ─── */}
      <section style={{ padding: "32px 24px", background: WHITE, borderTop: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, textAlign: "center" as const }}>
            Results vary based on your insurance policy and the extent of damage. Gates Enterprises does not guarantee insurance claim outcomes. We provide documentation to support your claim but cannot guarantee approval. Homeowners are responsible for their insurance deductible as required by Colorado law.
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        .ic-process-mobile { display: none; }
        .ic-why-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .ic-process-desktop { display: none !important; }
          .ic-process-mobile { display: block !important; }
          .ic-hero { min-height: 65vh !important; }
          .ic-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .ic-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .ic-mid-cta-btns { flex-direction: column !important; }
          .ic-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .ic-stats { gap: 20px !important; }
          .ic-hero-btns { flex-direction: column !important; }
          .ic-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
