"use client";

import Logo from "@/public/favIcon.png";
import { use, useRef } from "react";
import LinkLabel from "./Link-label";
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";

const MainNavigation = () => {
  const handleNavigation = useHandleNavigation();
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const handleNavigation = useCallback(
  //   (path: string) => {
  //     // Guard against re-entry: return early if already exiting
  //     if (isExiting || path === pathname) {
  //       return;
  //     }

  //     // Clear any existing timeout to prevent multiple timers
  //     if (navigationTimeoutRef.current) {
  //       clearTimeout(navigationTimeoutRef.current);
  //     }

  //     setIsExiting(true);
  //     navigationTimeoutRef.current = setTimeout(() => {
  //       setNewPathname(path);
  //       router.push(path);
  //       setIsExiting(false);
  //     }, 500);
  //   },
  //   [isExiting, pathname, setIsExiting, setNewPathname, router],
  // );

  // Cleanup timeout on unmount

  return (
    <nav
      className="z-[2000] bg-inherit min-h-[5vh] w-screen flex justify-center items-center sticky top-0 overflow-x-hidden flex-wrap text-[var(--color-text-white)]
                 text-[clamp(1.2rem,2vw,1.4rem)] "
    >
      <section className="flex flex-col md:flex-row self-center justify-between w-4/5 md:w-11/12 mx-auto capitalize">
        <ul className="flex justify-between ">
          <li className="">
            <LinkLabel
              img={Logo}
              label="home"
              route="/"
              handleNavigation={() => handleNavigation("/")}
            />
          </li>
        </ul>
        <ul className="flex justify-between gap-x-10 ">
          <li>
            <LinkLabel
              label="Experience"
              route="/experience"
              handleNavigation={() => handleNavigation("/experience")}
            />
          </li>
          <li>
            <LinkLabel
              label="Projects"
              route="/projects"
              handleNavigation={() => handleNavigation("/projects")}
            />
          </li>
          <li>
            <LinkLabel
              label="About"
              route="/about"
              handleNavigation={() => handleNavigation("/about")}
            />
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="">
            <LinkLabel
              label="Articles"
              route="/articles"
              handleNavigation={() => handleNavigation("/articles")}
            />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
