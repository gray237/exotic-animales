import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exoticanimales.com"),
  title: {
    default: "Exotic Animales Ranch | USDA Licensed Exotic Pets Breeder in Texas",
    template: "%s | Exotic Animales Ranch",
  },
  description: "Exotic Animales Ranch is a USDA-licensed exotic pet breeder based in Texas. We offer axolotls, baby hedgehogs, sugar gliders, fennec foxes, lemurs, reptiles, and small mammals for sale, with expert guidance from inquiry to delivery.",

  alternates: {
    canonical: "https://www.exoticanimales.com/",
  },
  openGraph: {
  type: "website",
  url: "https://www.exoticanimales.com",
  title: "Exotic Animales Ranch | USDA Licensed Exotic Pets Breeder in Texas",
  description:
    "USDA-licensed exotic pet breeder in Texas offering hedgehogs, sugar gliders, fennec foxes, lemurs, axolotls, reptiles, and more.",
}
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
