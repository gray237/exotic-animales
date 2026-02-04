import React from "react";
import PaymentInfo from "@/components/PaymentInfo";
import ProofSection from "@/components/ProofSection";
import { sendPaypal } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Order Payment & Checkout",
  description:
    "Learn about the payment methods and checkout process at Exotic Animales. Secure and easy payments for your exotic pets including axolotls, sugar gliders, and more.",
  keywords:
    "exotic pets payment, secure checkout, axolotls payment, sugar gliders checkout, Exotic Animales payment options, exotic pet store checkout",
  openGraph: {
    title: "Payment & Checkout | Exotic Animales",
    description:
      "Learn about the payment methods and checkout process at Exotic Animales. Secure and easy payments for your exotic pets including axolotls, sugar gliders, and more.",
    url: "https://www.exoticanimales.com/payment",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: sendPaypal.src,
        width: sendPaypal.width,
        height: sendPaypal.height,
        alt: "Exotic Animales Payment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment & Checkout | Exotic Animales",
    description:
      "Learn about the payment methods and checkout process at Exotic Animales. Secure and easy payments for your exotic pets including axolotls, sugar gliders, and more.",
    images: [sendPaypal.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const PaymentPage = () => {
  return (
    <div className="flex flex-col">
      <PaymentInfo />
      <ProofSection />
    </div>
  );
};

export default PaymentPage;
