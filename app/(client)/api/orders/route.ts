import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderItem {
  product: {
    _id: string;
    name: string;
    price?: number; 
  };
  quantity: number;
}

const generateOrderNumber = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `EXO-${result}`;
};

// This handles the lowercase "private/multi" issue
const formatDelivery = (str: string) => {
  if (str === "private") return "Private Transport";
  if (str === "multi") return "Multi-stop Transport";
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "Standard";
};

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

    if (!items?.length) return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    if (!user?.id || !paymentMethod) return NextResponse.json({ error: "Missing info" }, { status: 400 });

    const orderNumber = generateOrderNumber();
    
    const sanityProducts = items.map((item: OrderItem) => ({
      _key: uuidv4(),
      product: { _type: "reference", _ref: item.product._id },
      quantity: item.quantity,
    }));

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

    // ✅ POINTING TO YOUR PERMANENT LOGO
    const logoUrl = "https://www.exoticanimales.com/logo.png";
    
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px 0; color: #333;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <tr>
            <td align="center" style="padding: 40px 20px; background-color: #000000;">
              <img src="${logoUrl}" alt="Exotic Animales" width="180" style="display: block; outline: none; border: none; text-decoration: none;">
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px;">
              <h2 style="font-size: 22px; margin-top: 0; color: #111;">Order Confirmed!</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #555;">
                Hi ${address.name},<br />
                We've received your order and our specialists are now preparing your animals for transport.
              </p>
              
              <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <p style="margin: 0; font-size: 14px; color: #666;">Order Number</p>
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #000;">${orderNumber}</p>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <thead>
                  <tr>
                    <th align="left" style="border-bottom: 1px solid #eee; padding-bottom: 10px; font-size: 12px; text-transform: uppercase; color: #999;">Product</th>
                    <th align="center" style="border-bottom: 1px solid #eee; padding-bottom: 10px; font-size: 12px; text-transform: uppercase; color: #999;">Qty</th>
                  </tr>
                </thead>
                <tbody>
                ${items.map((i: any) => {
                  const name = i.product?.name || "Exotic Animal";
                  const price = i.product?.price || 0;
                  
                  return `
                    <tr>
                      <td style="padding: 15px 0; border-bottom: 1px solid #f9f9f9; font-size: 15px; font-weight: 500;">
                        ${name}
                      </td>
                      <td align="center" style="padding: 15px 0; border-bottom: 1px solid #f9f9f9; font-size: 15px;">
                        ${i.quantity} x $${Number(price).toFixed(2)}
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="vertical-align: top;">
                    <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #999;">Delivery Option</p>
                    <p style="margin: 5px 0 20px 0; font-size: 14px; font-weight: 500;">${formatDelivery(deliveryOption)}</p>
                  </td>
                  <td width="50%" style="vertical-align: top;">
                    <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #999;">Total Amount</p>
                    <p style="margin: 5px 0 20px 0; font-size: 14px; font-weight: bold; color: #10b981;">$${Number(total).toFixed(2)}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #999;">Shipping Address</p>
                    <p style="margin: 5px 0 0 0; font-size: 14px; color: #555;">${address.street}, ${address.city}, ${address.state} ${address.zip}</p>
                  </td>
                </tr>
              </table>

              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/orders" style="display: block; background-color: #000000; color: #ffffff; text-align: center; padding: 18px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 40px;">Track Your Transport</a>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 30px; background-color: #f3f4f6; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 12px; color: #999;">&copy; 2026 Exotic Animales. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </div>
    `;

    // Customer Email
    await resend.emails.send({
      from: "Exotic Animales <onboarding@resend.dev>",
      to: [user.primaryEmailAddress.emailAddress],
      subject: `✅ Order Confirmed: ${orderNumber}`,
      html: emailHtml,
    });

    // Admin Alert
    await resend.emails.send({
      from: "Exotic Animales <onboarding@resend.dev>",
      to: ["exoticanimales8@gmail.com"],
      subject: `📦 NEW ORDER: ${orderNumber}`,
      html: `<h3>New order from ${address.name}</h3><p>Total: $${Number(total).toFixed(2)}</p><p>ID: ${orderNumber}</p>`,
    });

    return NextResponse.json({ success: true, orderNumber, orderId: order._id });
  } catch (error: unknown) {
    console.error("ORDER ERROR:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}