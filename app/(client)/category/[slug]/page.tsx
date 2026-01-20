import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { getCategories, getCategoryBySlug } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return (
    <div className="py-10">
      {/* ===== Banner Image (FULL WIDTH) ===== */}
      {category?.bannerImage && (
        <div className="container mx-auto">
          <div className="w-full h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden">
            <img
              src={category.bannerImage}
              alt={category?.title || "Category Banner"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ===== Page Title (Aligned with Product Section) ===== */}
      <div className="container mx-auto mt-6 mb-8">
        <h2 className="text-3xl font-bold text-darkColor">
          Products by Category:{" "}
          <span className="text-green-600 capitalize">{slug}</span>
        </h2>
      </div>

      {/* ===== Products Section ===== */}
      <CategoryProducts
        categories={categories}
        slug={slug}
        longDescription={category?.description}
        whyShopWithUs={{
          title: category?.whyShopWithUs?.title || "",
          description: category?.whyShopWithUs?.text || "",
          image: category?.categoryImage,
        }}
      />
    </div>

  );
};

export default CategoryPage;
