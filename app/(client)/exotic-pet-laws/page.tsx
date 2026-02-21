import { Metadata } from "next";
import PetLawClient from "./PetLawClient";
import { exoticBanner1 } from "@/images";

export const metadata: Metadata = {
  title: "Exotic Pet Laws by State | Ownership Guide",
  description:
    "Explore exotic pet ownership laws across the United States. Learn what animals are legal, restricted, or prohibited in your state.",
  openGraph: {
    title: "Exotic Pet Laws | Exotic Animales",
    description:
      "State-by-state guide to exotic animal ownership laws, permits, and restrictions.",
    images: [
      {
        url: exoticBanner1.src,
        width: 1200,
        height: 630,
        alt: "Exotic Pet Laws Guide",
      },
    ],
  },
};

export default function Page() {
  return <PetLawClient />;
}
