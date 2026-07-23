import { motion } from "framer-motion";
import LoaderOverlay from "../components/loader/LoaderOverlay";
import krietoLogo from "../assets/Krieto-logo-white.png";

/**
 * Full-page loading experience. Wrap your first visible page/hero inside
 * <LoaderOverlay> so the hero is already mounted and ready to be revealed
 * as the loader dissolves — no pop, just a clean crossfade.
 *
 * Replace <MainHeroPlaceholder /> below with your real hero component.
 * Make sure the hero uses a dark background matching the loader so the
 * handoff feels continuous.
 */
export default function LoadingPage() {
  return (
    <LoaderOverlay logoSrc={krietoLogo} logoAlt="Krieto">
      <MainHeroPlaceholder />
    </LoaderOverlay>
  );
}

function MainHeroPlaceholder() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
      {/* Liquid blob — positioned/colored to continue the loader's lens
          glow so the handoff feels like one continuous light source. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,216,0.16) 0%, rgba(144,224,239,0.06) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-sm uppercase tracking-[0.25em] text-white/70"
        >
          Krieto
        </motion.h1>
        <p className="mt-4 max-w-xl px-6 text-3xl font-light text-white md:text-5xl">
          We build brands that move.
        </p>
      </div>
    </section>
  );
}
