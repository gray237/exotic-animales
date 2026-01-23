"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaPaperPlane } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import {
  leopardGeckoLitter,
  axolotlLitter,
  ballPythonLitter,
  hedgehogLitter,
  prarieDogLitter,
  savannahCatLitter,
  fennecFoxLitter,
  eaBackground,
} from "@/images";

/* SAME DATA — untouched */
const LITTERS = [
  {
    name: "Leopard Gecko Hatchlings",
    image: leopardGeckoLitter,
    intro:
      "We’re excited to announce a fresh clutch of leopard gecko hatchlings produced from strong, proven genetics. These babies were started correctly from day one and are already feeding consistently.",
    details: [
      "Hatched within the last few weeks from healthy, captive-bred parents",
      "Strong feeding response on live insects, no assist-feeding",
      "Calm dispositions observed during routine enclosure maintenance",
      "Color and pattern development already showing excellent contrast",
      "Ideal for keepers looking for a well-started juvenile, not a risk hatchling",
    ],
  },
  {
    name: "Baby Axolotls",
    image: axolotlLitter,
    intro:
      "This new axolotl spawn was carefully raised in controlled aquatic conditions with close attention to water quality and growth rate. These are not mass-produced animals.",
    details: [
      "Even growth across the litter with no stunting",
      "Actively feeding on appropriate protein-based aquatic diet",
      "Raised in clean, cycled systems to reduce early stress",
      "Distinct coloration already visible and developing",
      "Best suited for keepers prepared for proper cold-water setups",
    ],
  },
  {
    name: "Baby Ball Python Litter",
    image: ballPythonLitter,
    intro:
      "This ball python litter was produced from calm, proven parents and raised consistently from first shed onward.",
    details: [
      "Strong feeding response on appropriate prey",
      "Clean sheds with no retained eye caps",
      "Raised individually for accurate monitoring",
      "Steady growth and calm behavior",
      "Excellent option for first-time keepers",
    ],
  },
  {
    name: "Hedgehog Babies",
    image: hedgehogLitter,
    intro:
      "Our newest hedgehog litter has been raised with daily human exposure to ensure confident, stable babies ready for transition into pet homes.",
    details: [
      "Handled daily to reduce defensive behaviors early",
      "Weaned properly before placement — no rushed sales",
      "Parents selected for temperament and structure",
      "Babies showing steady weight gain and curiosity",
      "Perfect for owners seeking a responsibly raised exotic companion",
    ],
  },
  {
    name: "Prairie Dog Juveniles",
    image: prarieDogLitter,
    intro:
      "This small group of prairie dogs was raised with social development in mind. These animals are alert, intelligent, and highly interactive.",
    details: [
      "Raised in social groups to encourage natural behavior",
      "Early exposure to varied environments and sounds",
      "Strong appetite and consistent growth",
      "Extremely interactive and vocal — not beginner pets",
      "Placement limited to prepared, experienced homes",
    ],
  },
  {
    name: "Savannah Cat Kittens",
    image: savannahCatLitter,
    intro:
      "These Savannah kittens represent a carefully planned breeding focused on structure, confidence, and that unmistakable wild look.",
    details: [
      "Raised in-home with daily interaction",
      "Bold personalities already emerging",
      "Excellent coat contrast and athletic build",
      "Not kennel-raised or isolated",
      "Reservations only — limited availability",
    ],
  },
  {
    name: "Fennec Fox Babies",
    image: fennecFoxLitter,
    intro:
      "We’ve welcomed a rare fennec fox litter raised with hands-on care from an early age. These are intelligent, high-energy exotics.",
    details: [
      "Bottle-supported early for proper bonding",
      "Highly alert and responsive",
      "Specialized diet already established",
      "Placement requires approval and education",
      "Serious inquiries only — extremely limited",
    ],
  },
];

const CategoryLitters = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const getScale = (index: number) => {
    const diff = Math.abs(index - activeIndex);
    if (diff === 0) return "scale-90"; // active slide
    if (diff === 1) return "scale-60";  // immediate neighbors
    return "scale-40";                  // outer slides (if any)
  };

  return (
    <section className="w-full rounded-3xl overflow-hidden shadow-xl bg-white">
      <div className="flex flex-col">
        {/* SLIDER */}
        <div
          className="relative w-full h-[350px]"
          style={{
            backgroundImage: `url(${eaBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            centeredSlides
            loop
            slidesPerView={3} // always max 3 slides
            spaceBetween={40}
            navigation={{
              nextEl: ".category-litters-next",
              prevEl: ".category-litters-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="w-full h-full flex items-center"
          >
            {LITTERS.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`flex justify-center items-center transition-transform duration-300 ${getScale(i)}`}
              >
                <div className="relative w-[280px] h-[350px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV */}
          <div className="absolute bottom-0 left-0 w-full bg-black/20 px-6 py-2 flex justify-between z-10">
            <button className="category-litters-prev text-black">
              <FaChevronLeft size={24} />
            </button>
            <button className="category-litters-next text-black">
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-5 py-6">
          <h3 className="text-xl font-bold text-gray-900">{LITTERS[activeIndex].name}</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">{LITTERS[activeIndex].intro}</p>

          {LITTERS[activeIndex].details.map((line, i) => (
            <p key={i} className="mt-2 text-gray-800 text-sm">
              {line}
            </p>
          ))}

          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-purple-400/40 bg-linear-to-br from-purple-500/20 to-teal-400/15 text-gray-800 font-semibold shadow-md hover:shadow-lg transition"
            >
              <FaPaperPlane className="text-purple-700 text-sm" />
              <span>Start a Request</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryLitters;
