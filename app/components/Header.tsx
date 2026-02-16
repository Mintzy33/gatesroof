"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrollY > 60;
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: solid ? "rgba(255,255,255,0.95)" : "rgba(13,33,55,0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: solid ? "1px solid rgba(13,33,55,0.06)" : "1px solid rgba(255,255,255,0.05)",
      transition: "all 0.4s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: solid ? NAVY : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.4s" }}>
            <span style={{ color: WHITE, fontSize: 20, fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif" }}>G</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: solid ? NAVY : WHITE, transition: "color 0.4s" }}>GATES</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9.5, fontWeight: 600, color: solid ? TEXT_LIGHT : "rgba(255,255,255,0.5)", letterSpacing: "0.18em", transition: "color 0.4s" }}>ENTERPRISES LLC</div>
          </div>
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[{l:"Services",h:"/services/roof-replacement"},{l:"About",h:"/about"},{l:"Gallery",h:"/gallery"},{l:"Reviews",h:"/reviews"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(item => (
            <Link key={item.l} href={item.h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: solid ? TEXT : "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 0.3s" }}>{item.l}</Link>
          ))}
          <div style={{ width: 1, height: 20, background: solid ? "rgba(13,33,55,0.1)" : "rgba(255,255,255,0.15)" }} />
          <a href="tel:7207663377" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: solid ? NAVY : WHITE, textDecoration: "none", transition: "color 0.4s" }}>(720) 766-3377</a>
          <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "12px 26px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, boxShadow: "0 4px 14px rgba(59,125,216,0.25)" }}>Free Estimate</Link>
        </nav>
      </div>
    </header>
  );
}
