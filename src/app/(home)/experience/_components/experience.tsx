"use client";

import React, { useRef, useState } from "react";
import { CompanyTitle } from "./company_title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClick = (index: number) => {
    setActiveIndex(index);
  };
  const container = useRef<HTMLDivElement | null>(null);
  const { isExiting, pathname } = usePageTransition((state: any) => state);

  useGSAP(() => {
    if (isExiting) {
      gsap.to(container.current, {
        x: "150vw",
        scale: 1.4,
        opacity: 1.6,
        duration: 2,
        delay : 0.5,
        ease: "back.out(0.7)",
      });
    } else {
      gsap.from(container.current, {
        x: "-100vw",
        scale: 0.8,
        opacity: 0.5,
        duration: 1.5,
        ease: "back.out(1.7)",
      });
    }
  }, [isExiting]);

  useGSAP(
    () => {
      gsap.set(".turn-text", { transform: "translate3d(0, 110%, 0)" });
      gsap.set(".company-name", {
        scale: 0.7,
        opacity: 0.5,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(`.company-name:nth-child(${activeIndex + 1})`, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".turn-text-container", {
        height: "fit-content",
        stagger: 0.2,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to("#companies", {
        y: -(activeIndex * 125),
        duration: 1,
        ease: "power2.out",
      });

      gsap.fromTo(
        ".turn-text",
        {
          transform: "translate3d(0, 100%, 0)",
        },
        {
          transform: "translate3d(0, 0%, 0)",
          stagger: 0.2,
          duration: 1.5,
          ease: "sine",
        }
      );
    },
    { scope: container, dependencies: [activeIndex] }
  );

  return (
    <section ref={container} className="py-2 w-4/5 mx-auto flex md:flex-row">
      <div className=" flex-1 w-full h-1/2 ">
        <aside className="flex h-full w-full justify-center items-center gap-10">
          <div className="animation-begin flex items-start w-full">
            <div className="justify-center flex-[0.4] py-6 text-right gap-4 items-center">
              <div className="flex flex-row justify-end gap-4 px-5 h-fit items-center">
                <h3 className="text-title leading-[1.1] uppercase">Phuad</h3>
                <h3 className="">&</h3>
              </div>
            </div>

            <div id="companies" className="flex flex-1 ">
              <ul className="flex flex-col gap-2">
                {Object.keys(experienceData).map((index: any) => {
                  return (
                    <li
                      key={index}
                      className="company-name cursor-pointer"
                      onClick={() => onClick(parseInt(index))}
                    >
                      <CompanyTitle title={experienceData[index]?.company} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <div className="h-1/3 w-1/2 md:w-1/3 self-end">
        <article className="w-full">
          <figure className="turn-text-container  mb-4">
            <strong className="turn-text">
              {experienceData[activeIndex]?.company}
            </strong>
          </figure>
          <div className="turn-text-container">
            <p className="turn-text">{experienceData[activeIndex]?.timeline}</p>
          </div>
          <div className="turn-text-container">
            <p className="turn-text">
              {experienceData[activeIndex]?.description}
            </p>
          </div>
          <div className="">
            <header className="turn-text-container mb-2">
              <strong className="turn-text">Skills acquired:</strong>
            </header>
          </div>
          <ul className=" columns-2">
            {experienceData[activeIndex]?.skills.map((skill, idx) => (
              <li key={idx} className="list-item-container">
                <div className="list-item turn-text-container">
                  <p className="turn-text skills">{skill}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;

const experienceData: Record<
  number,
  {
    company: string;
    logo: string;
    timeline: string;
    description: string;
    skills: string[];
  }
> = {
  0: {
    company: "Vortedge",
    logo: "/experience/logos/vortedge-logo.png",
    timeline: "Jan 2023 - Present",
    description: "Medical Transformation",
    skills: ["React.js", "Node.js", "GraphQL", "AWS", "Docker", "Kubernetes"],
  },
  1: {
    company: "Tizeti",
    logo: "/experience/logos/tizeti-logo.png",
    timeline: "Jun 2021 - Dec 2022",
    description: "ISP Company",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Rabbit MQ"],
  },
  2: {
    company: "Others",
    logo: "/experience/logos/others-logo.png",
    timeline: "Jan 2020 - May 2021",
    description: "Government Institution",
    skills: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "PHP", "MySQL"],
  },
};
