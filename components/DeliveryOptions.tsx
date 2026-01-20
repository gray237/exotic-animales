"use client";

import React from "react";
import Image from "next/image";
import { 
  FaTruck, 
  FaDollarSign, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaUsers, 
  FaCheckCircle 
} from "react-icons/fa";
import { smallExoticPetsSale } from "@/images";

// Top six summary cards with detailed text
const topCards = [
  {
    title: "Nationwide Delivery",
    icon: FaTruck,
    text: "Our USDA-licensed transporters handle door-to-door delivery across the US safely and securely."
  },
  {
    title: "Secure Deposits",
    icon: FaDollarSign,
    text: "Nonrefundable deposits reserve your animal. Larger pets or private transport may require higher deposits."
  },
  {
    title: "Scheduled Pickups",
    icon: FaCalendarAlt,
    text: "Texas pickups require 24+ hour notice. Arrive on time to ensure smooth handoff and proper documentation."
  },
  {
    title: "Health Certificates",
    icon: FaShieldAlt,
    text: "Required for interstate transport of most exotic pets to guarantee safety and compliance with regulations."
  },
  {
    title: "Private & Semi-Private",
    icon: FaUsers,
    text: "Choose private or semi-private transport for faster delivery and personalized attention for your pet."
  },
  {
    title: "Buyer Responsibility",
    icon: FaCheckCircle,
    text: "The buyer must meet transporters on time and ensure proper care and documentation during transit."
  },
];

// Detailed sections for transport
const detailedSections = [
  {
    title: "Transport Information",
    content: `Animals will be delivered by USDA-licensed carriers on scheduled routes nationwide, typically once or twice a month. Exact delivery dates are estimates, affected by weather, traffic, or route changes. Buyers will receive updates directly from the transporter. Animals must be received by the authorized person with a government-issued ID within 15 minutes of arrival. Failure to comply may result in animals returning to E.A Ranch, additional fees, or sale cancellation.`
  },
  {
    title: "Transport Deposit & Health Certificates",
    content: `A nonrefundable deposit is required to book transport. Private transport or larger animals may require higher deposits. Health certificates are required for interstate shipments (excluding hedgehogs and sugar gliders) and are issued by licensed veterinarians. Fees vary depending on species and shipment size.`
  },
  {
    title: "Transport Fees",
    content: `Fees include travel carrier, food, and bedding. Additional animals to the same address receive discounts. Examples:
- Hedgehogs: $200 for up to 3 babies, $100 per extra crate
- Sugar Gliders: $200 per cage plus $25 for the transport cage
- Lemurs: $1.50/mile (TX only)
- Other exotics: $500 minimum for multi-stop transport
Private transport offers faster delivery with dedicated attention.`
  },
  {
    title: "Local Pickups",
    content: `Texas residents may pick up animals directly at E.A Ranch. Appointments must be scheduled 24+ hours in advance. All animals must be collected within 7 days of their "ready by" date. Proof of proper habitat setup may be required before release.`
  },
  {
    title: "Health & Buyer Responsibility",
    content: `Transport can be stressful. Once an animal leaves E.A Ranch, we cannot guarantee its condition. Buyers should insure animals during transit if desired, and follow all care, pickup, and transport instructions provided.`
  },
  {
    title: "Private & Multi-Stop Transporters",
    content: `Trusted transporters nationwide provide multi-stop and private/semi-private options. Multi-stop handles small exotics and baby hoofstock; private transport ensures faster delivery, video/photo updates, and personal attention. Buyers must follow transporter instructions and social media updates for accurate ETAs.`
  },
];

const Delivery = () => {
  return (
    <section className="w-full">

      {/* Header */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-purple-400/30">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Delivery & Pickup
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            At E.A Ranch, we make transporting exotic pets safe, reliable, and hassle-free. Whether you’re picking up in Texas or arranging nationwide delivery, we provide all the guidance, health certificates, and support you need to get your new exotic companion home safely.
          </p>
        </div>
      </div>

      {/* Top Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {topCards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 bg-white rounded-[22px] shadow-md hover:shadow-lg transition duration-300"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-500 text-2xl">
              <card.icon />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="w-full">
        <Image
          src={smallExoticPetsSale}
          alt="Exotic pets transport banner"
          className="w-full object-cover max-h-[400px] rounded-xl"
        />
      </div>

      {/* Detailed Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {detailedSections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row gap-6 items-start p-8 rounded-[22px] shadow-md transition duration-300 ${
              idx % 2 === 0 ? "bg-white hover:shadow-lg" : "bg-purple-50 hover:shadow-lg"
            }`}
          >
            <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-500 text-2xl">
              <FaTruck />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
