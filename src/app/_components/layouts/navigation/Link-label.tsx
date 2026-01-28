"use client";

import Image, { type StaticImageData } from "next/image";

const LinkLabel: React.FC<{
  img?: StaticImageData;
  label: string;
  route: string;
  handleNavigation: (path: string) => void;
}> = ({ img, label, route, handleNavigation }) => {
  return (
    <button onClick={() => handleNavigation(`${route.toLowerCase()}`)}>
      {img && (
        <figure className="h-10 w-10 ">
          <Image
            src={img}
            alt={`${label} Logo`}
            width={100}
            height={100}
            className="object-contain cursor-pointer"
          />
        </figure>
      )}
      {!img && (
        <span className="cursor-pointer transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4">
          {label}
        </span>
      )}
    </button>
  );
};

export default LinkLabel;
