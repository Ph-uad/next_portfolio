import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav
      className="h-[5vh] w-screen border-b border-black flex justify-center items-center sticky top-0  overflow-x-hidden flex-wrap z-2000 text-(--color-text-white)
                 text-[clamp(1.2rem,2vw,1.4rem)] "
    >
      <section className="flex self-center justify-between w-4/5 md:w-11/12 mx-auto uppercase ">
        <ul className="flex justify-between  ">
          <li className="">
            <Link href="/">Logo</Link>
          </li>
        </ul>
        <ul className="flex justify-between gap-x-10 ">
          <li className="">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="">
            <Link href="/">Projects</Link>
          </li>
          <li className="list_item">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="">
            <Link href="/">Conversations</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
