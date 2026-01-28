"use client";

import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const Transition: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const { isExiting } = usePageTransition((state: any) => state);

  useGSAP(
    () => {
      if (isExiting) {
        gsap.to(container.current, {
          // y: "-100vw",
          scale: 0.4,
          opacity: 0.1,
          filter: "greyscale(100%) blur(10px)",
          duration: 1.5,
          ease: "back.in(2)",
        });
      } else {
        gsap.to(container.current, {
          // y: "0",
          scale: 0.9, 
          opacity: 1,
          filter: "greyscale(0%) blur(0px)",
          duration: 1.5,
          delay: 0.2,
          ease: "back.out(2)",
        });
      }
    },
    { scope: container, dependencies: [isExiting] },
  );

  useEffect(() => {
    gsap.set(container.current, { x: "0", opacity: 1, scale: 1 });
  }, []);

  return (
    <div ref={container} className="page">
      {children}
    </div>
  );
};

export default Transition;
