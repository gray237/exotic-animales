"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassHero from "@/components/GlassHero";
import { adoptionData, AdoptionCategory } from "@/app/(client)/adopt/adoptionData";
import { HiShieldCheck, HiHeart,HiAcademicCap, } from "react-icons/hi2";
import { useEffect, useState } from "react";
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
  eaBackground,
  drRachel1
} from "@/images";

const categories = [
  { name: "Axolotl Morphs", slug: "axolotl-morphs", image: adoptAxolotls },
  { name: "Leopard & Crested Geckos", slug: "geckos", image: adoptGeckos },
  { name: "Snakes & Pythons", slug: "snakes-pythons", image: adoptSnakes },
  { name: "Sugar Gliders", slug: "sugar-gliders", image: adoptSugarGliders },
  { name: "Hedgehogs & Hamsters", slug: "hedgehogs-hamsters", image: adoptHedgehogs },
  { name: "Savannah Cat Kittens", slug: "savannah-cats", image: adoptSavannahCat },
  { name: "Kangaroos & Wallabies", slug: "kangaroos-wallabies", image: adoptWallabies },
  { name: "Fennec & Bat-Eared Fox", slug: "fennec-foxes", image: adoptFennecFoxes },
  { name: "Ring Tailed Lemurs", slug: "lemurs", image: adoptLemurs },
  { name: "Marmoset Finger Monkeys", slug: "finger-monkeys", image: adoptMarmoset },
  { name: "Ring-Tailed Coatis", slug: "coatimundis", image: adoptCoatimundis },
  { name: "Prehensile Porcupines", slug: "prehensile-porcupines", image: adoptPorcupines },
  { name: "Skunks & Ferrets", slug: "skunks-weasels", image: adoptSkunks },
  { name: "Exotic Hoofstock", slug: "hoofstock", image: adoptHoofstock },
  { name: "Prairie Dogs & Capybaras", slug: "prairie-dogs-capybaras", image: adoptPrarieDogs },
  { name: "Pet Turtles", slug: "pet-turtles", image: adoptTurtles },
];

const Countdown = () => {
  const [mounted, setMounted] = useState(false);
  const targetDate = new Date("2026-04-15T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true); // ✅ flag that we are now client-side

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null; // ✅ do not render on server

  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl p-4 w-20 h-20"
        >
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
        </div>
      ))}
    </div>
  );
};


const AdoptPets = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <GlassHero
        badgeText="Healthy pets • Ethical breeding • Nationwide delivery"
        title="Adopt Exotic Pet Companions"
        description="Discover extraordinary exotic animal companions from around the world. Buy exotic pets including axolotl morphs, sugar gliders, fennec foxes, ring-tailed lemurs, savannah cats, and hedgehogs. Each exotic animal is ethically sourced, USDA certified, health-guaranteed, and ready to become part of your family."
        image={exoticPetsRanch}
        primaryCta={{
          label: "Start Adoption",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Pet Store",
          href: "/shop",
        }}
        categories={[
          { title: "Reptiles", href: "/pets/reptiles" },
          { title: "Mammals", href: "/pets/mammals" },
          { title: "Amphibians", href: "/pets/amphibians" },
          { title: "Invertebrates", href: "/pets/inverts" },
        ]}
      />

      {/* ================= FEATURED CATEGORIES ================= */}
      <section
        id="categories"
        className="py-16 bg-linear-to-r from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-900"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">
            Featured Adoption Categories
          </h2>

          <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-4xl">
            Explore our diverse collection of exotic pets for sale. From rare axolotl morphs
            and sugar gliders to fennec foxes and lemurs, each category features carefully
            selected animals with verified care standards.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              // Find matching slug from adoptionData
              const normalize = (str: string) =>
                str.toLowerCase().replace(/\s+|&/g, "-");

              const matched: AdoptionCategory | undefined = adoptionData.find(
                (a) => a.title === cat.name || a.slug === normalize(cat.name)
              );

              // If no match, render card without link
              const cardContent = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group relative overflow-hidden rounded-2xl shadow-md h-72 sm:h-80"
                >
                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Vignette overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-linear-to-t
                      from-black/40 via-black/10 to-transparent
                      group-hover:from-black/60
                      transition-all duration-300
                    "
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                    <span className="inline-flex items-center text-white text-sm font-medium">
                      Shop Collection
                      <span className="w-4 h-4 flex items-center justify-center ml-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M5 12h14" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </motion.div>
              );

              // Wrap in Link if matched slug exists
              return matched ? (
                <Link key={i} href={`/adopt/${matched.slug}`}>
                  {cardContent}
                </Link>
              ) : (
                <div key={i}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INSPIRATION ================= */}
      <section className="relative py-15 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={eaBackground}
            alt="Responsible exotic pet ownership background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 text-center space-y-2 text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Responsible Exotic Pet Ownership
          </h2>

          <p className="max-w-3xl mx-auto text-white/80 leading-relaxed text-md">
            Our exotic pet breeders bring over a decade of hands-on experience sourcing
            rare and ethically raised animals from trusted programs worldwide. Our exotic pet 
            adoption process is backed by verified health records, detailed care guidance, 
            and long-term support designed to help both you and your animal thrive.
          </p>

          {/* SEO-RICH BLURBS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 text-left">

            {/* Blurb 1 */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/15 border border-white/20 shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold mb-2">
                Guided Matching
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                We carefully match each exotic animal to owners based on experience level,
                enclosure setup, climate requirements, and long-term commitment—ensuring
                healthier pets and more successful ownership outcomes.
              </p>
            </div>

            {/* Blurb 2 */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/15 border border-white/20 shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold mb-2">
                Lifetime Support
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Adoption doesn’t end at delivery. Our team remains available for ongoing
                husbandry questions, feeding schedules, enclosure upgrades, and behavioral
                guidance throughout your pet’s entire lifespan.
              </p>
            </div>

            {/* Blurb 3 */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/15 border border-white/20 shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold mb-2">
                Ethical Breeding
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                All animals originate from responsible, transparent breeding programs that
                prioritize genetic diversity, humane care standards, and legal compliance—
                never wild-caught sourcing.
              </p>
            </div>

            {/* Blurb 4 */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/15 border border-white/20 shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold mb-2">
                Species-Specific Care
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Each species comes with tailored care documentation covering temperature
                gradients, humidity ranges, diet plans, enrichment needs, and long-term
                health considerations specific to that animal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SPECIAL OFFERS ================= */}
      <section className="py-10 bg-linear-to-r from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="p-8 md:p-12 md:w-1/2">
              <span className="inline-block bg-orange-100 text-orange-500 dark:bg-purple-900/30 dark:text-orange-100 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Limited Time Offer
              </span>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Spring Adoption Sale
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Select exotic species available with limited-time adoption incentives.
                Availability is seasonal and may end without notice.
              </p>

              {/* COUNTDOWN */}
              <Countdown />

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/adopt"
                  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Shop the Sale
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-1/2 relative min-h-80 md:min-h-[460px]">
              <Image
                src={drRachel1}
                alt="Special adoption sale"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-[1300px] mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-5">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Exotic Animales Ranch?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              All exotic animals are ethically sourced and come with health certificates. Please verify your 
              local and state regulations before purchasing exotic pets. Some species may require special permits.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">

            {/* Ethical Sourcing */}
            <div className="p-4 grid gap-3 w-full max-w-md">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 transition-transform hover:-translate-y-1">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg border bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <HiShieldCheck className="text-lg md:text-xl" />
                </div>
                <div>
                  <p className="text-md font-bold text-gray-900 dark:text-white">
                    Licensed & Compliant
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ethically bred or sourced exotic pets from licensed facilities with USDA certification.
                  </p>
                </div>
              </div>
            </div>

            {/* Health Guaranteed */}
            <div className="p-4 grid gap-3 w-full max-w-md">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 transition-transform hover:-translate-y-1">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg border bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <HiHeart className="text-lg md:text-xl" />
                </div>
                <div>
                  <p className="text-md font-bold text-gray-900 dark:text-white">
                    Health Guarantee
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Veterinary certified animals with premium lineage and comprehensive genetic testing.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Support */}
            <div className="p-4 grid gap-3 w-full max-w-md">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50 dark:bg-gray-800 transition-transform hover:-translate-y-1">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg border bg-purple-100 dark:bg-purple-900/20 text-purple-500">
                  <HiAcademicCap className="text-lg md:text-xl" />
                </div>
                <div>
                  <p className="text-md font-bold text-gray-900 dark:text-white">
                    Expert Support
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Detailed exotic pet care guides, dietary recommendations, and lifetime support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default AdoptPets;
