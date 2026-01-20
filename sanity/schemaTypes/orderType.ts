import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,

  fields: [
    // ===================== CORE =====================
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      initialValue: "processing",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Out for Delivery", value: "out_for_delivery" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    }),

    // ===================== CUSTOMER =====================
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    // ===================== SHIPPING =====================
    defineField({
      name: "address",
      title: "Shipping Address",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "street", title: "Street Address", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
        defineField({ name: "phone", title: "Phone Number", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string" }),
      ],
    }),
    defineField({
      name: "deliveryOption",
      title: "Delivery Option",
      type: "string",
      options: {
        list: [
          { title: "Private Transport", value: "private" },
          { title: "Multi-stop Transport", value: "multi" },
        ],
      },
    }),

    // ===================== PAYMENT =====================
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "transportDeposit",
      title: "Transport Deposit",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "healthCertificate",
      title: "Health Certificate",
      type: "boolean",
      initialValue: false,
    }),

    // ===================== PRODUCTS =====================
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `${(select.price || 0) * select.quantity} ${
                  select.currency || "USD"
                }`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),

    // ===================== TOTALS =====================
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "USD",
    }),
    defineField({
      name: "amountDiscount",
      title: "Amount Discount",
      type: "number",
      initialValue: 0,
    }),
  ],

  // ===================== PREVIEW =====================
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(
        0,
        5
      )}...${select.orderId.slice(-5)}`;
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} • ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});
