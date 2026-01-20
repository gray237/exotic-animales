"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";

/* ================= TYPES ================= */
type CategoryKey = "all" | "general" | "care" | "legal" | "shipping";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  key: Exclude<CategoryKey, "all">;
  title: string;
  items: FaqItem[];
}

/* ================= DATA ================= */
const FAQ_CATEGORIES: FaqCategory[] = [
  {
    key: "general",
    title: "General",
    items: [
      {
        question: "What exotic animals do you sell?",
        answer:
          "We specialize in ethically sourced, captive-bred exotic animals including hedgehogs, sugar gliders, axolotls, fennec foxes, lemurs, kinkajous, and more. Each animal is raised with proper enrichment, nutrition, and human interaction to ensure long-term health and adaptability.",
      },
      {
        question: "Are your animals safe to own?",
        answer:
          "Yes — when owned responsibly. We evaluate every buyer’s experience level, environment, and local regulations before approving a sale to ensure both owner and animal thrive.",
      },
      {
        question: "Do exotic pets bond with owners?",
        answer:
          "Many species form strong bonds when handled correctly and given proper enrichment. Bonding depends on patience, routine, and species-specific behavior.",
      },
      {
        question: "Do you offer support after purchase?",
        answer:
          "Absolutely. We provide lifetime guidance on feeding, enclosure upgrades, health care, and behavioral questions.",
      },
      {
        question: "Are the animals captive bred?",
        answer:
          "Yes. Captive breeding ensures better health, calmer temperaments, and ethical sourcing.",
      },
      {
        question: "Are exotic pets good for beginners?",
        answer:
          "Some are beginner-friendly, others require advanced care. We help you choose responsibly.",
      },
    ],
  },
  {
    key: "care",
    title: "Care & Feeding",
    items: [
      {
        question: "What do exotic pets eat?",
        answer:
          "Diets vary by species and may include specialized feeds, insects, fruits, proteins, and supplements. Every animal comes with a tailored feeding plan.",
      },
      {
        question: "Do you provide care guides?",
        answer:
          "Yes. Each purchase includes a detailed care guide covering enclosure setup, temperature, humidity, diet, and enrichment.",
      },
      {
        question: "Do exotic pets need special vets?",
        answer:
          "Yes. Exotic species require veterinarians trained in non-traditional animals. We help you locate one near you.",
      },
      {
        question: "How much daily care is required?",
        answer:
          "Care ranges from minimal maintenance to daily interaction depending on the species.",
      },
      {
        question: "Is handling required?",
        answer:
          "Some species enjoy handling, while others are observation-only. Expectations are clearly explained beforehand.",
      },
      {
        question: "What enclosure size is needed?",
        answer:
          "Each species has minimum and recommended enclosure requirements for optimal wellbeing.",
      },
    ],
  },
  {
    key: "legal",
    title: "Legal & Permits",
    items: [
      {
        question: "Are exotic pets legal where I live?",
        answer:
          "Legality varies by country, state, and city. We verify regulations before approving any purchase.",
      },
      {
        question: "Do I need a permit?",
        answer:
          "Some species require permits or licenses. We guide you through the process if applicable.",
      },
      {
        question: "Is your operation licensed?",
        answer:
          "Yes. We operate in compliance with applicable wildlife and animal welfare regulations.",
      },
      {
        question: "Do laws change over time?",
        answer:
          "Yes, and responsible ownership includes staying informed.",
      },
      {
        question: "Do you provide documentation?",
        answer:
          "All required health certificates and ownership records are included.",
      },
      {
        question: "Can you help with permits?",
        answer:
          "We provide guidance and documentation support, though final approval rests with authorities.",
      },
    ],
  },
  {
    key: "shipping",
    title: "Shipping & Delivery",
    items: [
      {
        question: "How are animals shipped?",
        answer:
          "Animals are shipped using live-animal approved carriers with climate control to minimize stress.",
      },
      {
        question: "Is shipping safe?",
        answer:
          "Yes. Shipments are scheduled during safe weather windows and monitored closely.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Most deliveries arrive within 24–48 hours depending on location.",
      },
      {
        question: "Do you offer a live-arrival guarantee?",
        answer:
          "Yes. Every shipment includes a live-arrival guarantee.",
      },
      {
        question: "Can I pick up my animal?",
        answer:
          "Local pickup may be available depending on species and location.",
      },
      {
        question: "What if my pet is stressed on arrival?",
        answer:
          "We provide immediate acclimation steps and post-delivery support.",
      },
    ],
  },
];

/* ================= COMPONENT ================= */
const FAQSection = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleCategories =
    activeTab === "all"
      ? FAQ_CATEGORIES
      : FAQ_CATEGORIES.filter((c) => c.key === activeTab);

  return (
    <section className="w-full">
      {/* HEADER */}
      <div className="w-full bg-linear-to-br from-purple-500/22 to-teal-400/14 border-b border-purple-400/30">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Everything you need to know about exotic pet ownership
          </p>

          {/* TABS */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(["all", "general", "care", "legal", "shipping"] as CategoryKey[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-semibold transition",
                    activeTab === tab
                      ? "bg-white text-purple-700 shadow"
                      : "text-gray-700 hover:bg-white/50"
                  )}
                >
                  {tab === "all"
                    ? "All"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* FAQ GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {visibleCategories.map((category) => (
          <div key={category.key} className="mb-14">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(activeTab === "all"
                ? category.items.slice(0, 4)
                : category.items
              ).map((item, index) => {
                const id = `${category.key}-${index}`;
                const isOpen = openItems[id];

                return (
                  <div key={id} className="bg-white rounded-xl shadow-sm border">
                    {/* HEADER ONLY */}
                    <button
                      onClick={() => toggleItem(id)}
                      className="w-full flex justify-between items-center px-5 py-4 hover:bg-purple-50 transition font-medium text-gray-800"
                    >
                      {item.question}
                      <FiPlus
                        className={cn(
                          "text-purple-600 transition-transform duration-300",
                          isOpen && "rotate-45"
                        )}
                      />
                    </button>

                    {/* COLLAPSIBLE CONTENT */}
                    <div
                      className={cn(
                        "overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
