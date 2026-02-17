import React from "react";
import { Metadata } from "next";
import AdoptPets from "@/components/AdoptPets";
import { exoticPetsOwners } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata: Metadata = {
  title: "Rescue & Adopt Exotic Pets",
  description:
    "Browse and adopt rare exotic pets from trusted breeders. Ethically raised mammals, reptiles, rodents and more from Exotic Animales Ranch.",
  openGraph: {
    title: "Adopt Exotic Pets",
    description:
      "Discover ethically raised exotic pets including axolotls, sugar gliders, fennec foxes, lemurs, savannah cats, hedgehogs, and more from Exotic Animales Ranch.",
    images: [
      {
        url: exoticPetsOwners.src,
        width: exoticPetsOwners.width,
        height: exoticPetsOwners.height,
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
