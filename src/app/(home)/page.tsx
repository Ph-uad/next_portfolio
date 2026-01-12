// "use client";

import Link from "next/link";
import { Header, Work } from "../_components";
import Experience from "../_components/experience/experience";
import blogs from "../_data/Blogs";
import projects from "../_data/Projects";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="page w-screen h-screen overflow-hidden flex flex-col ">
      <Header />
      <div className=" mt-auto flex flex-col md:flex-row gap-6 md:gap-32  ml-[50%] text-xl">
        <div className="">
          <h4>Recently,</h4>
          <p>
            {" "}
            just completed an <strong>MS</strong>c in Big Data Analysis{" "}
            <Link
              href="/about#experience"
              className="underline mt-2 mb-6 hover:underline-offset-4 transition-all
            duration-300
            ease-in-out
            "
            >
              Read More
            </Link>
          </p>
        </div>
        <div className="">
          <h4>Contact,</h4>
          <ul>
            <li>
              <a href="mailto:temidayo26j@gmail.com">temidayo26j@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

// pt-10 px-56 bg-[url('/backgrounds/bg-texture3.webp')] before:absolute before:inset-0 before:bg-black/80 before:pointer-events-none relative
{
  /*
        <p>Phuad</p>
        <div className="container">
          <Work title="Web Projects" list={projects} />
          <Work title="Blog Posts" list={blogs} />
        </div>
        */
}
