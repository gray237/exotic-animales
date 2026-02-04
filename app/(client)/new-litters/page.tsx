import React from "react";
import AboutHero from "@/components/AboutHero";
import NewLitters from "@/components/NewLitters";
import { axolotlExclusive } from "@/images";


// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Baby Exotic Pet Litters",
  description:
    "Discover the latest litters of exotic pets at Exotic Animales. Find baby axolotls, sugar gliders, fennec foxes, lemurs, and more ready for new homes today!",
  keywords:
    "new exotic pet litters, baby axolotls for sale, sugar gliders babies, fennec fox kits, lemur babies, Exotic Animales new litters",
  openGraph: {
    title: "Baby Exotic Pet Litters | Exotic Animales",
    description:
      "Discover the latest litters of exotic pets at Exotic Animales. Find baby axolotls, sugar gliders, fennec foxes, lemurs, and more ready for new homes today!",
    url: "https://www.exoticanimales.com/new-litters",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: axolotlExclusive.src,
        width: axolotlExclusive.width,
        height: axolotlExclusive.height,
        alt: "Exotic Animales New Litters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Litters | Exotic Animales",
    description:
      "Discover the latest litters of exotic pets at Exotic Animales. Find baby axolotls, sugar gliders, fennec foxes, lemurs, and more ready for new homes today!",
    images: [axolotlExclusive.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const NewLitter = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <NewLitters />
    </div>
  );
};

export default NewLitter;
