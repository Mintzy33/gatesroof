import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { yourName, yourPhone, yourEmail, theirName, theirPhone, theirEmail, theirAddress, notes } = data;

    // Validate required fields
    if (!yourName || !yourPhone || !yourEmail || !theirName || !theirPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the referral data (wire up email notifications later)
    console.log("=== NEW REFERRAL SUBMISSION ===");
    console.log("Referrer:", { name: yourName, phone: yourPhone, email: yourEmail });
    console.log("Referred:", { name: theirName, phone: theirPhone, email: theirEmail || "N/A", address: theirAddress || "N/A" });
    console.log("Notes:", notes || "None");
    console.log("Submitted at:", new Date().toISOString());
    console.log("===============================");

    // TODO: Send notification email to info@gatesroof.com via Resend
    // const emailRes = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: "referrals@gatesroof.com",
    //     to: "info@gatesroof.com",
    //     subject: `New Referral from ${yourName}`,
    //     html: `
    //       <h2>New Referral Submission</h2>
    //       <h3>Referrer</h3>
    //       <p>Name: ${yourName}<br>Phone: ${yourPhone}<br>Email: ${yourEmail}</p>
    //       <h3>Referred Person</h3>
    //       <p>Name: ${theirName}<br>Phone: ${theirPhone}<br>Email: ${theirEmail || 'N/A'}<br>Address: ${theirAddress || 'N/A'}</p>
    //       <h3>Notes</h3>
    //       <p>${notes || 'None'}</p>
    //     `,
    //   }),
    // });

    return NextResponse.json({ success: true, message: "Referral submitted successfully" });
  } catch (error) {
    console.error("Referral submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
