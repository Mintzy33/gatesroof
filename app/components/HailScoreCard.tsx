"use client";

import {
  getHailScore,
  getRiskColor,
  getRiskBgColor,
  getServiceRecommendation,
} from "../../lib/hail-data";
import type { HailScoreData } from "../../lib/hail-data";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const TEXT_LIGHT = "#64748B";

interface HailScoreCardProps {
  citySlug: string;
  cityName: string;
  /** Optional service slug for service-specific recommendation */
  serviceSlug?: string;
  /** Optional service name for display */
  serviceName?: string;
}

export default function HailScoreCard({
  citySlug,
  cityName,
  serviceSlug,
  serviceName,
}: HailScoreCardProps) {
  const data = getHailScore(citySlug);
  if (!data) return null;

  const riskColor = getRiskColor(data.riskLevel);
  const riskBg = getRiskBgColor(data.riskLevel);

  const recommendation = serviceSlug
    ? getServiceRecommendation(serviceSlug, cityName, data.hailScore)
    : null;

  return (
    <section
      className="hailscore-card"
      style={{
        padding: "80px 24px",
        background: "#FAFBFD",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: TEXT_LIGHT,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            POWERED BY
          </span>
          <a
            href="https://myhailscore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/hailscore-wordmark.png"
              alt="HailScore - Hail Risk Data"
              style={{ height: 28 }}
            />
          </a>
        </div>
        <h2
          style={{
            fontFamily:
              "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 3.5vw, 30px)",
            fontWeight: 800,
            color: NAVY,
            margin: "0 0 24px",
          }}
        >
          {cityName} Hail Risk Profile
        </h2>

        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 20,
            border: `2px solid ${riskColor}20`,
            overflow: "hidden",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: 4,
              background: `linear-gradient(90deg, ${riskColor}, ${riskColor}80)`,
            }}
          />

          <div style={{ padding: "32px 28px" }}>
            {/* Score + Badge row */}
            <div
              className="hailscore-top-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginBottom: 28,
                flexWrap: "wrap",
              }}
            >
              {/* Big score number */}
              <div style={{ textAlign: "center", minWidth: 100 }}>
                <div
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontSize: 64,
                    fontWeight: 800,
                    color: riskColor,
                    lineHeight: 1,
                  }}
                >
                  {data.hailScore}
                </div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 13,
                    color: TEXT_LIGHT,
                    marginTop: 4,
                  }}
                >
                  out of 100
                </div>
              </div>

              {/* Risk badge + label */}
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: riskBg,
                    color: riskColor,
                    borderRadius: 100,
                    padding: "6px 16px",
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginBottom: 8,
                  }}
                >
                  {data.riskLevel} Risk
                </div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    color: TEXT_LIGHT,
                    lineHeight: 1.6,
                    maxWidth: 420,
                  }}
                >
                  Based on 10 years of NOAA radar hail data analyzed by{" "}
                  <a
                    href="https://myhailscore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: ACCENT,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    HailScore
                  </a>
                  , a Gates Enterprises company.
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div
              className="hailscore-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <StatBox
                label="Avg Events/Year"
                value={String(data.avgEventsPerYear)}
              />
              <StatBox
                label="Largest Recorded"
                value={data.largestRecordedHail}
              />
              <StatBox
                label="Last Major Event"
                value={data.lastMajorEvent}
              />
            </div>

            {/* Fun fact / insight */}
            <div
              style={{
                background: riskBg,
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: recommendation ? 20 : 0,
              }}
            >
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: NAVY,
                  margin: 0,
                }}
              >
                {data.funFact}
              </p>
            </div>

            {/* Service recommendation */}
            {recommendation && (
              <div
                style={{
                  background: "#F0F4FF",
                  borderRadius: 12,
                  padding: "16px 20px",
                  borderLeft: `3px solid ${ACCENT}`,
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: NAVY,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {recommendation}
                </p>
              </div>
            )}

            {/* CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
                marginTop: 24,
              }}
            >
              <a
                href="https://myhailscore.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: ACCENT,
                  color: "#FFFFFF",
                  borderRadius: 100,
                  padding: "12px 24px",
                  textDecoration: "none",
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                Check Your Exact Address at HailScore
              </a>
              <span
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  color: TEXT_LIGHT,
                }}
              >
                Free. No signup required.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hailscore-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .hailscore-top-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "#FAFBFD",
        borderRadius: 12,
        padding: "16px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily:
            "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: 20,
          fontWeight: 700,
          color: NAVY,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 12,
          color: TEXT_LIGHT,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}
