"use client";

import React from "react";

interface CarouselItemProps {
  // children ?: React.ReactNode;
  classname?: string;
}

const CarouselItem = ({
  // children,
  classname,
}: {
  // children: React.ReactNode; 
  classname?: string;
}) => {

  return (
    <li className={`w-full h-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold ${classname ?? ''}`}>
      {/* <h2>
        {children ? children : ""}
      </h2>  */}
    </li>
  );
}

export default CarouselItem;
