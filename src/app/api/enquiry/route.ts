import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(120),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+0-9\s\-()]{10,20}$/, "Please enter a valid phone number format"),
  organization: z.string().max(120).optional(),
  enquiryType: z.enum([
    "Student Program",
    "College & University Partnership",
    "Corporate Training",
    "LMS Solutions",
    "General Enquiry",
  ]),
  interestedProgram: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Spam Honeypot Check: If honeypot is populated, silently reject bot
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // Validate request data
    const parseResult = enquirySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = parseResult.data;

    // Determine target recipient based on enquiry type
    const defaultRecipient = process.env.OFFICIAL_EMAIL || "svlearnlogic@gmail.com";
    const businessRecipient = process.env.BUSINESS_EMAIL || "svsuhanalearnlogic@gmail.com";
    
    const assignedRecipient =
      validData.enquiryType === "Corporate Training" ||
      validData.enquiryType === "College & University Partnership" ||
      validData.enquiryType === "LMS Solutions"
        ? businessRecipient
        : defaultRecipient;

    // Structured Server Log (simulating backend CRM / notification queue)
    console.log("[ENQUIRY RECEIVED]", {
      timestamp: new Date().toISOString(),
      assignedTo: assignedRecipient,
      data: {
        fullName: validData.fullName,
        email: validData.email,
        phone: validData.phone,
        organization: validData.organization || "N/A",
        enquiryType: validData.enquiryType,
        interestedProgram: validData.interestedProgram || "N/A",
        messageLength: validData.message.length,
      },
    });

    // If an external webhook is configured (e.g. Zapier, Slack, or Email service), invoke it safely
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...validData,
            targetRecipient: assignedRecipient,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error("[WEBHOOK ERROR]", webhookErr);
        // We log but don't fail user enquiry if webhook drops
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to SV LearnLogic. Your enquiry has been received and our technical advisory team will contact you shortly.",
        referenceId: `SV-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ENQUIRY API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process your enquiry at this moment. Please try again or contact us directly via email.",
      },
      { status: 500 }
    );
  }
}
