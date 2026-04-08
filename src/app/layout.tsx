


import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  weight: ["700", "600", "400", "300"],
  subsets: ["latin"],
});

// const googleSans = Google_Sans_Flex({
//   weight: ["700", "600", "400", "300"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Phuad's Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Discover the works of a digital enthusiast focused on delivering efficient, well‑designed websites.",
  keywords: ["Phuad", "Portfolio", "Next.js", "Digital Enthusiast"],
  authors: [{ name: "Phuad" }],
  icons: {
    icon: "/favIcon.png",
    shortcut: "/favIcon.png",
    apple: "/favIcon.png",
  },
  openGraph: {
    title: "Phuad's Portfolio",
    description:
      "Discover the works of a digital enthusiast focused on delivering efficient, well‑designed websites.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen flex flex-col justify-between relative bg-[var(--color-black)] text-[var(--color-white)]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

