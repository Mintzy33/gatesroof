import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo";
import { ScrollReveal, StaggerCards, CounterGSAP, PhoneLink } from "./components/GSAPAnimations";
import BeforeAfterSlider from "./components/BeforeAfterSlider";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#C9A54E";
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
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>GAF Master Elite — Top 2% in North America</span>
              </div>
              <h1 className="hero-h1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 800, color: WHITE, lineHeight: 1.06, margin: "0 0 20px" }}>
                Colorado&apos;s Most{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trusted</span><br />Roofing Team
              </h1>
              <p className="hero-sub" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px", maxWidth: 460 }}>7,200+ roofs completed across the Denver metro. From hail damage claims to full exterior restoration.</p>
            <ScrollReveal delay={0.2}>
              <div className="hero-btns">
                <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Free Inspection →</Link>
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
                {[{ t: "4x Certified", d: "GAF · Malarkey · CertainTeed · Emerald" }, { t: "Insurance Experts", d: "Inspection to payment — we handle it all" }].map((c, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: "20px 18px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
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
      <section className="trust-bar" style={{ background: WHITE, padding: "20px 16px", borderBottom: "1px solid rgba(13,33,55,0.04)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, flexWrap: "nowrap" as const, whiteSpace: "nowrap" as const }}>
          {["GAF MASTER ELITE", "PLATINUM PREFERRED", "MALARKEY", "EMERALD PREMIUM", "BBB A+"].map((b) => (
            <span key={b} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", opacity: 0.65, flexShrink: 0 }}>{b}</span>
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
              { icon: Icons.home(), t: "Roof Replacement", d: "Full tear-off with Class 4 shingles. GAF Golden Pledge warranty.", h: "/services/roof-replacement" },
              { icon: Icons.storm(), t: "Storm & Hail Damage", d: "Insurance claim experts. Inspection to final payment.", h: "/services/storm-hail-damage" },
              { icon: Icons.wrench(), t: "Roof Repair", d: "Leak repair, flashing, emergency tarping. Fast response.", h: "/services/roof-repair" },
              { icon: Icons.siding(), t: "Siding & Exterior", d: "James Hardie, vinyl, and wood siding installation.", h: "/services/siding-exterior" },
              { icon: Icons.gutter(), t: "Gutters & Guards", d: "Seamless gutters and leaf guard systems.", h: "/services/gutters-guards" },
              { icon: Icons.clipboard(), t: "Insurance Claims", d: "Supplements, O&P negotiations — we fight for your payout.", h: "/services/insurance-claims" },
            ].map((s, i) => (
              <Link key={i} href={s.h} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="service-card" style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", borderLeft: `3px solid ${ACCENT}`, border: "1px solid rgba(13,33,55,0.06)", borderLeftWidth: 3, borderLeftColor: ACCENT, height: "100%", transition: "all 0.3s", cursor: "pointer", boxShadow: "0 2px 12px rgba(13,33,55,0.06)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.d}</p>
                </div>
              </Link>
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
                { n: "01", t: "Top 2% Nationwide", d: "GAF Master Elite — highest training, best warranties.", c: ACCENT },
                { n: "02", t: "Insurance Fighters", d: "Recovered millions in supplements. We know what adjusters miss.", c: GOLD },
                { n: "03", t: "One-Stop Exterior", d: "Roof, siding, gutters — one company, one warranty.", c: ACCENT },
                { n: "04", t: "Lakewood Local", d: "Not a storm chaser. We live and work here.", c: GOLD },
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

      {/* REVIEWS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 10px" }}>What Homeowners Say</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i}>{Icons.star()}</span>)}</div>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>4.8 · 200+ reviews</span>
              </div>
            </div>
          </ScrollReveal>
          <StaggerCards className="reviews-grid" stagger={0.12} distance={40}>
            {[
              { n: "Sarah M.", loc: "Lakewood, CO", t: "Gates handled our entire insurance claim after the hail storm. They found damage the first adjuster missed and got us an extra $8,000." },
              { n: "James R.", loc: "Arvada, CO", t: "Best contractor experience we've ever had. On time, on budget, and they cleaned up everything. The GAF warranty gives us real peace of mind." },
              { n: "Mike & Linda C.", loc: "Golden, CO", t: "We got quotes from 5 companies. Gates was the only one who walked us through the insurance process step by step." },
            ].map((r, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.04)", height: "100%", display: "flex", flexDirection: "column" as const }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[1,2,3,4,5].map(j => <span key={j}>{Icons.star()}</span>)}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: "0 0 20px", flex: 1, fontStyle: "italic" }}>&ldquo;{r.t}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, ${ACCENT})`, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700 }}>{r.n[0]}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY }}>{r.n}</div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
          <ScrollReveal>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>TRANSFORMATIONS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>See the Difference</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>Drag the slider to see our roof replacements in action.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <BeforeAfterSlider />
          </ScrollReveal>
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

      {/* CTA */}
      <section style={{ padding: "clamp(56px, 8vw, 80px) 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)` }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
              Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span>
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>Free inspections. No-pressure estimates. Colorado&apos;s most thorough roof evaluation.</p>
            <div className="home-cta-btns">
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Get Free Estimate</Link>
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
        .why-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center; }
        .why-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .home-cta-btns { display: flex; gap: 12px; justify-content: center; }

        .service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(13,33,55,0.12); border-left-color: #C9A54E !important; }
        @media (max-width: 768px) {
          .hero-wrap { grid-template-columns: 1fr !important; gap: 0 !important; padding: 110px 24px 32px !important; text-align: center; }
          .hero-right { display: none !important; }
          .hero-badge { margin-left: auto; margin-right: auto; margin-bottom: 18px !important; }
          .hero-badge span:last-child { font-size: 11px !important; }
          .hero-h1 { font-size: 34px !important; line-height: 1.12 !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 28px !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { text-align: center !important; padding: 16px 28px !important; }
          .trust-bar > div { justify-content: flex-start !important; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 0 16px; }
          .services-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .service-card { padding: 22px 18px !important; }
          .service-card h3 { font-size: 16px !important; }
          .service-card p { font-size: 13px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 36px !important; text-align: center; }
          .why-cards { grid-template-columns: 1fr 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .home-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .home-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 400px) {
          .hero-wrap { padding: 90px 16px 24px !important; }
          .hero-h1 { font-size: 30px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
