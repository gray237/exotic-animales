import React from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";

interface RelatedProductsProps {
  products: Product[];
  title?: string; // Optional custom title
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = "Related Products",
}) => {
  if (!products || products.length === 0) return null; // Nothing to show

  return (
    <section className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md">
      <Title className="border-b pb-3">{title}</Title>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
