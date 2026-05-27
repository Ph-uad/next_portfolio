"use client";

interface CarouselBackgroundProps {
  classname?: string;
}

const CarouselBackground = ({ classname }: { classname?: string }) => {
  return (
    <li
      className={`w-full h-full flex-shrink-0 flex items-center justify-center text-white text-6xl font-bold ${classname ?? ""}`}
    />
  );
};

export default CarouselBackground;