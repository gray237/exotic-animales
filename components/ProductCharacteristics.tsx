import { Product } from "@/sanity.types";
import { getBrand } from "@/sanity/queries";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductCharacteristics = async ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const brand = await getBrand(product?.slug?.current as string);

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className="flex flex-col gap-6"
    >
      <AccordionPrimitive.Item
        value="item-1"
        className="group rounded-2xl border border-gray-200 bg-gray-50 
        transition-all duration-300 
        hover:bg-white hover:shadow-md hover:border-shop_dark_green/30
        data-[state=open]:border-shop_dark_green/30 
        data-[state=open]:bg-white 
        data-[state=open]:shadow-lg"
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            className="flex w-full items-center justify-between gap-6 px-4 py-3 text-left outline-none"
          >
            <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-900 group-hover:text-shop_dark_green transition-colors">
              {product?.name}: Characteristics
            </h3>

            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                "border-gray-300 text-gray-600 group-hover:bg-gray-100 group-hover:border-shop_dark_green/30",
                "group-data-[state=open]:border-shop_dark_green/50",
                "group-data-[state=open]:bg-linear-to-br",
                "group-data-[state=open]:from-shop_dark_green",
                "group-data-[state=open]:to-green-600",
                "group-data-[state=open]:text-white"
              )}
            >
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </span>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>

        <AccordionPrimitive.Content
          className="overflow-hidden px-6 transition-all duration-300 ease-in-out 
          data-[state=closed]:animate-accordion-up 
          data-[state=open]:animate-accordion-down"
        >
          <div className="pb-6 text-sm leading-relaxed text-gray-600 space-y-2">
            <p className="flex items-center justify-between">
              Breed:
              {brand && (
                <span className="font-semibold tracking-wide">
                  {brand[0]?.brandName}
                </span>
              )}
            </p>

            <p className="flex items-center justify-between">
              Collection:
              <span className="font-semibold tracking-wide">2026</span>
            </p>

            <p className="flex items-center justify-between">
              Type:
              <span className="font-semibold uppercase tracking-wide">
                {product?.variant}
              </span>
            </p>

            <p className="flex items-center justify-between">
              Stock:
              <span className="font-semibold tracking-wide">
                {product?.stock ? "Available" : "Out of Stock"}
              </span>
            </p>
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export default ProductCharacteristics;
