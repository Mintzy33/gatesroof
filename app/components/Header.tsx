"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";

const SERVICE_LINKS = [
  { l: "Roof Replacement", h: "/services/roof-replacement" },
  { l: "Roof Repair", h: "/services/roof-repair" },
  { l: "Storm and Hail Damage", h: "/services/storm-hail-damage" },
  { l: "Siding and Exterior", h: "/services/siding-exterior" },
  { l: "Gutters and Guards", h: "/services/gutters-guards" },
  { l: "Windows", h: "/services/windows" },
  { l: "Paint", h: "/services/paint" },
  { l: "Insurance Restoration", h: "/services/insurance-claims" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Floating cloud animation
  useEffect(() => {
    if (!logoRef.current) return;
    let tween: gsap.core.Tween | null = null;
    import("gsap").then(({ default: gsap }) => {
      if (!logoRef.current) return;
      tween = gsap.to(logoRef.current, {
        y: -3.5,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
    return () => { tween?.kill(); };
  }, []);

  const handleServicesEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const links = [
    { l: "About", h: "/about" },
    { l: "Gallery", h: "/gallery" },
    { l: "Reviews", h: "/reviews" },
    { l: "Blog", h: "/blog" },
    { l: "Contact", h: "/contact" },
  ];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(13,33,55,0.97)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div className="header-inner" style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 20px",
          height: 80, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" className="header-brand" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <Image ref={logoRef} src="/logo.png" alt="Gates Enterprises" width={200} height={58} className="header-logo" style={{ height: 58, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} priority />
            <span className="header-text" style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif", fontSize: 19, fontWeight: 300, color: WHITE, lineHeight: 1, whiteSpace: "nowrap", letterSpacing: "0.08em" }}>GATES ENTERPRISES</span>
          </Link>
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Services dropdown */}
            <div
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              style={{ position: "relative" }}
            >
              <button
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15, fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 5,
                  padding: 0,
                }}
              >
                Services
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.25s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div style={{
                position: "absolute",
                top: "calc(100% + 12px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(13,33,55,0.98)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: 16,
                padding: "12px 0",
                minWidth: 240,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? "auto" : "none",
                visibility: servicesOpen ? "visible" as const : "hidden" as const,
                transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",
              }}>
                {/* Triangle pointer */}
                <div style={{
                  position: "absolute",
                  top: -6,
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: 12, height: 12,
                  background: "rgba(13,33,55,0.98)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRight: "none",
                  borderBottom: "none",
                }} />
                {SERVICE_LINKS.map((s, i) => (
                  <Link
                    key={s.h}
                    href={s.h}
                    style={{
                      display: "block",
                      padding: "11px 24px",
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      transition: "background 0.15s, color 0.15s",
                      borderBottom: i < SERVICE_LINKS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,99,235,0.12)"; e.currentTarget.style.color = WHITE; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                  >
                    {s.l}
                  </Link>
                ))}
              </div>
            </div>

            {links.map(item => (
              <Link key={item.l} href={item.h} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.3s" }}>{item.l}</Link>
            ))}
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.12)" }} />
            <a href="tel:7207663377" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: WHITE, textDecoration: "none" }}>(720) 766-3377</a>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "10px 22px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, boxShadow: "0 4px 14px rgba(59,125,216,0.2)", position: "relative", zIndex: 10, whiteSpace: "nowrap" as const }}>Free Inspection</Link>
          </nav>
          <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <a href="tel:7207663377" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
              <div style={{ width: 22, height: 16, position: "relative" }}>
                <span style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: menuOpen ? NAVY : WHITE, position: "absolute", left: 0, transition: "all 0.3s", top: menuOpen ? 7 : 0, transform: menuOpen ? "rotate(45deg)" : "none" }} />
                <span style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: menuOpen ? NAVY : WHITE, position: "absolute", left: 0, top: 7, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: menuOpen ? NAVY : WHITE, position: "absolute", left: 0, transition: "all 0.3s", top: menuOpen ? 7 : 14, transform: menuOpen ? "rotate(-45deg)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div style={{ position: "fixed", inset: 0, zIndex: 999, background: WHITE, transform: menuOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ height: 64 }} />
        <div style={{ padding: "32px 28px", flex: 1 }}>
          {/* Services accordion */}
          <div style={{ borderBottom: "1px solid rgba(13,33,55,0.06)", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.4s 0.08s, transform 0.4s 0.08s" }}>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
                padding: "20px 0", background: "none", border: "none", cursor: "pointer",
              }}
            >
              <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: NAVY }}>Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div style={{ maxHeight: mobileServicesOpen ? 500 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
              <div style={{ paddingBottom: 12 }}>
                {SERVICE_LINKS.map(s => (
                  <Link
                    key={s.h}
                    href={s.h}
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    style={{
                      display: "block",
                      padding: "12px 0 12px 16px",
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 500,
                      color: "rgba(13,33,55,0.7)",
                      textDecoration: "none",
                    }}
                  >
                    {s.l}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.map((item, i) => (
            <Link key={item.l} href={item.h} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "20px 0", fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: NAVY, textDecoration: "none", borderBottom: i < links.length - 1 ? "1px solid rgba(13,33,55,0.06)" : "none", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.4s ${0.12 + i * 0.04}s, transform 0.4s ${0.12 + i * 0.04}s` }}>{item.l}</Link>
          ))}
        </div>
        <div style={{ padding: "24px 28px 40px", background: "#FAFBFD" }}>
          <a href="tel:7207663377" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, textDecoration: "none", marginBottom: 16 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (720) 766-3377
          </a>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: "block", textAlign: "center", background: ACCENT, color: WHITE, borderRadius: 14, padding: "18px 36px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600 }}>Free Inspection & Estimate</Link>
        </div>
      </div>
      <style>{`
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .header-inner { height: 64px !important; }
          .header-brand { flex: 1; justify-content: center; }
          .header-logo { height: 34px !important; }
          .header-text { font-size: 14px !important; }
        }
      `}</style>
    </>
  );
}
