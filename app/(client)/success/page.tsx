"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import PaymentInstructions from "@/components/PaymentInstructions";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const paymentMethod = searchParams.get("paymentMethod");


  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);

  return (
    <div className="py-10 bg-linear-to-br from-gray-50 to-gray-100">
      {/* ================= Confirmation Card ================= */}
      <div className="flex items-center justify-center mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl flex flex-col gap-8 shadow-2xl p-6 max-w-xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <Check className="text-white w-10 h-10" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900">
            Order Confirmed!
          </h1>

          <div className="space-y-4 text-left">
            <p className="text-gray-700 text-center">
              Thank you for your purchase! Your order has been received and is
              now being processed. You’ll receive a confirmation email shortly.
            </p>

            {orderNumber && (
              <p className="text-gray-700 text-center">
                Order Number:{" "}
                <span className="text-black font-semibold">
                  {orderNumber}
                </span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>

            <Link
              href="/orders"
              className="flex items-center justify-center px-4 py-3 font-semibold bg-lightGreen text-black border border-lightGreen rounded-lg hover:bg-gray-100 transition shadow-md"
            >
              <Package className="w-5 h-5 mr-2" />
              Orders
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= Payment Instructions ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <PaymentInstructions paymentMethod={paymentMethod} />
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
