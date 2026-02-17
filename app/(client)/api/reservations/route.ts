import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      fullName, 
      email, 
      phone, 
      address, 
      petSpecies, 
      petName, 
      adoptionPetId, 
      startDate, 
      endDate, 
      message, 
      type 
    } = body;

    // 1. Basic Server-Side Validation
    if (!fullName || !email || !type) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Email, and Reservation Type are mandatory." },
        { status: 400 }
      );
    }

    // 2. LOGIC: Send Email or Save to DB
    // For now, we will log it to the console so you can see it working in your terminal.
    console.log("-----------------------------------------");
    console.log(`NEW ${type.toUpperCase()} REQUEST RECEIVED`);
    console.log("-----------------------------------------");
    console.log(`Customer: ${fullName} (${email})`);
    console.log(`Phone: ${phone}`);
    console.log(`Address: ${address}`);
    console.log(`Species: ${petSpecies}`);
    
    if (type === "boarding") {
      console.log(`Pet Name: ${petName}`);
      console.log(`Dates: ${startDate} to ${endDate}`);
    } else {
      console.log(`Adopting Pet ID: ${adoptionPetId}`);
    }
    
    console.log(`Notes: ${message}`);
    console.log("-----------------------------------------");

    /**
     * NOTE: To actually send an email (like your contact form likely does), 
     * you would use a library like 'resend' or 'nodemailer' here.
     * * Example:
     * await resend.emails.send({
     * from: 'reservations@yourranch.com',
     * to: 'exoticanimales8@gmail.com',
     * subject: `New ${type} Reservation from ${fullName}`,
     * react: ReservationEmailTemplate({ ...body }),
     * });
     */

    return NextResponse.json(
      { message: "Reservation received successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("RESERVATION_API_ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}