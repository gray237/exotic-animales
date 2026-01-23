"use client";

import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import ShareModal from "./ShareModal";

interface Props {
  productName: string;
  productSlug: string;
}

const ShareButton = ({ productName, productSlug }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm hover:text-red-600 hoverEffect"
      >
        <FiShare2 className="text-lg" />
        <p>Share</p>
      </button>

      {open && (
        <ShareModal
          onClose={() => setOpen(false)}
          productName={productName}
          productSlug={productSlug}
        />
      )}
    </>
  );
};

export default ShareButton;
