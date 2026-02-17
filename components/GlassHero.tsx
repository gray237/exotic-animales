"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPaperPlane, FaPaw, FaClock, FaStar, FaLeaf } from "react-icons/fa";
import { FiClock, FiShield } from "react-icons/fi";
import { RiTruckFill, RiTimeFill } from "react-icons/ri";

type Category = {
  title: string;
  href: string;
};

type GlassHeroProps = {
  badgeText: string;
  title: string;
  description: string;
  image: any;

  primaryCta: {
    label: string;
    href: string;
  };

  secondaryCta: {
    label: string;
    href: string;
  };

  categories?: Category[];
};

const GlassHero = ({
  badgeText,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  categories = [],
}: GlassHeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white/90 via-white to-white/95 dark:bg-gray-900">

      {/* FLOATING BADGES — unchanged */}
      <div className="absolute right-5 top-5 translate-x-4 -translate-y-4 flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 shadow-md animate-bob z-20">
        <FiClock className="text-purple-500" />
        <span className="text-sm text-gray-700">Instant hints</span>
      </div>

      <div className="absolute left-5 bottom-5 -translate-x-4 translate-y-4 flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 shadow-md animate-bob z-20">
        <FiShield className="text-purple-500" />
        <span className="text-sm text-gray-700">Clean data</span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 lg:px-16 py-16 gap-10 max-w-[1400px] mx-auto">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* TOP BADGE — EXACT */}
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg max-w-max text-gray-700 dark:text-gray-200">
            <span className="w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <span className="text-sm font-semibold">
              {badgeText}
            </span>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              {description}
            </p>
          </div>

          {/* BUTTONS — UNCHANGED */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href={primaryCta.href}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl"
            >
              <FaPaperPlane className="text-purple-700 text-[14px]" />
              <span>{primaryCta.label}</span>
              <span className="absolute -top-10 -left-10 w-[140px] h-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all" />
            </Link>

            <Link
              href={secondaryCta.href}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white font-semibold shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <FaLeaf className="text-purple-700" />
              <span>{secondaryCta.label}</span>
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
                  className="flex items-center justify-center md:justify-start gap-2.5 p-2.5 border rounded-xl bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-md"
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

          {/* CATEGORIES — ADDED, NON-DESTRUCTIVE */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.href}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 text-sm font-semibold transition"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — IDENTICAL */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[22px] shadow-lg overflow-hidden transition-transform hover:-translate-y-1">

            <div className="relative w-full h-96 overflow-hidden">
              <Image src={image} alt={title} fill className="object-cover" />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background:
                    "radial-gradient(600px 380px at 30% 15%, rgba(107,77,255,0.26), transparent 60%), radial-gradient(520px 320px at 80% 70%, rgba(20,184,166,0.22), transparent 60%)",
                }}
              />
            </div>

            <div className="p-4 grid gap-3">
              <div className="flex items-center gap-3 py-2 px-3 border rounded-xl bg-gray-50 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-purple-100 text-purple-500">
                  <RiTruckFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Overnight pet shipping</p>
                  <p className="text-md font-bold">On All Orders</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2 px-3 border rounded-xl bg-gray-50 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-purple-100 text-purple-500">
                  <RiTimeFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Alive arrival guarantee</p>
                  <p className="text-md font-bold">9:30AM – 6PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-green-300/28 bg-green-100/10 shadow-md">
                <FaCheckCircle className="text-green-800" />
                <span className="text-sm font-medium">
                  Supplies, Food + Everything your new pet needs
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassHero;
