"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollReveal } from "../components/GSAPAnimations";

declare global { interface Window { fbq: (...args: unknown[]) => void } }

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const ERROR_RED = "#DC2626";

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Full name is required";
    if (!form.phone.trim() && !form.email.trim()) {
      errs.phone = "Phone or email is required";
      errs.email = "Phone or email is required";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        if (window.fbq) window.fbq("track", "Lead", { content_name: form.service || "general", content_category: "contact_form" });
        setSent(true);
      } else {
        alert("Something went wrong. Please call us at (720) 766-3377.");
      }
    } catch {
      alert("Something went wrong. Please call us at (720) 766-3377.");
    } finally {
      setLoading(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: 12,
    border: "1.5px solid rgba(13,33,55,0.1)",
    background: WHITE,
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 15,
    color: TEXT,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
  };

  const errInp: React.CSSProperties = {
    ...inp,
    borderColor: ERROR_RED,
  };

  const errMsg: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 13,
    color: ERROR_RED,
    marginTop: 4,
  };

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 40%, rgba(212,168,83,0.05) 0%, transparent 50%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 16 }}>CONTACT US</span>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "0 0 20px", lineHeight: 1.1 }}>
            Get in Touch with Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
            Whether you need a roof inspection after a storm, a free estimate on a new project, or just have a question, we&apos;re here to help. Gates Enterprises has proudly served Colorado&apos;s Front Range for over a decade, and every conversation starts with honesty and respect.
          </p>
        </div>
      </section>

      {/* ─── WHAT HAPPENS NEXT ─── */}
      <section style={{ padding: "56px 24px", background: "#f8fafa" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, color: DEEP, margin: "0 0 8px" }}>What Happens Next</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, margin: "0 0 40px" }}>Three simple steps to a protected home</p>
            <div className="ct-steps" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
              {[
                { num: "1", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>), title: "Request an Estimate", desc: "Fill out the form below or give us a call. It only takes a minute." },
                { num: "2", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>), title: "We Reach Out", desc: "A Gates team member will call you within one business day to discuss your project." },
                { num: "3", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>), title: "Free Inspection", desc: "We visit your property, assess the work needed, and provide an honest, no pressure estimate." },
              ].map(step => (
                <div key={step.num} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 16 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {step.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em" }}>STEP {step.num}</div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: DEEP, margin: 0 }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.7, margin: 0, maxWidth: 260 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── TWO COLUMN: FORM + DETAILS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div className="ct-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64 }}>

          {/* LEFT: Form */}
          <ScrollReveal>
            <div>
              {sent ? (
                <div style={{ background: LIGHT_BG, borderRadius: 24, padding: 60, textAlign: "center" as const, border: "1px solid rgba(59,125,216,0.1)" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 800, color: DEEP, margin: "20px 0 12px" }}>Thank You!</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT_LIGHT, lineHeight: 1.7 }}>We&apos;ve received your request. A Gates team member will contact you within one business day.</p>
                  {form.email && (
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 12 }}>A confirmation email has been sent to <strong style={{ color: DEEP }}>{form.email}</strong>.</p>
                  )}
                </div>
              ) : (
                <div>
                  <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 800, color: DEEP, marginBottom: 8 }}>Request a Free Inspection & Estimate</h2>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 36 }}>No obligation. No pressure. Just an honest assessment.</p>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
                    <div className="ct-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <input
                          placeholder="Full Name *"
                          style={errors.name ? errInp : inp}
                          value={form.name}
                          onChange={e => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors(prev => { const n = { ...prev }; delete n.name; return n; }); }}
                        />
                        {errors.name && <div style={errMsg}>{errors.name}</div>}
                      </div>
                      <div>
                        <input
                          placeholder="Phone Number *"
                          style={errors.phone ? errInp : inp}
                          value={form.phone}
                          onChange={e => { setForm({ ...form, phone: e.target.value }); if (errors.phone) setErrors(prev => { const n = { ...prev }; delete n.phone; delete n.email; return n; }); }}
                        />
                        {errors.phone && <div style={errMsg}>{errors.phone}</div>}
                      </div>
                    </div>
                    <div>
                      <input
                        placeholder="Email Address *"
                        type="email"
                        style={errors.email ? errInp : inp}
                        value={form.email}
                        onChange={e => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors(prev => { const n = { ...prev }; delete n.email; delete n.phone; return n; }); }}
                      />
                      {errors.email && <div style={errMsg}>{errors.email}</div>}
                    </div>
                    <input placeholder="Property Address (optional)" style={inp} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                    <select style={{ ...inp, color: form.service ? TEXT : TEXT_LIGHT }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Service Needed</option>
                      <option value="roof-replacement">Roof Replacement</option>
                      <option value="storm-damage">Storm Damage</option>
                      <option value="siding">Siding</option>
                      <option value="gutters">Gutters</option>
                      <option value="windows">Windows</option>
                      <option value="paint">Paint</option>
                      <option value="insurance-restoration">Insurance Restoration</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea placeholder="Anything else we should know?" rows={4} style={{ ...inp, resize: "vertical" as const }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      style={{
                        background: loading ? "#93B4F0" : ACCENT,
                        color: WHITE,
                        border: "none",
                        borderRadius: 100,
                        padding: "18px 40px",
                        cursor: loading ? "not-allowed" : "pointer",
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        boxShadow: loading ? "none" : "0 8px 30px rgba(59,125,216,0.25)",
                        alignSelf: "flex-start" as const,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                        opacity: loading ? 0.8 : 1,
                      }}
                    >
                      {loading ? "Sending..." : "Request a Free Inspection & Estimate →"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* RIGHT: Contact Details */}
          <ScrollReveal delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>

              {/* Contact Info Card */}
              <div style={{ background: LIGHT_BG, borderRadius: 24, padding: "36px 32px", border: "1px solid rgba(13,33,55,0.04)" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: DEEP, marginBottom: 24 }}>Contact Info</h3>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 4 }}>PHONE</div>
                  <a href="tel:7207663377" onClick={() => { if (window.fbq) window.fbq("track", "Contact", { content_name: "phone_call" }); }} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, textDecoration: "none", fontWeight: 500 }}>(720) 766-3377</a>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 4 }}>EMAIL</div>
                  <a href="mailto:info@gatesroof.com" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, textDecoration: "none", fontWeight: 500 }}>info@gatesroof.com</a>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 4 }}>ADDRESS</div>
                  <a href="https://maps.google.com/?q=1445+Holland+St+Lakewood+CO+80215" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, textDecoration: "none", fontWeight: 500 }}>1445 Holland St, Lakewood, CO 80215</a>
                </div>
              </div>

              {/* Certification Logos */}
              <div style={{ background: LIGHT_BG, borderRadius: 24, padding: "28px 32px", border: "1px solid rgba(13,33,55,0.04)", textAlign: "center" as const }}>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.14em", marginBottom: 20 }}>QUADRUPLE MANUFACTURER CERTIFIED</div>
                <div className="ct-cert-logos" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap" as const }}>
                  {[
                    { name: "GAF", svg: (<svg viewBox="0 0 80 32" width="72" height="28"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif" fontSize="18" fontWeight="800" fill="currentColor">GAF</text></svg>) },
                    { name: "Owens Corning", svg: (<svg viewBox="0 0 120 32" width="100" height="28"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif" fontSize="12" fontWeight="700" fill="currentColor">OWENS CORNING</text></svg>) },
                    { name: "Malarkey", svg: (<svg viewBox="0 0 100 32" width="88" height="28"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif" fontSize="13" fontWeight="700" fill="currentColor">MALARKEY</text></svg>) },
                    { name: "CertainTeed", svg: (<svg viewBox="0 0 110 32" width="96" height="28"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif" fontSize="12" fontWeight="700" fill="currentColor">CERTAINTEED</text></svg>) },
                  ].map(cert => (
                    <div
                      key={cert.name}
                      className="ct-cert-item"
                      style={{ color: "#9CA3AF", transition: "color 0.3s ease, transform 0.3s ease", cursor: "default" }}
                    >
                      {cert.svg}
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours Card */}
              <div style={{ background: LIGHT_BG, borderRadius: 24, padding: "36px 32px", border: "1px solid rgba(13,33,55,0.04)" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: DEEP, marginBottom: 16 }}>Office Hours</h3>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 2 }}>
                  Monday through Friday: 8:00 AM to 5:00 PM<br />
                  Saturday: By appointment<br />
                  Sunday: Closed
                </div>
              </div>

              {/* Google Map */}
              <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(13,33,55,0.04)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.123!2d-105.0777!3d39.7441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80e3e1e1e1e1%3A0x1234567890abcdef!2s1445%20Holland%20St%2C%20Lakewood%2C%20CO%2080215!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gates Enterprises Office Location"
                />
              </div>

              {/* Call Card */}
              <div style={{ background: NAVY, borderRadius: 24, padding: "36px 32px" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 12 }}>Prefer to Call?</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24 }}>Talk to a real person, not a call center.</p>
                <a href="tel:7207663377" onClick={() => { if (window.fbq) window.fbq("track", "Contact", { content_name: "phone_call" }); }} style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600 }}>
                  Call (720) 766-3377
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TESTIMONIAL QUOTE ─── */}
      <section style={{ padding: "56px 24px 64px", background: "#f8fafa" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: WHITE, borderRadius: 24, padding: "48px 40px", boxShadow: "0 4px 24px rgba(13,33,55,0.06)", border: "1px solid rgba(13,33,55,0.04)", textAlign: "center" as const }}>
              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill={GOLD} stroke={GOLD} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <blockquote style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 500, fontStyle: "italic" as const, color: DEEP, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
                &ldquo;Gates Enterprises was honest from the very first phone call. They walked us through every step, handled our insurance restoration, and finished the job in two days. Our new roof looks incredible.&rdquo;
              </blockquote>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: DEEP }}>Sarah M.</div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT, marginTop: 4 }}>Lakewood, Colorado</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call us at (720) 766-3377 or send us a message. One of our team members will get back to you within one business day.
          </p>
          <a href="tel:7207663377" style={{ display: "inline-block", background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
            Call Now &rarr;
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        .ct-cert-item:hover { color: ${DEEP} !important; transform: scale(1.05); }
        @media (max-width: 768px) {
          .ct-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ct-form-row { grid-template-columns: 1fr !important; }
          .ct-steps { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
