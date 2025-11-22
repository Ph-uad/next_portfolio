// "use client";

import { Header, Work } from "../_components";
import Experience from "../_components/experience/experience";
import blogs from "../_data/Blogs";
import projects from "../_data/Projects";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="h-screen overflow-hidden w-11/12 mx-auto">
      <div className="relative z-10 flex flex-col gap-20 ">
        <Header />
        <div className="grid grid-rows-[4_minmax(700px,1fr)_100px] gap-4  grid-cols-4 md:grid-cols-4">
          <Experience />

        </div>
      </div>
    </main>
  );
}

// pt-10 px-56 bg-[url('/backgrounds/bg-texture3.webp')] before:absolute before:inset-0 before:bg-black/80 before:pointer-events-none relative
     {/*
        <p>Phuad</p>
        <div className="container">
          <Work title="Web Projects" list={projects} />
          <Work title="Blog Posts" list={blogs} />
        </div>
        */}
        