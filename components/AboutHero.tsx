import React from "react";
import Image from "next/image";
import { exoticPetsRanch } from "@/images";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { FiClock, FiStar, FiShield } from "react-icons/fi";
import { RiTruckFill, RiTimeFill } from "react-icons/ri";
import { TbCompass } from "react-icons/tb";
import Link from "next/link";

const AboutHero = () => {
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
              About Us - Exotic Animales Ranch
            </h1>
            <p className="text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              Exotic Animales Ranch is a premier, private family-owned zoological facility dedicated to the highest standards of exotic animal husbandry. We have been a sanctuary for rare species and a trusted source for hand-raised companions, thus offering the best selection of exotic reptiles, mammals, rodents, amphibians, inverts, and more. EA Ranch's professional animal care starts with family values, ensuring that every pet in our care receive individualized attention and specialized nutrition required to thrive.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            {/* Primary Button */}
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.99]">
              <FaPaperPlane className="text-purple-700 text-[14px]" />
              <span>Start a Request</span>
              {/* Shine effect */}
              <span className="absolute -top-10 -left-10 w-[140px] h-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all duration-350 ease-in-out hover:opacity-75 hover:translate-x-5 hover:-translate-y-5"></span>
            </Link>

            {/* Ghost Button */}
            <button className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99]">
              <TbCompass />
              <span>Explore Services</span>
            </button>
          </div>

          {/* Three feature blurbs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            {[
              { icon: FiClock, title: "Avg. response", value: "3 hrs" },
              { icon: FiStar, title: "Client rating", value: "4.9 / 5" },
              { icon: FiShield, title: "Privacy-first", value: "No spam" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 p-3 border rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-[34px] h-[34px] flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-pink-100 dark:bg-pink-900/20 text-pink-500">
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.value}</p>
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
              <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/20 transform transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <RiTruckFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Overnight pet shipping across the contiguous U.S.</p>
                  <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">On All Orders</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/20 transform transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <RiTimeFill className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Alive arrival guarantee To your door/facility</p>
                  <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">9:30AM - 6PM</p>
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

export default AboutHero;
