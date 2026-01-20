import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - Exotic Pets Store - E.A Ranch",
    default: "Exotic Pet Store - E.A Ranch",
  },
  description: "Exotic Animales Ranch is a USDA-Licensed breeder of exotic animals & conservation of endangered species. We offer baby hedgehogs, sugar gliders, fennec foxes, lemurs, turtles, colorful snakes, axolotls, lizards, and more.",
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
