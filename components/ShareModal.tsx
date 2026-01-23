"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
  productName: string;
  productSlug: string;
}

const ShareModal = ({ onClose, productName, productSlug }: Props) => {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/product/${productSlug}`
      : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white rounded-xl p-6 relative animate-fadeIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h3 className="text-lg font-semibold mb-4">
          Share this product
        </h3>

        {/* Share Buttons */}
        <div className="flex items-center justify-between mb-6">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            className="share-btn bg-blue-600"
          >
            <FaFacebookF />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=${productName}`}
            target="_blank"
            className="share-btn bg-sky-500"
          >
            <FaTwitter />
          </a>

          <a
            href={`https://www.tiktok.com/share?url=${url}`}
            target="_blank"
            className="share-btn bg-black"
          >
            <FaTiktok className="text-white" />
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${productName} ${url}`}
            target="_blank"
            className="share-btn bg-green-500"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Follow Section */}
        <div className="border-t pt-4">
          <p className="text-sm font-semibold mb-3">Follow us</p>

          <div className="flex gap-4">
            <a
              href="https://facebook.com/YOURPAGE"
              target="_blank"
              className="follow-btn flex items-center gap-1"
            >
              <FaFacebookF />
              Facebook
            </a>

            <a
              href="https://instagram.com/YOURPAGE"
              target="_blank"
              className="follow-btn flex items-center gap-1"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
