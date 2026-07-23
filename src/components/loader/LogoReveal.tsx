import { LOADER_COLORS } from "./loader.constants";

interface LogoRevealProps {
  /** Path to the K-only icon asset (OnlyK.png). */
  logoSrc: string;
  logoAlt?: string;
}

/**
 * Full brand identity block for the loader screen, matching the brand guide:
 *
 *   ┌──────────────────────┐
 *   │   [K icon — large]   │  ← clip-path wipe L→R
 *   │       KRIETO         │  ← bold, wide-spaced, fades up
 *   │ ADVERTISING & MKTG   │  ← smaller caps, fades up
 *   │                      │
 *   │ Your Growth. Co-     │
 *   │ Engineered.          │  ← tagline, "Engineered." in cyan
 *   └──────────────────────┘
 *
 * All motion driven by parent Loader.tsx via GSAP class selectors.
 */
export default function LogoReveal({
  logoSrc,
  logoAlt = "Krieto",
}: LogoRevealProps) {
  return (
    <div className="krieto-logo-stage relative flex flex-col items-center">

      {/* Lens glow — blooms behind the K as it reveals */}
      <div
        className="krieto-lens-glow krieto-gpu pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          width: 560,
          height: 560,
          background: `radial-gradient(circle, ${LOADER_COLORS.primary}38 0%, ${LOADER_COLORS.secondary}14 40%, transparent 70%)`,
          filter: "blur(90px)",
          transform: "translate(-50%, -50%) scale(0.8)",
        }}
        aria-hidden="true"
      />

      {/* ── K icon — clip-path wipe L→R, driven by GSAP ── */}
      <div
        className="krieto-logo relative"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)" }}
      >
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-auto w-[clamp(160px,20vw,260px)] select-none"
          style={{
            mixBlendMode: "screen",
          }}
          draggable={false}
        />
      </div>

      {/* ── Tagline: "Your Growth. Co-Engineered." ── */}
      <div
        className="krieto-tagline krieto-gpu opacity-0"
        style={{ transform: "translateY(20px)", marginTop: "clamp(24px, 4vw, 42px)" }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontSize: "clamp(15px, 2vw, 24px)", // slightly larger for standard presentation
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.4,
            color: LOADER_COLORS.white,
            letterSpacing: "0.02em",
          }}
        >
          Your Growth. Co-<span style={{ color: LOADER_COLORS.primary }}>Engineered.</span>
        </p>
      </div>

    </div>
  );
}
