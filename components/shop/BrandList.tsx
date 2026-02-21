"use client";
import { BRANDS_QUERYResult } from "@/sanity.types";
import React, { useState } from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  brands: BRANDS_QUERYResult;
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const brandItems = brands || [];
  const displayedBrands = showAll ? brandItems : brandItems.slice(0, 10);

  return (
    <div className="w-full bg-white p-5 lg:p-0 lg:pb-2">
      <Title className="hidden lg:block text-base font-black">Breed</Title>
      
      <RadioGroup value={selectedBrand || ""} className="mt-2">
        {displayedBrands?.map((brand) => (
          <div
            key={brand?._id}
            onClick={() => setSelectedBrand(brand?.slug?.current as string)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={brand?.slug?.current as string}
              id={brand?.slug?.current}
              className="rounded-sm"
            />
            <Label
              htmlFor={brand?.slug?.current}
              className={`text-sm cursor-pointer ${selectedBrand === brand?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {brand?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex flex-col gap-2 mt-2">
        {brandItems.length > 10 && (
          <button
            onClick={(e) => { e.preventDefault(); setShowAll(!showAll); }}
            className="text-xs font-medium underline underline-offset-2 decoration-1 hover:text-shop_dark_green text-left"
          >
            {showAll ? "Show less" : `Show all (${brandItems.length})`}
          </button>
        )}
        
        {selectedBrand && (
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-[10px] font-bold uppercase tracking-tighter text-red-500 hover:text-red-700 text-left"
          >
            Reset Breed
          </button>
        )}
      </div>
    </div>
  );
};

export default BrandList;