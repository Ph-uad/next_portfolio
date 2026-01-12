import classes from "./about.module.css";
import { Rubik_Moonrocks } from "next/font/google";
import { Article, Process } from "../../_components";
import { DomData } from "../../_data/domData";

const rubik = Rubik_Moonrocks({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <header className={`${rubik.className} top-30 left-0 fixed w-full text-left text-[--color-primary-transparent] text-3xl`}>
        <h2>Novum Testamentum</h2>
        <h2>Romani ٢١</h2>
        <h2> ١-٨</h2>
      </header>

      <main className={`container ${classes["main"]} w-full`}>
        <Article data={DomData.bio} />
        <Article data={DomData.insight} />
        <Process />
      </main>
    </>
  );
};

export default About;
