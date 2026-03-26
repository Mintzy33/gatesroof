import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo";
import { ScrollReveal, StaggerCards, CounterGSAP, PhoneLink } from "./components/GSAPAnimations";
import ReviewCarousel from "./components/LazyReviewCarousel";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const Icons = {
  home: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  storm: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  wrench: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>),
  siding: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>),
  gutter: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>),
  clipboard: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>),
  star: (c = GOLD) => (<svg width="14" height="14" viewBox="0 0 24 24" fill={c} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
};

export default function Home() {
  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", background: NAVY, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <HeroVideo />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,33,55,0.6) 0%, rgba(13,33,55,0.25) 40%, rgba(13,33,55,0.45) 100%)" }} />
        <div className="hero-wrap" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div>
              <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "7px 16px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>GAF Master Elite, Top 2% in North America</span>
              </div>
              <h1 className="hero-h1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 800, color: WHITE, lineHeight: 1.06, margin: "0 0 20px" }}>
                Colorado&apos;s Most{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trusted</span><br />Roofing Team
              </h1>
              <p className="hero-sub" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px", maxWidth: 460 }}>Thousands of roofs completed across the Denver metro. From hail damage restoration to full exterior solutions.</p>
            <ScrollReveal delay={0.2}>
              <div className="hero-btns">
                <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Request a Free Inspection & Estimate →</Link>
                <PhoneLink style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</PhoneLink>
              </div>
            </ScrollReveal>
          </div>
          <div className="hero-right">
            <ScrollReveal delay={0.3} direction="left">
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "28px 28px", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", marginBottom: 16, boxShadow: "0 8px 32px rgba(37,99,235,0.15), 0 0 60px rgba(37,99,235,0.06), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
                <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                  {[{ n: 7204, s: "+", l: "Roofs" }, { n: 10, s: "+", l: "Years" }, { n: 0, s: "", l: "Rating", star: true }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: WHITE, lineHeight: 1 }}>{s.star ? <span style={{ color: GOLD }}>4.8★</span> : <CounterGSAP end={s.n} suffix={s.s} duration={2.2} delay={0.8} />}</div>
                      <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.45} direction="left">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[{ t: "4x Manufacturer Certified", d: "GAF Master Elite · Owens Corning Preferred · Malarkey Emerald Premium · CertainTeed Shingle Master Pro" }, { t: "Insurance Restoration Experts", d: "Inspection to completion, we help navigate it all" }].map((c, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: "20px 18px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", textAlign: "center" as const }}>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE, marginBottom: 4 }}>{c.t}</div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" style={{ background: WHITE, padding: "20px 16px", borderBottom: "1px solid rgba(13,33,55,0.04)" }}>
        <div className="trust-badges" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, flexWrap: "wrap" as const }}>
          {["GAF MASTER ELITE", "OWENS CORNING PREFERRED", "MALARKEY EMERALD PREMIUM", "CERTAINTEED SHINGLE MASTER PRO", "BBB A+"].map((b) => (
            <span key={b} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", opacity: 0.65 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHAT WE DO</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Complete Exterior Solutions</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>One contractor for everything above your foundation.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="services-grid" stagger={0.1} distance={40}>
            {[
              { icon: Icons.home(), t: "Roof Replacement", d: "Full tear off with Class 4 shingles. GAF Golden Pledge warranty.", h: "/services/roof-replacement" },
              { icon: Icons.storm(), t: "Storm & Hail Damage", d: "Insurance restoration experts. Inspection to final payment.", h: "/services/storm-hail-damage" },
              { icon: Icons.wrench(), t: "Roof Repair", d: "Leak repair, flashing, emergency tarping. Fast response.", h: "/services/roof-repair" },
              { icon: Icons.siding(), t: "Siding & Exterior", d: "James Hardie, vinyl, and wood siding installation.", h: "/services/siding-exterior" },
              { icon: Icons.gutter(), t: "Gutters & Guards", d: "Seamless gutters and leaf guard systems.", h: "/services/gutters-guards" },
              { icon: Icons.clipboard(), t: "Insurance Restoration", d: "Supplements, O&P negotiations. We work with your insurance company.", h: "/services/insurance-claims" },
            ].map((s, i) => (
              <Link key={i} href={s.h} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="service-card" style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", borderTop: `3px solid ${ACCENT}`, borderRight: "1px solid rgba(13,33,55,0.06)", borderBottom: "1px solid rgba(13,33,55,0.06)", borderLeft: "1px solid rgba(13,33,55,0.06)", height: "100%", transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)", cursor: "pointer", boxShadow: "0 2px 12px rgba(13,33,55,0.06)" }}>
                  <div className="service-icon" style={{ width: 48, height: 48, borderRadius: 14, background: LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, transition: "all 0.35s" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8, transition: "color 0.35s" }}>{s.t}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, transition: "color 0.35s" }}>{s.d}</p>
                </div>
              </Link>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>HOW IT WORKS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Three Steps to a New Roof</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>From inspection to installation — we make it simple.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="hiw-grid" stagger={0.15} distance={40}>
            {[
              { n: "1", t: "Free Inspection", d: "We come to you. Our certified inspectors document every detail of your roof — no cost, no obligation." },
              { n: "2", t: "Insurance & Estimate", d: "If storm damage is found, we help document damage and work with your insurance adjuster. We know what gets missed." },
              { n: "3", t: "Expert Installation", d: "Our crews install your new roof with manufacturer-certified precision. Most jobs completed in one day." },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center" as const, position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: ACCENT, color: WHITE, fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: `0 8px 24px rgba(37,99,235,0.25)` }}>{step.n}</div>
                {i < 2 && <div className="hiw-connector" style={{ position: "absolute", top: 32, left: "calc(50% + 44px)", width: "calc(100% - 88px)", height: 2, background: `linear-gradient(90deg, ${ACCENT}, rgba(37,99,235,0.2))` }} />}
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}>{step.d}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* WHY GATES */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="why-grid">
            <div>
              <ScrollReveal>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHY GATES</span>
                <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: NAVY, margin: "10px 0 16px", lineHeight: 1.12 }}>Not Your Average<br />Roofing Company</h2>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: TEXT_LIGHT, marginBottom: 32 }}>While storm chasers come and go, we&apos;ve been protecting Colorado homes for over a decade. Our four manufacturer certifications mean access to the best warranties in the industry.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div style={{ display: "flex", gap: 28 }}>
                  {[{ n: 7204, s: "+", l: "Roofs", dur: 2.2 }, { n: 10, s: "+", l: "Years", dur: 2.2 }, { n: 0, s: "", l: "Rating", dur: 0, star: true }].map((s, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 800, color: NAVY }}>
                        {s.star ? <><span style={{ color: GOLD }}>4.8</span><span style={{ color: GOLD }}>★</span></> : <CounterGSAP end={s.n} suffix={s.s} duration={s.dur} />}
                      </div>
                      <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, color: TEXT_LIGHT, marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <StaggerCards className="why-cards" stagger={0.1} distance={40}>
              {[
                { n: "01", t: "Top 2% Nationwide", d: "GAF Master Elite. Highest training, best warranties.", c: ACCENT },
                { n: "02", t: "Insurance Fighters", d: "Recovered millions in supplements. We know what adjusters miss.", c: ACCENT },
                { n: "03", t: "One Stop Exterior", d: "Roof, siding, gutters. One company, one warranty.", c: ACCENT },
                { n: "04", t: "Lakewood Local", d: "Not a storm chaser. We live and work here.", c: ACCENT },
              ].map((item, i) => (
                <div key={i} style={{ background: LIGHT_BG, borderRadius: 18, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.c, letterSpacing: "0.15em" }}>{item.n}</span>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: "8px 0 6px" }}>{item.t}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{item.d}</p>
                </div>
              ))}
            </StaggerCards>
          </div>
        </div>
      </section>

      {/* COLORADO HAIL */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
          <ScrollReveal>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>COLORADO&apos;S HAIL PROBLEM</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 16px" }}>Why Colorado Homeowners Need a Roofing Partner</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.8 }}>Colorado ranks #1 in the nation for hail damage insurance claims. The Front Range sees damaging hailstorms every spring and summer, with stones regularly exceeding golf ball size. Many homeowners don&apos;t realize their roof has storm damage until leaks appear years later. A proactive inspection after every major storm is the single best way to protect your home&apos;s value — and insurance may cover most repairs, with homeowners typically paying only their deductible.</p>
          </ScrollReveal>
          <StaggerCards className="hail-stats" stagger={0.1} distance={30}>
            {[
              { n: "1st", d: "in Nation for Hail Claims" },
              { n: "7+", d: "Hailstorms Per Year (Avg)" },
              { n: "$2.36B", d: "in CO Hail Losses (2023)" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "28px 20px", background: LIGHT_BG, borderRadius: 18, border: "1px solid rgba(13,33,55,0.04)" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 4 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT, lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* CERTIFICATIONS EXPLAINED */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>CERTIFICATIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>What Our Certifications Actually Mean For You</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Not all roofers are created equal. Here&apos;s what sets us apart.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="cert-grid" stagger={0.1} distance={40}>
            {[
              { t: "GAF Master Elite", d: "Top 2% of roofers nationwide. Unlocks the GAF Golden Pledge warranty — 25 years on labor, 50 years on materials. The strongest warranty in roofing." },
              { t: "Owens Corning Preferred", d: "Preferred contractor status means access to the Total Protection Roofing System and extended warranties most contractors can't offer." },
              { t: "Malarkey Emerald Premium", d: "Certified installer of Malarkey's impact-resistant shingles — engineered specifically for Colorado's extreme hail." },
              { t: "CertainTeed ShingleMaster", d: "Advanced training in CertainTeed's premium product line. SureStart Plus warranty coverage for complete peace of mind." },
            ].map((c, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", borderTop: `3px solid ${ACCENT}`, border: `1px solid rgba(13,33,55,0.06)`, borderTopWidth: 3, borderTopColor: ACCENT, boxShadow: "0 2px 12px rgba(13,33,55,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{c.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 10px" }}>What Homeowners Say</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i}>{Icons.star()}</span>)}</div>
                <a href="https://www.google.com/maps/place/Gates+Enterprises" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, textDecoration: "none", borderBottom: "1px solid rgba(100,116,139,0.3)", transition: "color 0.2s" }}>4.8 stars from 300+ Google Reviews</a>
              </div>
            </div>
          </ScrollReveal>
          <ReviewCarousel />
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
          <ScrollReveal>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Proudly Serving Denver Metro</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>Based in Lakewood. Serving every community along the Front Range.</p>
          </ScrollReveal>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
            {[
              {n:"Lakewood",s:"lakewood"},{n:"Denver",s:"denver"},{n:"Aurora",s:"aurora"},{n:"Arvada",s:"arvada"},{n:"Westminster",s:"westminster"},
              {n:"Thornton",s:"thornton"},{n:"Centennial",s:"centennial"},{n:"Littleton",s:"littleton"},{n:"Englewood",s:"englewood"},{n:"Wheat Ridge",s:"wheat-ridge"},
              {n:"Golden",s:"golden"},{n:"Broomfield",s:"broomfield"},{n:"Highlands Ranch",s:"highlands-ranch"},{n:"Parker",s:"parker"},{n:"Castle Rock",s:"castle-rock"},
              {n:"Commerce City",s:"commerce-city"},{n:"Conifer",s:"conifer"},{n:"Edgewater",s:"edgewater"},{n:"Federal Heights",s:"federal-heights"},{n:"Northglenn",s:"northglenn"},
            ].map((c) => (
              <Link key={c.n} href={`/areas/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* COLORADO SERVICE AREAS HUB */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 48px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>COLORADO SERVICE AREAS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Roofing Services Across the Front Range</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>65+ cities served. Find your city and explore our services.</p>
            </div>
          </ScrollReveal>
          <div className="csa-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { n: "Denver", s: "denver" }, { n: "Aurora", s: "aurora" }, { n: "Lakewood", s: "lakewood" }, { n: "Arvada", s: "arvada" },
              { n: "Westminster", s: "westminster" }, { n: "Thornton", s: "thornton" }, { n: "Centennial", s: "centennial" }, { n: "Parker", s: "parker" },
              { n: "Castle Rock", s: "castle-rock" }, { n: "Broomfield", s: "broomfield" }, { n: "Golden", s: "golden" }, { n: "Highlands Ranch", s: "highlands-ranch" },
              { n: "Littleton", s: "littleton" }, { n: "Englewood", s: "englewood" }, { n: "Commerce City", s: "commerce-city" }, { n: "Northglenn", s: "northglenn" },
              { n: "Wheat Ridge", s: "wheat-ridge" }, { n: "Federal Heights", s: "federal-heights" }, { n: "Brighton", s: "brighton" }, { n: "Lone Tree", s: "lone-tree" },
              { n: "Greenwood Village", s: "greenwood-village" }, { n: "Castle Pines", s: "castle-pines" }, { n: "Superior", s: "superior" }, { n: "Louisville", s: "louisville" },
              { n: "Lafayette", s: "lafayette" }, { n: "Erie", s: "erie" }, { n: "Longmont", s: "longmont" }, { n: "Boulder", s: "boulder" },
              { n: "Fort Collins", s: "fort-collins" }, { n: "Loveland", s: "loveland" }, { n: "Colorado Springs", s: "colorado-springs" }, { n: "Conifer", s: "conifer" },
            ].map((c) => (
              <div key={c.s} style={{ background: WHITE, borderRadius: 16, padding: "20px 18px", border: "1px solid rgba(13,33,55,0.06)", boxShadow: "0 2px 8px rgba(13,33,55,0.04)" }}>
                <Link href={`/areas/${c.s}`} style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, textDecoration: "none", display: "block", marginBottom: 10 }}>{c.n}</Link>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4 }}>
                  {[
                    { l: "Roof Replacement", sl: "roof-replacement" },
                    { l: "Storm Damage", sl: "storm-hail-damage" },
                    { l: "Roof Repair", sl: "roof-repair" },
                    { l: "Siding", sl: "siding" },
                    { l: "Gutters", sl: "gutters" },
                  ].map((svc) => (
                    <Link key={svc.sl} href={`/services/${svc.sl}/${c.s}`} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, color: ACCENT, textDecoration: "none", padding: "3px 8px", borderRadius: 6, background: "rgba(37,99,235,0.06)", fontWeight: 500 }}>{svc.l}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST BLOG POSTS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 48px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>FROM THE BLOG</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Expert Roofing Guides for Colorado Homeowners</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>In-depth articles on roofing materials, insurance claims, storm damage, and more.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="blog-grid" stagger={0.1} distance={40}>
            {[
              { t: "Class 4 Impact Resistant Shingles: Are They Worth It?", c: "Roofing Materials", h: "/blog/class-4-impact-resistant-shingles-colorado" },
              { t: "Colorado Hail Season 2026: Complete Homeowner's Guide", c: "Storm Damage", h: "/blog/colorado-hail-season-2026-homeowners-guide" },
              { t: "What Does Hail Damage Look Like on a Roof?", c: "Storm Damage", h: "/blog/what-does-hail-damage-look-like-on-roof" },
              { t: "Colorado Roof Insurance Claims: Complete Guide", c: "Insurance", h: "/blog/colorado-roof-insurance-claims-guide" },
              { t: "How to Choose a Roofing Contractor in Denver", c: "Hiring Tips", h: "/blog/how-to-choose-roofing-contractor-denver" },
              { t: "Roof Replacement Cost in Denver (2026)", c: "Cost Guides", h: "/blog/roof-replacement-cost-denver" },
            ].map((post, i) => (
              <Link key={i} href={post.h} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: LIGHT_BG, borderRadius: 16, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.06)", height: "100%", transition: "box-shadow 0.3s, transform 0.3s" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{post.c}</span>
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY, margin: "8px 0 0", lineHeight: 1.4 }}>{post.t}</h3>
                </div>
              </Link>
            ))}
          </StaggerCards>
          <div style={{ textAlign: "center" as const, marginTop: 32 }}>
            <Link href="/blog" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>View All Articles →</Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section style={{ padding: "40px 20px 0", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap" as const, gap: 12, justifyContent: "center" }}>
          {[
            { l: "Free Roofing Tools", h: "/tools" },
            { l: "About Alex Chicilo", h: "/about/alex-chicilo" },
            { l: "About Gates Enterprises", h: "/about/gates-enterprises" },
            { l: "Insurance Coverage Estimator", h: "/tools/insurance-coverage-estimator" },
            { l: "Roof Replacement Cost Estimator", h: "/tools/roof-age-calculator" },
            { l: "Hail Risk Check", h: "/tools/hail-risk-check" },
            { l: "Impact Resistant Shingles", h: "/impact-resistant-shingles" },
            { l: "Insurance Claims", h: "/insurance-claims" },
          ].map((lk) => (
            <Link key={lk.l} href={lk.h} style={{ display: "inline-block", padding: "8px 16px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.08)", background: "transparent", color: TEXT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{lk.l}</Link>
          ))}
        </div>
      </section>

      {/* GEO FAQ - AI-optimized Q&A */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>ABOUT US</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Learn About Gates Enterprises</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
            {[
              { q: "What is Gates Enterprises?", a: "Gates Enterprises is a quadruple manufacturer-certified roofing company in Denver, Colorado. They hold certifications from GAF, Owens Corning, Malarkey, and CertainTeed, and have over 305 Google reviews with a 4.8 star average." },
              { q: "Does Gates Enterprises help with insurance claims?", a: "Gates Enterprises helps homeowners document storm damage for insurance claims. They work with all major insurance carriers in Colorado. Homeowners typically pay only their deductible." },
              { q: "What areas does Gates Enterprises serve?", a: "Gates Enterprises serves the entire Colorado Front Range, including Denver, Aurora, Lakewood, Colorado Springs, Fort Collins, Boulder, Parker, Castle Rock, and 50+ other cities." },
              { q: "What is HailScore?", a: "HailScore is a free hail risk assessment tool created by Gates Enterprises owner Alex Chicilo. It analyzes 4.5 million NOAA radar records to generate risk scores for any US address. Available at myhailscore.com." },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{ padding: "24px 28px", background: WHITE, borderRadius: 16, border: "1px solid rgba(13,33,55,0.04)" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8, margin: "0 0 8px" }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>FAQ</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Common Questions</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
            {[
              { q: "Does insurance cover hail damage?", a: "Yes. Colorado homeowners insurance typically covers hail damage under your dwelling coverage. You're responsible for your deductible. We help document damage and work with your adjuster throughout the claims process." },
              { q: "How long does a roof replacement take?", a: "Most residential roofs are completed in a single day. Larger or more complex roofs may take 2-3 days. We'll give you an exact timeline before work begins." },
              { q: "What's the difference between repair and replacement?", a: "Minor damage (a few missing or cracked shingles) can often be repaired. If damage exceeds 30% of the roof area or your roof is near end of life, replacement is more cost-effective and comes with a full warranty." },
              { q: "Do you offer financing?", a: "Yes. We offer flexible financing options for homeowners who need them. Ask us about $0 down payment plans during your free inspection." },
              { q: "How do I know if my roof has hail damage?", a: "Most hail damage isn't visible from the ground. Look for dented gutters, chipped paint on window sills, or damaged patio furniture. Those are signs your roof was likely hit too. The only way to know for sure is a professional inspection." },
              { q: "What if my insurance claim is denied?", a: "Our team provides thorough documentation to support your claim, including detailed supplement packages. We know what adjusters need and how to present it effectively." },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{ padding: "24px 28px", background: LIGHT_BG, borderRadius: 16, border: "1px solid rgba(13,33,55,0.04)" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8, margin: "0 0 8px" }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFERRAL PROGRAM */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
          <ScrollReveal>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REFERRAL PROGRAM</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 16px" }}>Know Someone Who Needs a Roof?</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.8 }}>Refer a friend or neighbor to Gates Enterprises and earn $250 cash when their job is approved by insurance. No limit on referrals.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="referral-tiers" style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32, flexWrap: "wrap" as const }}>
              {[
                { amt: "$250", label: "1st Referral" },
                { amt: "$350", label: "3rd Referral" },
                { amt: "$500", label: "5th Referral" },
              ].map((tier, i) => (
                <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "20px 28px", border: "1px solid rgba(13,33,55,0.06)", boxShadow: "0 2px 12px rgba(13,33,55,0.06)", minWidth: 140 }}>
                  <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 800, color: NAVY }}>{tier.amt}</div>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, marginTop: 4, fontWeight: 500 }}>{tier.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/referral" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Learn More &amp; Refer Now →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(56px, 8vw, 80px) 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)` }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
              Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span>
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>Free inspections. No pressure estimates. Colorado&apos;s most thorough roof evaluation.</p>
            <div className="home-cta-btns">
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Request a Free Inspection & Estimate</Link>
              <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        /* Desktop defaults (unlayered so they override Tailwind CSS layers) */
        .hero-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; padding: 140px 20px 80px; }
        .hero-btns { display: flex; gap: 12px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .hiw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; position: relative; }
        .hail-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .why-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center; }
        .why-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.home-cta-btns { display: flex; gap: 12px; justify-content: center; }

        .service-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(13,33,55,0.22), 0 8px 20px rgba(13,33,55,0.12); background: #0D2137 !important; border-color: #0D2137 !important; }
        .service-card:hover h3 { color: #FFFFFF !important; }
        .service-card:hover p { color: rgba(255,255,255,0.7) !important; }
        .service-card:hover .service-icon { background: rgba(255,255,255,0.1) !important; }
        .service-card:hover .service-icon svg { stroke: #FFFFFF !important; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .csa-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
          .csa-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-wrap { grid-template-columns: 1fr !important; gap: 0 !important; padding: 110px 24px 32px !important; text-align: center; }
          .hero-right { display: none !important; }
          .hero-badge { margin-left: auto; margin-right: auto; margin-bottom: 18px !important; }
          .hero-badge span:last-child { font-size: 11px !important; }
          .hero-h1 { font-size: 34px !important; line-height: 1.12 !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 28px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { text-align: center !important; padding: 16px 28px !important; }
          .trust-badges { gap: 14px 20px !important; justify-content: center !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .service-card { padding: 22px 18px !important; }
          .service-card h3 { font-size: 16px !important; }
          .service-card p { font-size: 13px !important; }
          .hiw-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hiw-connector { display: none !important; }
          .hail-stats { grid-template-columns: 1fr !important; gap: 12px !important; }
          .cert-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 36px !important; text-align: center; }
          .why-cards { grid-template-columns: 1fr 1fr !important; }
.home-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .home-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 400px) {
          .csa-grid { grid-template-columns: 1fr !important; }
          .hero-wrap { padding: 90px 16px 24px !important; }
          .hero-h1 { font-size: 30px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
