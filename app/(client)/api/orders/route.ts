import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Define the Interface to replace 'any'
interface OrderItem {
  product: {
    _id: string;
    name: string;
  };
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      items,
      address,
      total,
      user,
      paymentMethod,
      deliveryOption,
      transportDeposit,
      healthCertificate,
    } = body;

    // ---------------- VALIDATION ----------------
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (
      !address?.name ||
      !address?.street ||
      !address?.city ||
      !address?.state ||
      !address?.zip
    ) {
      return NextResponse.json(
        { error: "Incomplete address" },
        { status: 400 }
      );
    }

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json(
        { error: "User information missing" },
        { status: 400 }
      );
    }

    if (!paymentMethod) {
      return NextResponse.json(
        { error: "Payment method is required" },
        { status: 400 }
      );
    }

    // ---------------- PRODUCTS ----------------
    // Fix for Line 56: Replace 'any' with 'OrderItem'
    const sanityProducts = items.map((item: OrderItem) => ({
      _key: uuidv4(),
      product: {
        _type: "reference",
        _ref: item.product._id,
      },
      quantity: item.quantity,
    }));

    const orderNumber = `ORD-${Date.now()}`;

    // ---------------- CREATE ORDER ----------------
    const order = await backendClient.create({
      _type: "order",
      orderNumber,
      status: "processing",
      products: sanityProducts,
      totalPrice: total,
      currency: "USD",
      amountDiscount: 0,
      customerName: address.name,
      email: user.primaryEmailAddress.emailAddress,
      clerkUserId: user.id,
      orderDate: new Date().toISOString(),

      address: {
        name: address.name,
        street: address.street,
        phone: address.phone,
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: address.country,
      },

      paymentMethod,
      deliveryOption,
      transportDeposit: !!transportDeposit,
      healthCertificate: !!healthCertificate,
    });

    // ---------------- SEND EMAIL NOTIFICATIONS ----------------

    // Fix for Line 107 (or nearby): Replace 'any' with 'OrderItem'
    const orderItemsHtml = items
      .map(
        (i: OrderItem) =>
          `<li>${i.quantity} x ${i.product.name} (${i.product._id})</li>`
      )
      .join("");

    // --- Admin notification ---
    await resend.emails.send({
      from: "Exotic Animals <onboarding@resend.dev>",
      to: ["exoticanimales8@gmail.com"],
      subject: `📦 New Order: ${orderNumber}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Customer:</strong> ${address.name}</p>
        <p><strong>Email:</strong> ${user.primaryEmailAddress.emailAddress}</p>
        <p><strong>Shipping Address:</strong> ${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Delivery Option:</strong> ${deliveryOption}</p>
        <p><strong>Products:</strong></p>
        <ul>${orderItemsHtml}</ul>
        <p><strong>Total:</strong> $${total}</p>
      `,
    });

    // --- Customer confirmation ---
    await resend.emails.send({
      from: "Exotic Animals <onboarding@resend.dev>",
      to: [user.primaryEmailAddress.emailAddress],
      subject: `✅ Your Order ${orderNumber} Confirmation`,
      html: `
        <h2>Thank you for your order!</h2>
        <p>Hi ${address.name},</p>
        <p>We've received your order <strong>${orderNumber}</strong>. Here are the details:</p>
        <p><strong>Shipping Address:</strong> ${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}</p>
        <p><strong>Products:</strong></p>
        <ul>${orderItemsHtml}</ul>
        <p><strong>Total Paid:</strong> $${total}</p>
        <p>We will notify you once your exotic pets are ready for delivery. Thank you for trusting Exotic Animals!</p>
      `,
    });

    return NextResponse.json({
      success: true,
      orderNumber,
      orderId: order._id,
    });
  } catch (error: unknown) {
    // 2. Added 'unknown' and a safe logger for professional error handling
    console.error("ORDER ERROR:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}