"use client";

import { DomData } from "@/src/app/_data/domData";
import Article from "./Article";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { metadata } from "../page";



const About: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { isExiting } = usePageTransition((state: any) => state);

  // useGSAP(() => {
  //   if (isExiting) {
  //     gsap.to(container.current, {
  //       y: "-100vh",
  //       scale: 1,
  //       opacity: 0.4,
  //       duration: 1,
  //       ease: "back.in(1.7)",
  //     });
  //   }
  // }, [isExiting]);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["header", "h1", "p", "h4", "a"]);
      gsap.fromTo(
        targets,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          delay: 0.1,
          ease: "back.out(1.7)",
        },
      );
    },
    { scope: container },
  );
  return (
    <main
      ref={container}
      className="page self-start justify-start"
      style={{ justifyContent: "start !important" }}
    >
      <div className="w-3/5 mx-auto h-full relative y-0">
        <Article data={DomData.bio} />
        <Article data={DomData.insight} />
      </div>
      {/* <Process /> */}
    </main>
  );
};

export default About;
