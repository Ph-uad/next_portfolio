"use client";

import * as React from "react";
import Footer from "./_components/layouts/footer/Footer";
import MainNavigation from "./_components/layouts/navigation/Navigation";
import Transition from "./_components/layouts/transition/transition";

export default function Template({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-between relative">
      <MainNavigation />
      <Transition>{children}</Transition>
      <Footer />
    </div>
  );
}
