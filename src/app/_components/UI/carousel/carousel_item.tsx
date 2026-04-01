"use client";

interface CarouselItemProps {
  classname?: string;
}

const CarouselItem = ({ classname }: { classname?: string }) => {
  return (
    <li
      className={`w-full h-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold ${classname ?? ""}`}
    />
  );
};

export default CarouselItem;
