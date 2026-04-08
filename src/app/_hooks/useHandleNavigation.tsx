"use client";

import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHandleNavigation = () => { 
  // return null 
  const router = useRouter();
  const pathname = usePathname();

  const setIsExiting = usePageTransition((s : any) => s.setIsExiting);
  const isExiting = usePageTransition((s : any) => s.isExiting);
  const setNewPathname = usePageTransition((s : any) => s.setNewPathname);


  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = useCallback(
    (path: string) => {
      if (isExiting || path === pathname) return;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      setIsExiting(true);

      navigationTimeoutRef.current = setTimeout(async () => {
        setNewPathname(path);
        try {
          await router.push(path);
        } finally {
          setIsExiting(false);
        }
      }, 700);
    },
    [isExiting, pathname, setIsExiting, setNewPathname, router],
  );

  useEffect(() => {
    return () => {
      // Clear pending navigation and reset exiting flag on unmount
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      setIsExiting(false);
    };
  }, []);

  const hasInitialized = useRef(false);

  useGSAP(
    () => {
      if (isExiting) {
        // Animate page exit
        gsap.to(".page", {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power1.inOut",
        });
      } else if (hasInitialized.current) {
        // Animate page entry
        requestAnimationFrame(() => {
          gsap.fromTo(
            ".page",
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" },
          );
        });
      }
      hasInitialized.current = true;
    },
    { dependencies: [isExiting] },
  );

  return handleNavigation;
};
