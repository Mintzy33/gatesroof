import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Escape user-supplied values before interpolating into notification HTML.
function esc(v: string): string {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface ReferralForm {
  yourName: string;
  yourPhone: string;
  yourEmail: string;
  theirName: string;
  theirPhone: string;
  theirEmail?: string;
  theirAddress?: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const data: ReferralForm = await request.json();
    const { yourName, yourPhone, yourEmail, theirName, theirPhone, theirEmail, theirAddress, notes } = data;

    // Validate required fields
    if (!yourName || !yourPhone || !yourEmail || !theirName || !theirPhone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "short",
    });

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 150px; vertical-align: top;">${label}</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${value}</td>
      </tr>`;

    await getResend().emails.send({
      from: "Gates Enterprises <noreply@gatesroof.com>",
      to: ["a.chicilo@gatesroof.com"],
      replyTo: yourEmail,
      subject: `New Referral: ${esc(theirName)} — from ${esc(yourName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D2137; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Referral Submission</h2>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h3 style="margin: 0 0 8px; font-size: 15px; color: #0D2137;">Referrer</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              ${row("Name", esc(yourName))}
              ${row("Phone", `<a href="tel:${esc(yourPhone).replace(/[^0-9+]/g, "")}" style="color: #2563EB; text-decoration: none;">${esc(yourPhone)}</a>`)}
              ${row("Email", `<a href="mailto:${encodeURIComponent(yourEmail)}" style="color: #2563EB; text-decoration: none;">${esc(yourEmail)}</a>`)}
            </table>
            <h3 style="margin: 0 0 8px; font-size: 15px; color: #0D2137;">Referred Homeowner</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Name", esc(theirName))}
              ${row("Phone", `<a href="tel:${esc(theirPhone).replace(/[^0-9+]/g, "")}" style="color: #2563EB; text-decoration: none;">${esc(theirPhone)}</a>`)}
              ${row("Email", theirEmail ? esc(theirEmail) : "Not provided")}
              ${row("Address", theirAddress ? esc(theirAddress) : "Not provided")}
              ${notes ? row("Notes", `<span style="white-space: pre-wrap;">${esc(notes)}</span>`) : ""}
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #9CA3AF;">
              Submitted from the gatesroof.com referral form on ${timestamp} (MT)
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Referral submitted successfully" });
  } catch (error) {
    console.error("Referral submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
