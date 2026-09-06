import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, platform, timeSlot, message } = body;

    // Validate the incoming data
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Log the inquiry
    console.log("=== [Healing Harmony New Session Inquiry] ===");
    console.log({
      name,
      phone,
      email: email || "N/A",
      service: service || "General Inquiry",
      platform: platform || "Zoom",
      timeSlot: timeSlot || "Flexible",
      message: message || "No notes provided",
      timestamp: new Date().toISOString(),
    });

    // In a production deployment, this can be connected to Resend, Nodemailer, Twilio, or Google Sheets API
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry registered successfully. Connecting you to Dr. Priyanka.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please contact via WhatsApp directly." },
      { status: 500 }
    );
  }
}
