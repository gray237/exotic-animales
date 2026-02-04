import { Metadata } from "next";
import VetGuideClient from "./VetGuideClient";
import { exoticBanner1 } from "@/images";

export const metadata: Metadata = {
  title: "Exotic Vet Directory | Find Avian & Exotic Vets",
  description:
    "Locate board-certified avian and exotic veterinarians across the US. Our curated directory helps you find expert care for reptiles, birds, and rare mammals.",
  openGraph: {
    title: "Exotic Vet Directory | Exotic Animales",
    description:
      "Find specialized veterinary care for your unique companions. Browse our nationwide directory of verified exotic animal specialists.",
    images: [
      {
        url: exoticBanner1.src,
        width: 1200,
        height: 630,
        alt: "Exotic Vet Directory",
      },
    ],
  },
};

export default function Page() {
  return <VetGuideClient />;
}