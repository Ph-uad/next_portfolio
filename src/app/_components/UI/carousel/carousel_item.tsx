"use client";

import React from "react";

interface CarouselItemProps {
  children: React.ReactNode;
  classname?: string;
}

const CarouselItem = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {

  return (
    <li className="w-full h-full flex-shrink-0">
      <h2 className={` w-screen h-full absolute  z-1000 ${classname || ""}`}>
        {children}
      </h2>
    </li>
  );
};

export default CarouselItem;
