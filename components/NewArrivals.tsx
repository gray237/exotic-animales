"use client";

import React, { useEffect, useRef, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Container from "./Container";
import { motion } from "framer-motion";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";

const query = `*[_type == "product"]
  | order(_createdAt desc)[0...15]{
    ...,
    "categories": categories[]->title
  }`;

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("New Arrivals fetch error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty array is now perfectly fine because 'query' is external

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Container className="my-14">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <Title>New Arrivals</Title>

        {/* NAV BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border hover:bg-shop_light_bg transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border hover:bg-shop_light_bg transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="flex items-center justify-center min-h-40">
          <Loader2 className="w-6 h-6 animate-spin text-shop_dark_green" />
        </div>
      ) : (
        <motion.div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              className="min-w-40 sm:min-w-45 md:min-w-50 lg:min-w-55"
              whileHover={{ scale: 1.03 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </Container>
  );
};

export default NewArrivals;