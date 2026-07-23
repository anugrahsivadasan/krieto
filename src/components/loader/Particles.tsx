import { useEffect, useRef } from "react";
import { LOADER_COLORS, LOADER_PARTICLES } from "./loader.constants";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  driftX: number;
  driftY: number;
  angle: number;
  angleSpeed: number;
  phase: number;
}

function getParticleCount(width: number) {
  if (width < 640) return LOADER_PARTICLES.countMobile;
  if (width < 1024) return LOADER_PARTICLES.countTablet;
  return LOADER_PARTICLES.countDesktop;
}

/**
 * Particles are drawn on canvas rather than as DOM nodes: at up to 120
 * instances with continuous per-frame drift, canvas avoids 120 individual
 * layout/paint-triggering elements and keeps the whole effect on one
 * composited layer.
 */
export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getParticleCount(window.innerWidth);
      const [minSize, maxSize] = LOADER_PARTICLES.sizePxRange;
      const [minOp, maxOp] = LOADER_PARTICLES.opacityRange;

      // Confine spawn positions to a band roughly following the beam's
      // diagonal path so particles read as "inside the light," not scattered.
      particlesRef.current = Array.from({ length: count }, () => {
        const t = Math.random();
        const bandX = window.innerWidth * (0.05 + t * 0.55);
        const bandY = window.innerHeight * (0.05 + t * 0.5);
        return {
          x: bandX + (Math.random() - 0.5) * window.innerWidth * 0.35,
          y: bandY + (Math.random() - 0.5) * window.innerHeight * 0.35,
          size: minSize + Math.random() * (maxSize - minSize),
          baseOpacity: minOp + Math.random() * (maxOp - minOp),
          driftX: (Math.random() - 0.5) * 6,
          driftY: (Math.random() - 0.5) * 6,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.15,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      // Draw a static frame once and stop — respects reduced-motion.
      draw(ctx, particlesRef.current);
      return () => window.removeEventListener("resize", resize);
    }

    const start = performance.now();
    const loop = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(ctx, particlesRef.current, t);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function draw(ctx: CanvasRenderingContext2D, particles: Particle[], t = 0) {
    for (const p of particles) {
      const driftedX = p.x + Math.sin(t * 0.3 + p.phase) * p.driftX * 4;
      const driftedY = p.y + Math.cos(t * 0.25 + p.phase) * p.driftY * 4;
      const twinkle = 0.85 + Math.sin(t * 0.6 + p.phase) * 0.15;

      ctx.beginPath();
      ctx.fillStyle = LOADER_COLORS.secondary;
      ctx.globalAlpha = p.baseOpacity * twinkle;
      ctx.arc(driftedX, driftedY, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  return (
    <canvas
      ref={canvasRef}
      className="krieto-particle-canvas krieto-gpu pointer-events-none absolute inset-0 opacity-0"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
