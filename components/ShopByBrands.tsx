"use client";
import React, { useEffect, useState, useRef } from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/queries";
import { 
  GitCompareArrows, 
  Headset, 
  ShieldCheck, 
  Truck, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

const extraData = [
  { title: "Free Delivery", description: "On all orders over $150", icon: <Truck size={40} /> },
  { title: "Easy Returns", description: "30-day pet return policy", icon: <GitCompareArrows size={40} /> },
  { title: "Customer Support", description: "Friendly 24/7 customer support", icon: <Headset size={40} /> },
  { title: "Money Back guarantee", description: "Quality checked by our team", icon: <ShieldCheck size={40} /> },
];

const ShopByBrands = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getAllBrands();
      // Double the array for the seamless loop
      setBrands([...data, ...data]);
    };
    fetchBrands();
  }, []);

  // Pagination Logic + 5 Second Pause
  const handlePagination = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Force Pause
      setIsPaused(true);

      // Reset timer if clicked again
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

      // Resume after 5 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    }
  };

  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md border border-shop_light_green/10 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between mb-6 border-b border-shop_dark_green/10 pb-3">
        <Title>Shop By Breed</Title>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handlePagination("left")}
              className="p-2 rounded-full bg-white border border-shop_dark_green/20 hover:bg-shop_dark_green hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => handlePagination("right")}
              className="p-2 rounded-full bg-white border border-shop_dark_green/20 hover:bg-shop_dark_green hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <Link
            href={"/shop"}
            className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect underline underline-offset-4"
          >
            View all
          </Link>
        </div>
      </div>

      {/* INFINITE SCROLL WRAPPER */}
      <div 
        ref={scrollRef} 
        className="relative w-full overflow-x-auto scrollbar-hide py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex gap-4 w-max animate-infinite-scroll"
          style={{ 
            // Inline style forces the browser to obey the state immediately
            animationPlayState: (isPaused || isHovered) ? "paused" : "running" 
          }}
        >
          {brands.length > 0 ? (
            brands.map((brand, index) => (
              <Link
                key={`${brand?._id}-${index}`}
                href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
                className="flex-none w-32 h-20 md:w-40 md:h-28 bg-white rounded-md overflow-hidden border border-shop_dark_green/10 hover:border-shop_dark_green hover:shadow-md transition-all group"
              >
                {brand?.image && (
                  <Image
                    src={urlFor(brand?.image).url()}
                    alt={brand?.title || "brand"}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </Link>
            ))
          ) : (
            [...Array(10)].map((_, i) => (
              <div key={i} className="flex-none w-32 h-20 md:w-40 md:h-28 bg-gray-200 animate-pulse rounded-md" />
            ))
          )}
        </div>
      </div>

      {/* EXTRA DATA INFO BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-6 bg-white rounded-md border border-shop_light_green/20">
        {extraData?.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group hoverEffect">
            <span className="text-shop_dark_green group-hover:scale-110 group-hover:text-shop_light_green hoverEffect">{item?.icon}</span>
            <div className="text-sm">
              <p className="text-darkColor font-bold uppercase tracking-tight text-[13px]">{item?.title}</p>
              <p className="text-gray-500 text-xs">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShopByBrands;