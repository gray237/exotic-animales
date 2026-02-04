import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";
import { smallExoticPetsSale } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Exotic Animals & Pets Supplies",
  description:
    "Browse Exotic Animales’ shop for exotic pets, accessories, and supplies. Explore categories like axolotls, sugar gliders, fennec foxes, lemurs, and more.",
  keywords:
    "shop exotic pets, exotic pet store, axolotls, sugar gliders, fennec foxes, lemurs, exotic pet supplies",
  openGraph: {
    title: "Shop Exotic Pets & Supplies | Exotic Animales",
    description:
      "Browse Exotic Animales’ shop for exotic pets, accessories, and supplies. Explore categories like axolotls, sugar gliders, fennec foxes, lemurs, and more.",
    url: "https://www.exoticanimales.com/shop",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: smallExoticPetsSale.src,
        width: smallExoticPetsSale.width,
        height: smallExoticPetsSale.height,
        alt: "Exotic Animales Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Exotic Pets & Supplies | Exotic Animales",
    description:
      "Browse Exotic Animales’ shop for exotic pets, accessories, and supplies. Explore categories like axolotls, sugar gliders, fennec foxes, lemurs, and more.",
    images: [smallExoticPetsSale.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;
