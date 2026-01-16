"use client";

import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { usePageTransition } from "../_providers/usePageTransition";

const HomePage: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { isExiting } = usePageTransition((state: any) => state);

  useGSAP(() => {
    if (isExiting) {
      gsap.to(container.current, {
        y: "-100vh",
        scale: 1,
        opacity: 0.5,
        duration: 1.5,
        ease: "back.in(0.7)",
      });
    } else {
      gsap.to(container.current, {
        y: "100vh",
        scale: 1,
        opacity: 0.5,
        duration: 1.5,
        ease: "back.in(1.7)",
      });
    }
  }, [isExiting]);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { clipPath: "inset(100% 0% 0% 0% )", y: "-100vh", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.inOut",
        }
      );
      const targets = gsap.utils.toArray(["div", "p"]);
      gsap.fromTo(
        targets,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          duration: 0.5,
          delay: 0.1,
          ease: "back.out(1.7)",
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="page">
      <header className="flex-1 flex justify-center items-center p-10">
        <div className="h-fit flex flex-col text-center p-10">
          <div className="heading-container mx-auto">
            <h1 className="text-title font-extrabold leading-normal">Phuad</h1>
          </div>
          <div className="text-container w-4/5 md:w-3/5 self-center">
            <p className="text-body ">
              A <strong className="font-extrabold">software engineer</strong>{" "}
              passionate about{" "}
              <strong className="font-extrabold">digital transformation</strong>{" "}
              and collaborating with{" "}
              <strong className="font-extrabold">creative minds</strong>,
              including developers, UI/UX designers, and stakeholders.
              Additionally, I enjoy{" "}
              <strong className="font-extrabold">
                analyzing complex data sets{" "}
              </strong>{" "}
              to extract{" "}
              <strong className="font-extrabold">valuable insights</strong>,
              which brings me a profound sense of satisfaction.
            </p>
          </div>
        </div>
      </header>
      <div className="self-end p-10 flex flex-col md:flex-row gap-6 md:gap-32 text-right text-xl">
        <div className="flex-grow-0 w-96">
          <h4>Recently,</h4>
          <p>
            {" "}
            just completed an <strong>MS</strong>c in Big Data Analysis{" "}
            <Link
              href="/about#experience"
              className="underline mt-2 mb-6 hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Read More
            </Link>
          </p>
        </div>
        <div className="flex-grow-0">
          <h4>Contact,</h4>
          <ul>
            <li>
              <a href="mailto:temidayo26j@gmail.com">temidayo26j@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
