import React from "react";
import FaqHero from "@/components/FaqHero";
import FAQSection from "@/components/FAQSection";
import { drRachel1 } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Exotic Animales, exotic pets, pet care, orders, delivery, and more. Get all the info you need for your exotic pet journey.",
  keywords:
    "exotic pets FAQ, axolotls questions, sugar gliders FAQ, fennec fox info, Exotic Animales help, exotic pet care questions",
  openGraph: {
    title: "Frequently Asked Questions | Exotic Animales",
    description:
      "Find answers to frequently asked questions about Exotic Animales, exotic pets, pet care, orders, delivery, and more. Get all the info you need for your exotic pet journey.",
    url: "https://www.exoticanimales.com/faq",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: drRachel1.src,
        width: drRachel1.width,
        height: drRachel1.height,
        alt: "Exotic Animales FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Exotic Animales",
    description:
      "Find answers to frequently asked questions about Exotic Animales, exotic pets, pet care, orders, delivery, and more. Get all the info you need for your exotic pet journey.",
    images: [drRachel1.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const FaqPage = () => {
  return (
    <div className="flex flex-col">
      <FAQSection />
      <FaqHero />
    </div>
  );
};

export default FaqPage;
