import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Pixel id is public (already in app/components/Analytics.tsx). The CAPI token
// is a server secret and lives only in env — never hardcode it.
const META_PIXEL_ID = process.env.META_PIXEL_ID || "1621445598880955";

interface StormLead {
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  message?: string;
  company?: string; // honeypot
  eventId?: string; // dedupe key shared with the browser Pixel Lead event
  fbp?: string; // _fbp cookie (raw) — improves CAPI match quality
  fbc?: string; // _fbc cookie (raw) — click id, present on ad traffic
}

function sha256(v: string): string {
  return createHash("sha256").update(v).digest("hex");
}

// Meta wants phone as digits with country code, then SHA-256.
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return "1" + digits; // US national → E.164 digits
  return digits; // already carries a country code (or non-US)
}

/**
 * Best-effort server-side Conversions API Lead event. NEVER throws — the lead
 * email above must succeed even if Meta is down or CAPI isn't configured yet.
 * Shares `event_id` with the browser Pixel so Meta dedupes the two into one
 * Lead. Recovers the 30-50% of browser Lead signal lost to iOS / ad-blockers.
 * (board: GATES-MKT-1, 2026-06-08 — activation gated on GATES-1 token rotation)
 */
async function fireMetaCapiLead(opts: {
  eventId?: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  clientIp?: string;
  userAgent?: string;
  sourceUrl?: string;
  fbp?: string;
  fbc?: string;
}): Promise<void> {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return; // CAPI not configured yet — skip silently.
  try {
    const [first, ...rest] = opts.name.trim().toLowerCase().split(/\s+/);
    const user_data: Record<string, unknown> = {
      ph: [sha256(normalizePhone(opts.phone))],
      ct: [sha256(opts.city.trim().toLowerCase().replace(/\s+/g, ""))],
      country: [sha256("us")],
    };
    // Email is Meta's strongest match signal — send it (hashed) when provided.
    if (opts.email && opts.email.trim()) user_data.em = [sha256(opts.email.trim().toLowerCase())];
    if (first) user_data.fn = [sha256(first)];
    if (rest.length) user_data.ln = [sha256(rest.join(" "))];
    // IP / UA / fbp / fbc are sent RAW (not hashed) per Meta's spec.
    if (opts.clientIp) user_data.client_ip_address = opts.clientIp;
    if (opts.userAgent) user_data.client_user_agent = opts.userAgent;
    if (opts.fbp) user_data.fbp = opts.fbp;
    if (opts.fbc) user_data.fbc = opts.fbc;

    const payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: opts.sourceUrl,
          event_id: opts.eventId,
          user_data,
          custom_data: { content_category: "storm_response", content_name: opts.city },
        },
      ],
    };

    const r = await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
    );
    if (!r.ok) {
      console.error("Meta CAPI Lead failed:", r.status, await r.text().catch(() => ""));
    }
  } catch (e) {
    console.error("Meta CAPI Lead error:", e);
  }
}

export async function POST(req: Request) {
  try {
    if (!rateLimit(`storm:${getClientIp(req)}`).ok) {
      return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
    }
    const body: StormLead = await req.json();
    const { name, phone, email, address, city, message, eventId, fbp, fbc } = body;

    // Honeypot: bots fill the hidden "company" field; real users never see it.
    // Return 200 so the bot thinks it worked, but signal `lead: false` so the
    // client does NOT fire a Pixel Lead event — otherwise headless-browser bots
    // poison Meta's conversion signal and we optimize toward bots.
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({ success: true, lead: false });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!phone || phone.trim().length < 7) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }
    if (!address || !city) {
      return NextResponse.json({ error: "Address and city are required" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "short",
    });

    await getResend().emails.send({
      from: "Gates Storm Response <noreply@gatesroof.com>",
      to: ["a.chicilo@gatesroof.com", "info@gatesroof.com"],
      subject: `STORM LEAD: ${name.trim()} (${city})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #06263f; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Storm Response Lead</h2>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; font-weight: 600; width: 130px;">Name</td><td>${name.trim()}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: 600;">Phone</td><td><a href="tel:${phone.replace(/\D/g, "")}">${phone}</a></td></tr>
              ${email ? `<tr><td style="padding: 10px 0; font-weight: 600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>` : ""}
              <tr><td style="padding: 10px 0; font-weight: 600;">Address</td><td>${address}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: 600;">City</td><td>${city}</td></tr>
              ${message ? `<tr><td style="padding: 10px 0; font-weight: 600; vertical-align: top;">What happened</td><td style="white-space: pre-wrap;">${message}</td></tr>` : ""}
            </table>
            <div style="margin-top: 20px; font-size: 12px; color: #9CA3AF;">
              Source: storm-hail-damage landing page · ${timestamp} (MST)
            </div>
          </div>
        </div>
      `,
    });

    // Server-side Lead conversion to Meta (best-effort; awaited so it completes
    // before the serverless function freezes — never fire-and-forget on Vercel).
    await fireMetaCapiLead({
      eventId,
      name,
      phone,
      email,
      city,
      clientIp: getClientIp(req),
      userAgent: req.headers.get("user-agent") || undefined,
      sourceUrl: req.headers.get("referer") || "https://www.gatesroof.com/services/storm-hail-damage",
      fbp,
      fbc,
    });

    return NextResponse.json({ success: true, lead: true });
  } catch (error) {
    console.error("Storm lead error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
