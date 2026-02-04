import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import FavoriteButton from "@/components/FavoriteButton";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import RelatedProducts from "@/components/RelatedProducts"; // ✅ import
import {
  getProductBySlug,
  getRelatedProductsByVariant,
  getDealProducts,
} from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { CornerDownLeft, StarIcon, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle, FaFire } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import ProductTabs from "@/components/ProductTabs";
import ShareButton from "@/components/ShareButton";


// ------------------- DYNAMIC METADATA -------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Exotic Animales",
    };
  }

  const images: string[] = [
    ...(product.bannerImage ? [urlFor(product.bannerImage).url()] : []),
    ...(product.images?.map((img: any) => img && urlFor(img).url()).filter(Boolean) || []),
  ];

  return {
    title: `${product.name}`,
    description:
      product.description ||
      "Find exotic pets for sale, axolotls, underground reptiles, sugar gliders, hedgehogs, finger monkeys and more at our reserve - E.A Ranch!",
    keywords: `${product.name}, exotic pets, ${product.variant}, buy ${product.name}`,
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://www.exoticanimales.com/product/${slug}`,
      images,
      siteName: "Exotic Animales",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images,
    },
  };
}

// ------------------- PAGE COMPONENT -------------------

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  // Fetch related products by variant (Product Type)
  let relatedProducts = await getRelatedProductsByVariant(
    product?.variant || "",
    product?._id || ""
  );

  // Fallback: if no related products, show hot deal products
  if (!relatedProducts || relatedProducts.length === 0) {
    relatedProducts = await getDealProducts();
  }

  return (
    <div className="flex flex-col">
      {/* Main Product Section */}
      <div className="w-full max-w-[1400px] mx-auto">
        <Container className="flex flex-col md:flex-row gap-10 py-10">
          {product?.images && (
            <ImageView images={product?.images} isStock={product?.stock} />
          )}

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{product?.name}</h2>
              <p className="text-gray-700 tracking-wide">{product?.description}</p>
              <div className="flex items-center gap-0.5 text-xs">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    size={12}
                    className="text-shop_light_green"
                    fill="#3b9c3c"
                  />
                ))}
                <p className="font-semibold">(120)</p>
              </div>
            </div>

            <div className="space-y-2 border-t border-b border-gray-200 py-5">
              <PriceView
                price={product?.price}
                discount={product?.discount}
                className="text-lg font-bold"
              />
              <p
                className={`px-4 py-1.5 text-sm text-center inline-block font-semibold rounded-lg ${
                  product?.stock === 0
                    ? "bg-red-100 text-red-600"
                    : "text-green-600 bg-green-100"
                }`}
              >
                {(product?.stock as number) > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            <div className="flex items-center gap-2.5 lg:gap-3">
              <AddToCartButton product={product} />
              <FavoriteButton showProduct product={product} />
            </div>

            <ProductCharacteristics product={product} />

            <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
              {/* Hot Deals */}
              <Link
                href="/deals"
                className="flex items-center gap-2 text-sm hover:text-red-600 hoverEffect"
              >
                <FaFire className="text-lg" />
                <p>Hot Deals</p>
              </Link>

              {/* Ask a Question */}
              <Link
                href="/faq"
                className="flex items-center gap-2 text-sm hover:text-red-600 hoverEffect"
              >
                <FaRegQuestionCircle className="text-lg" />
                <p>Ask a question</p>
              </Link>

              {/* Delivery & Return */}
              <Link
                href="/delivery"
                className="flex items-center gap-2 text-sm hover:text-red-600 hoverEffect"
              >
                <TbTruckDelivery className="text-lg" />
                <p>Delivery & Return</p>
              </Link>

              {/* Share (opens modal) */}
              <ShareButton
                productName={product?.name}
                productSlug={slug}
              />
            </div>


            <div className="flex flex-col">
              <div className="border border-lightColor/25 border-b-0 p-3 flex items-center gap-2.5">
                <Truck size={30} className="text-shop_orange" />
                <div>
                  <p className="text-base font-semibold text-black">Free Delivery</p>
                  <p className="text-sm text-gray-500 underline underline-offset-2">
                    Enter your Postal code for Delivery Availability.
                  </p>
                </div>
              </div>
              <div className="border border-lightColor/25 p-3 flex items-center gap-2.5">
                <CornerDownLeft size={30} className="text-shop_orange" />
                <div>
                  <p className="text-base font-semibold text-black">Return Delivery</p>
                  <p className="text-sm text-gray-500">
                    Free 30 days Delivery Returns.{" "}
                    <span className="underline underline-offset-2">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Product Tabs Section - full width */}
      <div className="w-full max-w-[1400px] mx-auto">
        <Container className="py-10 border-t border-gray-100">
          <ProductTabs product={product} />
        </Container>
      </div>

      {/* Related Products Section */}
      <RelatedProducts products={relatedProducts || []} />
    </div>
  );
};

export default SingleProductPage;
