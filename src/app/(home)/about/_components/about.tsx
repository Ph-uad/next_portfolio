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
      const targets = gsap.utils.toArray(["h1" ,"h2", "h3", "h4", "p", "a", "span", "button"]);
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
    <main ref={container} className="page self-start justify-start py-20"> 

      <div className="w-4/5 md:w-3/5 mx-auto h-full relative top-10">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 items-stretch ">
          <article className="col-span-1 md:col-span-2 ">
            <h1 className="text-lg">Hi, I'm Phuad,</h1>
            <p className=" leading-relaxed">
              A digital transformation enthusiast (software engineering and data
              science) based in the United Kingdom, building and inquring
              digital products and services. Since 2021. I help bring ideas and
              facts to light.
            </p>
          </article>
          <button className=" self-center border border-[var(--color-black)] p-2 hover:bg-[var(--color-primary-hover)] w-fit text-xs ml-auto rounded-md">
            Let's talk
          </button>
          <div
            className="row-span-3 min-h-[50vh] border rounded-md border-[var(--color-black)] p-4 flex flex-col justify-between"
            id="experience"
          >
            <h2>Experience</h2>
            <ul>
              <li className="p-2 border-b text-xs">
                <div className="flex justify-between items-center text-xs">
                  <span className="">2021 - 2023</span>
                  <span className="text-gray-900/30"> | </span>
                  <h4>Software Engineer</h4>
                  <span className="text-gray-900/30"> | </span>
                  <h3>Tizeti</h3>
                </div>
              </li>
            </ul>
          </div>

          <div id="testimonial" className="row-span-3 border rounded-md border-[var(--color-black)] p-4 flex flex-col justify-between">
            <h2>Testimonial</h2>

            <article>
              <p className="text-xs leading-relaxed">
                "I had the pleasure of working with [Your Name] on a complex
                software project, and I was consistently impressed by their
                technical expertise and problem-solving skills. They were able
                to navigate through challenges with ease and always delivered
                high-quality work on time. [Your Name] is a true asset to any
                team, and I highly recommend them for any software engineering
                role."
              </p>
              <span className="text-xs">
                - John Doe, Former Manager at Tizeti
              </span>
            </article>
          </div>

          <div id="tools" className="row-span-2 border rounded-md border-[var(--color-black)] p-4">
            <h2>Tools</h2>
            <div className="flex flex-col gap-y-2">
              <div className="" id="software-enginnering-tools">
                <span className="p-2 border rounded text-xs">React</span>
                <span className="p-2 border rounded text-xs">Next.js</span>
                <span className="p-2 border rounded text-xs">TypeScript</span>
                <span className="p-2 border rounded text-xs">Node.js</span>
              </div>
              <div className="" id="data-science-tools">
                <span className="p-2 border rounded text-xs">Python</span>
                <span className="p-2 border rounded text-xs">Pandas</span>
                <span className="p-2 border rounded text-xs">NumPy</span>
                <span className="p-2 border rounded text-xs">Scikit-learn</span>
                <span className="p-2 border rounded text-xs">Tableau</span>
              </div>
            </div>
          </div>
          <div id="contact-card" className="flex flex-col self-end border rounded-md border-[var(--color-black)] p-4 gap-y-2">
            <h2>Contact</h2>
            <Link
              href="mailto:temidayo26j@gmail.com"
              className="text-sm text-blue-500"
            >
              temidayo26j@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/temidayo-jimoh-26j/"
              className="text-sm text-blue-500"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
