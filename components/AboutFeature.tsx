"use client";

import React from "react";
import { FiZap, FiFileText, FiLink } from "react-icons/fi";
import { FaPaw, FaUserShield, FaLifeRing, FaEnvelopeOpenText, FaShieldAlt, FaBullseye, FaHandPointer } from "react-icons/fa";
import { RiStarFill, RiHeartFill } from "react-icons/ri";
import Image from "next/image";
import { exoticPetsRanch } from "@/images";

const AboutFeature = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col gap-8">

        {/* Section Head */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="lg:w-1/2 space-y-2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Why Pet Lovers Choose Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your trusted exotic pet store serving approved homes, zoos or exotic ranches nationwide. 
            </p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
              <FaPaw className="text-purple-500" /> Rare Exotic Pets
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
              <RiHeartFill className="text-purple-500" /> Premium Lineage
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
              <FaBullseye className="text-purple-500" /> Curated Selection
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <article className="border rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-300 bg-purple-100 text-purple-500 mb-4">
              <RiStarFill className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Premium Quality</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Every animal in our care is raised with intention, expertise, and respect for its species. From hand-raised mammals to ethically bred exotics, we prioritize health, temperament, and genetic integrity above all else. Our pets receive specialized nutrition, enriched environments, and attentive daily care.
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Healthy, ethically raised pets</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Species-specific daily care</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Calm, well-socialized temperaments</li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className="border rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-300 bg-purple-100 text-purple-500 mb-4">
              <FaUserShield className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Fair & Honest Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Exotic pets require expert care, and we price with integrity. Our pricing reflects the true cost of ethical breeding, veterinary oversight, and responsible husbandry—never inflated, never hidden. With E.A. Ranch, you know exactly what you’re paying for: quality, transparency, and long-term peace of mind.
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Fair pricing without markups</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Real value, no surprises</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Pricing based on care</li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className="border rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-300 bg-purple-100 text-purple-500 mb-4">
              <FaLifeRing className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Radical Transparency</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              We build trust through facts on everything that matters: where your animal comes from, how it was raised, what it eats, and what it will need to thrive long-term. No surprises, no vague promises—just honest guidance to help you make the right decision in choosing your pet companion plus post-purchase support.
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Straightforward information, always</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> No fine print surprises</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300"><FiZap className="text-green-500" /> Customer support you can trust</li>
            </ul>
          </article>
        </div>

        {/* Split Section */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mt-5">
          {/* Image */}
          <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg">
            <Image
              src={ exoticPetsRanch }
              alt="Team working"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-purple-200/20 via-teal-200/20 to-transparent mix-blend-overlay"></div>
          </div>

          {/* Copy + Features */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Built like a client deliverable</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Clear sections, strong hierarchy, and a form that prevents bad submissions without feeling “strict”.
              The goal is simple: higher completion rate and better quality messages.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FiZap, title: "Realtime checks", text: "Instant feedback while typing — no surprises on submit." },
                { icon: FiFileText, title: "Draft autosave", text: "Refresh-safe. Draft restores automatically." },
                { icon: FiLink, title: "Header-aware anchors", text: "Menu scrolls to the right spot with fixed header offset." },
                { icon: FaHandPointer, title: "Micro-interactions", text: "Hover feedback and subtle motion for better feel." },
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex gap-3 p-4 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{feat.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feat.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.99]"
              >
                <FaEnvelopeOpenText className="text-purple-500" />
                <span>Open the Form</span>
                <span className="absolute -top-10 -left-10 w-[140px] h-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all duration-350 ease-in-out hover:opacity-75 hover:translate-x-5 hover:-translate-y-5"></span>
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FaShieldAlt />
                <span>Data stays in this demo (no network calls).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
