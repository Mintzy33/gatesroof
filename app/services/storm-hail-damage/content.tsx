"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../../components/GSAPAnimations";
import { Search, FileText, Shield, Hammer, CheckCircle, Award, ShieldCheck, MapPin, Clock, Zap } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const PROCESS_STEPS = [
  { Icon: Search, step: "01", title: "Free Storm Damage Inspection", desc: "We perform a thorough inspection of your roof, siding, gutters, and windows to document all storm related damage. No cost, no obligation." },
  { Icon: FileText, step: "02", title: "Honest Assessment and Documentation", desc: "Our certified inspectors provide a detailed report with photos. If your roof doesn\u2019t need work, we\u2019ll tell you. Period." },
  { Icon: Shield, step: "03", title: "Insurance Restoration Support", desc: "We work directly with your insurance company, providing all necessary documentation to help ensure your restoration is processed smoothly and fairly." },
  { Icon: Hammer, step: "04", title: "Expert Repair or Replacement", desc: "Our crews use manufacturer certified installation techniques and premium materials backed by warranties of up to 50 years." },
  { Icon: CheckCircle, step: "05", title: "Final Walkthrough and Quality Check", desc: "We walk you through the completed project to make sure every detail meets our standards and yours." },
];

const WHY_GATES = [
  { Icon: Award, bold: "Quadruple manufacturer certified.", rest: "GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Pro. Fewer than 1% of contractors in the nation hold all four." },
  { Icon: ShieldCheck, bold: "7,200+ roofs completed.", rest: "We\u2019ve seen every type of storm damage Colorado can throw at a roof and delivered lasting results every time." },
  { Icon: Clock, bold: "10+ years on Colorado\u2019s Front Range.", rest: "We live and work here. Our reputation is everything, and we\u2019ve built it one roof at a time." },
  { Icon: Shield, bold: "Warranties up to 50 years.", rest: "With the GAF Golden Pledge warranty, your materials and workmanship are covered for decades, backed by the manufacturer." },
  { Icon: MapPin, bold: "Locally owned, community focused.", rest: "Gates Enterprises is a Colorado company serving Colorado homeowners. We\u2019re not a franchise or a storm chaser." },
  { Icon: Zap, bold: "Fast storm response.", rest: "We prioritize storm calls and typically schedule inspections within 24 to 48 hours of your call." },
];

const FAQS = [
  { q: "How do I know if my roof has hail damage?", a: "Hail damage isn't always visible from the ground. Common signs include dented gutters, granule loss in your downspouts, and dings on roof vents or flashing. Even if your roof looks fine from the street, hail can compromise the shingle's integrity underneath. We've inspected thousands of roofs across the Denver metro after storms and the damage is almost always worse than it looks. We offer free inspections so you can know for certain." },
  { q: "Should I file with my insurance for storm damage?", a: "If the damage exceeds your deductible, filing is usually the right move. Colorado is one of the most hail prone states in the country, and most homeowner policies are designed to cover exactly this kind of damage. Our team has helped thousands of homeowners navigate the restoration process from initial inspection through final install. We document everything, meet with your adjuster on site, and advocate on your behalf to make sure nothing gets missed." },
  { q: "How quickly can you respond after a storm?", a: "Storm response is our top priority. With over 100 team members across Colorado's Front Range, we have the capacity to mobilize immediately after a storm hits. While other companies are booking out weeks, we're already on roofs getting inspections done." },
  { q: "Will my insurance cover the full cost of repairs?", a: "Most homeowner policies cover storm damage minus your deductible. We document every detail thoroughly with photos, measurements, and manufacturer specifications to support a complete and fair resolution. If your adjuster's initial estimate comes in short, we'll supplement the estimate with additional documentation. We've done this over 7,204 times." },
  { q: "What should I do immediately after a hailstorm?", a: "Don't get on your roof. Document what you can see from the ground, take photos of any damage to gutters, siding, or windows, and call us for a free inspection. The sooner you get a professional assessment, the stronger your case will be. Colorado has a one year deadline to file with most carriers, but earlier is always better." },
  { q: "Do I need to pay anything out of pocket?", a: "Your only out of pocket cost is typically your insurance deductible. The rest is covered by your policy. We work directly with your insurance company to make sure the scope of work and pricing align so there are no surprises." },
  { q: "Can I choose my own contractor or does insurance pick one?", a: "You always have the right to choose your own contractor in Colorado. Your insurance company may suggest preferred vendors, but you are not required to use them. Choosing a quadruple manufacturer certified contractor like Gates Enterprises ensures your roof is installed to the highest standards with warranties that preferred vendor programs often can't match." },
  { q: "What if my insurance restoration gets denied?", a: "It happens, but it's not always the final answer. We can help you understand why coverage was denied and whether a re inspection or supplement is worth pursuing. In many cases, having a certified contractor present during the adjuster's inspection makes a significant difference in the outcome." },
];

export default function StormContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="sd-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Storm &amp; Hail Damage
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Colorado Storm Damage and Hail Repair You Can Trust
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Fast response, expert craftsmanship, and full insurance support from a team that&apos;s repaired over 7,200 roofs across the Front Range.
          </p>
          <div className="sd-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection & Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTRO SECTION ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>STORM DAMAGE EXPERTS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              When the Storm Hits, We&apos;re Here
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              Colorado&apos;s Front Range sees some of the most severe hailstorms in the country. When a storm hits, you need a roofing partner who responds quickly, assesses damage honestly, and delivers lasting repairs. Gates Enterprises has been helping homeowners recover from storm damage for over 10 years. We handle everything from the initial inspection to the final walkthrough, so you can focus on your family while we take care of your home.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="sd-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
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
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={50} suffix=" yr" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Warranty Coverage</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>4.8</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Google Rating</div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS — horizontal stepper (desktop) / vertical timeline (mobile) ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Our Process</h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <StaggerCards
          className="sd-process-desktop"
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
                <div className="sd-step-line" style={{ position: "absolute", top: 30, left: "calc(50% + 34px)", width: "calc(100% - 52px)", height: 2, background: "rgba(37,99,235,0.15)", zIndex: 1 }} />
              )}
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{s.step}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: DEEP, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerCards>

        {/* Mobile: vertical timeline */}
        <div className="sd-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
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
            className="sd-why-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="sd-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
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

      {/* ─── MID-PAGE CTA ─── */}
      <section className="sd-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Think Your Roof Took Hail Damage?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free storm damage inspection.
          </p>
          <div className="sd-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Inspection &rarr;
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
                <div style={{ maxHeight: openFaq === i ? 500 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
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
            Don&apos;t Wait. Storm Damage Gets Worse Over Time.
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 36px", lineHeight: 1.75 }}>
            Call Gates Enterprises at (720) 766-3377 or email info@gatesroof.com to schedule your free storm damage inspection today.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 40px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700 }}>
            Request a Free Inspection & Estimate &rarr;
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .sd-process-mobile { display: none; }
        .sd-why-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .sd-process-desktop { display: none !important; }
          .sd-process-mobile { display: block !important; }
          .sd-hero { min-height: 65vh !important; }
          .sd-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .sd-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .sd-mid-cta-btns { flex-direction: column !important; }
          .sd-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .sd-stats { gap: 20px !important; }
          .sd-hero-btns { flex-direction: column !important; }
          .sd-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
