"use client";

import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CarouselItem from "./carousel_item";
import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "framer-motion";
import { PlusIcon } from "lucide-react";

const Carousel = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [carouselState, setCarouselState] = useState({
    direction: 0,
    activeIndex: 0,
  });

  // Keyboard compability scrolls the carousel left and right with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        handleClick({
          direction: -1,
          activeIndex: carouselState.activeIndex - 1,
        });
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        handleClick({
          direction: 1,
          activeIndex: carouselState.activeIndex + 1,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [carouselState]);

  const handleClick = (args: Partial<typeof carouselState>) => {
    if (args.activeIndex !== undefined) {
      if (args.activeIndex <= 0) {
        args.activeIndex = 0;
      } else if (args.activeIndex >= carouselData.length - 1) {
        args.activeIndex = carouselData.length - 1;
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
        <div className="w-full h-full relative">
          <ul className="flex h-full" id="carousel">
            {carouselData.map((item, index) => (
              <CarouselItem
                key={item.id}
                classname={`${item.bg} bg-top bg-cover bg-no-repeat`}
              />
            ))}
          </ul>
          
          {/* Animate text and icons */}
          <AnimatePresence mode="wait">
            <div className="absolute px-[20%] w-full h-[6vh] overflow-y-hidden top-1/2 -translate-y-1/2 left-0 flex items-center justify-between pointer-events-none">
              <motion.div
                key={  carouselData[carouselState.activeIndex]?.id + "-left"}
                animate={{ rotate: carouselState.direction * 90 }}
                transition={{ duration: 0.2 }} 
              >
                <PlusIcon className="text-white/80 w-4 h-4" />
              </motion.div>
              <motion.div
                key={carouselData[carouselState.activeIndex]?.id}
                initial={{ y: carouselState.direction * -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: carouselState.direction * 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=""
              >
                <p className="text-white text-center">
                  {carouselData[carouselState.activeIndex]?.title ?? "Project Title"}
                </p>
              </motion.div>
              <motion.button
                key={carouselData[carouselState.activeIndex]?.id + "-right"}
                animate={{ rotate: carouselState.direction * 90 }}
                transition={{ duration: 0.2 }}
                className=""
              >
                <PlusIcon className="text-white/80 w-4 h-4" />
              </motion.button>
            </div>
          </AnimatePresence>
        </div>
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
        <ul className="w-full flex justify-end space-x-2 px-2">
          {carouselData.map((item, index) => (
            <li key={item.id} className="list-none w-[5%] ">
              <button
                onClick={() => handleClick({ activeIndex: index })}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  carouselState.activeIndex === index ? "true" : undefined
                }
                className={`${item.bg} bg-top bg-cover bg-no-repeat cursor-pointer border-white/40 w-full rounded-sm aspect-video flex items-center justify-center transition-all ${
                  carouselState.activeIndex === index
                    ? "border scale-100"
                    : "scale-90"
                }`}
              ></button>
            </li>
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
