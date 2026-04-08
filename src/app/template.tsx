"use client";

import * as React from "react";
import MainNavigation from "./_components/layouts/navigation/Navigation";

import "./globals.css";

export default function Template({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      {children}
      {/* <Footer /> */}
    </>
  );
}
