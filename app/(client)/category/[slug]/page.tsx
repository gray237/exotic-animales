
export const dynamic = "force-dynamic";
export const revalidate = 60;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryProducts from "@/components/CategoryProducts";
import NewLitters from "@/components/NewLitters";
import { getCategories, getCategoryBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";


// ------------------- DYNAMIC METADATA -------------------
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Exotic Animales",
      description: "The requested category does not exist.",
    };
  }

  const imageUrl = category.bannerImage
    ? urlFor(category.bannerImage).width(1200).url()
    : undefined;

  const description =
    category.description?.substring(0, 160) ??
    `Explore the ${category.title} category at Exotic Animales and find exotic pets, accessories, and guides.`;

  return {
    title: `${category.title} | Exotic Animales`,
    description,
    keywords: [
      category.title,
      "exotic pets",
      "exotic animals for sale",
      "Exotic Animales",
    ].join(", "),
    openGraph: {
      title: `${category.title} | Exotic Animales`,
      description,
      url: `https://www.exoticanimales.com/category/${slug}`,
      siteName: "Exotic Animales",
      type: "website",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: category.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Exotic Animales`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

// ------------------- PAGE COMPONENT -------------------
const CategoryPage = async (
  props: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await props.params;

  const categories = await getCategories();
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* ===== HERO BANNER (NO PADDING) ===== */}
      {category?.bannerImage && (
        <div className="relative w-full h-55 sm:h-75 md:h-95 lg:h-112.5 overflow-hidden">
          <Image
            src={urlFor(category.bannerImage).url()}
            alt={category?.title || "Category Banner"}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ===== PAGE CONTENT WRAPPER ===== */}
      <div className="px-5">
        {/* ===== SPACING ===== */}
        <div className="h-5" />

        {/* ===== PAGE TITLE ===== */}
        <div className="container mx-auto max-w-350 mb-5">
          <h2 className="text-3xl font-bold text-darkColor">
            Products by Category:{" "}
            <span className="text-green-600 capitalize">{slug}</span>
          </h2>
        </div>

        {/* ===== PRODUCTS ===== */}
        <CategoryProducts categories={categories} slug={slug} />

        {/* ===== CATEGORY DESCRIPTION ===== */}
        {category?.description && (
          <div className="container mx-auto mt-12 max-w-350 prose prose-lg text-gray-800 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: category.description }} />
          </div>
        )}

        {/* ===== WHY SHOP WITH US ===== */}
        {category?.whyShopWithUs && (
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 max-w-350 pt-2.5 pb-5">
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
