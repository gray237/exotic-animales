import { StaticImageData } from "next/image";
// Import your vet-specific images here later
// import { vetHero, texasVetImg } from "@/images"; 

export interface VetClinic {
  name: string;
  slug: string;
  state: string; // Used for filtering
  city: string;
  address: string;
  phone: string;
  website: string;
  emergency: boolean;
  specialties: string[];
  description: string;
  image?: string | StaticImageData;
}

export const vetData: VetClinic[] = [
  {
    name: "Texas Avian & Exotic Hospital",
    slug: "texas-avian-exotic-hospital",
    state: "Texas",
    city: "Grapevine",
    address: "2700 West State Hwy 114, Grapevine, TX 76051",
    phone: "(817) 951-1451",
    website: "https://www.texasavianeexotic.com/",
    emergency: true,
    specialties: ["Birds", "Reptiles", "Kangaroo", "Primates", "Small Mammals"],
    description: "Texas Avian & Exotic Hospital is one of the nation’s largest veterinary hospitals exclusively dedicated to the health and medical care of birds and exotic pets. As a client, you have access to comprehensive veterinary services for a diverse range of species, including birds, reptiles, small mammals, New World primates, lemurs, kangaroos, wallabies, and even fish. Their highly trained exotic animal veterinarians provide advanced diagnostics and modern treatment solutions within a fully equipped, state-of-the-art medical facility. From routine wellness exams and preventive care to complex surgical procedures and specialized treatments, your animals receive attentive, expert-level care. The hospital emphasizes a collaborative approach, working closely with you to support your pet’s health not only during clinical visits but also through proper care practices at home.",
  },
  {
    name: "Gulf Coast Veterinary Specialists",
    slug: "gulf-coast-vet-specialists-houston",
    state: "Texas",
    city: "Houston",
    address: "8042 Katy Fwy, Houston, TX 77024",
    phone: "(713) 693-1111",
    website: "https://www.gcvs.com/",
    emergency: true,
    specialties: ["Avian", "Exotic Mammals", "Reptiles"],
    description: "One of the largest specialty hospitals in the country, offering 24/7 emergency care and advanced diagnostic imaging for exotics.",
  },
  // Add more nationwide vets here...
];