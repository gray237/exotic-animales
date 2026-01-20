"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isStock?: number | undefined;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [active, setActive] = useState(images[0]);
  console.log(active);

  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-square border border-darkColor/10 rounded-md group overflow-hidden bg-white"
        >
          <Image
            src={urlFor(active).url()}
            alt="productImage"
            width={800}
            height={800}
            priority
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-md ${
              isStock === 0 ? "opacity-50" : ""
            }`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-6 gap-2">
        {images?.map((image) => (
          <button
            key={image?._key}
            onClick={() => setActive(image)}
            className={`border rounded-md overflow-hidden aspect-square ${
              active?._key === image?._key
                ? "border-shop_dark_green opacity-100"
                : "border-transparent opacity-80 hover:opacity-100"
            }`}
          >
            <Image
              src={urlFor(image).url()}
              alt={`Thumbnail ${image._key}`}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ImageView;
