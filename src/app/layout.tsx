import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth | E-Commerce Developer & Shopify Expert",
  description:
    "Portfolio of Siddharth — a Shopify & E-Commerce developer with 2+ years of experience building high-performance online stores. Specializing in Liquid, JavaScript, React, and Next.js.",
  keywords: [
    "Siddharth",
    "Shopify Developer",
    "E-Commerce Developer",
    "Frontend Developer",
    "Liquid",
    "JavaScript",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Siddharth" }],
  openGraph: {
    title: "Siddharth | E-Commerce Developer & Shopify Expert",
    description:
      "Portfolio of Siddharth — a Shopify & E-Commerce developer with 2+ years of experience building high-performance online stores.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth | E-Commerce Developer",
    description:
      "Shopify & E-Commerce developer with 2+ years of experience building high-performance online stores.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">{children}</body>
    </html>
  );
}
