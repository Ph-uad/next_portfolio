"use client";
 
import React, { useRef } from "react";  
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";
import Carousel from "../_components/UI/carousel/carousel";

const HomePage: React.FC = () => {
  const home_container = useRef<HTMLDivElement | null>(null);
  const handleNavigation = useHandleNavigation();

  return (
    <main className="w-screen h-screen">
     
      <Carousel />
   
      </main>
  );
};

export default HomePage;
