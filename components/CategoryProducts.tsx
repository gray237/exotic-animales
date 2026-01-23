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
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  // Update limit dynamically on resize
  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth < 1024) setLimit(12); // mobile + tablet
      else setLimit(15); // desktop
    };

    updateLimit(); // initial
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    setPage(1); // reset pagination on category change
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
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  const totalPages = Math.ceil(products.length / limit);
  const visibleProducts = products.slice((page - 1) * limit, page * limit);

  return (
    <div className="w-full">
      {/* ===== CATEGORY BUTTONS + PRODUCT GRID ===== */}
      <div className="container mx-auto mt-5 flex flex-col md:flex-row gap-6">
        {/* Category Buttons */}
        <div className="flex md:flex-col gap-2 md:w-56 w-full">
          {categories.map((item) => (
            <Button
              key={item._id}
              onClick={() =>
                handleCategoryChange(item.slug?.current as string)
              }
              className={`w-full text-left justify-start font-medium capitalize rounded-md py-2 ${
                item.slug?.current === currentSlug
                  ? "bg-shop_orange text-white"
                  : "bg-transparent hover:bg-shop_orange/10 text-darkColor"
              }`}
            >
              {item.title}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin text-shop_orange" />
            </div>
          ) : products.length ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
                {visibleProducts.map((product) => (
                  <motion.div key={product._id}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                        page === i + 1
                          ? "bg-shop_orange text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NoProductAvailable selectedTab={currentSlug} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
