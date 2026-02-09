import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Manrope, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// Load fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","500","600","700"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["400","500","600","700"]
});

export const metadata = {
  metadataBase: new URL("https://www.exoticanimales.com"),
  title: {
    default: "Exotic Animales Ranch | Hand-Raised Exotic Pets",
    template: "%s | Exotic Animales Ranch",
  },
  description:
    "USDA-licensed exotic animal ranch specializing in hand-raised exotic pets including fennec foxes, sugar gliders, hedgehogs, lemurs and more.",
  openGraph: {
    title: "Exotic Animales Ranch | Hand-Raised Exotic Pets",
    description:
      "USDA-licensed exotic animal ranch specializing in hand-raised exotic pets including fennec foxes, sugar gliders, hedgehogs, lemurs and more.",
    url: "https://www.exoticanimales.com",
    siteName: "Exotic Animales Ranch",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />

        {/* ✅ Google Analytics */}
        <GoogleAnalytics gaId="G-THLKY59MFR" />
      </body>
    </html>
  );
};

export default RootLayout;
