import { Rubik_Moonrocks } from "next/font/google";  
import About from "./_components/about";

const rubik = Rubik_Moonrocks({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "About",
  description:
    "Learn more about Phuad, a passionate software engineer and data scientist dedicated to digital transformation and innovative solutions.",
};

const AboutPage = () => {
  return (
    <div className="relative page flex flex-col justify-center items-center">
      <header
        className={`${rubik.className} top-4 left-0 sticky w-full text-left text-[--color-primary-transparent-light] text-base  md:text-2xl`}
      >
        <h1>Novum Testamentum</h1>
        <h2>Romani ٢١</h2>
        <h2> ١-٨</h2>
      </header>
      <About />
    </div>
  );
};

export default AboutPage;
