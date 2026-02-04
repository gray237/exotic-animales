"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { adoptionData } from "@/app/(client)/adopt/adoptionData";
import { eaBackground } from "@/images";

const QuickCategories = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [shuffledCategories, setShuffledCategories] = useState(adoptionData);

  // Shuffle categories once on mount
  useEffect(() => {
    setShuffledCategories([...adoptionData].sort(() => Math.random() - 0.5));
  }, []);

  // Update visible count based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1600) setVisibleCount(8);
      else if (width >= 1400) setVisibleCount(7);
      else if (width >= 1200) setVisibleCount(6);
      else if (width >= 992) setVisibleCount(5);
      else if (width >= 768) setVisibleCount(4);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 py-8 shadow-sm">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between flex-nowrap">
          {shuffledCategories.slice(0, visibleCount).map((cat) => (
            <Link
              key={cat.slug}
              href={`/adopt/${cat.slug}`}
              className="flex flex-col items-center p-2"
            >
              <div className="w-20 h-20 relative mb-2 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={cat.categoryImage ?? eaBackground}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-center truncate">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
