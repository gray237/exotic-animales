"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import BoardingPricing from "@/components/BoardingPricing";
import { eaBackground, exoticPetBoarding, chameleonBanner } from "@/images";
import { 
  HiCalendar, 
  HiArrowDownOnSquareStack, 
  HiArrowUpOnSquareStack,  
  HiCurrencyDollar, 
  HiClock, 
  HiBanknotes, 
  HiCalendarDays, 
  HiShoppingBag 
} from "react-icons/hi2";

const policies = [
  {
    icon: <HiCalendar />,
    title: "Exotic boarding is available 7 days a week",
    desc: "We are open every day of the week to ensure your pet has consistent care and attention.",
  },
  {
    icon: <HiArrowDownOnSquareStack />,
    title: "Drop-off hours",
    desc: "Monday – Friday: 6:00 AM – 4:00 PM. Weekends & Holidays: 7:00 AM – 4:00 PM.",
  },
  {
    icon: <HiArrowUpOnSquareStack />,
    title: "Pick-up hours",
    desc: "Monday – Friday: 6:00 AM – 12:00 PM. Weekends & Holidays: 7:00 AM – 12:00 PM.",
  },
  {
    icon: <HiCurrencyDollar />,
    title: "Late check out",
    desc: "Monday – Friday: 12:00 PM – 8:30 PM. Weekends & Holidays: 12:00 PM – 5:30 PM.",
  },
  {
    icon: <HiClock />,
    title: "Booking outside of typical boarding hours",
    desc: "Please give us a call and speak to one of our petceptionists to book special timing!",
  },
  {
    icon: <HiBanknotes />,
    title: "Boarding payment is collected upfront",
    desc: "Any additional balances or services added during the stay will be handled at pickup.",
  },
  {
    icon: <HiCalendarDays />,
    title: "Cancellation policies",
    desc: "Cancel up to 48 hours prior for a full refund. Less than 48 hours, payment is forfeited.",
  },
  {
    icon: <HiShoppingBag />,
    title: "Out of food? Not a problem!",
    desc: "Our store is always stocked! We have fresh produce and quality dry food on-site.",
  },
];

const BoardingServices = () => {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background */}
        <Image
          src={eaBackground}
          alt="Boarding background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          
          {/* Text (2/3) */}
          <div className="md:col-span-2 text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exotic Animal Boarding
            </h1>
            <p className="text-base lg:text-lg transition-all mb-8 text-gray-200">
              We provide professional exotic pet boarding services designed specifically for small mammals, reptiles, birds, and unique companion animals. With secure housing, expert care, and customized routines, your exotic pets stay safe, comfortable, and stress-free.
            </p>

            <div className="flex gap-4">
              <Link
                href="#rates"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                View Rates
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                Book a Stay
              </Link>
            </div>
          </div>

          {/* Image (1/3) */}
          <div className="hidden md:block relative w-full max-w-[400px] aspect-5/4 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={exoticPetBoarding}
              alt="Boarding Facility"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= FACILITY OVERVIEW ================= */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white">
              Discover Specialty Pet Boarding Near Me
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Tailored Care & Attention  ●  Safe & Comfortable  ●  Fully Climate Controlled
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Video */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video ID
                title="Facility Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Right Column: Blurbs */}
            <div className="space-y-2">
              {[
                {
                  title: "Luxurious Accommodations",
                  desc: "Spacious species-appropriate environments for comfort and stimulation.",
                },
                {
                  title: "24/7 Round-the-Clock Care",
                  desc: "Expert supervision to ensure your pet is safe, and monitored at all times.",
                },
                {
                  title: "Elite Sanitation Standards",
                  desc: "Pet-safe cleaning protocols to maintain a sterile and healthy environment.",
                },
                {
                  title: "On-Site Veterinary Care",
                  desc: "Our partner Dr. Rachel Siu and her team of skilled veterinarians are right next door for immediate medical attention.",
                },
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 p-4 rounded-2xl transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/10 group"
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-600 shadow-sm transition-transform group-hover:scale-110">
                    <HiCheck className="text-2xl stroke-2" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BoardingPricing />

      {/* FLOATING TRANSITION BANNER */}
      <div className="relative w-full h-0 z-10 overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 w-full px-0">
          <Image
            src={chameleonBanner}
            alt="Exotic Care Banner"
            width={1600}
            height={238}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* BOARDING DISCLAIMER SECTION */}
      <section className="relative w-full bg-[#bddef9] dark:bg-gray-950 pt-2.5 pb-24 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center pt-15 md:pt-28 mb-16">
            <h2 className="mt-0 xl:mt-2 2xl:mt-10 text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-8">
              Safe, Friendly & Fun Boarding for <span className="text-blue-700 dark:text-blue-400">Small and Exotic Animals</span>
            </h2>
            
            {/* Main Disclaimer - Frosted Glass Effect */}
            <div className="backdrop-blur-md bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-5xl mx-auto">
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                At Exotic Animales Ranch, our Cozy Exotic Pet Boarding service is designed specifically for small and exotic animals that need experienced, attentive care while you’re away. Our trained exotic pet specialists look after a wide range of companions, including rodents, birds, reptiles, rabbits, guinea pigs, ferrets, amphibians, and other small exotic pets. We understand that exotic animals have unique personalities and specialized needs. That’s why our team focuses on providing a secure, low-stress, and nurturing environment where your pets can feel comfortable, safe, and well cared for throughout their stay.
              </p>
            </div>
          </div>

          {/* TWO COLUMN BLURBS - Apple Style Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="group backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 p-10 rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black mb-6 shadow-lg shadow-blue-500/30">
                01
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Dedicated Space Built for Exotic Animals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Cozy Exotic Pet Critters are thoughtfully separated from dogs and cats to create a <span className="text-blue-700 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">quiet, controlled boarding environment</span> ideal for sensitive species. Our secure facility protects even the smallest pets and includes a designated out-of-cage enrichment and play area, giving animals the opportunity to exercise, explore, and stay mentally stimulated. Unlike traditional pet boarding facilities, most exotic animals do not require vaccinations for boarding, making the process simpler for many exotic pet owners.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 p-10 rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black mb-6 shadow-lg shadow-blue-500/30">
                02
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Bring Your Pet’s Terrarium for Comfort
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                To help your exotic pet settle in quickly and reduce stress, we ask all clients to provide their pet’s familiar housing setup — including tanks, cages, enclosures, or small animal condos. Familiar scents and surroundings help maintain routines and ensure your pet experiences a smooth and comfortable transition during their stay. Whether you’re traveling, relocating, or simply need trusted temporary care, Exotic Animales Ranch offers professional exotic pet boarding services designed around your animal’s unique needs.
              </p>
            </div>

          </div>

          {/* FINAL ADVICE - Subtle and clean */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block p-px bg-linear-to-r from-transparent via-blue-500 to-transparent w-full mb-8 opacity-30" />
            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-relaxed">
              Contact us today to book exotic pet boarding, or speak with our team about your pet’s specific care requirements — we’re here to help give you peace of mind while you’re away.
            </p>
          </div>

        </div>
      </section>

      {/* ================= A FEW THINGS YOU SHOULD KNOW ================= */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            >
              A Few Things You Should Know
            </motion.h2>
            <div className="h-1.5 w-20 bg-linear-to-r from-purple-500 to-green-500 mt-2 rounded-full" />
          </div>

          {/* Balanced 2-Column Grid (4 items per side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {policies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-6 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 group hover:bg-white dark:hover:bg-white/10 transition-all hover:shadow-xl"
              >
                {/* Circular Icon Holder */}
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-600 shadow-sm transition-transform group-hover:scale-110">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardingServices;