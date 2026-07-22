/**
 * Single source of truth for the Krieto loader's timing and visual values.
 * Tune the experience from here without touching component internals.
 */

export const LOADER_COLORS = {
  bg: "#050505",
  surface: "#0A0A0A",
  primary: "#00B4D8",
  secondary: "#90E0EF",
  white: "#F9FAFB",
} as const;

export const LOADER_TIMING = {
  // Entrance phases (seconds, relative to timeline start)
  beamIn: { start: 0.0, duration: 1.8 },
  particlesIn: { start: 0.3, duration: 1.8 },
  lensGlow: { start: 1.0, duration: 1.0 },
  logoReveal: { start: 1.2, duration: 1.8 },
  logoReflection: { start: 2.0, duration: 1.0 },
  loadingText: { start: 1.5, duration: 0.8 },
  progressBar: { start: 1.5, duration: 2.0 },

  // Hold before exit begins
  settleHold: 0.6,

  // Exit phases — logo, then particles, then beam, then background
  exit: {
    logo: { duration: 0.8 },
    particles: { duration: 0.7, offset: 0.08 },
    beam: { duration: 0.7, offset: 0.14 },
    background: { duration: 0.6, offset: 0.2 },
  },

  // How much the exit overlaps the tail of the entrance hold
  exitOverlap: 0.2,
} as const;

export const LOADER_BEAM = {
  widthPx: 820,
  rotationDeg: -32,
  opacity: { min: 0.18, max: 0.25 },
  blurPx: { min: 70, max: 90 },
} as const;

export const LOADER_PARTICLES = {
  countDesktop: 120,
  countTablet: 70,
  countMobile: 36,
  sizePxRange: [2, 4] as [number, number],
  opacityRange: [0.05, 0.15] as [number, number],
} as const;

export const LOADER_TEXT = {
  primary: "Preparing Experience",
} as const;

export const LOADER_EASE = {
  logoReveal: "power2.out",
  beamSweep: "sine.inOut",
  exit: "power2.inOut",
} as const;
