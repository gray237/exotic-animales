"use client";

import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import PriceFormatter from "./PriceFormatter";
import { format } from "date-fns";
import { X, Truck } from "lucide-react";
import { useState } from "react";
import OrderDetailDialog from "./OrderDetailDialog";
import toast from "react-hot-toast";

const OrdersComponent = ({ orders }: { orders: MY_ORDERS_QUERYResult }) => {
  const [selectedOrder, setSelectedOrder] = useState<
    MY_ORDERS_QUERYResult[number] | null
  >(null);

  const handleDelete = () => {
    toast.error("Delete method applied for Admin");
  };

  return (
    <>
      <TableBody>
        <TooltipProvider delayDuration={300}>
          {orders.map((order) => (
            <Tooltip key={order?._id}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-gray-50 h-14 border-b transition-colors group"
                  onClick={() => setSelectedOrder(order)}
                >
                  <TableCell className="font-bold text-gray-900 pl-6">
                    {/* ✅ Removed slice logic - shows full EXO-XXXXXX ID */}
                    {order.orderNumber ?? "N/A"}
                  </TableCell>

                  <TableCell className="hidden md:table-cell text-gray-600 font-medium">
                    {order?.orderDate
                      ? format(new Date(order.orderDate), "MMM dd, yyyy")
                      : "N/A"}
                  </TableCell>

                  <TableCell className="font-medium text-gray-800">
                    {order.customerName}
                  </TableCell>

                  <TableCell className="hidden sm:table-cell text-gray-500">
                    {order.email}
                  </TableCell>

                  <TableCell>
                    <PriceFormatter
                      amount={order?.totalPrice ?? 0}
                      className="text-black font-bold"
                    />
                  </TableCell>

                  <TableCell>
                    {order?.status && (
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          order.status.toLowerCase() === "paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <div className="flex items-center gap-2 text-gray-600 font-medium capitalize">
                      <Truck size={14} className="text-gray-400" />
                      {(order as any)?.deliveryOption || "Standard"}
                    </div>
                  </TableCell>

                  <TableCell
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete();
                    }}
                    className="text-right pr-6"
                  >
                    <X
                      size={18}
                      className="inline-block text-gray-300 group-hover:text-red-500 transition-colors"
                    />
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to see order details</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>
      <OrderDetailDialog
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrdersComponent;