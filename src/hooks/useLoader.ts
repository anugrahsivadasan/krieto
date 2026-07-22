import { useCallback, useEffect, useRef, useState } from "react";

export type LoaderPhase = "entering" | "settled" | "exiting" | "done";

interface UseLoaderOptions {
  /** Called once the exit animation has fully finished and the loader can unmount. */
  onComplete?: () => void;
  /**
   * Optional real asset URLs to wait on. If omitted, the loader runs on a
   * timed simulation only (still visually complete, just not tied to
   * network/asset readiness).
   */
  waitForAssets?: string[];
}

/**
 * Tracks loader lifecycle + a 0-100 progress value used to drive the
 * progress bar. Progress reflects real asset loading when `waitForAssets`
 * is provided, and falls back to a smooth simulated ramp otherwise.
 */
export function useLoader({ onComplete, waitForAssets }: UseLoaderOptions = {}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<LoaderPhase>("entering");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (waitForAssets && waitForAssets.length > 0) {
      let loaded = 0;
      const total = waitForAssets.length;

      const bump = () => {
        loaded += 1;
        setProgress(Math.min(100, Math.round((loaded / total) * 100)));
      };

      waitForAssets.forEach((src) => {
        const img = new Image();
        img.onload = bump;
        img.onerror = bump;
        img.src = src;
      });

      return;
    }

    // Simulated ramp: eases toward 100 rather than ticking linearly,
    // matching the "natural, not rushed" feel called for in the brief.
    const startedAt = performance.now();
    const durationMs = 3500;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const t = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [waitForAssets]);

  const markSettled = useCallback(() => setPhase("settled"), []);
  const markExiting = useCallback(() => setPhase("exiting"), []);
  const markDone = useCallback(() => {
    setPhase("done");
    onComplete?.();
  }, [onComplete]);

  return { progress, phase, markSettled, markExiting, markDone };
}
