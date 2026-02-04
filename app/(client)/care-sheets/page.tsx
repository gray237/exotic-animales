import React from "react";
import PetCareSheets from "@/components/PetCareSheets";
import ProofSection from "@/components/ProofSection";
import { drRachel1 } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Pet Care Sheets",
  description:
    "Access detailed pet care sheets for exotic pets including axolotls, sugar gliders, fennec foxes, lemurs, and more. Expert tips for feeding, habitat, and health.",
  keywords:
    "pet care sheets, exotic pets care, axolotls, sugar gliders, fennec foxes, lemurs, exotic pet guide",
  openGraph: {
    title: "Pet Care Sheets | Exotic Animales",
    description:
      "Access detailed pet care sheets for exotic pets including axolotls, sugar gliders, fennec foxes, lemurs, and more. Expert tips for feeding, habitat, and health.",
    url: "https://www.exoticanimales.com/pet-care-sheets",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: drRachel1.src,
        width: drRachel1.width,
        height: drRachel1.height,
        alt: "Exotic Animales Pet Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Care Sheets | Exotic Animales",
    description:
      "Access detailed pet care sheets for exotic pets including axolotls, sugar gliders, fennec foxes, lemurs, and more. Expert tips for feeding, habitat, and health.",
    images: [drRachel1.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const CareSheets = () => {
  return (
    <div className="flex flex-col">
      <PetCareSheets />
      <ProofSection />
    </div>
  );
};

export default CareSheets;
