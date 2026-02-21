"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineInformationCircle, HiCursorArrowRays } from "react-icons/hi2";
import { FaPaw, FaHome, FaInbox, FaCarrot } from "react-icons/fa"; // Match the Petfinity icons
import { drRachel1 } from "@/images"; // Using an existing image for the feature card

const pricingData = {
  "Small Animals": {
    image: drRachel1, // Replace with your small animal specific image
    description: "We provide a safe and caring environment for your beloved small pets, including ferrets, guinea pigs, hamsters, rabbits, and hedgehogs. Our dedicated team ensures that each guest receives personalized attention and the highest standard of care.",
    rates: [
      { name: "Hamster", price: "10" },
      { name: "Guinea Pig", price: "15" },
      { name: "Hedgehog", price: "15" },
      { name: "Ferret", price: "20" },
      { name: "Rabbit", price: "20" },
    ],
    features: [
      { icon: <FaPaw />, title: "Cage bank", desc: "Suitable for: 1-2 guinea pigs or 1 rabbit." },
      { icon: <FaHome />, title: "Bring your own cage", desc: "All small rodents (hamsters, gerbils, hedgehogs)." },
      { icon: <FaInbox />, title: "Litter training", desc: "We kindly ask that all small animals be litter trained. Non-trained pets welcome with a small fee." },
      { icon: <FaCarrot />, title: "Fresh produce", desc: "We can arrange to purchase fresh produce for extended stays, added to your reservation." },
    ]
  },
  "Reptiles": { image: drRachel1, description: "Climate controlled terrariums...", rates: [{ name: "Standard", price: "15" }], features: [] },
  "Birds": { image: drRachel1, description: "Safe aviaries...", rates: [{ name: "Small Bird", price: "15" }], features: [] },
  "Fish": { image: drRachel1, description: "Professional aquatic care...", rates: [{ name: "Small Tank", price: "10" }], features: [] },
  "Critter Corner": {
    image: drRachel1, 
    description: "A cage-free alternative! Critter Corner is a cozy haven where pets can freely roam in a safe, supervised environment. Ideal for socialized small animals.",
    rates: [
      { name: "Standard Stay", price: "23" },
    ],
    features: [
      { icon: <FaPaw />, title: "Social Grouping", desc: "Suitable for up to 4 small animals from the same household." },
      { icon: <FaInbox />, title: "Litter training", desc: "Required for cage-free roaming to maintain our high sanitation standards." },
    ]
  },
};

const BoardingPricing = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>("Small Animals");

  return (
    <section id="rates" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-400 mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Pet Boarding Pricing</h2>
          <span className="text-sm text-gray-500 italic">*pricing subject to change</span>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-12">
          {Object.keys(pricingData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof pricingData)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all relative ${
                activeTab === tab 
                ? "text-purple-600 border-b-2 border-purple-600" 
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Featured Service Card (Left) */}
              <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="relative h-64 w-full">
                  <Image src={pricingData[activeTab].image} alt={activeTab} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{activeTab} Boarding</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {pricingData[activeTab].description}
                  </p>
                  <Link
                    href="/reservation?type=boarding"
                    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <HiCursorArrowRays className="text-purple-700" />
                    <span>Book Now</span>
                    <span className="absolute -top-10 -left-10 w-35 h-35 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all" />
                  </Link>
                </div>
              </div>

              {/* Pricing Grid (Right) */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {pricingData[activeTab].rates.map((rate, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span className="font-bold text-gray-800 dark:text-white text-lg">{rate.name}</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-purple-600">
                        ${rate.price}<sup className="text-sm font-bold">00</sup>
                      </span>
                      <small className="block text-gray-400">per night</small>
                    </div>
                  </div>
                ))}

                {/* Info Icon Boxes below rates */}
                <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6 mt-4">
                  {pricingData[activeTab].features.map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-600 shadow-sm transition-transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BoardingPricing;