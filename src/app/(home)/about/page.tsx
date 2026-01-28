import { Rubik_Moonrocks } from "next/font/google";
import About from "./_components/about";
import { Rubik_Moonrocks } from "next/font/google";
import About from "./_components/about";

const rubik = Rubik_Moonrocks({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "About",
  description:
    "Learn more about Phuad, a passionate software engineer dedicated to digital transformation and innovative solutions.",
};

const AboutPage = () => {
  return (
    <div className="relative">
      <header
        className={`${rubik.className} top-24 left-0 fixed w-full text-left text-[--color-primary-transparent] text-3xl`}
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
