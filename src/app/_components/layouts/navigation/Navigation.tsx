"use client";

import { use, useEffect, useRef, useState } from "react";
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation"; 

let tabs = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" }, 
];

const MainNavigation = () => {
  const pathname = usePathname();
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleNavigation = useHandleNavigation();  

  useEffect(() => {
    // Set the active tab based on the current pathname on initial render
    const currentTab = tabs.find((tab) =>
      tab.id === "home" ? pathname === "/" : pathname.includes(tab.id),
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [pathname]);

  return (
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-[2000] w-fit mx-auto flex justify-center items-center overflow-x-hidden flex-wrap text-[color:var(--color-text-white)]">
      <ul className="flex justify-between space-x-0 bg-[var(--color-black)] rounded-full p-0">
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              setActiveTab(tab.id);
              handleNavigation(`/${tab.id === "work" ? "" : tab.id}`);
            }}
            className={`${activeTab === tab.id ? "" : "hover:scale-105 font-bold  "}
             relative rounded-full px-4 py-2 text-[0.6rem] font-medium capitalize text-[var(--color-white)] focus-visible:outline-none transition-all duration-300 ease-in-out`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 border border-[var(--color-black)] mix-blend-difference flex justify-center items-center"
                style={{
                  borderRadius: "28.5px",
                  backgroundColor: "var(--color-white)",
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span>{tab.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
