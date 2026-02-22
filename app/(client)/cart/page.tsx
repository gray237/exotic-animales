"use client";

import React, { Suspense } from "react";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import NoAccess from "@/components/NoAccess";
import PriceFormatter from "@/components/PriceFormatter";
import ProductSideMenu from "@/components/ProductSideMenu";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent } from "@/components/ui/card";

const CartContent = () => {
  const { deleteCartProduct, getTotalPrice, getItemCount, getSubTotalPrice, resetCart } =
    useStore();

  const groupedItems = useStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const router = useRouter();
  // const [loading, setLoading] = useState(false); <--- REMOVED

  const handleResetCart = () => {
    if (window.confirm("Are you sure you want to reset your cart?")) {
      resetCart();
      toast.success("Cart reset successfully!");
    }
  };

  const handleCheckout = () => {
    if (!groupedItems?.length) return;
    router.push("/checkout");
  };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {/* ================= PAGE HEADER ================= */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-gray-400/30">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          {/* Glass-like 3-step progress bar */}
          <div className="mt-8 relative h-10 w-full max-w-xl mx-auto rounded-full bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            {/* Filled portion */}
            <div className="absolute left-0 top-0 h-full w-2/5 bg-white/80 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500"></div>

            {/* Step labels */}
            <div className="absolute inset-0 flex justify-between items-center px-4 text-sm font-semibold">
              <span className="text-gray-900">Shop</span>
              <span className="text-gray-900">Cart</span>
              <span className="text-gray-400">Checkout</span>
            </div>
          </div>
        </div>
      </div>


      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <div className="grid lg:grid-cols-3 md:gap-8 mt-10">
              {/* CART ITEMS */}
              <div className="lg:col-span-2 space-y-4">
                <Card className="border border-white/30">
                  {groupedItems.map(({ product }, idx) => {
                    const itemCount = getItemCount(product?._id);
                    const productImage =
                      product?.images && product.images.length > 0
                        ? urlFor(product.images[0]).url()
                        : "/fallback-product.png";

                    return (
                      <CardContent
                        key={product?._id}
                        className={`flex items-center justify-between gap-5 px-6 ${
                          idx < groupedItems.length - 1 ? "border-b border-white/30" : ""
                        }`}
                      >
                        <div className="flex flex-1 items-start gap-4 h-36 md:h-44">
                          <Link
                            href={`/product/${product?.slug?.current || ""}`}
                            className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group"
                          >
                            <Image
                              src={productImage}
                              alt={product?.name ?? "Product image"}
                              width={500}
                              height={500}
                              className="w-40 h-40 rounded-md object-cover group-hover:scale-105 hoverEffect"
                              loading="lazy"
                            />
                          </Link>

                          <div className="h-full flex flex-1 flex-col justify-between py-1">
                            <div className="flex flex-col gap-1">
                              <h2 className="text-base font-semibold line-clamp-1">
                                {product?.name ?? "Unnamed Product"}
                              </h2>
                              <p className="text-sm capitalize">
                                Variant:{" "}
                                <span className="font-semibold">
                                  {product?.variant ?? "N/A"}
                                </span>
                              </p>
                              <p className="text-sm capitalize">
                                Status:{" "}
                                <span className="font-semibold">
                                  {product?.status ?? "N/A"}
                                </span>
                              </p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                              {/* ---------- FAVORITE + DELETE BUTTONS ---------- */}
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <ProductSideMenu
                                      product={product}
                                      className="relative top-0 right-0"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent className="font-bold">
                                    Add to Favorite
                                  </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                  <TooltipTrigger>
                                    <Trash
                                      onClick={() => {
                                        deleteCartProduct(product?._id);
                                        toast.success("Product removed");
                                      }}
                                      className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 hoverEffect cursor-pointer"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent className="font-bold bg-red-600">
                                    Delete product
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between h-36 md:h-44 p-0.5 md:p-1">
                          <PriceFormatter
                            amount={(product?.price as number) * itemCount}
                            className="font-bold text-lg"
                          />
                          <QuantityButtons product={product} />
                        </div>
                      </CardContent>
                    );
                  })}

                  {/* RESET BUTTON INSIDE CARD WITH SEPARATOR */}
                  <Separator className="border-white/30" />
                  <CardContent>
                    <Button onClick={handleResetCart} className="font-semibold -mt-2 -mb-2" variant="destructive">
                      Reset Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* ORDER SUMMARY */}
              <div className="lg:col-span-1">
                <Card className="border border-white/30 p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>SubTotal</span>
                      <PriceFormatter amount={getSubTotalPrice()} />
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <PriceFormatter
                        amount={getSubTotalPrice() - getTotalPrice()}
                      />
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <PriceFormatter
                        amount={getTotalPrice()}
                        className="text-lg font-bold text-black"
                      />
                    </div>
                    <Button
                      className="w-full rounded-full font-semibold tracking-wide hoverEffect"
                      size="lg"
                      // disabled={loading} <--- REMOVED or set to false
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
};

// 2. Create a new "CartPage" that wraps "CartContent" in Suspense
const CartPage = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium animate-pulse">Loading your cart...</p>
      </div>
    }>
      <CartContent />
    </Suspense>
  );
};

export default CartPage;
