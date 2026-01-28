

import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  weight: ["700", "600", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Phuad's Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Discover the works of a web developer focused on delivering efficient, well‑designed websites.",
  keywords: ["Phuad", "Portfolio", "Next.js", "Web Developer"],
  authors: [{ name: "Phuad" }],
  icons: {
    icon: "/favIcon.png",
    shortcut: "/favIcon.png",
    apple: "/favIcon.png",
  },
  openGraph: {
    title: "Phuad's Portfolio",
    description:
      "Discover the works of a web developer focused on delivering efficient, well‑designed websites.",
    url: "https://your-domain.com", // Replace with actual domain
    siteName: "Phuad's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phuad's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuad's Portfolio",
    description:
      "Discover the works of a web developer focused on delivering efficient, well‑designed websites.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}