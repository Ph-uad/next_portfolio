import gsap from "gsap";
import { create } from "zustand";

interface PageTransitionState {
  pathname: string;
  prevContent: HTMLDivElement | null;
  timeline: gsap.core.Timeline;
  isExiting: boolean;
  setTimeline: (tl: gsap.core.Timeline) => void;
  setNewPathname: (path: string) => void;
  setIsExiting: (value: boolean) => void;
}

export const usePageTransition = create<PageTransitionState>((set) => ({
  pathname: "",
  prevContent: null, 

  timeline: gsap.timeline({ paused: true }),
  setTimeline: (tl: gsap.core.Timeline) => set({ timeline: tl }),
  setNewPathname: (path: string) => set({ pathname: path }),

  isExiting: false,
  setIsExiting: (value: boolean) => set({ isExiting: value }),
}));
