"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Logs } from "lucide-react";

const OrdersButton = () => {
  const [orderCount, setOrderCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const res = await fetch("/api/orders/count");
        if (!res.ok) return;

        const data = await res.json();
        setOrderCount(data.count || 0);
      } catch { 
        console.error("Failed to fetch orders count");
      } finally {
        setLoading(false);
      }
    };

    fetchOrdersCount();
  }, []);

  // 🔒 Hide completely if no orders or still loading
  if (loading || orderCount === 0) return null;

  const IconPill = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex items-center justify-center h-9 w-9 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition cursor-pointer">
      {children}
    </div>
  );

  return (
    <Link href="/orders">
      <IconPill>
        <Logs className="w-5 h-5 text-gray-700 dark:text-gray-200 hover:text-shop_light_green hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center">
          {orderCount}
        </span>
      </IconPill>
    </Link>
  );
};

export default OrdersButton;
