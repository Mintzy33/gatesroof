"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solid = scrollY > 60;
  const links = [
    { l: "Services", h: "/services/roof-replacement" },
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
        background: solid ? "rgba(255,255,255,0.97)" : "rgba(13,33,55,0.92)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        borderBottom: solid ? "1px solid rgba(13,33,55,0.06)" : "1px solid rgba(255,255,255,0.04)",
        transition: "all 0.4s",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 20px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* ─── Logo + Company Name ─── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Gates Enterprises"
              width={140}
              height={42}
              className="header-logo"
              style={{
                height: 36,
                width: "auto",
                objectFit: "contain",
                filter: solid ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.4s",
              }}
              priority
            />
            <div className="header-text">
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 17, fontWeight: 700,
                color: solid ? NAVY : WHITE,
                transition: "color 0.4s", lineHeight: 1.1,
              }}>GATES</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9, fontWeight: 600,
                color: solid ? TEXT_LIGHT : "rgba(255,255,255,0.5)",
                letterSpacing: "0.18em",
                transition: "color 0.4s",
              }}>ENTERPRISES LLC</div>
            </div>
          </Link>

          {/* ─── Desktop Nav ─── */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map(item => (
              <Link key={item.l} href={item.h} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                color: solid ? TEXT : "rgba(255,255,255,0.85)",
                textDecoration: "none", transition: "color 0.3s",
              }}>{item.l}</Link>
            ))}
            <div style={{ width: 1, height: 20, background: solid ? "rgba(13,33,55,0.1)" : "rgba(255,255,255,0.12)" }} />
            <a href="tel:7207663377" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              color: solid ? NAVY : WHITE, textDecoration: "none",
            }}>(720) 766-3377</a>
            <Link href="/contact" style={{
              background: ACCENT, color: WHITE, borderRadius: 100,
              padding: "11px 24px", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
              boxShadow: "0 4px 14px rgba(59,125,216,0.2)",
            }}>Free Estimate</Link>
          </nav>

          {/* ─── Mobile: Call + Hamburger ─── */}
          <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <a href="tel:7207663377" style={{
              background: ACCENT, color: WHITE, borderRadius: 100,
              padding: "8px 14px", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
              display: "flex", alignItems: "center", gap: 5,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}
            >
              <div style={{ width: 22, height: 16, position: "relative" }}>
                <span style={{
                  display: "block", width: 22, height: 2, borderRadius: 2,
                  background: menuOpen ? NAVY : (solid ? NAVY : WHITE),
                  position: "absolute", left: 0, transition: "all 0.3s",
                  top: menuOpen ? 7 : 0, transform: menuOpen ? "rotate(45deg)" : "none",
                }} />
                <span style={{
                  display: "block", width: 22, height: 2, borderRadius: 2,
                  background: menuOpen ? NAVY : (solid ? NAVY : WHITE),
                  position: "absolute", left: 0, top: 7,
                  opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s",
                }} />
                <span style={{
                  display: "block", width: 22, height: 2, borderRadius: 2,
                  background: menuOpen ? NAVY : (solid ? NAVY : WHITE),
                  position: "absolute", left: 0, transition: "all 0.3s",
                  top: menuOpen ? 7 : 14, transform: menuOpen ? "rotate(-45deg)" : "none",
                }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Menu ─── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999, background: WHITE,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ height: 64 }} />
        <div style={{ padding: "32px 28px", flex: 1 }}>
          {links.map((item, i) => (
            <Link key={item.l} href={item.h} onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "20px 0",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 32, fontWeight: 700, color: NAVY, textDecoration: "none",
                borderBottom: i < links.length - 1 ? "1px solid rgba(13,33,55,0.06)" : "none",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ${0.08 + i * 0.04}s, transform 0.4s ${0.08 + i * 0.04}s`,
              }}
            >{item.l}</Link>
          ))}
        </div>
        <div style={{ padding: "24px 28px 40px", background: "#FAFBFD" }}>
          <a href="tel:7207663377" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700,
            color: NAVY, textDecoration: "none", marginBottom: 16,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (720) 766-3377
          </a>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", textAlign: "center", background: ACCENT, color: WHITE,
            borderRadius: 14, padding: "18px 36px", textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
          }}>Get Free Estimate</Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .header-logo { height: 28px !important; }
          .header-text div:first-child { font-size: 15px !important; }
          .header-text div:last-child { font-size: 8px !important; }
        }
      `}</style>
    </>
  );
}
