"use client";

import { useState, useMemo } from "react";
import { adoptionData } from "@/app/(client)/adopt/adoptionData";
import { ChevronDown } from "lucide-react";

type Props = {
  category: {
    title: string;
    slug?: string;
  };
};

const AdoptionAccordion = ({ category }: Props) => {
  const accordionItems = useMemo(() => {
    const resolvedCategory = adoptionData.find(
      (cat) =>
        cat.title === category.title || cat.slug === category.slug
    );
    return resolvedCategory?.accordion ?? [];
  }, [category]);

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (accordionItems.length === 0) return null;

  /* =======================
     SPLIT INTO TWO COLUMNS
     ======================= */
  const leftColumn = accordionItems.slice(0, 5);
  const rightColumn = accordionItems.slice(5, 10);

  const renderColumn = (items: typeof accordionItems) =>
    items.map((item) => {
      const isOpen = openItems[item.id];

      return (
        <div key={item.id} className={`group rounded-2xl border transition-all duration-300 ${isOpen ? "border-gray-300 bg-white shadow-lg" : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md"}`}>
          <button type="button" onClick={() => toggleItem(item.id)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
            <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-900">{item.title}</h3>
            <span className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-gray-300 bg-gray-900 text-white" : "border-gray-300 text-gray-600 group-hover:bg-gray-100"}`}>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </span>
          </button>

          <div className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}>
            {/* UPDATED DIV BELOW */}
            <div 
              className="text-sm leading-relaxed text-gray-600 
                [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-2 [&_li]:mb-1 [&_strong]:text-gray-900"
              dangerouslySetInnerHTML={{ __html: item.content }} 
            />
          </div>
        </div>
      );
    });

  return (
    <section className="relative mt-20 pb-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* SECTION TITLE */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-gray-900">
            Interested in Adopting{" "}
            <span className="whitespace-nowrap font-semibold text-primary">
              {category.title}
            </span>{" "}
            from E.A Ranch?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Please read our pet care guide carefully before proceeding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {renderColumn(leftColumn)}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {renderColumn(rightColumn)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionAccordion;
