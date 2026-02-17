import React from "react";
import { Metadata } from "next";
import BoardingServices from "@/components/BoardingServices";
import { exoticPetsOwners } from "@/images"; // Or a specific boarding image if you have one

// ------------------- STATIC METADATA -------------------
export const metadata: Metadata = {
  title: "Exotic Animal Boarding & Specialized Care",
  description:
    "Fully climate controlled boarding services for exotic pets. Safe cozy corners, species-specific environments for birds, reptiles, rabbits, guinea pigs, ferrets, and more at Exotic Animales Ranch.",
  openGraph: {
    title: "Exotic Pet Boarding | Exotic Animales Ranch",
    description:
      "Planning a trip or holiday? Trust our experts to provide specialized care, climate-controlled habitats, and expert husbandry for ensuring your pet friends are in good hands while you're away.",
    images: [
      {
        url: exoticPetsOwners.src,
        width: exoticPetsOwners.width,
        height: exoticPetsOwners.height,
        alt: "Professional Exotic Animal Boarding",
      },
    ],
  },
};

const BoardingPage = () => {
  return (
    <div className="flex flex-col">
      {/* This component will handle the Hero, Service Tiers, 
          and Facility Details similar to your AdoptPets layout. 
      */}
      <BoardingServices />
    </div>
  );
};

export default BoardingPage;