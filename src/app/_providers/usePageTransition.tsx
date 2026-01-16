import gsap from "gsap";
import { create } from "zustand";

export const usePageTransition = create((set) => ({
  pathname: "",
  prevContent: null,
  // setPrevContent: (previousContent: HTMLDivElement | null) =>
  //   set({ prevContent: previousContent }),
  timeline: gsap.timeline({ paused: true }),
  setTimeline: (tl: gsap.core.Timeline) => set({ timeline: tl }),
  setNewPathname: (path: string) => set({ pathname: path }),

  // check if you can make isExiting a boolean
  isExiting: false,
  setIsExiting: () => set((state: any) => ({ isExiting: !state.isExiting })),
}));
