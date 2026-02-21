"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root 
      className={cn("flex flex-col gap-6", className)} 
      {...props} 
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "group rounded-2xl border transition-all duration-300",
        // Closed State
        "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md hover:border-shop_dark_green/30",
        // Open State
        "data-[state=open]:border-shop_dark_green/30 data-[state=open]:bg-white data-[state=open]:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex w-full items-center justify-between gap-6 px-4 py-2 text-left outline-none",
          className
        )}
        {...props}
      >
        {/* Title Styling */}
        <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-900 group-hover:text-shop_dark_green transition-colors">
          {children}
        </h3>

        {/* The Golden Circle Icon */}
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
            // Icon Closed
            "border-gray-300 text-gray-600 group-hover:bg-gray-100 group-hover:border-shop_dark_green/30",
            // Icon Open (The Green Gradient)
            "group-data-[state=open]:border-shop_dark_green/50 group-data-[state=open]:bg-linear-to-br group-data-[state=open]:from-shop_dark_green group-data-[state=open]:to-green-600 group-data-[state=open]:text-white"
          )}
        >
          <ChevronDown
            className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden px-6 transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-6 text-sm leading-relaxed text-gray-600 
        [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-2 
        [&_li]:mb-1 [&_strong]:text-gray-900 font-medium">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }