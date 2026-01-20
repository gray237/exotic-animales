"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { bankTransfer, cashApp, sendPaypal, zellePay } from "@/images";

const PAYMENT_OPTIONS = [
  {
    title: "Zelle",
    image: zellePay,
    description: "Send payments instantly to our account securely.",
    bullets: ["Fast transfer", "No fees", "Trusted service"],
  },
  {
    title: "PayPal Friends & Family",
    image: sendPaypal,
    description: "Safe and easy transactions using your PayPal account.",
    bullets: ["No extra fees", "Instant confirmation", "Worldwide access"],
  },
  {
    title: "Bank Transfer",
    image: bankTransfer,
    description: "Direct transfers from your bank account to ours.",
    bullets: ["Secure process", "Bank verified", "24/7 access"],
  },
  {
    title: "CashApp",
    image: cashApp,
    description: "Quick mobile payments via CashApp.",
    bullets: ["Instant transfers", "Mobile-friendly", "Easy tracking"],
  },
];

const Payment = () => {
  return (
    <div className="w-full">

      {/* ================= Hero Section ================= */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-purple-400/30">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Payment Options
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            At E.A Ranch, we make paying for your exotic pets safe, easy, and convenient. Choose the payment method that works best for you and complete your purchase with confidence.
          </p>
        </div>
      </div>

      {/* ================= Payment Options ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PAYMENT_OPTIONS.map((option) => (
          <div
            key={option.title}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Full-width image */}
            <div className="relative w-full h-52 sm:h-64 md:h-56 lg:h-64">
              <Image
                src={option.image}
                alt={option.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>

              <ul className="flex flex-col gap-2 mt-2">
                {option.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-purple-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
