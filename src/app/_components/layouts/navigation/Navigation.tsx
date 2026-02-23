"use client";

import Logo from "@/public/favIcon.png";
import { useEffect, useRef, useState } from "react";
import LinkLabel from "./Link-label";
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

let tabs = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  // { id: "articles", label: "Articles" },
];

const MainNavigation = () => {
  const pathname = usePathname();
  let [activeTab, setActiveTab] = useState(tabs[0].id);
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

  useEffect(() => {
    // Set the active tab based on the current pathname on initial render
    const currentTab = tabs.find((tab) =>
      tab.id === "home" ? pathname === "/" : pathname.includes(tab.id),
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [pathname]);


  // console.log(tabs.findIndex("home"))

  return (
    <nav
      className="z-[2000] bg-inherit min-h-[5vh] w-screen flex justify-center items-center sticky top-0 overflow-x-hidden flex-wrap text-[var(--color-text-white)]
                 text-[clamp(1.2rem,2vw,1.4rem)"
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
        <ul className="flex space-x-1">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                handleNavigation(`/${tab.id === "home" ? "" : tab.id}`);
              }}
              className={`${activeTab === tab.id ? "" : "hover:scale-105 font-bold  border-black"}
             relative rounded-full px-6 py-3 text-sm font-medium uppercase text-[var(--color-text)] outline-sky-400 hover:cursor-pointer focus-visible:outline-2 transition-all duration-300 ease-in-out`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 border border-[var(--color-text)] mix-blend-difference flex justify-center items-center"
                  style={{ borderRadius: 10 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <LinkLabel
                label={tab.label}
                route={`/${tab.id === "home" ? "" : tab.id}`}
                handleNavigation={() =>
                  handleNavigation(`/${tab.id === "home" ? "" : tab.id}`)
                }
              />
            </div>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
