"use client";

import React, { useState } from "react";
import {
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@headlessui/react";
import { Product } from "@/sanity.types";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ReviewItem {
  name: string;
  rating: number;
  comment: string;
}

interface ProductTabsProps {
  product: Product & {
    longDescription?: string;
    additionalInfo?: { label: string; value: string }[];
    reviews?: ReviewItem[];
    bannerImage?: string;
  };
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(product.reviews || []);
  const [newReview, setNewReview] = useState<ReviewItem>({
    name: "",
    rating: 0,
    comment: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleAddReview = () => {
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert("Please add your name, rating, and comment.");
      return;
    }

    setReviews((prev) => [
      ...prev,
      {
        name: newReview.name.trim(),
        rating: newReview.rating,
        comment: newReview.comment.trim(),
      },
    ]);

    setNewReview({
      name: "",
      rating: 0,
      comment: "",
    });

    setShowForm(false);
  };

  // SVG star icon component
  const StarIcon = () => (
    <svg
      className="w-3 h-3 text-shop_light_green fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      aria-hidden="true"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  return (
    <div className="w-full mb-0 bg-white">
      {/* Centered Tabs */}
      <div className="flex justify-center">
        <TabGroup>
          <TabList className="flex justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 rounded-full bg-shop_dark_green/10 p-1 w-fit mx-auto">
            {["Description", "More Info", "Reviews"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    // Responsive text + padding
                    "px-4 sm:px-6 md:px-8 py-2 text-sm sm:text-base md:text-lg font-bold rounded-full transition-all duration-200 whitespace-nowrap",
                    selected
                      ? "bg-shop_dark_green/80 text-white shadow-md"
                      : "text-shop_dark_green hover:bg-shop_dark_green/20"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>


          <TabPanels className="mt-8 w-full">
            {/* --- DESCRIPTION --- */}
            <TabPanel>
              <div className="relative w-full text-gray-700">
                <div className="long-description">
                  {/* Banner image floated right only on medium+ screens */}
                  {product.bannerImage && (
                    <div className="md:float-right md:w-[400px] w-full h-auto md:ml-6 mb-4 mt-2 rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src={product.bannerImage}
                        alt={product.name || "Product Banner"}
                        width={400}
                        height={300}
                        className="object-cover w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        product.longDescription ||
                        product.description ||
                        "No description available.",
                    }}
                  />
                </div>

                <div className="clear-both"></div>
              </div>
            </TabPanel>




            {/* --- ADDITIONAL INFO --- */}
            <TabPanel>
              <div className="w-full flex justify-center">
                <div className="max-w-6xl w-full">
                  {product.additionalInfo && product.additionalInfo.length > 0 ? (
                    <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                      <tbody>
                        {product.additionalInfo.map((item, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-gray-200 hover:bg-gray-50 transition"
                          >
                            <td className="py-4 px-6 font-semibold text-gray-800 w-1/3">
                              {item.label}
                            </td>
                            <td className="py-4 px-6 text-gray-500">
                              {item.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      No additional information available.
                    </p>
                  )}
                </div>
              </div>
            </TabPanel>

            {/* --- REVIEWS --- */}
            <TabPanel>
              <div className="w-full max-w-6xl space-y-4">
                {reviews.length === 0 && (
                  <p className="text-gray-500">No reviews yet.</p>
                )}

                {reviews.map((review, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-2">
                      {/* Stars before name */}
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <p className="font-semibold text-shop_dark_green">
                        {review.name}
                      </p>
                    </div>
                    <p className="text-gray-500 mt-2">{review.comment}</p>
                  </div>
                ))}

                {/* Toggle Add Review Form */}
                {!showForm && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="text-shop_dark_green font-semibold underline underline-offset-4 hover:text-shop_light_green"
                  >
                    Add Review
                  </button>
                )}

                {/* Add Review Form */}
                {showForm && (
                  <div className="mt-4 max-w-xl border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <h4 className="font-semibold mb-3 text-base text-shop_dark_green">
                      Add Your Review
                    </h4>

                    {/* Name + Rating row */}
                    <div className="flex items-center gap-4 mb-3">
                      {/* Name */}
                      <input
                        type="text"
                        placeholder="Your name"
                        className="border px-3 py-2 rounded-md w-full text-sm"
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({ ...newReview, name: e.target.value })
                        }
                      />

                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setNewReview({ ...newReview, rating: star })
                            }
                            className="focus:outline-none"
                          >
                            <svg
                              className={`w-4 h-4 transition ${
                                star <= newReview.rating
                                  ? "text-shop_light_green fill-current"
                                  : "text-gray-300"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <textarea
                      placeholder="Write your review..."
                      className="border px-3 py-2 mb-3 w-full rounded-md text-sm resize-none"
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                      }
                    />

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleAddReview}
                        className="bg-shop_dark_green text-white px-4 py-1.5 rounded-full text-sm hover:bg-shop_light_green transition"
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => setShowForm(false)}
                        className="text-gray-500 text-sm underline hover:text-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default ProductTabs;
