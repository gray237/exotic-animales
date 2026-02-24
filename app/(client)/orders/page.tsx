import Container from "@/components/Container";
import OrdersComponent from "@/components/OrdersComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMyOrders } from "@/sanity/queries";
import { auth } from "@clerk/nextjs/server";
import { FileX, PackageCheck, CreditCard, Clock, MessageCircleQuestion, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import PriceFormatter from "@/components/PriceFormatter";
import { MY_ORDERS_QUERYResult } from "@/sanity.types";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }

  // Ensure orders is typed and defaults to an empty array
  const orders: MY_ORDERS_QUERYResult = (await getMyOrders(userId)) || [];

  // ✅ Typed Stats Logic for Vercel Linting
  const totalSpent = orders.reduce((acc: number, order) => acc + (order.totalPrice || 0), 0);
  const activeOrders = orders.filter((o) => o.status?.toLowerCase() !== 'delivered').length;

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <Container className="py-10 max-w-7xl px-4">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">My Orders</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your exotic pet adoption process and view your orders and transportation history.</p>
          </div>
          {/* BACK BUTTON */}
          <Link 
            href="/shop" 
            className="
              inline-flex items-center gap-3 mt-0 mb-0 px-4 py-2 -ml-4
              rounded-full transition-all duration-300
              text-gray-600 dark:text-gray-400 font-bold
              hover:bg-purple-50 dark:hover:bg-purple-900/20 
              hover:text-indigo-600 dark:hover:text-indigo-400
              active:scale-95
              group
            "
          >
            <div className="relative flex items-center justify-center">
              {/* This arrow moves slightly left on hover */}
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:-translate-x-1.5" 
              />
            </div>

            <span className="text-xs uppercase tracking-[0.15em] transition-colors">
              Continue Shopping
            </span>
          </Link>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-8">
            {/* ================= STATS ROW (Reduced Height) ================= */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {/* Card 1 */}
              <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0 md:p-3 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                    <PackageCheck className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[12px] md:text-sm text-gray-500 font-bold uppercase tracking-tight leading-none mb-1">Orders</p>
                    <h3 className="text-md md:text-2xl font-black leading-none">{orders.length}</h3>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0 md:p-3 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-green-50 rounded-lg text-green-600 shrink-0">
                    <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[12px] md:text-sm text-gray-500 font-bold uppercase tracking-tight leading-none mb-1">Spent</p>
                    <PriceFormatter amount={totalSpent} className="text-md md:text-2xl font-black leading-none" />
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-none shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0 md:p-3 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-orange-50 rounded-lg text-orange-600 shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[12px] md:text-sm text-gray-500 font-bold uppercase tracking-tight leading-none mb-1">Active</p>
                    <h3 className="text-md md:text-2xl font-black leading-none">{activeOrders}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ================= MAIN CONTENT GRID ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              {/* Left Side: The List */}
              <div className="lg:col-span-3">
                <Card className="border-none shadow-sm overflow-hidden bg-white">
                  <CardHeader className="border-b bg-white/50 py-4">
                    <CardTitle className="text-lg font-bold">Order History</CardTitle>
                    <CardDescription className="text-xs">Recent purchases and live transport status.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="w-full">
                      <Table>
                        <TableHeader className="bg-gray-50/80">
                          <TableRow>
                            <TableHead className="pl-6 font-bold text-gray-700">Order</TableHead>
                            <TableHead className="hidden md:table-cell font-bold text-gray-700">Date</TableHead>
                            <TableHead className="font-bold text-gray-700">Customer</TableHead>
                            <TableHead className="hidden sm:table-cell font-bold text-gray-700">Email</TableHead>
                            <TableHead className="font-bold text-gray-700">Total</TableHead>
                            <TableHead className="font-bold text-gray-700">Status</TableHead>
                            <TableHead className="hidden sm:table-cell font-bold text-gray-700">Delivery</TableHead>
                            <TableHead className="text-right pr-6 font-bold text-gray-700">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <OrdersComponent orders={orders} />
                      </Table>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side: Support Components */}
              <div className="space-y-6">
                <Card className="border-none shadow-md bg-zinc-900 text-white overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <MessageCircleQuestion size={20} className="text-teal-400" />
                      Need Support?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-zinc-400 leading-relaxed">
                    Questions about your transport? Our handlers are available 24/7.
                    <Button variant="secondary" className="w-full mt-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Truck size={20} className="text-blue-600" />
                      Transport Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-[11px] text-gray-500 space-y-4">
                    <div className="pb-2 border-b border-gray-100">
                      <p className="font-bold text-gray-800 uppercase tracking-tight">Private</p>
                      <p>Direct door-to-door. 24-48hr turnaround.</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 uppercase tracking-tight">Multi-stop</p>
                      <p>Shared routes. 3-7 business days.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm mx-auto max-w-2xl">
            <div className="p-5 bg-gray-50 rounded-full mb-4">
               <FileX className="h-10 w-10 text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">No history found</h2>
            <p className="mt-2 text-sm text-gray-500 text-center px-6">
              Your future exotic pet orders and transport details will appear right here.
            </p>
            <Button asChild className="mt-8 rounded-full px-10 bg-black hover:bg-zinc-800 shadow-lg">
              <Link href="/shop">Browse Animals</Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OrdersPage;