"use client";

import { DomData } from "@/src/app/_data/domData";
import Article from "./Article";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Title } from "@/src/app/_components/UI/title";
import Link from "next/link";
import { h4 } from "framer-motion/client";

const About: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { isExiting } = usePageTransition((state: any) => state);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray([
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "a",
        "li",
        "button",
      ]);
      gsap.fromTo(
        targets,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
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
      className=" overflow-hidden w-4/5 mx-auto flex flex-col gap-y-10"
    >
      <div className="flex justify-between items-end gap-x-10">
        <article className="flex flex-col gap-y-2 max-w-xl lg:max-w-3xl">
          <h1 className="text-lg">Hi, I'm Phuad,</h1>
          <p className=" leading-relaxed text-xs md:text-base text-[--color-primary-transparent-light]">
            A digital polymath (software engineering and data science) based in
            the United Kingdom, building and inquiring digital products and
            services. Since 2021. I help bring ideas and facts to light.
          </p>
        </article>
        <div className="max-w-lg flex-shrink-0">
          <button className=" border-4 border-[--color-primary-transparent-light] px-4 py-2 hover:bg-[var(--color-primary-hover)] w-fit text-xs ml-auto rounded-full">
            Let's Collaborate
          </button>
        </div>
      </div>

      <div className="p-6 justify-center grid grid-flow-dense gap-2 auto-rows-[minmax(10rem,10rem)] grid-cols-2 lg:grid-cols-[minmax(10rem,_27%)_minmax(10rem,_27%)_minmax(20rem,_40%)] items-stretch ">
        <div
          className="row-span-2 lg:row-span-3 rounded-lg  p-8 flex flex-col justify-between bg-card-experience bg-cover bg-center"
          id="experience"
        >
          <h2>Experience</h2>
          <ul>
            <li className="p-2 border-b border-[var(--color-primary-transparent-light)] text-xs">
              <ul className="flex flex-col lg:flex-row justify-between lg:items-center text-xs">
                <li className="">2021 - 2023</li>
                <li className="text-[var(--color-primary-transparent-light)] hidden lg:block"> | </li>
                <li><strong>Software Engineer</strong></li>
                <li className="text-[var(--color-primary-transparent-light)] hidden lg:block"> | </li>
                <li>
                  <strong>Tizeti</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          id="testimonial"
          className="row-span-1 lg:row-span-3 border rounded-md border-[var(--color-primary-transparent-light)] p-4 flex flex-col justify-between "
        >
          <h2>Testimonial</h2>

          <div className="flex flex-col justify-between gap-y-2">
            <p className="text-xs leading-relaxed text-ellipsis line-clamp-3 ">
              "I had the pleasure of working with Phuad on a complex software
              project, and I was consistently impressed by their technical
              expertise and problem-solving skills. They were able to navigate
              through challenges with ease and always delivered high-quality
              work on time. Phuad is a true asset to any team, and I
              highly recommend them for any software engineering role."
            </p>
            <span className="text-xs border-b border-[var(--color-primary-transparent-light)]">
              - John Doe, Former Manager at Tizeti
            </span>
          </div>
        </div>

        <div
          id="tools"
          className="col-span-2 lg:col-span-1 lg:row-span-2 border rounded-md border-[var(--color-primary-transparent-light)] p-4 flex flex-col justify-between"
        >
          <h2>Tools</h2>
          <div className="flex flex-col gap-y-2 overflow-hidden flex-nowrap">
            <ul
              className="flex flex-nowrap justify-center items-center gap-x-4"
              id="software-engineering-tools"
            >
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                React
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Next.js
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                TypeScript
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Node.js
              </li>
            </ul>
            <ul
              className="flex flex-nowrap justify-center items-stretch gap-x-4"
              id="data-science-tools"
            >
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Python
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Pandas
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                NumPy
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Scikit-learn
              </li>
              <li className="p-2 border border-[var(--color-primary-transparent-light)] rounded text-xs flex-grow min-w-max text-center">
                Tableau
              </li>
            </ul>
          </div>
        </div>
        <div
          id="contact-card"
          className="flex flex-col border justify-between rounded-md border-[var(--color-primary-transparent-light)] p-4"
        >
          <h2>Contact</h2>
          <ul>
            <li>
              <Link
                href="mailto:temidayo26j@gmail.com"
                className="text-sm text-blue-500"
              >
                temidayo26j@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/temidayo-jimoh-26j/"
                className="text-sm text-blue-500"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
