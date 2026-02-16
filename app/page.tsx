"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/v1771207837/gatesroof.com_Header_on1ccl.mov";

// ── SVG Icons ──
const Icons = {
  home: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  storm: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  wrench: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  siding: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="9" /><line x1="15" y1="9" x2="15" y2="15" /><line x1="9" y1="15" x2="9" y2="21" />
    </svg>
  ),
  gutter: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  ),
  clipboard: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  award: (color = GOLD) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  shield: (color = ACCENT) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  star: (color = GOLD) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={color} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  trustDot: (color = GOLD) => (
    <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={color} /></svg>
  ),
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, direction = "up" }: { children: ReactNode; delay?: number; direction?: string }) {
  const [ref, visible] = useInView();
  const dirs: Record<string, string> = { up: "translateY(32px)", down: "translateY(-32px)", left: "translateX(32px)", right: "translateX(-32px)", none: "none" };
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : dirs[direction],
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function ServiceCard({ icon, title, desc, delay }: { icon: ReactNode; title: string; desc: string; delay: number }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          background: WHITE, borderRadius: 20, padding: "40px 32px",
          cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          transform: h ? "translateY(-6px)" : "none",
          boxShadow: h ? "0 20px 50px rgba(13,33,55,0.1)" : "0 2px 12px rgba(13,33,55,0.04)",
          border: `1px solid ${h ? "rgba(59,125,216,0.15)" : "rgba(13,33,55,0.05)"}`,
          position: "relative" as const, overflow: "hidden" as const,
        }}>
        <div style={{
          position: "absolute" as const, top: 0, left: 0, width: "100%", height: 3,
          background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
          transform: h ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }} />
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: h ? `${ACCENT}12` : LIGHT_BG,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 20, transition: "background 0.3s",
        }}>{icon}</div>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 21, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{desc}</p>
        <div style={{
          marginTop: 24, display: "flex", alignItems: "center", gap: 8,
          color: ACCENT, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
          opacity: h ? 1 : 0, transform: h ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}>Learn more <span style={{ fontSize: 18 }}>→</span></div>
      </div>
    </FadeIn>
  );
}

function TestimonialCard({ name, location, text, stars, delay }: { name: string; location: string; text: string; stars: number; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div style={{
        background: WHITE, borderRadius: 20, padding: "36px 32px",
        border: "1px solid rgba(13,33,55,0.05)", boxShadow: "0 2px 12px rgba(13,33,55,0.03)",
        height: "100%", display: "flex", flexDirection: "column" as const,
      }}>
        <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
          {Array(stars).fill(0).map((_, i) => <span key={i}>{Icons.star()}</span>)}
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: TEXT, margin: "0 0 24px", flex: 1, fontStyle: "italic" }}>&ldquo;{text}&rdquo;</p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: `linear-gradient(135deg, ${NAVY}, ${ACCENT})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: WHITE, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700,
          }}>{name[0]}</div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY }}>{name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>{location}</div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function CityPill({ name, delay }: { name: string; delay: number }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay} direction="none">
      <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        display: "inline-block", padding: "10px 22px", borderRadius: 100,
        border: `1.5px solid ${h ? ACCENT : "rgba(13,33,55,0.12)"}`,
        background: h ? ACCENT : "transparent", color: h ? WHITE : NAVY,
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
        cursor: "pointer", transition: "all 0.3s",
      }}>{name}</span>
    </FadeIn>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerSolid = scrollY > 60;

  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>

      {/* HEADER */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: headerSolid ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: headerSolid ? "blur(20px)" : "none",
        borderBottom: headerSolid ? "1px solid rgba(13,33,55,0.06)" : "none",
        transition: "all 0.4s",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: headerSolid ? 68 : 80,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "height 0.4s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: WHITE, fontSize: 20, fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif" }}>G</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: headerSolid ? NAVY : WHITE, transition: "color 0.4s" }}>GATES</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9.5, fontWeight: 600, color: headerSolid ? TEXT_LIGHT : "rgba(255,255,255,0.5)", letterSpacing: "0.18em", transition: "color 0.4s" }}>ENTERPRISES LLC</div>
            </div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {["Services", "About", "Gallery", "Reviews", "Blog", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                color: headerSolid ? TEXT : "rgba(255,255,255,0.8)",
                textDecoration: "none", transition: "color 0.3s",
              }}>{item}</a>
            ))}
            <div style={{ width: 1, height: 20, background: headerSolid ? "rgba(13,33,55,0.1)" : "rgba(255,255,255,0.15)" }} />
            <a href="tel:7207663377" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              color: headerSolid ? NAVY : WHITE, textDecoration: "none", transition: "color 0.4s",
            }}>(720) 766-3377</a>
            <a href="#estimate" style={{
              background: ACCENT, color: WHITE, border: "none", borderRadius: 100,
              padding: "12px 26px", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
              boxShadow: "0 4px 14px rgba(59,125,216,0.25)",
            }}>Free Estimate</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "100vh", background: NAVY,
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <video autoPlay muted loop playsInline style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.6,
        }}>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(170deg, rgba(13,33,55,0.55) 0%, rgba(10,31,51,0.45) 50%, rgba(13,33,55,0.6) 100%)",
        }} />
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "160px 24px 120px",
          position: "relative", zIndex: 1, width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
        }}>
          <div>
            <FadeIn delay={0.1}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(59,125,216,0.08)", border: "1px solid rgba(59,125,216,0.15)",
                borderRadius: 100, padding: "8px 18px", marginBottom: 28,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 10px rgba(74,222,128,0.4)", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>GAF Master Elite — Top 2% in North America</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(40px, 4.5vw, 64px)", fontWeight: 800,
                color: WHITE, lineHeight: 1.08, margin: "0 0 24px",
              }}>
                Colorado&apos;s Most{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Trusted</span>
                <br />Roofing Team
              </h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.75,
                color: "rgba(255,255,255,0.85)", margin: "0 0 36px", maxWidth: 480,
              }}>From hail damage claims to full exterior restoration — 7,200+ roofs completed across the Denver metro. Your roof. Our reputation.</p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
                <a href="#estimate" style={{
                  background: ACCENT, color: WHITE, borderRadius: 100,
                  padding: "18px 36px", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
                  boxShadow: "0 8px 30px rgba(59,125,216,0.3)",
                }}>Get Your Free Inspection →</a>
                <a href="tel:7207663377" style={{
                  background: "rgba(255,255,255,0.06)", color: WHITE,
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100,
                  padding: "18px 36px", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500,
                }}>(720) 766-3377</a>
              </div>
            </FadeIn>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
            <FadeIn delay={0.3} direction="left">
              <div style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20, padding: "32px 36px", backdropFilter: "blur(10px)",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
                  {[
                    { num: 7204, suffix: "+", label: "Roofs Completed" },
                    { num: 10, suffix: "+", label: "Years in Business" },
                    { num: 0, suffix: "", label: "Google Rating", display: "4.8★" },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 800, color: WHITE, lineHeight: 1 }}>
                        {s.display ? s.display : <Counter end={s.num} suffix={s.suffix} />}
                      </div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.45} direction="left">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ marginBottom: 12 }}>{Icons.award(WHITE)}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE }}>4x Manufacturer Certified</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>GAF • Malarkey • CertainTeed Platinum Preferred • Emerald</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ marginBottom: 12 }}>{Icons.shield(WHITE)}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE }}>Insurance Claim Experts</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Inspection to payment — we handle it all</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", animation: "heroFloat 2.5s ease-in-out infinite", display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
          <div style={{ width: 24, height: 40, borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.15)", display: "flex", justifyContent: "center", paddingTop: 8 }}>
            <div style={{ width: 3, height: 8, borderRadius: 3, background: "rgba(255,255,255,0.4)", animation: "scrollDot 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: WHITE, padding: "32px 24px", borderBottom: "1px solid rgba(13,33,55,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" as const }}>
          {["GAF MASTER ELITE", "PLATINUM PREFERRED", "MALARKEY CERTIFIED", "EMERALD PREMIUM", "BBB A+ RATED"].map((badge) => (
            <div key={badge} style={{ display: "flex", alignItems: "center", gap: 10, opacity: 0.45 }}>
              {Icons.trustDot()}
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: NAVY, letterSpacing: "0.12em" }}>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "110px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHAT WE DO</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 16px" }}>Complete Exterior Solutions</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>One contractor for everything above your foundation. No subcontractor runaround.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <ServiceCard href="/services/roof-replacement" icon={Icons.home()} title="Roof Replacement" desc="Full tear-off and install with impact-resistant Class 4 shingles. GAF Golden Pledge warranty available." delay={0.05} />
            <ServiceCard href="/services/storm-hail-damage" icon={Icons.storm()} title="Storm & Hail Damage" desc="Colorado's insurance claim experts. We handle the entire process from inspection to final payment." delay={0.1} />
            <ServiceCard href="/services/roof-repair" icon={Icons.wrench()} title="Roof Repair" desc="Leak repair, flashing, vent replacement, and emergency tarping. Fast response across Denver metro." delay={0.15} />
            <ServiceCard href="/services/siding-exterior" icon={Icons.siding()} title="Siding & Exterior" desc="James Hardie, vinyl, and wood siding installation. Plus professional exterior painting." delay={0.2} />
            <ServiceCard href="/services/gutters-guards" icon={Icons.gutter()} title="Gutters & Guards" desc="Seamless gutter installation, downspouts, and leaf guard systems to protect your foundation." delay={0.25} />
            <ServiceCard href="/services/insurance-claims" icon={Icons.clipboard()} title="Insurance Claims" desc="We speak adjuster. From supplement requests to O&P negotiations — we fight for your full payout." delay={0.3} />
          </div>
        </div>
      </section>

      {/* WHY GATES */}
      <section id="about" style={{ padding: "110px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHY GATES</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "14px 0 20px", lineHeight: 1.12 }}>
                  Not Your Average<br />Roofing Company
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: TEXT_LIGHT, marginBottom: 36 }}>
                  While storm chasers come and go, we&apos;ve been protecting Colorado homes for over a decade. Our four manufacturer certifications mean access to the best warranties in the industry.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div style={{ display: "flex", gap: 32 }}>
                  {[{ v: "7,204+", l: "Roofs" }, { v: "10+", l: "Years" }, { v: "4.8★", l: "Rating" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 800, color: NAVY }}>{s.v}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { n: "01", title: "Top 2% Nationwide", desc: "GAF Master Elite means the highest training, best warranties, and manufacturer backing.", c: ACCENT },
                { n: "02", title: "Insurance Fighters", desc: "We've recovered millions in supplements. We know what adjusters miss.", c: GOLD },
                { n: "03", title: "One-Stop Exterior", desc: "Roof, siding, gutters, windows, paint — one company, one warranty, one contact.", c: ACCENT },
                { n: "04", title: "Lakewood Local", desc: "Not a storm chaser. We live here, work here, and we'll be here next time.", c: GOLD },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <div style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(13,33,55,0.04)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: item.c, letterSpacing: "0.15em" }}>{item.n}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: NAVY, margin: "10px 0 8px" }}>{item.title}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" style={{ padding: "110px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 12px" }}>What Homeowners Say</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i}>{Icons.star()}</span>)}</div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT }}>4.8 average · 200+ Google reviews</span>
              </div>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <TestimonialCard delay={0.05} name="Sarah Mitchell" location="Lakewood, CO" stars={5} text="Gates handled our entire insurance claim after the hail storm. They found damage the first adjuster missed and got us an extra $8,000. Roof looks incredible." />
            <TestimonialCard delay={0.12} name="James Rodriguez" location="Arvada, CO" stars={5} text="Best contractor experience we've ever had. On time, on budget, and they cleaned up everything. The GAF warranty gives us real peace of mind." />
            <TestimonialCard delay={0.19} name="Mike & Linda Chen" location="Golden, CO" stars={5} text="We got quotes from 5 companies. Gates was the only one who walked us through the insurance process step by step. They even negotiated directly with our adjuster." />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "110px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" as const }}>
          <FadeIn>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 16px" }}>Proudly Serving Denver Metro</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7 }}>Based in Lakewood. Serving every community along the Front Range.</p>
          </FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
            {["Lakewood","Denver","Aurora","Arvada","Westminster","Thornton","Centennial","Littleton","Englewood","Wheat Ridge","Golden","Broomfield","Highlands Ranch","Parker","Castle Rock","Commerce City","Conifer","Edgewater","Federal Heights","Northglenn"].map((city, i) => (
              <CityPill key={city} name={city} delay={0.02 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="estimate" style={{ padding: "100px 24px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(201,165,78,0.06) 0%, transparent 40%)`,
        }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800, color: WHITE, margin: "0 0 20px", lineHeight: 1.1 }}>
              Ready to Protect{" "}
              <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", margin: "0 0 40px" }}>Free inspections. No-pressure estimates. Colorado&apos;s most thorough roof evaluation.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
              <a href="tel:7207663377" style={{
                background: ACCENT, color: WHITE, borderRadius: 100, padding: "20px 44px",
                textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600,
                boxShadow: "0 8px 30px rgba(59,125,216,0.3)",
              }}>Schedule Free Inspection</a>
              <a href="tel:7207663377" style={{
                background: "transparent", color: WHITE,
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100,
                padding: "20px 44px", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500,
              }}>Call (720) 766-3377</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ padding: "64px 24px 36px", background: "#F8F9FA", borderTop: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: WHITE, fontSize: 17, fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif" }}>G</span>
                </div>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY }}>GATES ENTERPRISES</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, maxWidth: 280 }}>
                1445 Holland St, Lakewood, CO 80215<br />Colorado Licensed General Contractor<br />GAF Master Elite Certified
              </p>
            </div>
            {[
              { title: "Services", links: ["Roof Replacement", "Storm Damage", "Siding", "Gutters", "Insurance Claims"] },
              { title: "Company", links: ["About Us", "Certifications", "Gallery", "Reviews", "Blog"] },
              { title: "Contact", links: ["(720) 766-3377", "gatesroof.com", "Free Estimate", "Service Areas"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, textDecoration: "none", marginBottom: 14 }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>© 2026 Gates Enterprises LLC. All rights reserved.</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>Lakewood, Colorado</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
