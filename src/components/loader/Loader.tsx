import { useEffect, useRef } from "react";
import gsap from "gsap";
import LightBeam from "./LightBeam";
import Particles from "./Particles";
import LogoReveal from "./LogoReveal";
import { LOADER_EASE, LOADER_TIMING } from "./loader.constants";
import { useLoader } from "../../hooks/useLoader";

interface LoaderProps {
  logoSrc: string;
  logoAlt?: string;
  onComplete?: () => void;
}

/**
 * Orchestrates the loader phases. Driven by a single GSAP timeline.
 * Logo reveals with a smooth diagonal sweep, followed by the tagline.
 */
export default function Loader({ logoSrc, logoAlt, onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { markExiting, markDone } = useLoader({ onComplete });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => markDone(),
      });

      const t = LOADER_TIMING;

      // --- Beam entrance ---------------------------------------------
      tl.fromTo(
        ".krieto-beam",
        { opacity: 0, x: -40, y: -30, filter: "blur(95px)" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(78px)",
          duration: t.beamIn.duration,
          ease: LOADER_EASE.beamSweep,
        },
        t.beamIn.start
      );
      // Slow continuous sweep for the life of the loader
      tl.to(
        ".krieto-beam",
        {
          x: 24,
          y: 16,
          duration: 2.2,
          ease: LOADER_EASE.beamSweep,
        },
        t.beamIn.start + t.beamIn.duration
      );

      // --- Particles fade in -------------------------------------------
      tl.to(
        ".krieto-particle-canvas",
        { opacity: 1, duration: t.particlesIn.duration, ease: "sine.out" },
        t.particlesIn.start
      );

      // --- Lens glow ---------------------------------------------------
      tl.to(
        ".krieto-lens-glow",
        {
          opacity: 1,
          scale: 1,
          duration: t.lensGlow.duration,
          ease: "power2.out",
        },
        t.lensGlow.start
      );

      // --- Logo wipe: clip-path opens diagonally top-left to bottom-right -
      tl.fromTo(
        ".krieto-logo",
        {
          clipPath: "polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 130% 0%, 100% 100%, 0% 100%)",
          duration: t.logoReveal.duration,
          ease: LOADER_EASE.logoReveal, // power2.out: ultra-smooth slowmo
        },
        t.logoReveal.start
      );

      // --- Tagline: "Your Growth. Co-Engineered." -------------------------
      tl.to(
        ".krieto-tagline",
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        t.logoReveal.start + 0.8
      );

      // --- Settle hold, then exit -----------------------------------------
      const entranceEnd = t.progressBar.start + t.progressBar.duration;
      const exitStart = entranceEnd + t.settleHold - t.exitOverlap;

      tl.call(() => markExiting(), [], exitStart);

      tl.to(
        [
          ".krieto-logo",
          ".krieto-tagline",
        ],
        {
          opacity: 0,
          filter: "blur(8px)",
          duration: t.exit.logo.duration,
          ease: LOADER_EASE.exit,
        },
        exitStart
      );
      tl.to(
        ".krieto-particle-canvas",
        {
          opacity: 0,
          duration: t.exit.particles.duration,
          ease: LOADER_EASE.exit,
        },
        exitStart + t.exit.particles.offset
      );
      tl.to(
        [".krieto-beam", ".krieto-lens-glow"],
        {
          opacity: 0,
          filter: "blur(8px)",
          duration: t.exit.beam.duration,
          ease: LOADER_EASE.exit,
        },
        exitStart + t.exit.beam.offset
      );
      tl.to(
        ".krieto-loader-bg",
        {
          opacity: 0,
          duration: t.exit.background.duration,
          ease: LOADER_EASE.exit,
        },
        exitStart + t.exit.background.offset
      );

      if (prefersReducedMotion) {
        tl.timeScale(3);
      }
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="krieto-loader-root pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background matches the primary cyan/blue color of the logo, glowing outward to deep black */}
      <div
        className="krieto-loader-bg krieto-gpu absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #001f30 0%, #000c14 60%, #040404 100%)",
        }}
      >
        <div className="krieto-grain" />
      </div>

      <LightBeam />
      <Particles />

      <div className="relative z-10 flex flex-col items-center">
        <LogoReveal logoSrc={logoSrc} logoAlt={logoAlt} />
      </div>
    </div>
  );
}
