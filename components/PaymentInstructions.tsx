"use client";

import Image from "next/image";
import {
  zellePay,
  sendPaypal,
  cashApp,
  bankTransfer,
} from "@/images";

export type PaymentMethodKey =
  | "zelle"
  | "paypal"
  | "cashapp"
  | "bank";

export const PAYMENT_GUIDES = [
  {
    key: "zelle",
    title: "Zelle",
    image: zellePay,
    content: (
      <>
        <p>Send your payment instantly via Zelle using the details below.</p>
        <p className="mt-2">
          <strong>Email:</strong> payments@earanch.com<br />
          <strong>Phone:</strong> +1 (305) 555-1842
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Include your <strong>Order Number</strong> in the memo.
        </p>
      </>
    ),
  },
  {
    key: "paypal",
    title: "PayPal Friends & Family",
    image: sendPaypal,
    content: (
      <>
        <p>Send payment using PayPal Friends & Family to avoid processing fees.</p>
        <p className="mt-2">
          <strong>Email:</strong> paypal@earanch.com
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Add your Order Number and Full Name in the notes.
        </p>
      </>
    ),
  },
  {
    key: "cashapp",
    title: "Cash App",
    image: cashApp,
    content: (
      <>
        <p>Quick mobile payments through Cash App.</p>
        <p className="mt-2">
          <strong>Cashtag:</strong> $EARanch
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Include your Order Number in the “For” field.
        </p>
      </>
    ),
  },
  {
    key: "bank",
    title: "Bank Transfer",
    image: bankTransfer,
    content: (
      <>
        <p>Traditional bank transfer option.</p>
        <p className="mt-2">
          <strong>Bank:</strong> Chase Bank<br />
          <strong>Account:</strong> **** 4821<br />
          <strong>Routing:</strong> 021000021
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Transfers may take 1–2 business days.
        </p>
      </>
    ),
  },
];

type Props = {
  paymentMethod?: string | null;
};

export default function PaymentInstructions({ paymentMethod }: Props) {
  if (!paymentMethod) return null;

  const selectedMethod = PAYMENT_GUIDES.find(
    (method) => method.key === paymentMethod.toLowerCase()
  );

  if (!selectedMethod) return null;

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden">
        <div className="relative h-65 w-full">
          <Image
            src={selectedMethod.image}
            alt={selectedMethod.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">
            {selectedMethod.title}
          </h2>
          <div className="text-center">{selectedMethod.content}</div>
        </div>
      </div>
    </div>
  );
}
