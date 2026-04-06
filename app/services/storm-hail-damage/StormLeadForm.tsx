"use client";
import { useState } from "react";

const NAVY = "#06263f";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const BORDER = "#e5e7eb";

const CO_CITIES = [
  "Denver","Aurora","Lakewood","Thornton","Arvada","Westminster","Centennial",
  "Boulder","Longmont","Loveland","Fort Collins","Greeley","Broomfield",
  "Castle Rock","Parker","Highlands Ranch","Littleton","Englewood",
  "Commerce City","Brighton","Northglenn","Federal Heights","Wheat Ridge",
  "Golden","Erie","Frederick","Firestone","Dacono","Colorado Springs","Pueblo","Other",
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export default function StormLeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [err, setErr] = useState("");

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErr("");
    try {
      const res = await fetch("/api/leads/storm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      if (typeof window !== "undefined") {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({ event: "lead_form_submit", form: "storm_response" });
        }
      }
      setStatus("success");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Submission failed");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ background: WHITE, borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}>
        <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 26, color: NAVY, margin: "0 0 12px" }}>
          Thanks. We&apos;ve got it.
        </h3>
        <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          A Gates team member will reach out shortly to schedule your free inspection.
          If it&apos;s urgent, call us at <a href="tel:7207663377" style={{ color: ACCENT, fontWeight: 600 }}>(720) 766-3377</a>.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: "inherit",
    color: TEXT,
    background: WHITE,
    boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: NAVY,
    marginBottom: 6,
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: WHITE,
        borderRadius: 16,
        padding: "32px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        maxWidth: 560,
        margin: "0 auto",
      }}
    >
      <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 26, color: NAVY, margin: "0 0 6px", textAlign: "center" }}>
        Get Your Free Storm Inspection
      </h3>
      <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px", textAlign: "center" }}>
        Takes 30 seconds. No obligation. We respond fast.
      </p>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Full Name</label>
        <input style={inputStyle} required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Phone</label>
        <input style={inputStyle} required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(720) 555-0100" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Street Address</label>
        <input style={inputStyle} required value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="123 Main St" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>City</label>
        <select style={inputStyle} required value={form.city} onChange={(e) => update("city", e.target.value)}>
          <option value="">Select your city</option>
          {CO_CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>What happened? (optional)</label>
        <textarea
          style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Hail came through last night, gutters look dented..."
        />
      </div>

      {err && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#B91C1C", padding: "10px 14px", borderRadius: 8, marginBottom: 14, fontSize: 14 }}>
          {err}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          width: "100%",
          background: NAVY,
          color: WHITE,
          border: "none",
          borderRadius: 100,
          padding: "16px 24px",
          fontSize: 15,
          fontWeight: 700,
          cursor: status === "submitting" ? "wait" : "pointer",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Submitting..." : "Get My Free Inspection"}
      </button>
      <p style={{ fontSize: 12, color: "#94A3B8", textAlign: "center", marginTop: 12, marginBottom: 0 }}>
        By submitting, you agree to be contacted by Gates Enterprises about your inspection.
      </p>
    </form>
  );
}
