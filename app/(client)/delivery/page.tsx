import React from "react";
import DeliveryOptions from "@/components/DeliveryOptions";
import ProofSection from "@/components/ProofSection";
import { drRachel1 } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Delivery & Returns | Exotic Animales",
  description:
    "Learn about Exotic Animales’ delivery options, shipping policies, and return process for exotic pets and products. Get your axolotls, sugar gliders, fennec foxes, and more delivered safely.",
  keywords:
    "exotic pets delivery, shipping exotic pets, axolotls delivery, sugar gliders shipping, fennec fox delivery, return policy exotic pets",
  openGraph: {
    title: "Delivery & Returns | Exotic Animales",
    description:
      "Learn about Exotic Animales’ delivery options, shipping policies, and return process for exotic pets and products. Get your axolotls, sugar gliders, fennec foxes, and more delivered safely.",
    url: "https://www.exoticanimales.com/delivery",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: drRachel1.src,
        width: drRachel1.width,
        height: drRachel1.height,
        alt: "Exotic Animales Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery & Returns | Exotic Animales",
    description:
      "Learn about Exotic Animales’ delivery options, shipping policies, and return process for exotic pets and products. Get your axolotls, sugar gliders, fennec foxes, and more delivered safely.",
    images: [drRachel1.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <DeliveryOptions />
      <ProofSection />
    </div>
  );
};

export default ContactPage;
