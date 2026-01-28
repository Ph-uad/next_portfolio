"use client";

import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import LinkLabel from "../_components/layouts/navigation/Link-label";
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";

const HomePage: React.FC = () => {
  const home_container = useRef<HTMLDivElement | null>(null);
  const handleNavigation = useHandleNavigation();
  useGSAP(
    () => {
      gsap.to(home_container.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.in(0.7)",
      });
      const targets = gsap.utils.toArray(["h1", "p", "h4", "a"]);
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
    { scope: home_container, dependencies: [] },
  );

  return (
    <header
      ref={home_container}
      className="flex-1 flex flex-col max-h-[80vh] items-center p-10 "
    >
      <div className="h-fit flex flex-col items-center text-center p-10">
        <div className="flex">
          <h1 className="text-title uppercase font-extrabold leading-none">
            Phuad
          </h1>
          <span className="uppercase">NG</span>
        </div>
        <p className="text-body md:w-3/5">
          A <strong className="font-extrabold">software engineer</strong>{" "}
          passionate about{" "}
          <strong className="font-extrabold">digital transformation</strong> and
          collaborating with{" "}
          <strong className="font-extrabold">creative minds</strong>, including
          developers, UI/UX designers, and stakeholders. Additionally, I enjoy{" "}
          <strong className="font-extrabold">
            analyzing complex data sets{" "}
          </strong>{" "}
          to extract{" "}
          <strong className="font-extrabold">valuable insights</strong>, which
          brings me a profound sense of satisfaction.
        </p>
      </div>
      {/* <figure className="w-3/6 h-1/3 aspect-video bg-neutral-900 relative ">
        <Image
          src={Hero}
          alt="Hero Image"
          fill
          priority
          className="object-cover w-full h-full opacity-90"
        />
      </figure> */}
      <div className="">
        <div className="mt-6 px-6 py-3 border-2 border-white rounded-full text-2xl font-medium hover:bg-white hover:text-black transition-colors duration-300 ease-in-out  hover:underline-offset-8">
          <LinkLabel
            label="View My Work"
            route="/projects"
            handleNavigation={() => handleNavigation("/projects")}
          />
        </div>
      </div>
    </header>
  );
};

export default HomePage;
