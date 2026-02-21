"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  columns?: 1 | 2;
  allowMultipleOpen?: boolean;
  className?: string;
};

const Accordion = ({
  items,
  columns = 1,
  allowMultipleOpen = false,
  className = "",
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (!allowMultipleOpen) {
        return { [id]: !prev[id] };
      }

      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  const midpoint =
    columns === 2 ? Math.ceil(items.length / 2) : items.length;

  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  const renderItems = (items: AccordionItem[]) =>
    items.map((item) => {
      const isOpen = openItems[item.id];

      return (
        <div
          key={item.id}
          className={`group rounded-2xl border transition-all duration-300 ${
            isOpen
              ? "border-indigo-500/30 bg-white shadow-lg"
              : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md hover:border-indigo-400/30"
          }`}
        >
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
          >
            <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-gray-900">
              {item.title}
            </h3>

            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "border-gray-300 bg-linear-to-br from-indigo-700/60 to-purple-600/60 text-white"
                  : "border-gray-300 text-gray-600 group-hover:bg-gray-100 group-hover:border-indigo-200"
              }`}
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          <div
            className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-250 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
            }`}
          >
            <div
              className="text-sm leading-relaxed text-gray-600 
                [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-2 
                [&_li]:mb-1 [&_strong]:text-gray-900"
            >
              {typeof item.content === "string" ? (
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      );
    });

  return (
    <div
      className={`grid ${
        columns === 2 ? "md:grid-cols-2 gap-10" : "grid-cols-1 gap-6"
      } ${className}`}
    >
      <div className="flex flex-col gap-6">
        {renderItems(leftColumn)}
      </div>

      {columns === 2 && (
        <div className="flex flex-col gap-6">
          {renderItems(rightColumn)}
        </div>
      )}
    </div>
  );
};

export default Accordion;
