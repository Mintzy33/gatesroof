import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address?: string;
  service?: string;
  message?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "roof-replacement": "Roof Replacement",
  "storm-damage": "Storm Damage",
  siding: "Siding",
  gutters: "Gutters",
  windows: "Windows",
  paint: "Paint",
  "insurance-restoration": "Insurance Restoration",
  other: "Other",
};

export async function POST(req: Request) {
  try {
    const body: ContactForm = await req.json();
    const { name, phone, email, address, service, message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!phone && !email) {
      return NextResponse.json(
        { error: "Phone or email is required" },
        { status: 400 }
      );
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const serviceLabel = service ? (SERVICE_LABELS[service] || service) : "General Inquiry";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send notification email to the business
    await resend.emails.send({
      from: "Gates Enterprises <noreply@gatesroof.com>",
      to: ["a.chicilo@gatesroof.com", "info@gatesroof.com"],
      subject: `New Lead: ${name.trim()} — ${serviceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D2137; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                  <a href="tel:${phone.replace(/\D/g, "")}" style="color: #2563EB; text-decoration: none;">${phone || "Not provided"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                  <a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email || "Not provided"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${address || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${serviceLabel}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827; white-space: pre-wrap;">${message}</td>
              </tr>
              ` : ""}
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #9CA3AF;">
              Submitted from gatesroof.com contact form on ${timestamp} (MST)
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the customer (only if they provided an email)
    if (email) {
      await resend.emails.send({
        from: "Gates Enterprises <noreply@gatesroof.com>",
        to: [email],
        subject: "We received your request — Gates Enterprises",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0D2137; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Thank You, ${name.trim().split(" ")[0]}!</h2>
            </div>
            <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; color: #374151; line-height: 1.7; margin: 0 0 16px;">
                We have received your request and a Gates team member will contact you within one business day.
              </p>
              <p style="font-size: 16px; color: #374151; line-height: 1.7; margin: 0 0 24px;">
                If you need immediate assistance, call us at <a href="tel:7207663377" style="color: #2563EB; text-decoration: none; font-weight: 600;">(720) 766-3377</a>.
              </p>
              <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 8px;">
                <p style="font-size: 15px; color: #374151; margin: 0; line-height: 1.6;">
                  <strong>Gates Enterprises LLC</strong><br>
                  Colorado's Front Range Roofing Experts<br>
                  <a href="tel:7207663377" style="color: #2563EB; text-decoration: none;">(720) 766-3377</a> |
                  <a href="https://gatesroof.com" style="color: #2563EB; text-decoration: none;">gatesroof.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
