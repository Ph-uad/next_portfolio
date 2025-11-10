"use client";

import './globals.css'
import * as React from "react";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '300'], subsets: ['latin'] })

export const metadata = {
  title: {
    default: `Phuad's Portfolio`,
    template: '%s | Phuad'
  },
  description: 'Discover the works of a web developer, with the focus of delivering efficient and well designed website.',
  keywords: ['My Portfolio', 'Next.js'],

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />

      <body className={ roboto.className }>{ children }</body>
    </html>
  )
}
