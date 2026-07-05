import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Invalid email address").max(320),
  company: z.string().trim().max(200).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(300),
  message: z.string().trim().min(1, "Message is required").max(5000),
  inquiryType: z.enum(["shopify", "sales-assistant", "referral", "other"]),
});

const inquiryLabels: Record<z.infer<typeof contactSchema>["inquiryType"], string> = {
  shopify: "SalesHQ for Shopify",
  "sales-assistant": "Sales Assistant",
  referral: "Referral & Affiliate",
  other: "Something else",
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0]?.message ?? "Invalid form data." },
      { status: 400 }
    );
  }

  const { name, email, company, subject, message, inquiryType } = parsed.data;
  const inquiryLabel = inquiryLabels[inquiryType];
  const from =
    process.env.RESEND_FROM_EMAIL ?? "SalesHQ Contact <onboarding@resend.dev>";
  const to = process.env.CONTACT_EMAIL_TO ?? "shubham@saleshq.ai";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[${inquiryLabel}] ${subject}`,
    text: [
      `New contact form submission`,
      ``,
      `Inquiry type: ${inquiryLabel}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);

    if (error.statusCode === 403) {
      return NextResponse.json(
        {
          error:
            "Email is not configured for this recipient yet. Verify saleshq.ai at resend.com/domains, or set CONTACT_EMAIL_TO to your Resend account email for local testing.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
