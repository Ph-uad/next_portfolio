// import { usePathname, useRouter } from "next/navigation";
// import { usePageTransition } from "@/src/app/_providers/usePageTransition";
// import { useRef, useEffect, useCallback } from "react";

// export const useHandleNavigation = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const setIsExiting = usePageTransition((state) => state.setIsExiting);
//   const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const isExiting = usePageTransition((state) => state.isExiting);
//   const setNewPathname = usePageTransition((state) => state.setNewPathname);

//   useCallback(
//     (path: string) => {
//       // Guard against re-entry: return early if already exiting
//       if (isExiting || path === pathname) {
//         return;
//       }
//       // Clear any existing timeout to prevent multiple timers
//       if (navigationTimeoutRef.current) {
//         clearTimeout(navigationTimeoutRef.current);
//       }

//       setIsExiting(true);
//       navigationTimeoutRef.current = setTimeout(() => {
//         setNewPathname(path);
//         router.push(path);
//         setIsExiting(false);
//       }, 500);
//     },
//     [isExiting, pathname, setIsExiting, setNewPathname, router],
//   );
//   useEffect(() => {
//     return () => {
//       if (navigationTimeoutRef.current) {
//         clearTimeout(navigationTimeoutRef.current);
//       }
//     };
//   }, []);

//   return null
// };

"use client";

import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";
import { useRef, useEffect, useCallback } from "react";

export const useHandleNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const setIsExiting = usePageTransition((s) => s.setIsExiting);
  const isExiting = usePageTransition((s) => s.isExiting);
  const setNewPathname = usePageTransition((s) => s.setNewPathname);

  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = useCallback(
    (path: string) => {
      if (isExiting || path === pathname) return;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      setIsExiting(true);

      navigationTimeoutRef.current = setTimeout(() => {
        setNewPathname(path);
        router.push(path);
        setIsExiting(false);
      }, 500);
    },
    [isExiting, pathname, setIsExiting, setNewPathname, router],
  );

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  return handleNavigation;
};
