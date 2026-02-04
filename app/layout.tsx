import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Manrope, Space_Grotesk } from "next/font/google";

// Load fonts
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400","500","600","700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-head", weight: ["400","500","600","700"] });

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
      </body>
    </html>
  );
};

export default RootLayout;
