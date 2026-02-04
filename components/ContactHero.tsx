import React from "react";
import Image from "next/image";
import { exoticPetsRanch } from "@/images";
import { FaCheckCircle, FaPaperPlane, FaPaw, FaClock, FaStar, FaLeaf } from "react-icons/fa";
import { FiClock, FiShield } from "react-icons/fi";
import { RiTimeFill, RiTruckFill } from "react-icons/ri";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white/90 via-white to-white/95 dark:bg-gray-900">
      {/* Floaty badges at hero edges */}
      <div className="absolute right-5 top-5 translate-x-4 -translate-y-4 flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 shadow-md animate-bob z-20">
        <FiClock className="text-purple-500" />
        <span className="text-sm text-gray-700">Instant hints</span>
      </div>

      <div className="absolute left-5 bottom-5 -translate-x-4 translate-y-4 flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 shadow-md animate-bob z-20">
        <FiShield className="text-purple-500" />
        <span className="text-sm text-gray-700">Clean data</span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 lg:px-16 py-16 gap-10 max-w-[1400px] mx-auto">

        {/* Left Column: Text + Buttons + Blurbs */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top badge */}
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg max-w-max">
            <span className="w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Fast replies • Clear pricing • Zero confusion
            </span>
          </div>

          {/* Title + Paragraph */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Connect With Our Exotic Pet Breeders
            </h1>
            <p className="text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              Curious about bringing a one-of-a-kind companion into your home? At E.A Ranch, we make connecting with your next exotic pet easy, safe, and fun. Our knowledgeable team is ready to answer your questions, offer expert guidance, and help you choose the perfect addition to your family. Whether you want to know about feeding tips, enclosures, health care, or adoption requirements, we’re here to provide personalized support every step of the way. Contact us and experience ethical sourcing of pet companion and a love for all things exotic.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 
              text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.99]">
              <FaPaperPlane className="text-purple-700 text-[14px]" />
              <span>Start a Request</span>
              {/* Shine effect */}
              <span className="absolute -top-10 -left-10 w-[140px] h-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all duration-350 ease-in-out hover:opacity-75 hover:translate-x-5 hover:-translate-y-5"></span>
            </Link>

            {/* Ghost Button */}
            <Link
              href="/about"
               className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 
               dark:text-white font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99]">
              <FaLeaf className="text-purple-700" />
              <span>Explore Services</span>
            </Link>
          </div>

          {/* FEATURE BLURBS — COMPACT & ALIGNED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            {[
              { icon: FaClock, title: "Avg. response", value: "30 Mins" },
              { icon: FaStar, title: "Client rating", value: "4.6 / 5" },
              { icon: FaPaw, title: "20+ Species", value: "Adopted" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center justify-center md:justify-start gap-2.5 p-2.5 border rounded-xl bg-white dark:bg-gray-800 
                  border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-md"
                >
                  {/* Icon Container - Scaled down to 30px for better fit */}
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-500">
                    <Icon className="text-base" />
                  </div>
                  
                  {/* Text Container - Tighter spacing */}
                  <div className="flex flex-col">
                    <p className="text-[11px] uppercase tracking-wider font-medium text-gray-400 dark:text-gray-500 leading-none mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image + Stats as a single Media Card */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[22px] shadow-lg overflow-hidden transform transition-transform duration-200 ease-in-out hover:-translate-y-1">

            {/* Image Section */}
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src={exoticPetsRanch}
                alt="Exotic Ranch"
                fill
                className="object-cover"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay"
                   style={{
                     background: `radial-gradient(600px 380px at 30% 15%, rgba(107,77,255,0.26), transparent 60%),
                                  radial-gradient(520px 320px at 80% 70%, rgba(20,184,166,0.22), transparent 60%)`
                   }}
              />
            </div>

            {/* Stats Content */}
            <div className="p-4 grid gap-3">
              {/* Media Stats */}
              <div className="flex items-center gap-3 py-2 px-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/20 transform transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <RiTruckFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Overnight pet shipping across the contiguous U.S.</p>
                  <p className="text-md font-bold tracking-tight text-gray-900 dark:text-white">On All Orders</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2 px-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/20 transform transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <RiTimeFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">live arrival guarantee To your door/facility</p>
                  <p className="text-md font-bold tracking-tight text-gray-900 dark:text-white">9:30AM - 6PM</p>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-green-300/28 bg-green-100/10 text-green-800 shadow-md">
                <FaCheckCircle className="text-green-800" />
                <span className="text-sm font-medium">
                  Supplies, Food +  Everything your new pet needs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
