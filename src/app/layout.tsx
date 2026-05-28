import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import type { Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mrxz Labs | Adaptive Digital Creative Engineering Studio",
  description:
    "Mrxz Labs is a next-generation, flow-based digital startup. We construct high-performance fullstack web developments, formulate kinetic graphic brand systems, and engineer viral social pipelines month-by-month as the tech landscape shifts.",
  keywords: [
    "Fullstack Web Development",
    "Next.js 14 Developer",
    "Kinetic Graphic Design",
    "Social Media Growth Management",
    "Adaptive Tech Startup",
    "Digital Creative Agency",
  ],
  authors: [{ name: "Mrxz Labs Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
