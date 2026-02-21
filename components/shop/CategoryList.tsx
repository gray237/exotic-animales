"use client";
import { Category } from "@/sanity.types";
import React, { useState } from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  categories: Category[];
  selectedCategory?: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const categoryItems = categories || [];
  const displayedCategories = showAll ? categoryItems : categoryItems.slice(0, 10);

  return (
    <div className="w-full bg-white p-5 lg:p-0 lg:pb-2">
      <Title className="hidden lg:block text-base font-black">Categories</Title>
      
      <RadioGroup value={selectedCategory || ""} className="mt-2">
        {displayedCategories?.map((category) => (
          <div
            onClick={() => setSelectedCategory(category?.slug?.current as string)}
            key={category?._id}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={category?.slug?.current as string}
              id={category?.slug?.current}
              className="rounded-sm"
            />
            <Label
              htmlFor={category?.slug?.current}
              className={`text-sm cursor-pointer ${selectedCategory === category?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {category?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex flex-col gap-2 mt-2">
        {categoryItems.length > 10 && (
          <button
            onClick={(e) => { e.preventDefault(); setShowAll(!showAll); }}
            className="text-xs font-medium underline underline-offset-2 decoration-1 hover:text-shop_dark_green text-left"
          >
            {showAll ? "Show less" : `Show all (${categoryItems.length})`}
          </button>
        )}
        
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-[10px] font-bold uppercase tracking-tighter text-red-500 hover:text-red-700 text-left"
          >
            Reset Category
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryList;