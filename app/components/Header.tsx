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

  // Lock body scroll when menu open
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
        background: solid ? "rgba(255,255,255,0.97)" : "rgba(13,33,55,0.95)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: solid ? "1px solid rgba(13,33,55,0.06)" : "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.4s",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 20px",
          height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Gates Enterprises"
              width={160}
              height={48}
              style={{
                height: 42,
                width: "auto",
                objectFit: "contain",
                filter: solid ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.4s",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
            {links.map(item => (
              <Link key={item.l} href={item.h} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                color: solid ? TEXT : "rgba(255,255,255,0.85)",
                textDecoration: "none", transition: "color 0.3s",
              }}>{item.l}</Link>
            ))}
            <div style={{ width: 1, height: 20, background: solid ? "rgba(13,33,55,0.1)" : "rgba(255,255,255,0.15)" }} />
            <a href="tel:7207663377" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              color: solid ? NAVY : WHITE, textDecoration: "none",
            }}>(720) 766-3377</a>
            <Link href="/contact" style={{
              background: ACCENT, color: WHITE, borderRadius: 100,
              padding: "12px 26px", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
              boxShadow: "0 4px 14px rgba(59,125,216,0.25)",
            }}>Free Estimate</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label="Menu"
            style={{
              display: "none", background: "none", border: "none", cursor: "pointer",
              padding: 8, zIndex: 1002,
            }}
          >
            <div style={{ width: 24, height: 18, position: "relative" }}>
              <span style={{
                display: "block", width: 24, height: 2, borderRadius: 2,
                background: solid ? NAVY : WHITE,
                position: "absolute", left: 0, transition: "all 0.3s",
                top: menuOpen ? 8 : 0,
                transform: menuOpen ? "rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: 24, height: 2, borderRadius: 2,
                background: solid ? NAVY : WHITE,
                position: "absolute", left: 0, top: 8,
                opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s",
              }} />
              <span style={{
                display: "block", width: 24, height: 2, borderRadius: 2,
                background: solid ? NAVY : WHITE,
                position: "absolute", left: 0, transition: "all 0.3s",
                top: menuOpen ? 8 : 16,
                transform: menuOpen ? "rotate(-45deg)" : "none",
              }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: WHITE,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        paddingTop: 80,
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ padding: "20px 24px", flex: 1 }}>
          {links.map((item, i) => (
            <Link
              key={item.l}
              href={item.h}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "18px 0",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 28, fontWeight: 700, color: NAVY,
                textDecoration: "none",
                borderBottom: "1px solid rgba(13,33,55,0.06)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                transition: `opacity 0.4s ${0.1 + i * 0.05}s, transform 0.4s ${0.1 + i * 0.05}s`,
              }}
            >{item.l}</Link>
          ))}
        </div>
        <div style={{ padding: "24px", borderTop: "1px solid rgba(13,33,55,0.06)" }}>
          <a href="tel:7207663377" style={{
            display: "block", textAlign: "center",
            fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 700,
            color: NAVY, textDecoration: "none", marginBottom: 16,
          }}>(720) 766-3377</a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", textAlign: "center",
              background: ACCENT, color: WHITE, borderRadius: 100,
              padding: "18px 36px", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
              boxShadow: "0 8px 30px rgba(59,125,216,0.25)",
            }}
          >Get Free Estimate →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
