import React from "react";
import { Metadata } from "next";
import AdoptPets from "@/components/AdoptPets";
import { exoticPetsRanch } from "@/images";

export const metadata: Metadata = {
  title: "Adopt Exotic Pets | Exotic Animales",
  description:
    "Browse and adopt rare exotic pets from trusted breeders. Ethically raised mammals, reptiles, and more.",
  openGraph: {
    title: "Adopt Exotic Pets | Exotic Animales",
    description:
      "Discover ethically raised exotic pets including axolotls, foxes, lemurs, reptiles, and more.",
    images: [
      {
        url: exoticPetsRanch.src,
        width: exoticPetsRanch.width,
        height: exoticPetsRanch.height,
        alt: "Adopt Exotic Pets",
      },
    ],
  },
};

const AdoptExoticPetsPage = () => {
  return (
    <div className="flex flex-col">
      <AdoptPets />
    </div>
  );
};

export default AdoptExoticPetsPage;
