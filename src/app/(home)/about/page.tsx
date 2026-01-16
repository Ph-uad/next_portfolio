import classes from "./about.module.css";
import { Rubik_Moonrocks } from "next/font/google";
import { Article } from "../../_components";
import { DomData } from "../../_data/domData";

const rubik = Rubik_Moonrocks({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="page relative">
      <header
        className={`${rubik.className} top-24 left-0 fixed w-full text-left text-[--color-primary-transparent] text-3xl`}
      >
        <h2>Novum Testamentum</h2>
        <h2>Romani ٢١</h2>
        <h2> ١-٨</h2>
      </header>

      <main className={`container ${classes["main"]} w-3/5 mx-auto `}>
        <Article data={DomData.bio} />
        <Article data={DomData.insight} />
        {/* <Process /> */}
      </main>
    </div>
  );
};

export default About;
