import React from "react";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import ProofSection from "@/components/ProofSection";
import ContactFaq from "@/components/ContactFaq";
import { exoticAnimalsRanch } from "@/images";

// ------------------- STATIC METADATA -------------------
export const metadata = {
  title: "Contact Us | Exotic Animales",
  description:
    "Get in touch with Exotic Animales for inquiries about exotic pets, orders, pet care, or support. Our team is here to help you with your exotic pet journey.",
  keywords:
    "contact Exotic Animales, exotic pets support, exotic pet inquiries, pet care questions",
  openGraph: {
    title: "Contact Us | Exotic Animales",
    description:
      "Get in touch with Exotic Animales for inquiries about exotic pets, orders, pet care, or support. Our team is here to help you with your exotic pet journey.",
    url: "https://www.exoticanimales.com/contact",
    siteName: "Exotic Animales",
    type: "website",
    images: [
      {
        url: exoticAnimalsRanch.src,
        width: exoticAnimalsRanch.width,
        height: exoticAnimalsRanch.height,
        alt: "Contact Exotic Animales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Exotic Animales",
    description:
      "Get in touch with Exotic Animales for inquiries about exotic pets, orders, pet care, or support. Our team is here to help you with your exotic pet journey.",
    images: [exoticAnimalsRanch.src],
  },
};

// ------------------- PAGE COMPONENT -------------------
const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactSection />
      <ProofSection />
      <ContactFaq />
    </div>
  );
};

export default ContactPage;
