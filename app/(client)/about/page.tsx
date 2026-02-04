import React from "react";
import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";
import AboutFeature from "@/components/AboutFeature";
import { exoticPetsRanch } from "@/images";

// ------------------- DYNAMIC METADATA -------------------
export const metadata = {
  title: "About Us | Exotic Animales",
  description:
    "Learn more about Exotic Animales, your trusted source for exotic pets including axolotls, sugar gliders, fennec foxes, and more.",
  keywords:
    "about Exotic Animales, exotic pets, axolotls, sugar gliders, fennec foxes, exotic pet store",
  openGraph: {
    title: "About Us",
    description:
      "Learn more about Exotic Animales, your trusted source for exotic pets including axolotls, sugar gliders, fennec foxes, and more.",
    url: "https://www.exoticanimales.com/about",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: exoticPetsRanch.src,
        width: exoticPetsRanch.width,
        height: exoticPetsRanch.height,
        alt: "Exotic Animales Ranch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Exotic Animales",
    description:
      "Learn more about Exotic Animales, your trusted source for exotic pets including axolotls, sugar gliders, fennec foxes, and more.",
    images: [exoticPetsRanch.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutUs />
      <AboutFeature />
    </div>
  );
};

export default AboutPage;
