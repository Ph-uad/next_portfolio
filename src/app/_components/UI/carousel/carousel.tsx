"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import CarouselItem from "./carousel_item";
import { useGSAP } from "@gsap/react";
// import Mage from '@/public/backgrounds/bg-texture2.webp'

const Carousel = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [carouselState, setCarouselState] = useState({
    direction: 0,
    activeIndex: 0,
  });

  const handleClick = (args: Partial<typeof carouselState>) => {
    if (args.activeIndex !== undefined) {
      if (args.activeIndex <= 0) {
        args.activeIndex = 0;
      } else if (args.activeIndex >= 4) {
        args.activeIndex = 4;
      }
    }
    setCarouselState((prev) => ({ ...prev, ...args }));
  };

  useGSAP(
    () => {
      gsap.to("#carousel", {
        x: -carouselState.activeIndex * 100 + "vw",
        duration: 2.5,
        ease: "power4.out",
      });
    },
    { scope: container, dependencies: [carouselState] },
  );

  return (
    <div className="w-full h-screen relative">
      <div
        ref={container}
        className="w-full h-full bg-gray-200 relative overflow-hidden"
      >
        <ul className="flex h-full" id="carousel">
          {carouselData.map((item, index) => (
            <CarouselItem
              key={item.id}
              classname={`${item.bg} bg-top bg-cover bg-no-repeat`}
            >
              {item.title}
            </CarouselItem>
          ))}
        </ul>
        {/* Carousel navigation buttons */}
        {/* Carousel Left button */}
        {carouselState.activeIndex > 0 && (
          <button
            onClick={() =>
              handleClick({
                direction: -1,
                activeIndex: carouselState.activeIndex - 1,
              })
            }
            className="absolute h-full w-1/2 inset-0 cursor-default bg-green-400/0"
          ></button>
        )}
        {/* Carousel Right button */}
        {carouselState.activeIndex < carouselData.length - 1 && (
          <button
            onClick={() =>
              handleClick({
                direction: 1,
                activeIndex: carouselState.activeIndex + 1,
              })
            }
            className="absolute h-full w-1/2 inset-0 cursor-default bg-blue-400/0 ml-auto"
          ></button>
        )}
      </div>
      {/* Carousel thumbnails (functional) */}
      <div className="absolute w-screen bottom-10 right-0 ">
        <ul className="w-full h-full flex justify-end space-x-2 px-2">
          {carouselData.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleClick({ activeIndex: index })}
              className={`${item.bg} bg-top bg-cover bg-no-repeat cursor-pointer  border-white/40 rounded-sm w-[5%] aspect-video flex items-center justify-center transition-all ${
                carouselState.activeIndex === index
                  ? "border scale-100"
                  : "scale-90"
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Carousel data,
const carouselData = [
  {
    id: 1,
    title: "Slider 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bg: "bg-coming-soon",
  },
  {
    id: 2,
    title: "Slider 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bg: "bg-coming-soon2",
  },
  {
    id: 3,
    title: "Slider 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bg: "bg-red-500",
  },
  {
    id: 4,
    title: "Slider 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bg: "bg-purple-500",
  },
];

export default Carousel;
