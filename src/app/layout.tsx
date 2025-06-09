// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Corrected import

import "./globals.css";
import Navbar from "@/components/navigation/Navbar"; // Assuming @ is src
import Footer from "@/components/navigation/Footer"; // Assuming @ is src

const geistSans = Geist({ // Corrected: Geist is the default export
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({ // Corrected: Geist_Mono is the default export
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLUXECO - Fair Energy Trading",
  description: "Earn what your solar energy is really worth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}