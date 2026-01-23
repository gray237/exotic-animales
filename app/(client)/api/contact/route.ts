import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      message,
      intent,
      priority,
      companyWebsite, // honeypot
    } = await req.json();

    /* ===============================
       HONEYPOT (ANTI-SPAM)
    =============================== */
    if (companyWebsite) {
      // Bot detected — fail silently
      return NextResponse.json({ success: true });
    }

    /* ===============================
       SERVER-SIDE VALIDATION
    =============================== */
    if (!fullName?.trim() || !email?.trim() || !message?.trim() || !intent?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    /* ===============================
       PRIORITY HANDLING
    =============================== */
    const isUrgent = priority === "Urgent";

    const subjectPrefix = isUrgent ? "⚠️ URGENT — " : "";
    const priorityBadge = isUrgent
      ? `<span style="color:#b91c1c;font-weight:bold;">⚠️ URGENT</span>`
      : `<span style="color:#2563eb;">${priority || "Normal"}</span>`;

    /* ===============================
       SEND ADMIN EMAIL
    =============================== */
    await resend.emails.send({
      from: "Exotic Animals <onboarding@resend.dev>",
      to: ["exoticanimales8@gmail.com"],
      replyTo: email,
      subject: `${subjectPrefix}New ${intent} Inquiry`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Intent:</strong> ${intent}</p>
          <p><strong>Priority:</strong> ${priorityBadge}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
