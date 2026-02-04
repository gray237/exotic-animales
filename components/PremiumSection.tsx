"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Title from "./Title";
import { ShoppingBag, Sparkles, Gem } from "lucide-react";

import {
  exoticBanner1,
  exoticBanner2,
  exoticBanner3,
  axolotlExclusive,
  guineaPigPremium,
  eaBackground
} from "@/images";

/* ================= SLIDER ================= */

const banners = [exoticBanner1, exoticBanner2, exoticBanner3];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={banners[index]}
        alt="Exotic Pets Banner"
        fill
        className="object-cover transition-opacity duration-700"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

/* ================= MAIN SECTION ================= */

const PremiumSection = () => {
  return (
    <section className="relative overflow-hidden mb-5">
    {/* BACKGROUND IMAGE */}
    <Image
      src={eaBackground}
      alt="E.A Ranch Background"
      fill
      priority
      className="object-cover object-center rounded-md"
    />
    <Container className="relative z-10 my-20 mx-0 xl:mx-10">
      <div className="mx-auto max-w-8xl">
        <div className="grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-[2fr_1fr_1fr]
          gap-12
          items-start
        ">
          {/* LEFT – BANNER + TEXT */}
          <div className="space-y-8 md:col-span-2 xl:col-span-1">
            <BannerSlider />

            <div className="space-y-5">
              <Title>Interested in Buying an Exotic Pet?</Title>

              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                🐾 We’ve got you covered! At <strong>E.A Ranch</strong>, we make it easy and hassle-free to bring home your dream companion — whether it’s a baby, juvenile or adult pet. From choosing the right species for your lifestyle to guiding you through care, feeding, and safety tips, we’re here every step of the way. From <strong>Sugar Gliders</strong>, <strong>Axolotls</strong>, <strong>Hedgehogs</strong> to <strong>Fennec Foxes</strong>, every animal we offer is ethically sourced, vet-checked, and well-socialized for loving with their unique looks and their wild-but-wonderful characteristics. Explore our online exotic pet store and discover everything you need to know about the best exotic pets.
              </p>
            </div>
          </div>

          {/* CENTER – EXCLUSIVE AXOLOTL */}
          <div className="flex justify-center lg:justify-end">
            <ExclusiveAxolotlCard />
          </div>

          {/* RIGHT – PREMIUM GUINEA PIG */}
          <div className="flex justify-center lg:justify-start">
            <PremiumCard />
          </div>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default PremiumSection;

/* ================= EXCLUSIVE AXOLOTL CARD ================= */

const ExclusiveAxolotlCard = () => {
  return (
    <div className="premium-tilt relative w-[380px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 hover:-translate-y-2">

      <span className="absolute top-4 right-4 z-10 bg-linear-to-br from-amber-600 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-xl uppercase tracking-wide shadow-md flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        Exclusive Sale
      </span>

      <div className="h-60 relative overflow-hidden">
        <Image
          src={axolotlExclusive}
          alt="Exclusive Axolotl Sale"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          Limited Drop
        </span>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-2">
          Exclusive Baby Axolotl Sale
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
          Rescue a stunning leucistic, copper, melanoid or mosaic axolotl morph at a special 
          sale price. Ethically bred, vibrant in color, and perfect for 
          collectors or first-time aquatic pet owners.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {["Vet Checked", "Rare Morph", "Beginner Friendly"].map((feature) => (
            <span
              key={feature}
              className="text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-zinc-900 dark:text-white">
            $149.99
          </span>

          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-linear-to-br from-amber-600 to-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            Reserve
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-[-10deg] group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ================= PREMIUM GUINEA PIG CARD ================= */

const PremiumCard = () => {
  return (
    <div className="premium-tilt relative w-[380px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 hover:-translate-y-2">

      <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-linear-to-br from-zinc-900 to-zinc-700 text-white text-xs font-semibold px-3 py-1 rounded-xl uppercase tracking-wide shadow-md">
        <Gem className="w-3.5 h-3.5 text-amber-400" />
        Premium
      </span>

      <div className="h-60 relative overflow-hidden">
        <Image
          src={guineaPigPremium}
          alt="Premium Guinea Pig"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          Fan Favorite
        </span>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-2">
          Hairy Guinea Pig (Premium Breed)
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
          If you’re looking to buy a friendly exotic pet that stands out while remaining low-maintenance and family-friendly, we have a litter of premium hairy guinea pigs, the perfect furry babies.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {["Vet Checked", "Friendly", "Well Socialized"].map((feature) => (
            <span
              key={feature}
              className="text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-zinc-900 dark:text-white">
            $199.99
          </span>

          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-linear-to-br from-zinc-900 to-zinc-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            Shop Sale
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-[-10deg] group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
};
