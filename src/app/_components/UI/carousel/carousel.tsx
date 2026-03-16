"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import CarouselItem from "./carousel_item";
import { useGSAP } from "@gsap/react";

const Carousel = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [carouselState, setCarouselState] = useState({
    direction: 0,
    activeIndex: 0,
  });

  const handleClick = (args: Partial<typeof carouselState>) => {
    if (args.activeIndex !== undefined) {
      if (args.activeIndex < 0) {
        args.activeIndex = 0;
      } else if (args.activeIndex > 2) {
        args.activeIndex = 2;
      }
    }
    setCarouselState((prev) => ({ ...prev, ...args }));
  };

  useGSAP(
    () => {
      console.log("Direction:", carouselState);
      gsap.to("#carousel", {
        x: -carouselState.activeIndex * 100 + "vw",
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container, dependencies: [carouselState] },
  );

  return (
    <div
      ref={container}
      className="w-full h-full bg-gray-200 relative overflow-hidden"
    >
      <ul className="flex h-full" id="carousel">
        <CarouselItem classname="bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
          Slide 1
        </CarouselItem>

        <li className="flex-shrink-0 w-screen h-full bg-red-500  flex items-center justify-center text-white text-xl font-bold">
          Slide 1
        </li>
        <li className="flex-shrink-0 w-screen h-full bg-green-500 rounded--4 flex items-center justify-center text-white text-xl font-bold">
          Slide 2
        </li>
        <li className="flex-shrink-0 w-screen h-full bg-blue-500 rounded-l4 flex items-center justify-center text-white text-xl font-bold">
          Slide 3
        </li>
      </ul>
      {carouselState.activeIndex > 0 && (
        <button
          onClick={() =>
            handleClick({
              direction: -1,
              activeIndex: carouselState.activeIndex - 1,
            })
          }
          className="absolute h-full w-1/2 inset-0 cursor-default bg-green-400/20"
        ></button>
      )}
      {carouselState.activeIndex < 2 && (
        <button
          onClick={() =>
            handleClick({
              direction: 1,
              activeIndex: carouselState.activeIndex + 1,
            })
          }
          className="absolute h-full w-1/2 inset-0 cursor-default bg-blue-400/20 ml-auto"
        ></button>
      )}
    </div>
  );
};

export default Carousel;
