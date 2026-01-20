"use client";

import Container from "@/components/Container";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useAuth, useUser } from "@clerk/nextjs";
import useStore from "@/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { urlFor } from "@/sanity/lib/image";

import {
  paypalIcon,
  zelleIcon,
  cashappIcon,
  bitcoinIcon,
} from "@/images";

const TRANSPORT_DEPOSIT_FEE = 100;
const HEALTH_CERTIFICATE_FEE = 100;

const paymentLogos = {
  PayPal: paypalIcon,
  Zelle: zelleIcon,
  CashApp: cashappIcon,
  Bank: bitcoinIcon,
};

const CheckoutPage = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const groupedItems = useStore((state) => state.getGroupedItems()) || [];
  const getTotalPrice = useStore((state) => state.getTotalPrice) || (() => 0);

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    country: "USA",
  });

  const [deliveryOption, setDeliveryOption] = useState("private");
  const [transportDeposit, setTransportDeposit] = useState(true);
  const [healthCertificate, setHealthCertificate] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const depositFee = transportDeposit ? TRANSPORT_DEPOSIT_FEE : 0;
  const healthFee = healthCertificate ? HEALTH_CERTIFICATE_FEE : 0;

  const subtotal = getTotalPrice();
  const total = subtotal + depositFee + healthFee;

  const handleCheckout = async () => {
    if (!groupedItems.length) {
      toast.error("Your cart is empty!");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (
      !address.name ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zip
    ) {
      toast.error("Please complete your delivery address.");
      return;
    }

    try {
      const payloadItems = groupedItems.map((item) => ({
        product: {
          _id: item.product?._id || "",
        },
        quantity: useStore.getState().getItemCount(item.product?._id || ""),
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: payloadItems,
          address,
          paymentMethod,
          deliveryOption,
          transportDeposit,
          healthCertificate,
          total,
          user,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");

      toast.success("Order placed successfully!");
      window.location.href = `/success?orderNumber=${data.orderNumber}&paymentMethod=${paymentMethod}`;
    } catch (err: any) {
      toast.error(err.message || "Checkout failed");
    }
  };

  if (!isSignedIn) {
    return (
      <div className="text-center py-20 text-gray-600">
        Please sign in to checkout.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-20">
      {/* ================= PAGE HEADER ================= */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-gray-400/30">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Checkout
          </h1>

          {/* Glass-like 3-step progress bar */}
          <div className="mt-8 relative h-10 w-full max-w-xl mx-auto rounded-full bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <div
              className="absolute left-0 top-0 h-full w-4/5 bg-white/80 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500"
            ></div>

            <div className="absolute inset-0 flex justify-between items-center px-4 text-sm font-semibold">
              <span className="text-gray-400">Shop</span>
              <span className="text-gray-400">Cart</span>
              <span className="text-gray-900">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-4">
            {groupedItems.map((item, idx) => {
              const product = item?.product;
              if (!product) return null;

              const qty = useStore.getState().getItemCount(product._id || "");
              const price = product.price ?? 0;
              const imageUrl = product.images?.[0]
                ? urlFor(product.images[0]).url()
                : "";

              return (
                <Card key={idx} className="border border-white/30">
                  <CardContent className="flex items-center gap-4">
                    {imageUrl && (
                      <div className="border p-1 rounded-md w-32 h-32 shrink-0 overflow-hidden">
                        <img
                          src={imageUrl}
                          className="w-full h-full object-cover rounded-sm"
                          alt={product.name || "Product"}
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div>
                        <p className="font-semibold text-lg">{product.name || "Product"}</p>
                        {product.variant && <p className="text-sm text-gray-600">Variant: {product.variant}</p>}
                        {product.status && <p className="text-sm text-gray-600">Status: {product.status}</p>}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <PriceFormatter amount={price * qty} />
                        <QuantityButtons product={product} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Delivery + Options */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    className="border rounded p-2"
                    placeholder="Full Name"
                    value={address.name}
                    onChange={(e) =>
                      setAddress({ ...address, name: e.target.value })
                    }
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="Phone Number"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({ ...address, phone: e.target.value })
                    }
                  />
                  <input
                    className="border rounded p-2 md:col-span-2"
                    placeholder="Street Address"
                    value={address.street}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="State"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="ZIP Code"
                    value={address.zip}
                    onChange={(e) =>
                      setAddress({ ...address, zip: e.target.value })
                    }
                  />
                  <select
                    className="border rounded p-2"
                    value={address.country}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  >
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                <Separator />

                <h4 className="font-semibold mb-2">Shipping Options</h4>
                <RadioGroup
                  value={deliveryOption}
                  onValueChange={setDeliveryOption}
                  className="flex gap-10"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="private" />
                    <Label htmlFor="private">Private Transport</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multi" id="multi" />
                    <Label htmlFor="multi">Multi-stop Transport</Label>
                  </div>
                </RadioGroup>

                <Separator />

                {/* ADDITIONAL OPTIONS */}
                <div>
                  <h4 className="font-semibold mb-3">Additional Options</h4>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={transportDeposit}
                      onChange={() =>
                        setTransportDeposit(!transportDeposit)
                      }
                    />
                    <Label>
                      <span className="font-semibold tracking-wide leading-5">
                        TRANSPORT DEPOSIT:
                      </span>{" "}
                      <p className="text-sm text-gray-600 leading-6 mt-1">
                        A nonrefundable deposit of <strong>${TRANSPORT_DEPOSIT_FEE}</strong> is
                        required to book your exotic pet's transport. Private transporters or
                        multi-stop transports of larger animals will require
                        a larger deposit (up to 75-100% of the delivery fee).
                      </p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <input
                      type="checkbox"
                      checked={healthCertificate}
                      onChange={() =>
                        setHealthCertificate(!healthCertificate)
                      }
                    />
                    <Label>
                      <span className="font-semibold tracking-wide leading-5">
                        HEALTH CERTIFICATE:
                      </span>{" "}
                      <p className="text-sm text-gray-600 leading-6 mt-1">
                        Required for interstate transport of all animals except hedgehogs
                        and sugar gliders. A <strong>${HEALTH_CERTIFICATE_FEE}</strong> fee will be added to your total for a physical examination and health certificate from a licensed veterinarian.
                      </p>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  {Object.entries(paymentLogos).map(([key, logo]) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 p-2 border rounded-md hover:shadow-md cursor-pointer"
                    >
                      <RadioGroupItem value={key} id={key} />
                      <img src={logo.src} className="w-10 h-10" />
                      <Label htmlFor={key} className="font-medium">{key}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <PriceFormatter amount={subtotal} />
                </div>
                {transportDeposit && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Transport Deposit</span>
                    <PriceFormatter amount={depositFee} />
                  </div>
                )}
                {healthCertificate && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Health Certificate</span>
                    <PriceFormatter amount={healthFee} />
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <PriceFormatter amount={total} className="text-lg font-bold" />
                </div>
                <Button
                  className="w-full mt-3 rounded-full"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={!paymentMethod}
                >
                  Confirm & Proceed
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
