"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CompanyTitle } from "./_components/company_title";
import {  useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperiencePage = () => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const onClick = (index: number) => {
    setActiveIndex(index);
  };

  useGSAP(() => {
    // gsap.set("#companies", { y: 0 });
    gsap.set(".surf-text-p", { transform: "translate3d(0, 110%, 0)" });

    // tl.current = gsap.timeline({paused: true});

    gsap.to(".company-name", {
      scale: 0.7,
      opacity: 0.5,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(`.company-name:nth-child(${activeIndex + 1})`, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(".surf-text", {
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

    gsap.to(".surf-text-p", {
      duration: 1.5,
      // height: "2.6rem",
      transform: "translate3d(0, 0%, 0)",
      stagger: 0.2,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "power4.out",
    });
  }, [activeIndex]);

  return (
    <main className="page">
      <div className="border-b border-black flex-1 w-full h-1/2 overflow-hidden ">
        <aside className="flex h-full w-full justify-center items-center gap-10">
          <div className="animation-begin flex items-start w-full">
            <div className="justify-center flex-[0.4] py-6 text-right gap-4 items-center">
              <div className="flex flex-row justify-end gap-4 px-5 h-fit items-center">
                <h3 className="text-title leading-[1.1] uppercase">Phuad</h3>
                <h3 className="">&</h3>
                {/* <div className="w-4 h-2 bg-neutral-700 self-end my-8 " /> */}
              </div>
            </div>

            <div id="companies" className="flex flex-1 ">
              <ul className="flex flex-col gap-2">
                <li
                  className="company-name cursor-pointer"
                  onClick={() => onClick(0)}
                >
                  <CompanyTitle title="Vortedge" />
                </li>

                <li
                  className="company-name cursor-pointer"
                  onClick={() => onClick(1)}
                >
                  <CompanyTitle title="Tizeti" />
                </li>
                <li
                  className="company-name cursor-pointer"
                  onClick={() => onClick(2)}
                >
                  <CompanyTitle title="Others" />
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className="h-1/3 w-1/2 md:w-1/3 self-end">
        <article className="w-full">
          <figure className="surf-text  mb-4">
            <strong className="surf-text-p">
              {experienceData[activeIndex]?.company}
            </strong>
          </figure>
          <div className="surf-text">
            <p className="surf-text-p">
              {experienceData[activeIndex]?.timeline}
            </p>
          </div>
          <div className="surf-text">
            <p className="surf-text-p">
              {experienceData[activeIndex]?.description}
            </p>
          </div>
          <div className="">
            <header className="surf-text mb-2">
              <strong className="surf-text-p">Skills acquired:</strong>
            </header>
          </div>
          <ul className=" columns-2">
            {experienceData[activeIndex]?.skills.map((skill, idx) => (
              <li key={idx} className="list-item-container">
                <div className="list-item surf-text">
                  <p className="surf-text-p skills">{skill}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </main>
  );
};

export default ExperiencePage;

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
// Add more experience entries as needed
