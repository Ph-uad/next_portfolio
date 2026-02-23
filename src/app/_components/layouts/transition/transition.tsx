"use client";

import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const Transition: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const container = React.useRef<HTMLDivElement | null>(null);
  // const { isExiting } = usePageTransition((state: any) => state);

  // useGSAP(
  //   () => {
  //     const targets = gsap.utils.toArray("h1, p, h4, a");
  //     if (isExiting) {
  //       gsap.fromTo(
  //         "html",
  //         { background: "linear-gradient(265deg, #e3e2e280, #a2a2a280)" },
  //         {
  //           background: "linear-gradient(5deg, #e3e2e280, #a2a2a280)", 
  //           duration: 1,
  //           delay: 0.1,
  //           ease: "back.out",
  //         },
  //       );
  //     } else {
  //       gsap.fromTo(
  //         targets,
  //         { background: "linear-gradient(5deg, #e3e2e280, #a2a2a280)" },
  //         {
  //          background: "linear-gradient(265deg, #e3e2e280, #a2a2a280)",
  //           duration: 1,
  //           delay: 0.1,
  //           ease: "back.out",
  //         },
  //       );
  //       // gsap.to(container.current, {
  //       //   // y: "0",
  //       //   scale: 0.9,
  //       //   opacity: 1,
  //       //   filter: "grayscale(0%) blur(0px)",
  //       //   duration: 1.5,
  //       //   delay: 0.2,
  //       //   ease: "back.out(2)",
  //       // });
  //     }
  //   },
  //   { dependencies: [isExiting] },
  // );

  // useEffect(() => {
  //   gsap.set(container.current, { x: "0", opacity: 1, scale: 1 });
  // }, []);

  return (
    <div ref={container} className="page">
      {children}
    </div>
  );
};

export default Transition;
