
"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { axolotlCare, ballPythonCare, beardedDragonCare, bloodPythonCare, crestedGeckoCare, deguCare, forestScorpionCare, greenSnakeCare, hamsterCare, jacksonChameleonCare, prairieDogsCare, skunksCare, sugarGliderCare, tarantulaSpiderCare, waterMonitorCare, woodTurtleCare } from "@/images";

const CARE_SHEETS = [
  {
    title: "Axolotls",
    image: axolotlCare,
    description:
      "Axolotls are fully aquatic salamanders known for their regenerative abilities and calm temperament. Proper water quality, cool temperatures, and minimal stress are critical for long-term health.",
    bullets: ["Cold freshwater setup", "Low-flow filtration", "Protein-rich diet"],
    pdf: "/caresheets/axolotl-care-sheet.pdf",
  },
  {
    title: "Hamsters",
    image: hamsterCare,
    description:
      "Hamsters are active, nocturnal mammals that require spacious enclosures, enrichment, and a nutritionally balanced diet to prevent stress and obesity.",
    bullets: ["Large enclosure", "Exercise wheels", "Balanced nutrition"],
    pdf: "/caresheets/hamster-care-sheet.pdf",
  },
  {
    title: "Skunks",
    image: skunksCare,
    description:
      "Domesticated skunks are intelligent and social animals that require structured diets, daily enrichment, and routine care from experienced exotic veterinarians.",
    bullets: ["Specialized diet", "Mental stimulation", "Exotic vet care"],
    pdf: "/caresheets/skunk-care-sheet.pdf",
  },
  {
    title: "Sugar Gliders",
    image: sugarGliderCare,
    description:
      "Sugar gliders are highly social marsupials that thrive in pairs or colonies and require vertical space and a carefully balanced nectar-based diet.",
    bullets: ["Social housing", "Vertical enclosures", "Balanced glider diet"],
    pdf: "/caresheets/sugar-glider-care-sheet.pdf",
  },
  {
    title: "Prairie Dogs",
    image: prairieDogsCare,
    description:
      "Prairie dogs are social rodents requiring daily interaction, large living spaces, and a high-fiber diet to maintain digestive health.",
    bullets: ["Social interaction", "Large habitat", "High-fiber nutrition"],
    pdf: "/caresheets/prairie-dog-care-sheet.pdf",
  },
  {
    title: "Crested Geckos",
    image: crestedGeckoCare,
    description:
      "Crested geckos are arboreal reptiles that do well in humid environments and are known for their manageable care requirements.",
    bullets: ["Moderate humidity", "Arboreal setup", "Prepared gecko diets"],
    pdf: "/caresheets/crested-gecko-care-sheet.pdf",
  },
  {
    title: "Bearded Dragons",
    image: beardedDragonCare,
    description:
      "Bearded dragons are hardy reptiles that require strong UVB lighting, proper basking temperatures, and a varied omnivorous diet.",
    bullets: ["UVB lighting", "Basking zones", "Insects & leafy greens"],
    pdf: "/caresheets/bearded-dragon-care-sheet.pdf",
  },
  {
    title: "Jackson’s Chameleons",
    image: jacksonChameleonCare,
    description:
      "Jackson’s chameleons require precise humidity control, live plants, and minimal handling to reduce stress.",
    bullets: ["Live plants", "High humidity", "Low handling"],
    pdf: "/caresheets/jackson-chameleon-care-sheet.pdf",
  },
  {
    title: "Wood Turtles",
    image: woodTurtleCare,
    description:
      "Wood turtles are semi-aquatic reptiles that need access to clean water, UVB exposure, and a well-balanced omnivorous diet.",
    bullets: ["Land & water access", "UVB lighting", "Balanced nutrition"],
    pdf: "/caresheets/wood-turtle-care-sheet.pdf",
  },
  {
    title: "Blood Pythons",
    image: bloodPythonCare,
    description:
      "Blood pythons are powerful, heavy-bodied snakes that require stable humidity, secure enclosures, and consistent feeding schedules.",
    bullets: ["Stable humidity", "Secure enclosure", "Controlled feeding"],
    pdf: "/caresheets/blood-python-care-sheet.pdf",
  },
  {
    title: "Ball Pythons",
    image: ballPythonCare,
    description:
      "Ball pythons are calm, beginner-friendly snakes when housed with proper temperatures, humidity, and hiding areas.",
    bullets: ["Thermal gradient", "Multiple hides", "Humidity control"],
    pdf: "/caresheets/ball-python-care-sheet.pdf",
  },
  {
    title: "Green Bush Snakes",
    image: greenSnakeCare,
    description:
      "Green bush snakes are arboreal and visually striking reptiles that require vertical enclosures and experienced care.",
    bullets: ["Vertical space", "Humidity management", "Advanced care"],
    pdf: "/caresheets/green-bush-snake-care-sheet.pdf",
  },
  {
    title: "Forest Scorpions",
    image: forestScorpionCare,
    description:
      "Forest scorpions are hardy invertebrates that require high humidity, secure housing, and minimal disturbance.",
    bullets: ["High humidity", "Secure enclosure", "Low handling"],
    pdf: "/caresheets/forest-scorpion-care-sheet.pdf",
  },
  {
    title: "Water Monitors",
    image: waterMonitorCare,
    description:
      "Water monitors are large, intelligent lizards that require extensive space, strong heat gradients, and advanced husbandry knowledge.",
    bullets: ["Large enclosure", "High heat zones", "Advanced care"],
    pdf: "/caresheets/water-monitor-care-sheet.pdf",
  },
];

const Caresheets = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-purple-400/30">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pet Care Sheets
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Professionally prepared care guides designed to help you responsibly
            house, feed, and maintain your exotic pets.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {CARE_SHEETS.map((sheet) => (
          <div
            key={sheet.title}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative w-full h-56">
              <Image
                src={sheet.image}
                alt={`${sheet.title} care sheet`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {sheet.title}
              </h3>

              <p className="text-gray-600">{sheet.description}</p>

              <ul className="flex flex-col gap-2">
                {sheet.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <FaCheckCircle className="text-green-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href={sheet.pdf}
                download
                className="mt-auto inline-flex items-center gap-2 self-start bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition"
              >
                <FaDownload />
                Download Full Care Sheet (PDF)
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caresheets;
