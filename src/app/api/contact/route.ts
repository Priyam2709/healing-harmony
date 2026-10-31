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

    // Log the inquiry to server console
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

    let deliveredViaWeb3 = false;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "70d086db-1237-46d1-9dc8-20ea481fcd3f";

    if (accessKey) {
      const emailContent = `
New Session Inquiry for Healing Harmony:
• Client Name: ${name}
• Phone / WhatsApp: ${phone}
• Client Email: ${email || "Not provided"}
• Selected Service: ${service}
• Preferred Online Platform: ${platform}
• Preferred Time Slot: ${timeSlot}
• Goals / Details: ${message || "None provided"}
      `.trim();

      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Healing Harmony: New Session Request from ${name} (${service})`,
            from_name: "Healing Harmony Wellness Club",
            name,
            email: email || "noreply@healingharmony.com",
            phone,
            service,
            platform,
            time_slot: timeSlot,
            message: emailContent,
          }),
        });

        const web3Result = await web3Response.json();
        if (web3Result.success) {
          deliveredViaWeb3 = true;
          console.log("Email delivered successfully via Web3Forms.");
        } else {
          console.warn("Web3Forms delivery warning:", web3Result);
        }
      } catch (err) {
        console.error("Failed to forward to Web3Forms:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        emailDelivered: deliveredViaWeb3,
        message: deliveredViaWeb3
          ? "Inquiry delivered directly to Dr. Priyanka's inbox!"
          : "Inquiry registered successfully.",
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
