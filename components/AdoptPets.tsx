"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassHero from "@/components/GlassHero";
import {
  FaPaw,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { FiStar, FiClock } from "react-icons/fi";

import {
  exoticPetsRanch,
  adoptAxolotls,
  adoptCoatimundis,
  adoptHoofstock,
  adoptFennecFoxes,
  adoptGeckos,
  adoptHedgehogs,
  adoptWallabies,
  adoptLemurs,
  adoptMarmoset,
  adoptPrarieDogs,
  adoptPorcupines,
  adoptSavannahCat,
  adoptSkunks,
  adoptSnakes,
  adoptSugarGliders,
  adoptTurtles,
} from "@/images";

const categories = [
  { name: "Axolotl Morphs", image: adoptAxolotls },
  { name: "Leopard & Crested Geckos", image: adoptGeckos },
  { name: "Snakes & Pythons", image: adoptSnakes },
  { name: "Sugar Gliders", image: adoptSugarGliders },
  { name: "Hedgehogs & Hamsters", image: adoptHedgehogs },
  { name: "Savannah Cat & Kittens", image: adoptSavannahCat },
  { name: "Kangaroos & Wallabies", image: adoptWallabies },
  { name: "Fennec & Bat-Eared Foxes", image: adoptFennecFoxes },
  { name: "Ring Tailed Lemurs", image: adoptLemurs },
  { name: "Marmoset Finger Monkeys", image: adoptMarmoset },
  { name: "White-Nose Coatimundis", image: adoptCoatimundis },
  { name: "Prehensile-Tailed Porcupines", image: adoptPorcupines },
  { name: "Skunks & Weasels", image: adoptSkunks },
  { name: "Exotic Hoofstock", image: adoptHoofstock },
  { name: "Prairie Dogs & Capybaras", image: adoptPrarieDogs },
  { name: "Pet Turtles", image: adoptTurtles },
];

const AdoptPets = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <GlassHero
        badge="Ethical • Licensed • Guided Adoption"
        title="Adopt Exotic Pets"
        subtitle="Explore responsibly raised exotic animals. Every adoption is guided for the animal’s wellbeing and your long-term success."
        image={exoticPetsRanch}
        primaryCta={{
          label: "Start Adoption Inquiry",
          href: "#contact",
        }}
        secondaryCta={{
          label: "Browse Categories",
          href: "#categories",
          icon: <FaPaw />,
        }}
      />

      {/* ================= FEATURED CATEGORIES ================= */}
      <section
        id="categories"
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Featured Adoption Categories
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 bg-white dark:bg-gray-800 shadow hover:-translate-y-1 transition"
              >
                <div className="relative h-44">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {cat.name}
                  </h3>
                  <FaPaw className="text-purple-500 opacity-60 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSPIRATION ================= */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-[1100px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Responsible Exotic Pet Ownership
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exotic animals require knowledge, preparation, and long-term
            commitment. Our role is to educate, guide, and ensure each animal
            is placed into an environment where it can thrive.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              "Guided Matching",
              "Lifetime Support",
              "Ethical Breeding",
              "Species-Specific Care",
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-gray-50 dark:bg-gray-800 shadow hover:-translate-y-1 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPECIAL OFFERS ================= */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="relative rounded-3xl border border-gray-200 bg-white dark:bg-gray-800 shadow-lg p-8 flex flex-col gap-6 overflow-hidden">

            {/* glow */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                background:
                  "radial-gradient(500px 320px at 20% 10%, rgba(107,77,255,0.18), transparent 60%), radial-gradient(520px 320px at 90% 80%, rgba(20,184,166,0.18), transparent 60%)",
              }}
            />

            <div className="relative z-10 flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Limited Adoption Packages
              </h3>
            </div>

            <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">
              Select species may include bundled starter enclosures, care guides,
              nutrition plans, and coordinated transport. Availability varies by
              species and season.
            </p>

            <div className="relative z-10 grid sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: FiClock, label: "Seasonal Availability" },
                { icon: FiStar, label: "Premium Lineage" },
                { icon: FaShieldAlt, label: "Health Guaranteed" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-700/20 shadow"
                >
                  <item.icon className="text-purple-500 text-lg" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-[14px]
              border border-purple-400/36
              bg-linear-to-br from-purple-500/22 to-teal-400/14
              font-semibold shadow-lg
              transition-transform duration-200 ease-in-out
              hover:-translate-y-0.5 hover:shadow-xl w-max"
            >
              <FaPaperPlane className="text-purple-600" />
              Ask About Availability
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdoptPets;
