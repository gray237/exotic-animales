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
              title: "Axolotls (Amphibians)",
              href: "/category/axolotls",
            },
            {
              title: "Marsupials",
              href: "/category/marsupials",
            },
            {
              title: "Rodents & Capybaras",
              href: "/category/rodents",
            },
            {
              title: "Lizards & Geckos",
              href: "/category/geckos",
            },
            {
              title: "Snakes & Pythons",
              href: "/category/snakes-pythons",
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
            href: "/adopt",
          },
          {
            title: "Mum-Raised",
            href: "/adopt",
          },
          {
            title: "Wholesale/Breeder",
            href: "/about",
          },
          {
            title: "Rescue & Rehoming",
            href: "/adopt",
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
      type: "mega",
      align: "center",

      sections: [
        {
          title: "Pet Care Guides",
          links: [
            {
              title: "Pet Care Sheets",
              href: "/care-sheets",
            },
            {
              title: "Exotic Vet Guide",
              href: "/vet-guide",
            },
            {
              title: "State Legality Map",
              href: "/legality-map",
            },
            {
              title: "Live-Animal Shipping",
              href: "/shipping-process",
            },
            {
              title: "Bioactive Setup Guides",
              href: "/bioactive-guides",
            },
          ],
        },

        {
          title: "E.A Ranch",
          links: [
          {
            title: "FAQ",
            href: "/faq",
          },

          {
            title: "Payment Options",
            href: "/payment",
          },
          {
            title: "About E.A Ranch",
            href: "/about",
          },
          {
            title: "Rescue & Rehoming",
            href: "/adopt",
          },
          {
            title: "Exotic Pet Boarding",
            href: "/pet-boarding",
          },
        ],
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
export const informationData = [
  { title: "Exotic Vet Guide", href: "/vet-guide" },
  { title: "Rescue & Rehoming", href: "/rescue-rehoming" },
  { title: "State Legality Map", href: "/legality-map" },
  { title: "Exotic Pet Boarding", href: "/pet-boarding" },
  { title: "Live-Animal Shipping", href: "/shipping-process" },
  { title: "Bioactive Setup Guides", href: "/bioactive-guides" },
];
export const productType = [
  { title: "Mammals", value: "mammals" },
  { title: "Reptiles", value: "reptiles" },
  { title: "Amphibians", value: "amphibians" },
  { title: "Birds", value: "birds" },
  { title: "Pet Supplies", value: "supplies" },
];
