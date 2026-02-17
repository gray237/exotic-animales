"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { 
  shopAxolotlMorphs, 
  shopSugarGliders, 
  shopSavannahCat, 
  shopCrestedGecko, 
  shopSmallMammals, 
  shopBennetWallaby,  
  shopWeaselFerret, 
  shopBallPythonSnake, 
  shopFennecFox,
  shopLeopardGecko
} from "@/images";

const originalSlides = [
  {
    title: "Axolotl Rare Morphs",
    description: "Captive-bred Copper and Lucistic morphs. High-quality genetics starting from $75.",
    color: "linear-gradient(220deg, #004eb2 0%, #efb100 100%)",
    image: shopAxolotlMorphs,
  },
  {
    title: "Sugar Glider Joeys",
    description: "Hand-tame Mosaic and White Face Joeys. Highly social companions, starting from $300.",
    color: "linear-gradient(220deg, #7fb5d1 0%, #5d4e45 100%)",
    image: shopSugarGliders,
  },
  {
    title: "F1 Savannah Kittens",
    description: "Exotic appearance with domestic temperament. TICA registered, starting from $2,500.",
    color: "linear-gradient(220deg, #9e7344 0%, #1e2b23 100%)",
    image: shopSavannahCat,
  },
  {
    title: "Designer Crested Geckos",
    description: "Stunning Lily Whites and Flame patterns. Hard-to-find genetics, starting from $150.",
    color: "linear-gradient(220deg, #5a6e27 0%, #9c733d 100%)",
    image: shopCrestedGecko,
  },
  {
    title: "Exotic Small Mammals",
    description: "From Hedgehogs to Chinchillas. All ethically raised and socialized, starting from $120.",
    color: "linear-gradient(220deg, #8d6e63 0%, #455a64 100%)",
    image: shopSmallMammals,
  },
  {
    title: "Bennet's Wallaby",
    description: "Rare opportunity for licensed keepers. USDA health certified, price on inquiry.",
    color: "linear-gradient(220deg, #827974 0%, #4a5d23 100%)",
    image: shopBennetWallaby,
  },
  {
    title: "Hand-Tame Ferrets",
    description: "Playful Sable and Cinnamon ferrets. Fully vaccinated and socialized, starting from $250.",
    color: "linear-gradient(220deg, #3e2723 0%, #4da4d1 100%)",
    image: shopWeaselFerret,
  },
  {
    title: "Ball Python Morphs",
    description: "Banana, Piebald, and Clown genetics available. Docile and healthy, starting from $100.",
    color: "linear-gradient(220deg, #dd6119 0%, #37474f 100%)",
    image: shopBallPythonSnake,
  },
  {
    title: "Fennec Fox Kits",
    description: "Exceptional Saharan kits. USDA regulated with full documentation, starting from $3,500.",
    color: "linear-gradient(220deg, #b58d5d 0%, #4a4a4a 100%)",
    image: shopFennecFox,
  },
  {
    title: "Leopard Gecko Albinos",
    description: "Tremper, Bell, and Rainwater Albinos. Striking patterns on grey cement, starting from $80.",
    color: "linear-gradient(220deg, #f7ad48 0%, #52576d 100%)",
    image: shopLeopardGecko,
  },
];

// 1. Prepare clones for forward and reverse motion
const forwardSlides = [originalSlides[originalSlides.length - 1], ...originalSlides, originalSlides[0]];
const reversedSlides = [...forwardSlides].reverse();

const ShopBanner = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesCount = originalSlides.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const moveSlide = useCallback((direction: "next" | "prev") => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
  }, [isTransitioning]);

  // Handle the infinite "teleport"
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (activeIndex === 0) {
        setActiveIndex(slidesCount);
      } else if (activeIndex === slidesCount + 1) {
        setActiveIndex(1);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [activeIndex, isTransitioning, slidesCount]);

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setInterval(() => moveSlide("next"), 6000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, moveSlide]);

  const displayIndex = activeIndex === 0 ? slidesCount : activeIndex > slidesCount ? 1 : activeIndex;

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden w-full h-[550px] md:h-[600px] lg:h-[clamp(500px,35vw,650px)] xl:h-[clamp(500px,30vw,650px)] rounded-2xl shadow-xl flex flex-col lg:flex-row bg-white"
    >
      {/* TEXT SECTION (REVERSED STACK) */}
      <div className="relative h-[45%] lg:h-full lg:w-[35%] overflow-hidden z-20">
        <div 
          className={`absolute top-0 left-0 w-full h-full flex flex-col ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
          style={{ 
            transform: `translateY(${activeIndex * 100}%)`,
            top: `-${(forwardSlides.length - 1) * 100}%` 
          }}
        >
          {reversedSlides.map((slide, index) => (
            <div 
              key={`text-${index}`} 
              className="h-full w-full shrink-0 flex flex-col items-center justify-center text-center p-6 lg:p-10 text-white"
              style={{ background: slide.color }}
            >
              <div className="uppercase text-[10px] tracking-[0.2em] opacity-70 mb-2 font-bold">New Litter</div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4 tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm lg:text-base font-normal opacity-90 max-w-[280px] leading-relaxed mb-6">
                {slide.description}
              </p>
              <Link 
                href="/reservation"
                className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all active:scale-95 shadow-lg"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </div>

        <button 
          onClick={() => moveSlide("prev")}
          className="absolute right-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-full 
                     bg-white/20 backdrop-blur-lg border border-white/30 text-white z-50 
                     hover:bg-white/40 transition-all duration-300
                     w-8 h-12 flex items-center justify-center
                     rounded-tl-md lg:rounded-l-md lg:rounded-r-none border-b"
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* IMAGE SECTION (FORWARD STACK) */}
      <div className="relative h-[55%] lg:h-full lg:w-[65%] overflow-hidden">
        <div 
          className={`absolute top-0 left-0 w-full h-full flex flex-col ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {forwardSlides.map((slide, index) => (
            <div key={`img-${index}`} className="relative h-full w-full shrink-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 1}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold border border-white/10">
                {displayIndex} / {slidesCount}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => moveSlide("next")}
          className="absolute right-0 top-0 lg:left-0 lg:right-auto lg:top-1/2 
                     bg-black/10 backdrop-blur-lg border border-white/20 text-white z-50 
                     hover:bg-black/20 transition-all duration-300
                     w-8 h-12 flex items-center justify-center
                     rounded-bl-md lg:rounded-r-md lg:rounded-l-none"
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ShopBanner;