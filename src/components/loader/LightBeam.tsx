import { LOADER_BEAM, LOADER_COLORS } from "./loader.constants";

/**
 * Fakes a volumetric light beam with three stacked gradient layers at
 * slightly different widths/blurs/opacities rather than one flat gradient —
 * this is what gives it soft, natural-looking falloff instead of a hard
 * gradient edge. Parent orchestrates motion via GSAP targeting `.krieto-beam`.
 */
export default function LightBeam() {
  const { widthPx, rotationDeg, opacity, blurPx } = LOADER_BEAM;

  return (
    <div
      className="krieto-beam krieto-gpu pointer-events-none absolute left-[-10%] top-[-20%] origin-top-left"
      style={{
        width: widthPx,
        height: widthPx * 2.2,
        transform: `rotate(${rotationDeg}deg)`,
        opacity: opacity.max,
      }}
      aria-hidden="true"
    >
      {/* Core */}
      <div
        className="krieto-beam-layer krieto-gpu absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${LOADER_COLORS.primary}55 0%, ${LOADER_COLORS.primary}22 35%, transparent 75%)`,
          filter: `blur(${blurPx.min}px)`,
        }}
      />
      {/* Mid falloff */}
      <div
        className="krieto-beam-layer krieto-gpu absolute inset-[-8%]"
        style={{
          background: `linear-gradient(180deg, ${LOADER_COLORS.secondary}33 0%, transparent 60%)`,
          filter: `blur(${(blurPx.min + blurPx.max) / 2}px)`,
        }}
      />
      {/* Outer bloom */}
      <div
        className="krieto-beam-layer krieto-gpu absolute inset-[-16%]"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${LOADER_COLORS.primary}18 0%, transparent 70%)`,
          filter: `blur(${blurPx.max}px)`,
        }}
      />
    </div>
  );
}
