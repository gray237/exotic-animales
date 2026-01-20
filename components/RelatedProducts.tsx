import React from "react";
import { Product } from "@/sanity.types";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";

interface RelatedProductsProps {
  products: Product[];
  currentProductId?: string;
}

const RelatedProducts = ({ products, currentProductId }: RelatedProductsProps) => {
  // Filter out the current product from the related list (if applicable)
  const filteredProducts = products.filter(
    (p) => p._id !== currentProductId
  );

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <Container className="py-12 border-t border-gray-100 text-center">
        <Title className="text-xl font-bold mb-3">Related Products</Title>
        <p className="text-gray-500">No related products found.</p>
      </Container>
    );
  }

  return (
    <Container className="py-12 border-t border-gray-100">
      <Title className="text-xl font-bold mb-6 text-center">Related Products</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default RelatedProducts;
