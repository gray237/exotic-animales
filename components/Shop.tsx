"use client";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import ShopBanner from "./ShopBanner";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import BrandList from "./shop/BrandList";
import PriceList from "./shop/PriceList";
import { client } from "@/sanity/lib/client";
import { Loader2, RotateCcw, ChevronDown } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParams || null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParams || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(query, { selectedCategory, selectedBrand, minPrice, maxPrice });
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <Container className="pb-20">
        <div className="mb-10">
          <ShopBanner />
        </div>

        {/* HEADER*/}
        <div className="flex flex-col items-center text-center space-y-2 mb-6">
          <Title className="text-2xl lg:text-3xl tracking-tighter font-bold text-gray-900 dark:text-white">
            Exotic Animals & Pet Supplies Shop
          </Title>
          <p className="text-xs md:text-base font-medium text-gray-500 max-w-[650px] leading-relaxed">
            Browse Exotic Animales’ shop for premium exotic pets, specialized accessories, 
            and essential husbandry supplies.
          </p>
        </div>

        {/* MOBILE & TABLET FILTER BAR */}
        <div className="lg:hidden flex w-full justify-between items-center gap-2 mb-4 pb-4 border-b border-gray-100">
          <FilterDropdown label="Category" active={!!selectedCategory}>
             <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </FilterDropdown>
          
          <FilterDropdown label="Breed" active={!!selectedBrand}>
             <BrandList brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
          </FilterDropdown>

          <FilterDropdown label="Price" active={!!selectedPrice}>
             <PriceList selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
          </FilterDropdown>
        </div>

        {/* MAIN LAYOUT WITH T-SHAPE LINES */}
        <div className="flex flex-col lg:flex-row gap-4 border-t border-shop_dark_green/50 pt-4">
          {/* DESKTOP SIDEBAR - Added vertical border line */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 h-fit border-r border-shop_dark_green/50 pr-6">
            <div className="flex flex-col">
              <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <BrandList brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
              <PriceList selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
            </div>
          </aside>

          {/* GRID */}
          <div className="flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-40"><Loader2 className="animate-spin" /></div>
            ) : products?.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-4">
                {products?.map((product) => <ProductCard key={product?._id} product={product} />)}
              </div>
            ) : (
              <NoProductAvailable className="mt-0 py-20" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

// Helper Component for Mobile Dropdowns with flex-1 for even width
const FilterDropdown = ({ label, active, children }: { label: string, active: boolean, children: React.ReactNode }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button className={`flex-1 flex justify-center items-center gap-1 sm:gap-2 px-2 py-2.5 rounded-md border text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap overflow-hidden ${
        active 
        ? "bg-shop_dark_green text-white border-shop_dark_green" 
        : "bg-white text-gray-600 border-gray-200 hover:border-shop_dark_green"
      }`}>
        <span className="truncate">{label}</span>
        <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${active ? "rotate-180" : ""}`} />
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-[280px] p-0 shadow-2xl rounded-xl border-none" align="start">
      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </PopoverContent>
  </Popover>
);

export default Shop;