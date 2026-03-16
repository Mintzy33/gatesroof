"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT_LIGHT = "#64748B";

type FaqItem = { q: string; a: string };
type FaqSection = { section: string; items: FaqItem[] };

const sectionIcons: Record<string, () => React.ReactNode> = {
  "Costs & Financing": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
  ),
  "Insurance Claims": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  "Certifications & Quality": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  "Hail & Storm Damage": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  "Process": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  "Local": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
};

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{
      background: isOpen ? LIGHT_BG : WHITE,
      borderRadius: 16,
      border: `1px solid ${isOpen ? "rgba(37,99,235,0.15)" : "rgba(13,33,55,0.06)"}`,
      transition: "all 0.3s ease",
      overflow: "hidden",
    }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left" as const,
        }}
      >
        <h3 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: 17,
          fontWeight: 700,
          color: NAVY,
          margin: 0,
          lineHeight: 1.4,
        }}>{item.q}</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{
        maxHeight: isOpen ? 500 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <p style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 14,
          lineHeight: 1.8,
          color: TEXT_LIGHT,
          margin: 0,
          padding: "0 24px 20px",
        }}>{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqContent({ faqData }: { faqData: FaqSection[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* HERO */}
      <section style={{
        position: "relative",
        padding: "160px 20px 80px",
        background: NAVY,
        textAlign: "center" as const,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 30%, rgba(37,99,235,0.12) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "7px 16px",
            marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
            <span style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
            }}>Quadruple Manufacturer Certified</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1.1,
            margin: "0 0 16px",
          }}>
            Frequently Asked{" "}
            <span style={{
              background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Questions</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.75)",
            margin: "0 auto",
            maxWidth: 520,
          }}>
            Everything you need to know about roofing costs, insurance claims, hail damage, warranties, and working with Colorado&apos;s most certified roofer.
          </p>
        </div>
      </section>

      {/* QUICK JUMP NAV */}
      <section style={{ padding: "24px 20px", background: LIGHT_BG, borderBottom: "1px solid rgba(13,33,55,0.04)" }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap" as const,
          gap: 8,
          justifyContent: "center",
        }}>
          {faqData.map((section) => (
            <a
              key={section.section}
              href={`#${section.section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                borderRadius: 100,
                border: "1.5px solid rgba(13,33,55,0.1)",
                background: WHITE,
                color: NAVY,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              {sectionIcons[section.section]?.()}
              {section.section}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqData.map((section, sIdx) => (
            <div
              key={section.section}
              id={section.section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              style={{ marginBottom: sIdx < faqData.length - 1 ? 56 : 0, scrollMarginTop: 120 }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(37,99,235,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {sectionIcons[section.section]?.()}
                </div>
                <h2 style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 800,
                  color: NAVY,
                  margin: 0,
                }}>{section.section}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {section.items.map((item, iIdx) => {
                  const key = `${sIdx}-${iIdx}`;
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "clamp(56px, 8vw, 80px) 20px",
        background: NAVY,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)",
        }} />
        <div style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center" as const,
          position: "relative",
          zIndex: 1,
        }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(26px, 5vw, 44px)",
            fontWeight: 800,
            color: WHITE,
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}>
            Still Have{" "}
            <span style={{
              background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Questions?</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.8)",
            margin: "0 0 28px",
          }}>
            Schedule a free roof inspection and we&apos;ll answer everything in person. No pressure, no obligation.
          </p>
          <div className="faq-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" style={{
              background: ACCENT,
              color: WHITE,
              borderRadius: 14,
              padding: "16px 32px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}>Request a Free Inspection</Link>
            <a href="tel:7207663377" style={{
              background: "rgba(255,255,255,0.08)",
              color: WHITE,
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 14,
              padding: "16px 32px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              textAlign: "center",
            }}>(720) 766-3377</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .faq-cta-btns { display: flex; gap: 12px; justify-content: center; }
        @media (max-width: 768px) {
          .faq-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .faq-cta-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
