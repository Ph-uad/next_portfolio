import gsap from "gsap";
import { create } from "zustand";

interface PageTransitionState {
  pathname: string;
  prevContent: HTMLDivElement | null;
  setPrevContent: (el: HTMLDivElement | null) => void;
  timeline: gsap.core.Timeline | null;
  isExiting: boolean;
  setTimeline: (tl?: gsap.core.Timeline) => void;
  setNewPathname: (path: string) => void;
  setIsExiting: (value: boolean) => void;
}

export const usePageTransition = create<PageTransitionState>((set) => ({
  pathname: "",
  prevContent: null,
  setPrevContent: (el: HTMLDivElement | null) => set({ prevContent: el }),

  // Lazily initialize timeline to avoid creating GSAP timelines during SSR
  timeline: null,
  setTimeline: (tl?: gsap.core.Timeline) =>
    set({ timeline: tl ?? gsap.timeline({ paused: true }) }),
  setNewPathname: (path: string) => set({ pathname: path }),

  isExiting: false,
  setIsExiting: (value: boolean) => set({ isExiting: value }),
}));
