"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product removed successfully!"
            : "Product added successfully!"
        );
      });
    }
  };

  const IconPill = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center h-9 w-9 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition cursor-pointer">
      {children}
    </div>
  );

  // 🔒 Hide completely if no favorite products and not in product page mode
  if (!showProduct && (!favoriteProduct || favoriteProduct.length === 0)) return null;

  return (
    <>
      {!showProduct ? (
        <Link href="/wishlist" className="relative">
          <IconPill>
            <Heart className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-shop_light_green hoverEffect" />
            {favoriteProduct?.length ? (
              <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center">
                {favoriteProduct.length}
              </span>
            ) : null}
          </IconPill>
        </Link>
      ) : (
        <div onClick={handleFavorite}>
          <IconPill>
            {existingProduct ? (
              <Heart
                fill="#3b9c3c"
                className="w-5 h-5 text-shop_light_green hover:text-shop_light_green hoverEffect"
              />
            ) : (
              <Heart
                className="w-5 h-5 text-shop_light_green/80 hover:text-shop_light_green hoverEffect"
              />
            )}
          </IconPill>
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
