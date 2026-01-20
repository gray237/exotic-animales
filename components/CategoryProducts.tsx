"use client";

import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface Props {
  categories: Category[];
  slug: string;
  whyShopWithUs?: {
    title: string;
    description: string;
    image?: string;
  };
  longDescription?: string;
}

const CategoryProducts = ({
  categories,
  slug,
  whyShopWithUs,
  longDescription,
}: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `
        *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)]
        | order(name asc) {
          ...,
          "categories": categories[]->title
        }
      `;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router]);

  return (
    <div className="w-full">

      {/* ===== Product Section ===== */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-6">
        {/* Category Buttons */}
        <div className="flex md:flex-col gap-2 md:w-56 w-full">
          {categories?.map((item) => (
            <Button
              key={item?._id}
              onClick={() => handleCategoryChange(item?.slug?.current as string)}
              className={`w-full text-left justify-start font-medium capitalize rounded-md py-2 transition-colors ${
                item?.slug?.current === currentSlug
                  ? "bg-shop_orange text-white"
                  : "bg-transparent hover:bg-shop_orange/10 text-darkColor"
              }`}
            >
              {item?.title}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-50 rounded-lg w-full">
              <div className="flex items-center space-x-2 text-shop_orange">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Loading products...</span>
              </div>
            </div>
          ) : products?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {products.map((product: Product) => (
                <AnimatePresence key={product._id}>
                  <motion.div>
                    <ProductCard product={product} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          ) : (
            <NoProductAvailable
              selectedTab={currentSlug}
              className="mt-0 w-full"
            />
          )}
        </div>
      </div>

      {/* ===== Category Description ===== */}
      {longDescription && (
        <div className="container mx-auto mt-14 prose prose-lg text-gray-800 max-w-4xl">
          <div
            className="leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: longDescription }}
          />
        </div>
      )}

      {/* ===== Shop With Us Section ===== */}
      {whyShopWithUs && (
        <div className="container mx-auto mt-16 flex flex-col md:flex-row items-center gap-10">
          {/* Left – Category Image */}
          {whyShopWithUs.image && (
            <div className="md:w-1/2 w-full">
              <img
                src={whyShopWithUs.image}
                alt={whyShopWithUs.title}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          )}

          {/* Right – Text */}
          <div className="md:w-1/2 w-full space-y-3">
            <h4 className="text-2xl font-bold text-darkColor">{whyShopWithUs.title}</h4>
            <p className="text-gray-700 leading-relaxed text-base">
              {whyShopWithUs.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
