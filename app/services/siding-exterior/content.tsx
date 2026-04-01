"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../../components/GSAPAnimations";
import { Clipboard, Palette, Hammer, CheckCircle, Award, ShieldCheck, MapPin, Zap } from "lucide-react";
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
  { Icon: Clipboard, step: "01", title: "Free Consultation and Estimate", desc: "We inspect your current siding, discuss your goals, and walk you through all available material options." },
  { Icon: Palette, step: "02", title: "Material Selection", desc: "Choose from vinyl, fiber cement, engineered wood, and other premium options tailored to Colorado\u2019s climate." },
  { Icon: Hammer, step: "03", title: "Professional Installation", desc: "Our crews follow manufacturer specifications to the letter, ensuring long lasting performance and warranty coverage." },
  { Icon: CheckCircle, step: "04", title: "Cleanup and Final Inspection", desc: "We leave your property spotless and walk you through the finished product to make sure every detail is right." },
];

const WHY_GATES = [
  { Icon: Award, bold: "Full exterior contractor.", rest: "Roof, siding, gutters, paint. One crew, one point of contact, one company responsible for everything." },
  { Icon: ShieldCheck, bold: "Insurance restoration integration.", rest: "If hail damaged your siding, we include it in your storm damage restoration. Many homeowners miss this." },
  { Icon: MapPin, bold: "10+ years in the Denver market.", rest: "We know which products perform best in our climate." },
  { Icon: Zap, bold: "Locally owned, community focused.", rest: "We live in Lakewood. Your neighborhood is our neighborhood." },
];

const FAQS = [
  { q: "How much does siding replacement cost in Colorado?", a: "Siding replacement in Colorado costs $8,000 to $20,000 depending on material, home size, and complexity. James Hardie fiber cement is the most popular choice and typically runs $10 to $15 per square foot installed. Vinyl siding is less expensive at $5 to $8 per square foot. If your siding was damaged by hail or wind, your homeowners insurance typically covers the replacement cost minus your deductible." },
  { q: "How do I know when my siding needs to be replaced?", a: "Warping, cracking, fading, bubbling, or increased energy bills can all point to siding that is no longer performing. Other signs include mold or mildew growth, soft or rotting spots when you press on the siding, and paint peeling excessively despite recent painting. We offer free inspections to help you decide whether repair or replacement is the right move." },
  { q: "What siding material is best for Colorado homes?", a: "James Hardie fiber cement siding is our top recommendation for Colorado. It handles UV radiation, temperature extremes, and hail better than vinyl or wood. It carries a Class A fire rating, which is increasingly important in Colorado. It also holds paint well at altitude where UV degradation is more intense. We also install premium vinyl and engineered wood options for homeowners who prefer a different look or price point." },
  { q: "Can you replace siding damaged by a storm?", a: "Absolutely. We repair and replace storm-damaged siding regularly, and we handle the insurance restoration process from start to finish. Hail frequently damages siding alongside roofing, and a single claim typically covers both. We document all siding damage as part of our comprehensive exterior inspection." },
  { q: "How long does siding installation take?", a: "A full siding installation typically takes one to two weeks depending on home size and complexity. Partial repairs and small sections are usually completed in one to two days. We work to minimize disruption to your daily routine throughout the project." },
  { q: "Can siding and roof replacement be done at the same time?", a: "Yes, and we recommend it when both need attention. Coordinating roof and siding work saves time, reduces disruption, and often reduces total cost because scaffolding and crew mobilization happen once instead of twice. If both were damaged by the same storm, a single insurance claim typically covers everything." },
  { q: "Does homeowners insurance cover siding replacement?", a: "If your siding was damaged by hail, wind, or another covered event, your homeowners insurance should cover the replacement cost minus your deductible. We include siding in every storm damage inspection because hail frequently damages siding alongside roofing. Gates Enterprises handles the documentation and insurance coordination." },
  { q: "What is James Hardie fiber cement siding?", a: "James Hardie is the leading manufacturer of fiber cement siding, made from a mix of cement, sand, and cellulose fibers. It resists fire (Class A rated), rot, pests, and hail better than vinyl or wood. It comes in a wide range of colors and styles, including lap siding, board and batten, and shingle panels. The ColorPlus finish is baked on at the factory and carries a 15-year fade warranty." },
  { q: "How do I maintain my new siding?", a: "Fiber cement siding requires very little maintenance. An annual wash with a garden hose removes dirt and pollen. Inspect caulking around windows and trim every year and touch up any chipped paint. Vinyl siding needs even less, just periodic washing. Avoid pressure washing at high settings, which can force water behind the siding. Regular inspections catch small issues before they become expensive problems." },
  { q: "Will new siding improve my home's energy efficiency?", a: "Yes. New siding installation includes a layer of house wrap and often insulated sheathing underneath, which significantly reduces air infiltration. Homes with old, damaged, or poorly installed siding often have drafts and high energy bills. Modern siding systems create a tighter building envelope that keeps conditioned air inside and Colorado's extreme temperatures outside." },
];

export default function SidingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="si-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Siding and Exterior
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Siding Installation and Repair Built to Last
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Protect your home and boost its curb appeal with premium siding from Colorado&apos;s most trusted exterior specialists.
          </p>
          <div className="si-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
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
      <AnswerCapsule text="Siding replacement in Colorado costs $8,000 to $20,000 depending on material and home size. James Hardie fiber cement is the most popular choice for Colorado homes due to its durability against hail, wind, and UV exposure. Gates Enterprises offers free siding inspections and works with your insurance if storm damage is involved." />

      {/* ─── INTRO ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>SIDING EXPERTS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              More Than Just Curb Appeal
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              Your siding does more than define the look of your home. It serves as one of the most important layers of defense against Colorado&apos;s intense sun, wind, hail, and temperature swings. Gates Enterprises provides expert siding installation and repair across Colorado&apos;s Front Range, using top quality materials and proven techniques that keep your home beautiful and protected for years to come.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── SIDING PROJECT PHOTOS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: "#FAFBFD" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="si-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image src="/images/services/residential-roof-replacement-colorado.webp" alt="Residential siding and roof replacement by Gates Enterprises in Colorado" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image src="/images/services/carriage-house-roof-colorado.webp" alt="Carriage house exterior restoration by Gates Enterprises in Colorado" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 640px) { .si-gallery { grid-template-columns: 1fr !important; } }`}</style>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="si-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
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
              <CounterGSAP end={30} suffix=" yr" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Material Warranty</div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Our Process</h2>
        </div>

        <StaggerCards
          className="si-process-desktop"
          style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
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

        <div className="si-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
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
            className="si-why-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="si-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
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
      <section className="si-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Ready for New Siding?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free consultation.
          </p>
          <div className="si-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
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
            Ready for New Siding?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 36px", lineHeight: 1.75 }}>
            Call (720) 766-3377 or email info@gatesroof.com for a free consultation.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 40px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700 }}>
            Request a Free Inspection & Estimate &rarr;
          </Link>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Siding Installation Service Areas</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>We provide siding installation and repair across the Colorado Front Range.</p>
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
              <Link key={c.s} href={`/services/siding/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .si-process-mobile { display: none; }
        .si-why-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .si-process-desktop { display: none !important; }
          .si-process-mobile { display: block !important; }
          .si-hero { min-height: 65vh !important; }
          .si-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .si-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .si-mid-cta-btns { flex-direction: column !important; }
          .si-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .si-stats { gap: 20px !important; }
          .si-hero-btns { flex-direction: column !important; }
          .si-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
