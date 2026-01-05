import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navigation/ResponsiveNav";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Halemo Restaurant",
  description: "Luxury seafood restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased transition-all duration-200`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
