import Lenis from "lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.8,
    smoothWheel: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 1,
    easing: (t: number) =>
      Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};