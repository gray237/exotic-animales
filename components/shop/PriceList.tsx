"use client";
import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-20000" },
];

const PriceList = ({ selectedPrice, setSelectedPrice }: any) => {
  return (
    <div className="w-full bg-white p-5 lg:p-0 lg:pb-2">
      <Title className="hidden lg:block text-base font-black">Price Range</Title>
      
      <RadioGroup className="mt-2" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
          <div
            key={index}
            onClick={() => setSelectedPrice(price?.value)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem value={price?.value} id={price?.value} className="rounded-sm" />
            <Label
              htmlFor={price.value}
              className={`text-sm cursor-pointer ${selectedPrice === price?.value ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-[10px] font-bold uppercase tracking-tighter text-red-500 hover:text-red-700 text-left mt-2"
        >
          Reset Price
        </button>
      )}
    </div>
  );
};

export default PriceList;