import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image, { StaticImageData } from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";

import { zellePay,sendPaypal,cashApp, bankTransfer } from "@/images";
import { paypalIcon,
  zelleIcon,
  cashappIcon,
  bitcoinIcon,
} from "@/images";

interface OrderDetailsDialogProps {
  order: MY_ORDERS_QUERYResult[number] | null;
  isOpen: boolean;
  onClose: () => void;
}

/* ================= PAYMENT CONFIG ================= */

type PaymentKey = "paypal" | "zelle" | "cashapp" | "bank";

const PAYMENT_CONFIG: Record<
  PaymentKey,
  {
    label: string;
    hero: StaticImageData; 
    icon: StaticImageData; 
    instructions: React.ReactNode;
  }
> = {
  paypal: {
    label: "PayPal Friends & Family",
    hero: sendPaypal,
    icon: paypalIcon,
    instructions: (
      <>
        <p>Send payment via PayPal Friends & Family.</p>
        <p className="mt-1">
          <strong>Email:</strong> paypal@earanch.com
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Include your Order Number in the notes.
        </p>
      </>
    ),
  },
  zelle: {
    label: "Zelle",
    hero: zellePay,
    icon: zelleIcon,
    instructions: (
      <>
        <p>Send payment instantly using Zelle.</p>
        <p className="mt-1">
          <strong>Email:</strong> payments@earanch.com
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Memo must include Order Number.
        </p>
      </>
    ),
  },
  cashapp: {
    label: "Cash App",
    hero: cashApp,
    icon: cashappIcon,
    instructions: (
      <>
        <p>Pay using Cash App.</p>
        <p className="mt-1">
          <strong>Cashtag:</strong> $EARanch
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Add Order Number in the “For” field.
        </p>
      </>
    ),
  },
  bank: {
    label: "Bank Transfer",
    hero: bankTransfer,
    icon: bitcoinIcon,
    instructions: (
      <p className="text-sm text-gray-600">
        Bank transfer details will be sent via email after order confirmation.
      </p>
    ),
  },
};

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) return null;

  /* ===== SAFE PAYMENT KEY RESOLUTION ===== */
  const rawMethod = order.paymentMethod as string | null;
  const paymentKey =
    typeof rawMethod === "string"
      ? (rawMethod.toLowerCase() as PaymentKey)
      : null;

  const paymentConfig = paymentKey
    ? PAYMENT_CONFIG[paymentKey]
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-scroll p-6">

        <DialogHeader>
          <DialogTitle>
            Order Details — {order.orderNumber}
          </DialogTitle>
        </DialogHeader>

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {/* LEFT — CUSTOMER INFO */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <strong>Customer:</strong>
              <span>{order.customerName}</span>
            </div>

            <div className="flex justify-between">
              <strong>Email:</strong>
              <span>{order.email}</span>
            </div>

            <div className="flex justify-between">
              <strong>Date:</strong>
              <span>
                {order.orderDate
                  ? new Date(order.orderDate).toLocaleDateString()
                  : "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <strong>Status:</strong>
              <span className="capitalize text-green-600 font-medium">
                {order.status}
              </span>
            </div>

            {order.address && (
              <div className="flex justify-between">
                <strong>
                  Shipping Address:
                </strong>
                <span className="leading-5 text-gray-600">
                  {order.address.name} — {order.address.address},{" "}
                  {order.address.city},<br /> {order.address.state}{" "}
                  {order.address.zip}, {order.address.country}
                </span>
              </div>
            )}
            {order.address && (
              <div className="flex justify-between">
                  <p>
                    <strong>Phone:</strong> <span>{order.address.phone}</span>
                  </p>
              </div>
            )}
            
            {paymentConfig && (
              <div className="flex items-center justify-between mt-4 gap-3">
                {/* LEFT — ICON */}
                <Image
                  src={paymentConfig.icon}
                  alt={paymentConfig.label}
                  width={28}
                  height={28}
                />

                {/* MIDDLE — LABEL */}
                <span className="flex-1 text-sm font-medium text-black">
                  {paymentConfig.label}
                </span>

                {/* RIGHT — STATUS BADGE */}
                {order.status === "paid" ? (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full
                    bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Payment Done
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full
                    bg-amber-100 text-amber-700 border border-amber-200">
                    Pending Payment
                  </span>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — PAYMENT INSTRUCTIONS */}
          <div className="border rounded-lg p-4 text-sm">
            <p className="font-semibold mb-2">
              Payment Instructions
            </p>

            {paymentConfig ? (
              <div className="space-y-2">
                <Image
                  src={paymentConfig.hero}
                  alt={paymentConfig.label}
                  className="w-full rounded-md border"
                />
                <div className="text-gray-700">
                  {paymentConfig.instructions}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                Payment method not specified.
              </p>
            )}
          </div>
        </div>

        {/* ================= PRODUCTS TABLE ================= */}
        <div className="mt-4 border rounded-md hover:shadow-md ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {order.products?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-2 font-medium">
                    {item?.product?.images?.[0] && (
                      <Image
                        src={urlFor(item.product.images[0]).url()}
                        alt="product"
                        width={50}
                        height={50}
                        className="border rounded-sm"
                      />
                    )}
                    {item?.product?.name}
                  </TableCell>
                  <TableCell>{item?.quantity ?? 0}</TableCell>
                  <TableCell>
                    <PriceFormatter
                      amount={item?.product?.price ?? 0}
                      className="text-black font-medium"
                    />
                  </TableCell>
                </TableRow>
              ))}
              {/* DISCOUNT */}
              {order.amountDiscount ? (
                <TableRow>
                  <TableCell />
                  <TableCell className="font-medium">
                    Discount
                  </TableCell>
                  <TableCell className="font-bold text-black">
                    <PriceFormatter amount={order.amountDiscount} />
                  </TableCell>
                </TableRow>
              ) : null}

              {/* SUBTOTAL */}
              {order.amountDiscount ? (
                <TableRow>
                  <TableCell />
                  <TableCell className="font-medium">
                    Subtotal
                  </TableCell>
                  <TableCell className="font-bold text-black">
                    <PriceFormatter
                      amount={
                        (order.totalPrice ?? 0) +
                        (order.amountDiscount ?? 0)
                      }
                    />
                  </TableCell>
                </TableRow>
              ) : null}

              {/* TOTAL */}
              <TableRow>
                <TableCell />
                <TableCell className="font-semibold">
                  Total
                </TableCell>
                <TableCell className="font-bold text-black">
                  <PriceFormatter amount={order.totalPrice ?? 0} />
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
