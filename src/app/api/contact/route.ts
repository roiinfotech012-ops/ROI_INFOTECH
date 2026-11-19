import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check the highlighted fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Spam honeypot check
    if (parsed.data.website_honeypot && parsed.data.website_honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // Check if an email provider / webhook is configured in environment variables
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (webhookUrl) {
      const resp = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!resp.ok) {
        throw new Error("Failed to forward inquiry to webhook.");
      }
      return NextResponse.json({
        success: true,
        configured: true,
        message: "Thank you! Your inquiry has been sent to ROI Fast Track InfoTech Solutions.",
      });
    }

    if (resendApiKey) {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
          to: [process.env.CONTACT_TO_EMAIL || "info@roiinfotech.com"],
          subject: `[ROI InfoTech Inquiry] ${parsed.data.subject} - ${parsed.data.name}`,
          text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nSubject: ${parsed.data.subject}\n\nMessage:\n${parsed.data.message}`,
        }),
      });
      if (!resp.ok) {
        throw new Error("Failed to send email via Resend API.");
      }
      return NextResponse.json({
        success: true,
        configured: true,
        message: "Thank you! Your inquiry has been delivered to our team.",
      });
    }

    // Explicit transparent response when email delivery backend is not yet configured in .env
    return NextResponse.json(
      {
        success: false,
        configured: false,
        message:
          "Form validation passed, but no email provider (RESEND_API_KEY or CONTACT_WEBHOOK_URL) is configured in the environment yet. Please reach us directly at info@roiinfotech.com or +91-98867 33599.",
      },
      { status: 503 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
