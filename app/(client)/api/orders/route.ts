import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";
import { v4 as uuidv4 } from "uuid";

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
    const sanityProducts = items.map((item: any) => ({
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

      // ---------------- ADDRESS ----------------
      address: {
        name: address.name,
        street: address.street,
        phone: address.phone,
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: address.country,
      },

      // ---------------- OTHER OPTIONS ----------------
      paymentMethod,
      deliveryOption,
      transportDeposit: !!transportDeposit,
      healthCertificate: !!healthCertificate,
    });

    return NextResponse.json({
      success: true,
      orderNumber,
      orderId: order._id,
    });
  } catch (error) {
    console.error("ORDER ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
