import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface StormLead {
  name: string;
  phone: string;
  address: string;
  city: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: StormLead = await req.json();
    const { name, phone, address, city, message } = body;

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Storm lead error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
