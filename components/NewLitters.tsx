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

const NewLitters = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Hedgehogs active
  const active = LITTERS[activeIndex];

  const getScaleClasses = (index: number) => {
    const diff = Math.abs(index - activeIndex);
    if (diff === 0) return "scale-100";
    if (diff === 1) return "scale-90";
    if (diff === 2) return "scale-80";
    return "scale-70";
  };

  return (
    <section className="max-w-8xl mx-auto my-16 rounded-3xl overflow-hidden shadow-xl bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* SLIDER COLUMN */}
        <div
          className="relative lg:w-[65%]"
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
            navigation={{
              nextEl: ".litters-next",
              prevEl: ".litters-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 80 },
            }}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="h-[400px] sm:h-[480px] lg:h-[560px] flex items-center"
          >
            {LITTERS.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`flex items-center justify-center transition-transform duration-300 ${getScaleClasses(
                  i
                )}`}
              >
                <div className="relative w-full max-w-[300px] h-[440px] lg:h-[480px] shrink-0 mx-auto">
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

          {/* NAV BUTTON BAR */}
          <div className="absolute bottom-0 left-0 w-full bg-black/20 px-10 py-3 flex justify-between items-center z-20">
            <button className="litters-prev transition-transform hover:-translate-x-2 text-black">
              <FaChevronLeft size={28} />
            </button>
            <button className="litters-next transition-transform hover:translate-x-2 text-black">
              <FaChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* DETAILS COLUMN */}
        <aside className="lg:w-[35%] px-6 py-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{active.name}</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">{active.intro}</p>
            {active.details.map((line, i) => (
              <p key={i} className="mt-2 text-gray-800">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px] border border-purple-400/36 bg-linear-to-br from-purple-500/22 to-teal-400/14 text-gray-800 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.99]"
            >
              <FaPaperPlane className="text-purple-700 text-[14px]" />
              <span>Start a Request</span>
              <span className="absolute -top-10 -left-10 w-[140px] h-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)] opacity-55 pointer-events-none transition-all duration-350 ease-in-out hover:opacity-75 hover:translate-x-5 hover:-translate-y-5" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default NewLitters;