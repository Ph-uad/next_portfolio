"use client";

import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useRef, useEffect, useCallback } from "react";

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
      }, 500);
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

  return handleNavigation;
};
