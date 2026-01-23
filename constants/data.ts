import { smallExoticPetsSale } from "@/images";

export const headerData = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Pet Store",
    href: "/shop",
    children: {
      type: "mega",
      align: "center",

      sections: [
        {
          title: "Exotic Pets",
          links: [
            {
              title: "Placental Mammals",
              href: "/category/placental-mammals",
            },
            {
              title: "Marsupials",
              href: "/category/marsupials",
            },
            {
              title: "Rodents",
              href: "/category/rodents",
            },
            {
              title: "Axolotls",
              href: "/category/axolotls",
            },
          ],
        },

        {
          title: "Pet Supplies",
          links: [
            {
              title: "Pet Care Kits",
              href: "/category/pet-care-kits",
            },
            {
              title: "Exotic Pet Foods",
              href: "/category/exotic-pet-foods",
            },
            {
              title: "Feeding & Water Dishes",
              href: "/category/pet-dishes",
            },
            {
              title: "Heaters & Lighting",
              href: "/category/heaters-lighting",
            },
            {
              title: "Terrarium & Cage Supplies",
              href: "/category/terrarium-cage-supplies",
            },
          ],
        },
      ],

      featured: {
        title: "Featured",
        items: [
          {
            title: "Hand-Raised",
            href: "/hand-raised",
          },
          {
            title: "Mum-Raised",
            href: "/mum-raised",
          },
          {
            title: "Learn More",
            href: "/about-us",
          },
        ],
        image: smallExoticPetsSale,
      },
    },
  },

  {
    title: "Deals",
    href: "/deals",
  },

  {
    title: "Info",
    href: "#",
    children: {
      type: "dropdown",
      links: [
        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "Pet Care Sheets",
          href: "/care-sheets",
        },
        {
          title: "About E.A Ranch",
          href: "/about",
        },
        {
          title: "Payment Options",
          href: "/payment",
        },
        {
          title: "Terms & Conditions",
          href: "/terms",
        },
        {
          title: "Pet Delivery & Pickup",
          href: "/delivery",
        },
      ],
    },
  },

  {
    title: "Blog",
    href: "/blog",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

export const quickLinksData = [
  { title: "FAQs", href: "/faq" },
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Pet Care Sheets", href: "/care-sheets" },
  { title: "Payment Options", href: "/payment" },
  { title: "Terms & Conditions", href: "/terms" },
];
export const categoriesData = [
  { title: "Axolotls", href: "axolotls" },
  { title: "Rodents", href: "rodents" },
  { title: "Marsupials", href: "marsupials" },
  { title: "Placental Mammals", href: "placental-mammals" },
  { title: "Pet Care Kits ", href: "pet-care-kits" },
  { title: "Exotic Pet Foods", href: "exotic-pet-foods" },
];
export const productType = [
  { title: "Mammals", value: "mammals" },
  { title: "Reptiles", value: "reptiles" },
  { title: "Amphibians", value: "amphibians" },
  { title: "Birds", value: "birds" },
  { title: "Pet Supplies", value: "supplies" },
];
