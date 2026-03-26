"use client";
import { useState, FormEvent } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollReveal, StaggerCards } from "../components/GSAPAnimations";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourPhone: "",
    yourEmail: "",
    theirName: "",
    theirPhone: "",
    theirEmail: "",
    theirAddress: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Something went wrong");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us at (720) 766-3377.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1.5px solid rgba(13,33,55,0.12)",
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 15,
    color: NAVY,
    background: WHITE,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 600 as const,
    color: NAVY,
    marginBottom: 6,
    display: "block" as const,
  };

  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* HERO */}
      <section style={{ position: "relative", padding: "160px 20px 80px", background: NAVY, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,125,216,0.12) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "7px 16px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>Gates Good Neighbor Referral Program</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: WHITE, lineHeight: 1.08, margin: "0 0 20px" }}>
              Refer a Neighbor.{" "}
              <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Earn $250 Cash.
              </span>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 auto 36px", maxWidth: 560 }}>
              Know someone who needs a new roof? Send them our way and we&apos;ll thank you with $250 cash when their job is approved.
            </p>
            <a href="#referral-form" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 36px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>
              Submit a Referral →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>HOW IT WORKS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Three Steps to $250</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>It&apos;s as easy as filling out a form.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="referral-hiw-grid" stagger={0.15} distance={40}>
            {[
              { n: "1", t: "Tell Us Who Needs a Roof", d: "Fill out the form below with their info. Takes 30 seconds." },
              { n: "2", t: "We Handle the Rest", d: "We contact them, inspect the roof, and work with their insurance company." },
              { n: "3", t: "Get Paid", d: "Once insurance approves the job, you get $250 cash. It's that simple." },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: ACCENT, color: WHITE, fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(37,99,235,0.25)" }}>{step.n}</div>
                {i < 2 && <div className="referral-hiw-connector" style={{ position: "absolute", top: 32, left: "calc(50% + 44px)", width: "calc(100% - 88px)", height: 2, background: `linear-gradient(90deg, ${ACCENT}, rgba(37,99,235,0.2))` }} />}
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}>{step.d}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* WHY REFER GATES */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHY REFER GATES</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Your Neighbors Are in Good Hands</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>When you refer someone to Gates, you&apos;re connecting them with Colorado&apos;s most certified roofer.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="referral-why-grid" stagger={0.1} distance={40}>
            {[
              { n: "7,200+", t: "Roofs Completed", d: "More experience than virtually any roofer in Colorado." },
              { n: "306", t: "Five-Star Reviews", d: "4.8 stars on Google. Our reputation speaks for itself." },
              { n: "4x", t: "Manufacturer Certified", d: "The only company in Colorado with all four major certifications." },
              { n: "100%", t: "Free Inspections", d: "No cost, no obligation. We handle the insurance process start to finish." },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", borderTop: `3px solid ${ACCENT}`, border: "1px solid rgba(13,33,55,0.06)", borderTopWidth: 3, borderTopColor: ACCENT, boxShadow: "0 2px 12px rgba(13,33,55,0.06)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{item.n}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* TIERED REWARDS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em" }}>REWARDS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>The More You Refer, the More You Earn</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Your referred neighbor also gets $100 off their project. Everyone wins.</p>
            </div>
          </ScrollReveal>
          <StaggerCards className="referral-tiers-grid" stagger={0.12} distance={40}>
            {[
              { tier: "1st Referral", amount: "$250", desc: "Cash paid within 7 days of insurance approval.", highlight: false },
              { tier: "2nd Referral", amount: "$350", desc: "Your second approved referral earns you even more.", highlight: false },
              { tier: "3rd Referral", amount: "$500", desc: "Plus Gates MVP status with exclusive perks.", highlight: true },
            ].map((r, i) => (
              <div key={i} style={{ background: r.highlight ? NAVY : WHITE, borderRadius: 20, padding: "36px 28px", border: r.highlight ? "none" : "1px solid rgba(13,33,55,0.08)", boxShadow: r.highlight ? "0 20px 60px rgba(13,33,55,0.2)" : "0 2px 12px rgba(13,33,55,0.06)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                {r.highlight && <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,125,216,0.15) 0%, transparent 60%)" }} />}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: r.highlight ? GOLD : ACCENT, letterSpacing: "0.15em", textTransform: "uppercase" }}>{r.tier}</span>
                  <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, color: r.highlight ? WHITE : NAVY, margin: "8px 0", lineHeight: 1 }}>{r.amount}</div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: r.highlight ? "rgba(255,255,255,0.7)" : TEXT_LIGHT, margin: "0 0 0 0" }}>{r.desc}</p>
                  {r.highlight && (
                    <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: GOLD, marginBottom: 8, letterSpacing: "0.1em" }}>GATES MVP PERKS</div>
                      {[
                        "\"Gates MVP\" yard sign for your home",
                        "Free upgrade to premium materials on roof replacements",
                        "Free annual gutter cleaning",
                        "Priority scheduling and dedicated project manager",
                        "First call after every storm in your area",
                      ].map((perk, j, arr) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: j < arr.length - 1 ? 6 : 0 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{perk}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* REFERRAL FORM */}
      <section id="referral-form" style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 44px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REFER SOMEONE</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Submit Your Referral</h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Fill out the form and we&apos;ll take it from here.</p>
            </div>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div style={{ background: WHITE, borderRadius: 20, padding: "48px 36px", textAlign: "center", border: "1px solid rgba(13,33,55,0.06)", boxShadow: "0 4px 24px rgba(13,33,55,0.08)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(74,222,128,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 800, color: NAVY, marginBottom: 12 }}>Thanks!</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT, maxWidth: 400, margin: "0 auto" }}>We&apos;ll reach out to them within 24 hours and keep you posted.</p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} style={{ background: WHITE, borderRadius: 20, padding: "clamp(28px, 4vw, 44px)", border: "1px solid rgba(13,33,55,0.06)", boxShadow: "0 4px 24px rgba(13,33,55,0.08)" }}>
                {/* Your info */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>YOUR INFORMATION</div>
                  <div className="referral-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input type="text" name="yourName" required value={formData.yourName} onChange={handleChange} style={inputStyle} placeholder="John Smith" />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Phone *</label>
                      <input type="tel" name="yourPhone" required value={formData.yourPhone} onChange={handleChange} style={inputStyle} placeholder="(303) 555-0123" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Your Email *</label>
                    <input type="email" name="yourEmail" required value={formData.yourEmail} onChange={handleChange} style={inputStyle} placeholder="john@example.com" />
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(13,33,55,0.06)", margin: "0 0 28px" }} />

                {/* Their info */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>THEIR INFORMATION</div>
                  <div className="referral-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Their Name *</label>
                      <input type="text" name="theirName" required value={formData.theirName} onChange={handleChange} style={inputStyle} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label style={labelStyle}>Their Phone *</label>
                      <input type="tel" name="theirPhone" required value={formData.theirPhone} onChange={handleChange} style={inputStyle} placeholder="(720) 555-0456" />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Their Email <span style={{ fontWeight: 400, color: TEXT_LIGHT }}>(optional)</span></label>
                    <input type="email" name="theirEmail" value={formData.theirEmail} onChange={handleChange} style={inputStyle} placeholder="jane@example.com" />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Their Address <span style={{ fontWeight: 400, color: TEXT_LIGHT }}>(optional but helpful)</span></label>
                    <input type="text" name="theirAddress" value={formData.theirAddress} onChange={handleChange} style={inputStyle} placeholder="123 Main St, Denver, CO 80202" />
                  </div>
                  <div>
                    <label style={labelStyle}>Notes <span style={{ fontWeight: 400, color: TEXT_LIGHT }}>(optional)</span></label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: "vertical" as const }} placeholder="Anything we should know? E.g. 'They had hail damage last week'" />
                  </div>
                </div>

                {error && (
                  <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "#DC2626", margin: 0 }}>{error}</p>
                  </div>
                )}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: ACCENT, color: WHITE, borderRadius: 14, padding: "18px 36px", border: "none", cursor: submitting ? "not-allowed" : "pointer", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, boxShadow: "0 8px 24px rgba(37,99,235,0.25)", opacity: submitting ? 0.7 : 1, transition: "opacity 0.2s" }}>
                  {submitting ? "Submitting..." : "Submit My Referral →"}
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>FAQ</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Common Questions</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "When do I get paid?", a: "Within 7 days of insurance approving the referred job." },
              { q: "Is there a limit?", a: "No limit! Refer as many people as you want. The more you refer, the more you earn." },
              { q: "What if they already contacted Gates?", a: "If they're already in our system, we'll let you know. No surprises." },
              { q: "Do they have to use insurance?", a: "The referral reward applies to insurance-approved jobs. Cash jobs are handled case by case." },
              { q: "How do I check my referral status?", a: "Call us at (720) 766-3377 or email referrals@gatesroof.com. We're happy to give you an update anytime." },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{ padding: "24px 28px", background: LIGHT_BG, borderRadius: 16, border: "1px solid rgba(13,33,55,0.04)" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: "0 0 8px" }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: "clamp(56px, 8vw, 80px) 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
              Questions About the{" "}
              <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Referral Program?</span>
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>
              Call{" "}
              <a href="tel:7207663377" style={{ color: WHITE, textDecoration: "underline", fontWeight: 600 }}>(720) 766-3377</a>
              {" "}or email{" "}
              <a href="mailto:referrals@gatesroof.com" style={{ color: WHITE, textDecoration: "underline", fontWeight: 600 }}>referrals@gatesroof.com</a>
            </p>
            <div className="referral-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <a href="#referral-form" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Submit a Referral</a>
              <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        .referral-hiw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; position: relative; }
        .referral-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .referral-tiers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 768px) {
          .referral-hiw-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .referral-hiw-connector { display: none !important; }
          .referral-why-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .referral-tiers-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .referral-form-row { grid-template-columns: 1fr !important; }
          .referral-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .referral-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 400px) {
          .referral-why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
