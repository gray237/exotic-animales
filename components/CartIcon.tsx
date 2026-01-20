"use client";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useStore();

  return (
    <Link href="/cart" className="relative">
      {/* Pill container */}
      <div className="flex items-center justify-center h-9 w-9 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition cursor-pointer group">
        <ShoppingBag className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-shop_light_green transition-colors duration-200" />
        {/* Item count badge */}
        {items?.length ? (
          <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center">
            {items.length}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default CartIcon;
