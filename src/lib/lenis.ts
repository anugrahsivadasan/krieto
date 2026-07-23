import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (lenisInstance) return lenisInstance;

  const isMobile =
    window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;

  const lenis = new Lenis({
    lerp: isMobile ? 0.12 : 0.08,
    smoothWheel: true,
    wheelMultiplier: isMobile ? 1.3 : 1.1,
    touchMultiplier: isMobile ? 1.8 : 1.2,
  });

  lenisInstance = lenis;

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

export const getLenis = () => lenisInstance;

export const scrollToTop = (behavior: ScrollBehavior = "auto") => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, duration: 0 });
  }

  window.scrollTo({ top: 0, left: 0, behavior });
};
