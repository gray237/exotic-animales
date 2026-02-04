import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import NewLitters from "@/components/NewLitters";
import Title from "@/components/Title";
import { getDealProducts } from "@/sanity/queries";
import React from "react";
import { smallExoticPetsSale } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Hot Deals on Exotic Pets",
  description:
    "Check out the latest hot deals on exotic pets, accessories, and supplies at Exotic Animales. Get axolotls, sugar gliders, fennec foxes, lemurs, and more at amazing prices!",
  keywords:
    "exotic pets deals, axolotls sale, sugar gliders discount, fennec fox deals, lemur sale, exotic pet store discounts",
  openGraph: {
    title: "Hot Deals on Exotic Pets | Exotic Animales",
    description:
      "Check out the latest hot deals on exotic pets, accessories, and supplies at Exotic Animales. Get axolotls, sugar gliders, fennec foxes, lemurs, and more at amazing prices!",
    url: "https://www.exoticanimales.com/deals",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: smallExoticPetsSale.src,
        width: smallExoticPetsSale.width,
        height: smallExoticPetsSale.height,
        alt: "Exotic Animales Hot Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Deals on Exotic Pets | Exotic Animales",
    description:
      "Check out the latest hot deals on exotic pets, accessories, and supplies at Exotic Animales. Get axolotls, sugar gliders, fennec foxes, lemurs, and more at amazing prices!",
    images: [smallExoticPetsSale.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const DealsPage = async () => {
  const products = await getDealProducts();
  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-1 text-base uppercase tracking-wide">
          Hot Deals of the Week
        </Title>
        <NewLitters />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {products?.map((product: any) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DealsPage;
