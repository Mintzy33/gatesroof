// Server component — deliberately NOT "use client".
//
// The area pages are client components, so when they imported getCityFAQItems
// from lib/faq-data the whole module (every city's CITY_FAQ_OVERRIDES) was
// pulled into the client graph: one 64KB chunk carrying all ten cities' FAQ
// copy, loaded by all 27 /areas pages. Rendering the FAQ here instead, and
// passing the element down from the server page as a prop, keeps both the
// data and this component out of the browser bundle entirely.
//
// Disclosure is native <details>/<summary>, so it also needs no client JS to
// open and close — and gets keyboard and screen-reader behaviour for free.

import type { FAQItem } from "../../lib/faq-data";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

export default function FAQSection({
  items,
  title,
  background = LIGHT_BG,
}: {
  items: FAQItem[];
  title: string;
  background?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px", background }}>
      <style>{`
        .faq-item > summary { list-style: none; cursor: pointer; }
        .faq-item > summary::-webkit-details-marker { display: none; }
        .faq-item > summary > svg { transition: transform 0.3s ease; }
        .faq-item[open] > summary > svg { transform: rotate(180deg); }
      `}</style>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
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
            <details
              key={i}
              className="faq-item"
              style={{ borderBottom: "1px solid rgba(13,33,55,0.08)" }}
            >
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "20px 0",
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
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
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
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
