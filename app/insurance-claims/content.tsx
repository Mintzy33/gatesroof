"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../components/GSAPAnimations";
import { Search, FileText, Shield, Users, Hammer, CheckCircle, Award, ShieldCheck, MapPin, Clock, DollarSign, AlertTriangle } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const PROCESS_STEPS = [
  { Icon: Search, step: "01", title: "Free Roof Inspection", desc: "We climb your roof and document every area of damage with photos and measurements. Thorough, honest, no pressure." },
  { Icon: FileText, step: "02", title: "File Your Claim", desc: "If we find legitimate storm damage, we help you understand what to expect and support you through filing your claim with your insurance company." },
  { Icon: Users, step: "03", title: "Adjuster Meeting", desc: "We attend the adjuster meeting on site, walk the damage together, and make sure nothing is overlooked or undervalued." },
  { Icon: AlertTriangle, step: "04", title: "Supplements if Needed", desc: "If the initial estimate falls short of the actual scope, we prepare and submit supplemental documentation to advocate for fair coverage." },
  { Icon: Hammer, step: "05", title: "Certified Installation", desc: "Full tear off, deck inspection, and manufacturer certified installation. Typically completed in one day for most homes." },
  { Icon: CheckCircle, step: "06", title: "Final Inspection & Warranty", desc: "We walk the finished roof with you, register your manufacturer warranty, and help you collect any recoverable depreciation." },
];

const WHY_GATES = [
  { Icon: Award, bold: "Quadruple manufacturer certified.", rest: "GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Pro. Your warranty is backed by the manufacturer, not just the contractor." },
  { Icon: FileText, bold: "Xactimate proficient.", rest: "We write estimates in the same software your insurance company uses. That means faster approvals and fewer disputes." },
  { Icon: ShieldCheck, bold: "Supplement specialists.", rest: "Most homeowners don\u2019t know supplements exist. We prepare additional documentation when the initial estimate doesn\u2019t reflect the full scope of work." },
  { Icon: DollarSign, bold: "We advocate for fair coverage.", rest: "We provide thorough documentation to help ensure your claim reflects the actual cost of a proper roof replacement." },
  { Icon: Clock, bold: "Transparent communication.", rest: "You get updates at every stage. No radio silence, no surprises. We treat your project like it matters, because it does." },
  { Icon: MapPin, bold: "Locally owned, 10+ years.", rest: "We live and work on Colorado\u2019s Front Range. Our reputation is built on doing right by our neighbors." },
];

const TESTIMONIALS = [
  { quote: "We thought we\u2019d have to pay thousands out of pocket. Gates documented everything and worked with our adjuster through the entire process. Our only cost was our deductible.", attribution: "Lakewood homeowner" },
  { quote: "They found damage we didn\u2019t even know about, attended the adjuster meeting, and got the scope right. Professional from start to finish.", attribution: "Arvada homeowner" },
  { quote: "Our first estimate from the insurance company was way too low. Gates submitted a supplement and the difference was significant. We\u2019re glad we didn\u2019t settle.", attribution: "Denver homeowner" },
];

const FAQS = [
  { q: "How much will I pay out of pocket?", a: "In most cases, your only out of pocket cost is your insurance deductible. Your homeowner\u2019s insurance typically covers the full replacement cost minus the deductible. As required by Colorado law, homeowners are responsible for paying their deductible." },
  { q: "What is your claim success rate?", a: "When Gates Enterprises recommends filing a claim, our success rate is over 99%. We only recommend filing when we\u2019re confident the damage warrants it. We never pressure homeowners to file unnecessary claims." },
  { q: "What are supplements?", a: "Supplements are additional documentation submitted to your insurance company when the initial estimate doesn\u2019t cover the full scope of work. Most homeowners don\u2019t know they exist. We prepare and submit supplement documentation, which often results in thousands of additional dollars toward your project." },
  { q: "Do you meet with my adjuster?", a: "Yes. We attend every adjuster meeting on site. We walk the roof with your adjuster, point out all documented damage, and advocate for a fair and accurate estimate." },
  { q: "Does my insurance really cover a full roof replacement?", a: "Most Colorado homeowner\u2019s insurance policies cover the full replacement cost of a storm damaged roof, minus your deductible. Many homeowners don\u2019t realize this. We help you understand your coverage and work with your insurance company to pursue the coverage your policy provides." },
  { q: "How long does the process take?", a: "From initial inspection to completed installation, most projects take 4 to 8 weeks. The timeline depends on insurance company response times, supplement reviews, and weather. We keep the process moving and communicate with you at every step." },
  { q: "Is there a deadline to file a claim?", a: "Most policies have a time limit, often one year from the date of the storm. Schedule an inspection as soon as possible to protect your eligibility." },
];

export default function InsuranceClaimsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="icl-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Insurance Claims
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Your Roof Insurance Claim, Supported From Start to Finish
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 12, maxWidth: 700 }}>
            Most Colorado homeowners don&apos;t realize their insurance may cover the full replacement cost of a storm damaged roof, minus the deductible. Many roofers don&apos;t document thoroughly. We do.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: GOLD, lineHeight: 1.6, marginBottom: 32, maxWidth: 700, fontWeight: 600 }}>
            In most cases, your only cost is your insurance deductible.
          </p>
          <div className="icl-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE REALITY</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              Most Homeowners Leave Money on the Table
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto 16px" }}>
              After a hailstorm, your insurance company sends an adjuster who writes an estimate. That initial estimate often falls short. Missing line items, undervalued materials, overlooked damage. Most homeowners accept it because they don&apos;t know any better.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              That&apos;s where Gates Enterprises comes in. We know Xactimate line items inside and out. We know what your roof actually costs to replace properly. And we advocate with your insurance company to pursue the coverage your policy provides.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="icl-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={99} suffix="%" duration={2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Success Rate When We Recommend Filing</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={7204} suffix="+" duration={2.2} delay={0.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Roofs Completed</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>4</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Manufacturer Certifications</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={10} suffix="+" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Years in Colorado</div>
          </div>
        </div>
      </section>

      {/* ─── WHAT MOST HOMEOWNERS DON'T KNOW ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>WHAT MOST HOMEOWNERS DON&apos;T KNOW</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>The Insurance Process, Explained</h2>
            </div>
            <StaggerCards
              className="icl-info-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
              stagger={0.1}
            >
              <div className="icl-info-card" style={{ background: WHITE, borderRadius: 20, padding: "32px 28px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <DollarSign size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Your Insurance May Cover More Than You Think</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>
                  Most Colorado homeowner&apos;s insurance policies may cover the full replacement cost of a storm damaged roof. Your responsibility typically includes your deductible. Coverage depends on your specific policy, but many homeowners are surprised by how much is covered.
                </p>
              </div>
              <div className="icl-info-card" style={{ background: WHITE, borderRadius: 20, padding: "32px 28px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <FileText size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Supplements Can Make or Break Your Claim</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>
                  When an insurance adjuster&apos;s initial estimate falls short, a supplement is additional documentation requesting fair coverage for work that was missed or undervalued. Most homeowners don&apos;t know supplements exist. We prepare and submit them as a standard part of our process.
                </p>
              </div>
              <div className="icl-info-card" style={{ background: WHITE, borderRadius: 20, padding: "32px 28px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Shield size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Recoverable Depreciation Is Your Money</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>
                  Your insurance company withholds a portion of your payout until the work is completed. Once we finish and you submit the final invoice, your insurance releases the remaining funds. We help you collect every dollar your policy provides.
                </p>
              </div>
              <div className="icl-info-card" style={{ background: WHITE, borderRadius: 20, padding: "32px 28px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Award size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Quadruple Certified Means Real Warranties</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>
                  Gates Enterprises holds certifications from GAF, CertainTeed, Owens Corning, and Malarkey. That means your warranty is backed by the manufacturer, not just the contractor. If we ever closed our doors, your warranty would still stand.
                </p>
              </div>
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>The Insurance Claim Process</h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <StaggerCards
          className="icl-process-desktop"
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
                <div className="icl-step-line" style={{ position: "absolute", top: 30, left: "calc(50% + 34px)", width: "calc(100% - 52px)", height: 2, background: "rgba(37,99,235,0.15)", zIndex: 1 }} />
              )}
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{s.step}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: DEEP, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerCards>

        {/* Mobile: vertical timeline */}
        <div className="icl-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
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

      {/* ─── TESTIMONIALS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: DEEP, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,168,83,0.06) 0%, transparent 50%)" }} />
          <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOMEOWNER EXPERIENCES</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: 0 }}>What Our Customers Say</h2>
            </div>
            <StaggerCards
              className="icl-testimonials"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
              stagger={0.12}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 24px" }}>
                  <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 40, color: GOLD, lineHeight: 1, marginBottom: 8 }}>&ldquo;</div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", margin: "0 0 16px", fontStyle: "italic" }}>
                    {t.quote}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600, margin: 0 }}>
                    {t.attribution}
                  </p>
                </div>
              ))}
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── WHY GATES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE GATES DIFFERENCE</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Why Gates Enterprises</h2>
          </div>
          <StaggerCards
            className="icl-why-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="icl-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
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

      {/* ─── INTERNAL LINKS ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>RELATED SERVICES</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: DEEP, margin: "0 0 32px" }}>Learn More</h2>
            <StaggerCards
              className="icl-related"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
              stagger={0.1}
            >
              <Link href="/services/roof-replacement" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <Hammer size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Roof Replacement</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Full tear off, manufacturer certified installation, and warranties up to 50 years.</p>
              </Link>
              <Link href="/services/storm-hail-damage" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <AlertTriangle size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>Storm &amp; Hail Damage</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Free storm damage inspections. We document everything and help you understand your options.</p>
              </Link>
              <Link href="/faq" style={{ background: WHITE, borderRadius: 16, padding: "28px 20px", textDecoration: "none", border: "1px solid rgba(13,33,55,0.06)", transition: "all 0.25s ease" }}>
                <Search size={28} color={ACCENT} strokeWidth={1.8} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 8 }}>FAQ</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>Common questions about roofing, insurance claims, and working with Gates Enterprises.</p>
              </Link>
            </StaggerCards>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── MID CTA ─── */}
      <section className="icl-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Think Your Roof Has Storm Damage?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free inspection. We&apos;ll tell you honestly whether it makes sense to file a claim.
          </p>
          <div className="icl-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Inspection &rarr;
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
      <CTA title="Ready to Get Your Roof Replaced?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection. We'll tell you exactly what we find, whether it makes sense to file a claim, and how we can help." />

      {/* ─── SERVICE AREAS ─── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Roof Insurance Claim Service Areas</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>We assist homeowners with insurance claims across the Colorado Front Range.</p>
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
        .icl-process-mobile { display: none; }
        .icl-why-card:hover, .icl-info-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .icl-process-desktop { display: none !important; }
          .icl-process-mobile { display: block !important; }
          .icl-hero { min-height: 65vh !important; }
          .icl-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .icl-why-grid { grid-template-columns: 1fr !important; }
          .icl-info-grid { grid-template-columns: 1fr !important; }
          .icl-testimonials { grid-template-columns: 1fr !important; }
          .icl-related { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .icl-mid-cta-btns { flex-direction: column !important; }
          .icl-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .icl-stats { gap: 20px !important; }
          .icl-hero-btns { flex-direction: column !important; }
          .icl-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
