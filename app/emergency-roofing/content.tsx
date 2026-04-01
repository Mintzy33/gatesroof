"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ScrollReveal } from "../components/GSAPAnimations";
import {
  Phone,
  AlertTriangle,
  Droplets,
  TreePine,
  Layers,
  Shield,
  Clock,
  FileText,
  Hammer,
  CheckCircle,
  Award,
  ShieldCheck,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const RED = "#DC2626";

/* ─── DATA ─── */

const EMERGENCIES = [
  {
    Icon: Droplets,
    title: "Active Roof Leak",
    desc: "Water entering your home through the ceiling or walls requires immediate attention. Even a small leak can cause thousands of dollars in secondary damage to insulation, drywall, and electrical systems within hours.",
  },
  {
    Icon: AlertTriangle,
    title: "Storm Damage",
    desc: "High winds, hail, and severe weather can tear off shingles, crack flashing, and compromise your roof's integrity. If a storm has visibly damaged your roof, don't wait for the next rain to find out how bad it is.",
  },
  {
    Icon: TreePine,
    title: "Tree or Debris Impact",
    desc: "A fallen tree or large branch on your roof is a structural emergency. The weight alone can cause collapse, and the puncture point allows water to pour directly into your home.",
  },
  {
    Icon: Layers,
    title: "Exposed Decking or Underlayment",
    desc: "If shingles have been stripped away and you can see the wood decking or underlayment, your roof has zero protection from the elements. This requires same-day tarping to prevent catastrophic water damage.",
  },
];

const PROCESS_STEPS = [
  {
    Icon: Phone,
    step: "01",
    title: "Call Us Any Time",
    desc: "Call (720) 766-3377 and describe the situation. Our team will assess the urgency and dispatch a crew as quickly as conditions allow.",
  },
  {
    Icon: Shield,
    step: "02",
    title: "Temporary Protection and Tarping",
    desc: "Our first priority is stopping water from entering your home. We secure heavy-duty tarps and temporary barriers over the damaged area to protect your interior while permanent repairs are planned.",
  },
  {
    Icon: FileText,
    step: "03",
    title: "Full Damage Assessment",
    desc: "Once the immediate threat is contained, our certified inspectors perform a thorough evaluation of all damage. We document everything with photos, measurements, and detailed notes for your insurance claim.",
  },
  {
    Icon: Hammer,
    step: "04",
    title: "Insurance Claim Filing Support",
    desc: "We prepare and submit all documentation to your insurance company and coordinate documentation with your adjuster to help ensure the full scope of damage is covered.",
  },
  {
    Icon: CheckCircle,
    step: "05",
    title: "Permanent Repair or Replacement",
    desc: "With your claim approved, our crews complete the permanent repair or full replacement using manufacturer-certified installation techniques and premium materials backed by warranties of up to 50 years.",
  },
];

const WHY_GATES = [
  {
    Icon: Award,
    bold: "7,200+ roofs completed.",
    rest: "We have handled every type of roofing emergency Colorado can produce. Experience matters when your home is on the line.",
  },
  {
    Icon: Star,
    bold: "4.9 stars from 306 reviews.",
    rest: "Homeowners across the Front Range trust Gates Enterprises because we deliver results under pressure, every time.",
  },
  {
    Icon: ShieldCheck,
    bold: "Quadruple manufacturer certified.",
    rest: "GAF Master Elite, CertainTeed Shingle Master Pro, Owens Corning Preferred, and Malarkey Emerald Premium. Fewer than 1% of contractors in the nation hold all four.",
  },
  {
    Icon: Shield,
    bold: "Insurance claims assistance.",
    rest: "We have guided thousands of homeowners through the insurance restoration process. We document and file so you can focus on your family.",
  },
  {
    Icon: Clock,
    bold: "Rapid emergency response.",
    rest: "With over 100 team members across Colorado's Front Range, we have the capacity to mobilize quickly when you need us most.",
  },
  {
    Icon: MapPin,
    bold: "Locally operated, community focused.",
    rest: "Gates Enterprises is a Colorado company serving Colorado homeowners. We are not a franchise or a storm chaser.",
  },
];

const FAQS = [
  {
    q: "How quickly can Gates Enterprises respond to a roofing emergency?",
    a: "We prioritize emergency calls and aim to have a crew on site as fast as possible. With over 100 team members across Colorado's Front Range, we have the capacity to respond rapidly after storms and other urgent situations. Call (720) 766-3377 any time.",
  },
  {
    q: "What qualifies as an emergency roof repair?",
    a: "An emergency roof repair is needed when your home is actively taking on water, a tree or debris has punctured or collapsed part of the roof, storm damage has exposed the decking or underlayment, or structural damage makes the home unsafe. If you are unsure, call us and we will help you assess the situation.",
  },
  {
    q: "Does insurance cover emergency roof repairs?",
    a: "Most homeowner insurance policies cover emergency repairs caused by sudden events like storms, fallen trees, or hail. Your policy typically covers temporary protective measures like tarping as well as permanent repairs, minus your deductible. We document everything and coordinate documentation with your insurance company to support your claim.",
  },
  {
    q: "What happens during an emergency roof tarping?",
    a: "Our crew secures heavy-duty tarps over the damaged area to stop water intrusion immediately. We anchor the tarps to prevent wind uplift and ensure your home is protected until permanent repairs can be completed. Tarping is a temporary measure designed to prevent further interior damage while the full scope of work is assessed.",
  },
  {
    q: "Should I wait until the storm passes to call for emergency roof repair?",
    a: "Call as soon as it is safe to do so. The sooner we know about the damage, the sooner we can schedule a response. Waiting allows water to cause secondary damage to insulation, drywall, and electrical systems, which can significantly increase repair costs.",
  },
];

/* ─── COMPONENT ─── */

export default function EmergencyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: NAVY,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
            margin: "0 auto",
            padding: "160px 24px 80px",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
            }}
          >
            Home &rarr; Emergency Roofing
          </Link>

          <div
            style={{
              display: "inline-block",
              background: "rgba(220,38,38,0.15)",
              border: "1px solid rgba(220,38,38,0.3)",
              borderRadius: 100,
              padding: "8px 20px",
              marginTop: 20,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#FCA5A5",
                letterSpacing: "0.1em",
              }}
            >
              24/7 EMERGENCY RESPONSE
            </span>
          </div>

          <h1
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: WHITE,
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            Emergency Roof Repair in Colorado
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 700,
            }}
          >
            When your roof fails, every minute counts. Gates Enterprises
            provides rapid emergency roofing services across Colorado&apos;s
            Front Range. Tarping, temporary repairs, and full restoration backed
            by 7,200+ completed roofs and four manufacturer certifications.
          </p>

          <div
            className="sd-hero-btns"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}
          >
            <a
              href="tel:7207663377"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: RED,
                color: WHITE,
                borderRadius: 100,
                padding: "18px 36px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              <Phone size={20} />
              Call Now: (720) 766-3377
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.06)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "18px 36px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Request Emergency Inspection &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHEN TO CALL ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: WHITE,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: RED,
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                KNOW THE SIGNS
              </span>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: DEEP,
                  margin: "0 0 16px",
                  lineHeight: 1.15,
                }}
              >
                When to Call for Emergency Roofing
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: TEXT_LIGHT,
                  maxWidth: 650,
                  margin: "0 auto",
                }}
              >
                Not every roof issue is an emergency. These situations require
                immediate professional attention to prevent serious structural
                and water damage.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {EMERGENCIES.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: LIGHT_BG,
                    borderRadius: 16,
                    padding: "32px 28px",
                    border: "1px solid rgba(13,33,55,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "rgba(220,38,38,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <item.Icon size={22} color={RED} />
                  </div>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: DEEP,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: TEXT_LIGHT,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── WHAT TO EXPECT (PROCESS) ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: LIGHT_BG,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                OUR EMERGENCY PROCESS
              </span>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: DEEP,
                  margin: "0 0 16px",
                  lineHeight: 1.15,
                }}
              >
                What to Expect When You Call
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: TEXT_LIGHT,
                  maxWidth: 650,
                  margin: "0 auto",
                }}
              >
                From the moment you call to the final repair, here is exactly
                how we handle your roofing emergency.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 24,
              }}
            >
              {PROCESS_STEPS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: 48,
                      height: 48,
                      borderRadius: 14,
                      background: WHITE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: ACCENT,
                      border: "1px solid rgba(59,125,216,0.1)",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', Georgia, serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: DEEP,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: TEXT_LIGHT,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── TARPING & TEMPORARY REPAIRS ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: WHITE,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.2em",
                display: "block",
                marginBottom: 12,
              }}
            >
              IMMEDIATE PROTECTION
            </span>
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: DEEP,
                margin: "0 0 24px",
                lineHeight: 1.15,
              }}
            >
              Emergency Tarping and Temporary Repairs
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.85,
                color: TEXT,
                marginBottom: 20,
              }}
            >
              The first priority in any roofing emergency is stopping water from
              entering your home. Our emergency tarping service is designed to
              provide immediate, reliable protection while permanent repairs are
              planned and executed.
            </p>
            <div
              style={{
                background: LIGHT_BG,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.05)",
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: DEEP,
                  marginBottom: 16,
                }}
              >
                What Our Tarping Service Includes
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 12,
                }}
              >
                {[
                  "Heavy-duty commercial-grade tarps rated for high winds",
                  "Secure anchoring to prevent uplift during subsequent storms",
                  "Coverage of all exposed areas including ridges, valleys, and penetrations",
                  "Interior assessment to identify active water intrusion points",
                  "Photographic documentation of all damage for insurance purposes",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: TEXT,
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color={ACCENT}
                      style={{ marginTop: 4, flexShrink: 0 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: TEXT_LIGHT,
              }}
            >
              Temporary repairs buy you time without compromising your insurance
              claim. In fact, most insurance companies expect homeowners to take
              reasonable steps to prevent further damage. Our tarping and
              temporary repair work is documented and included in your claim
              documentation.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── WHY GATES ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: LIGHT_BG,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                TRUSTED ACROSS COLORADO
              </span>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: DEEP,
                  margin: "0 0 16px",
                  lineHeight: 1.15,
                }}
              >
                Why Gates for Emergency Roofing
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: TEXT_LIGHT,
                  maxWidth: 650,
                  margin: "0 auto",
                }}
              >
                In an emergency, you need a contractor with the experience,
                certifications, and team size to respond fast and do it right.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {WHY_GATES.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    background: WHITE,
                    borderRadius: 16,
                    padding: "24px 20px",
                    border: "1px solid rgba(13,33,55,0.04)",
                  }}
                >
                  <div
                    style={{
                      minWidth: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "rgba(37,99,235,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon size={20} color={ACCENT} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      color: TEXT,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{ color: DEEP }}>{item.bold}</strong>{" "}
                    {item.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── INSURANCE CLAIMS ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: WHITE,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.2em",
                display: "block",
                marginBottom: 12,
              }}
            >
              INSURANCE CLAIMS ASSISTANCE
            </span>
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: DEEP,
                margin: "0 0 24px",
                lineHeight: 1.15,
              }}
            >
              Insurance Claim Process for Emergency Damage
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.85,
                color: TEXT,
                marginBottom: 20,
              }}
            >
              Filing an insurance claim after a roofing emergency can feel
              overwhelming. Our team has guided thousands of Colorado homeowners
              through the process. We handle the documentation, communicate with
              your adjuster, and support the full scope of repairs your
              home needs.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  title: "Thorough Documentation",
                  desc: "We photograph and catalog every point of damage, including areas that are not visible from the ground. This documentation forms the foundation of your claim.",
                },
                {
                  title: "Adjuster Coordination",
                  desc: "We schedule and attend the adjuster inspection at your property, walking them through every detail to help ensure nothing is missed in the initial assessment.",
                },
                {
                  title: "Supplement Filing",
                  desc: "If the initial estimate falls short, we prepare and submit supplemental documentation with additional evidence to support the full cost of repairs.",
                },
                {
                  title: "Claim-to-Completion",
                  desc: "From the first phone call to the final walkthrough, we manage the entire process so you can focus on your family while we restore your home.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: LIGHT_BG,
                    borderRadius: 16,
                    padding: "24px 20px",
                    border: "1px solid rgba(13,33,55,0.05)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: DEEP,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: TEXT_LIGHT,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── PHONE CTA BANNER ─── */}
      <section
        style={{
          padding: "48px 24px",
          background: RED,
          textAlign: "center" as const,
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: WHITE,
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Roof Emergency Right Now?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            Do not wait. Call us now and we will get a crew to your home as
            quickly as possible.
          </p>
          <a
            href="tel:7207663377"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: WHITE,
              color: RED,
              borderRadius: 100,
              padding: "18px 40px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 19,
              fontWeight: 700,
            }}
          >
            <Phone size={22} />
            (720) 766-3377
          </a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <ScrollReveal>
        <section
          style={{
            padding: "clamp(64px, 10vw, 100px) 24px",
            background: LIGHT_BG,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                COMMON QUESTIONS
              </span>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: DEEP,
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Emergency Roofing FAQ
              </h2>
            </div>

            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: WHITE,
                  borderRadius: 16,
                  marginBottom: 12,
                  border: "1px solid rgba(13,33,55,0.05)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "24px 28px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    textAlign: "left" as const,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: DEEP,
                      margin: 0,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    color={TEXT_LIGHT}
                    style={{
                      flexShrink: 0,
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 28px 24px" }}>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: TEXT_LIGHT,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── RELATED BLOG ─── */}
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.2em",
            }}
          >
            FROM THE BLOG
          </span>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 30px)",
              fontWeight: 800,
              color: DEEP,
              margin: "10px 0 12px",
            }}
          >
            Emergency Roofing Resources
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              color: TEXT_LIGHT,
              marginBottom: 24,
              lineHeight: 1.7,
            }}
          >
            Expert guides to help you prepare for and respond to roofing
            emergencies.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {[
              {
                t: "Emergency Roof Repair After a Storm",
                h: "/blog/emergency-roof-repair-after-storm",
              },
              {
                t: "Colorado Hail Season 2026: Homeowner's Guide",
                h: "/blog/colorado-hail-season-2026-homeowners-guide",
              },
              {
                t: "Colorado Roof Insurance Claims Guide",
                h: "/blog/colorado-roof-insurance-claims-guide",
              },
              {
                t: "Warning Signs Your Roof Needs Attention",
                h: "/blog/warning-signs-roof-needs-attention",
              },
              {
                t: "Signs You Need a New Roof",
                h: "/blog/signs-you-need-new-roof",
              },
              {
                t: "Class 4 Impact Resistant Shingles: Worth It?",
                h: "/blog/class-4-impact-resistant-shingles-colorado",
              },
            ].map((p) => (
              <Link
                key={p.h}
                href={p.h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  color: ACCENT,
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "8px 0",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {p.t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA + FOOTER ─── */}
      <CTA
        title="Need Emergency Roof Repair?"
        subtitle="Call (720) 766-3377 now for rapid response. Free emergency inspections across Colorado's Front Range."
      />
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .sd-hero-btns { flex-direction: column !important; }
          .sd-hero-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </div>
  );
}
