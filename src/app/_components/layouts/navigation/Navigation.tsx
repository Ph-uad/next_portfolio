"use client";

import Logo from "@/public/favIcon.png";
import { useEffect, useRef, useState } from "react";
import { useHandleNavigation } from "@/src/app/_hooks/useHandleNavigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

let tabs = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

const MainNavigation = () => {
  const pathname = usePathname();
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleNavigation = useHandleNavigation();
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <nav className="z-[2000] bg-inherit min-h-[5vh] w-screen flex justify-center items-center sticky top-0 overflow-x-hidden flex-wrap text-[var(--color-text-white)] text-[clamp(1.2rem,2vw,1.4rem)]">
      <ul className="flex space-x-1 bg-black rounded-full overflow-hidden p-[0.5px]">
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
             relative rounded-full px-6 py-3 text-sm font-medium uppercase text-white outline-sky-400 focus-visible:outline-2 transition-all duration-300 ease-in-out`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 border border-[var(--color-text)] mix-blend-difference flex justify-center items-center"
                style={{
                  borderRadius: "999px",
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
