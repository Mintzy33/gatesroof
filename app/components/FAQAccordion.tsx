"use client";
import { useState } from "react";
import type { FAQItem } from "../../lib/faq-data";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(13,33,55,0.08)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left" as const,
          gap: 16,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 17,
            fontWeight: 600,
            color: NAVY,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {item.question}
        </h3>
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
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? 500 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.85,
            color: TEXT_LIGHT,
            margin: "0 0 20px",
            paddingRight: 36,
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({
  items,
  title,
}: {
  items: FAQItem[];
  title: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily:
              "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 800,
            color: NAVY,
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
          {items.map((item, i) => (
            <FAQAccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
