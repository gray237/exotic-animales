import React from "react";
import { Metadata } from "next";
import BioactiveGuides from "@/components/BioactiveGuides";

export const metadata: Metadata = {
  title: "Bioactive Setup Guides | Complete Reptile & Amphibian Ecosystem Manual",
  description:
    "Step-by-step bioactive enclosure guides for reptiles, amphibians, geckos, frogs, snakes, and invertebrates. Learn substrate layering, clean-up crew selection, lighting, humidity control, plant choices, and ecosystem maintenance to build a thriving natural habitat.",
  keywords: [
    "bioactive enclosure",
    "bioactive terrarium setup",
    "reptile bioactive habitat",
    "bioactive vivarium guide",
    "isopods and springtails",
    "clean up crew for reptiles",
    "reptile substrate layers",
    "humidity control terrarium",
    "natural reptile enclosure",
    "how to build bioactive enclosure",
    "gecko bioactive setup",
    "frog bioactive terrarium"
  ],
  openGraph: {
    title: "Bioactive Setup Guides | Build a Natural Ecosystem for Your Reptile",
    description:
      "Learn how to create a fully functional bioactive enclosure with proper drainage layers, live plants, microfauna, and lighting. Professional guides for reptile and amphibian keepers.",
    type: "website",
    url: "https://exoticanimales.com/bioactive-guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioactive Setup Guides for Reptiles & Amphibians",
    description:
      "Build a thriving, self-sustaining ecosystem with our complete bioactive enclosure guides.",
  },
  alternates: {
    canonical: "https://exoticanimales.com/bioactive-guides",
  },
};

const BioactivePage = () => {
  return <BioactiveGuides />;
};

export default BioactivePage;
