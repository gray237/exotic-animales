
"use client";

import React from "react";
import Image from "next/image";
import ExoticPetVet from "./ExoticPetVet";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { RiTruckFill, RiTimeFill, RiStethoscopeFill,
        RiScissorsFill, RiHeartPulseFill, RiShieldCheckFill,
        RiRestaurantFill, RiMicroscopeFill, RiHomeHeartFill, } from "react-icons/ri";
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
      {/* Preventative Exotic Pet Care */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Preventative Care for Your Exotic Companion
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            At <strong>Exotic Animales Ranch</strong>, we believe proactive veterinary care is the
            foundation of a long, healthy life for exotic pets. From reptiles and birds to
            mammals and invertebrates, our experienced team focuses on prevention, early
            detection, and species-specific wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <RiScissorsFill className="text-xl" />,
              title: "Neutering & Reproductive Care",
              text:
                "For select exotic species such as rabbits, guinea pigs, and ferrets, reproductive procedures can reduce health risks and unwanted behaviours while supporting long-term wellbeing.",
            },
            {
              icon: <RiHeartPulseFill className="text-xl" />,
              title: "Specialised Dentistry",
              text:
                "Dental disease is common in many exotic pets. We provide professional dental assessments and treatments to prevent pain, infection, and feeding issues.",
            },
            {
              icon: <RiShieldCheckFill className="text-xl" />,
              title: "Microchipping & Identification",
              text:
                "Microchipping offers a safe, permanent method of identification, greatly improving the chances of a safe return should your exotic pet ever become lost.",
            },
            {
              icon: <RiStethoscopeFill className="text-xl" />,
              title: "Ferret Vasectomies",
              text:
                "For male ferrets, vasectomy procedures provide an effective alternative to traditional neutering while minimizing hormonal disruption.",
            },
            {
              icon: <RiHomeHeartFill className="text-xl" />,
              title: "Hibernation Health Checks",
              text:
                "Pre- and post-hibernation examinations for tortoises help ensure your pet enters dormancy safely and recovers smoothly afterward.",
            },
            {
              icon: <RiRestaurantFill className="text-xl" />,
              title: "Dietary & Husbandry Guidance",
              text:
                "We provide expert advice on nutrition, enclosure design, lighting, humidity, and enrichment—tailored to replicate each species’ natural habitat.",
            },
            {
              icon: <RiMicroscopeFill className="text-xl" />,
              title: "Diagnostics & Disease Screening",
              text:
                "Blood testing, faecal analysis, and infectious disease screening allow us to detect hidden issues early, including conditions such as PBFD in birds.",
            },
            {
              icon: <RiStethoscopeFill className="text-xl" />,
              title: "Post-Purchase & Annual Health Exams",
              text:
                "Whether welcoming a new exotic pet or maintaining ongoing health, routine examinations help us assess weight, skin, eyes, beak, scales, and overall condition.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-purple-100 text-purple-500 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ExoticPetVet />
    </div>
  );
};

export default Caresheets;
