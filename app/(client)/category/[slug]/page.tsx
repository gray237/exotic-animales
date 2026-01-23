import CategoryProducts from "@/components/CategoryProducts";
import NewLitters from "@/components/NewLitters";
import { getCategories, getCategoryBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const categories = await getCategories();
  const { slug } = params;
  const category = await getCategoryBySlug(slug);

  return (
    <div className="w-full">
      {/* ===== HERO BANNER (NO PADDING) ===== */}
      {category?.bannerImage && (
        <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] overflow-hidden">
          <img
            src={urlFor(category.bannerImage).url()}
            alt={category?.title || "Category Banner"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* ===== PAGE CONTENT WRAPPER ===== */}
      <div className="px-5">
        {/* ===== SPACING ===== */}
        <div className="h-5" />

        {/* ===== PAGE TITLE ===== */}
        <div className="container mx-auto max-w-[1400px] mb-5">
          <h2 className="text-3xl font-bold text-darkColor">
            Products by Category:{" "}
            <span className="text-green-600 capitalize">{slug}</span>
          </h2>
        </div>

        {/* ===== PRODUCTS ===== */}
        <CategoryProducts categories={categories} slug={slug} />

        {/* ===== CATEGORY DESCRIPTION ===== */}
        {category?.description && (
          <div className="container mx-auto mt-12 max-w-[1400px] prose prose-lg text-gray-800 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: category.description }} />
          </div>
        )}

        {/* ===== WHY SHOP WITH US ===== */}
        {category?.whyShopWithUs && (
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 max-w-[1400px] pt-2.5 pb-5">
            {category?.image && (
              <div className="overflow-hidden border border-shop_orange/30 hover:border-shop_orange hoverEffect w-36 h-36 md:w-40 md:h-40 p-2 rounded-md shrink-0">
                <Image
                  src={urlFor(category.image).url()}
                  alt={category.title || "Category Image"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hoverEffect"
                />
              </div>
            )}

            <div className="space-y-3">
              <h4 className="text-2xl font-bold">Why Shop With Us</h4>
              <p className="text-gray-800">{category.whyShopWithUs}</p>
            </div>
          </div>
        )}

        <NewLitters />
      </div>
    </div>
  );
};

export default CategoryPage;
