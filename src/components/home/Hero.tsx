import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";

import Aurora from "../global/Aurora";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="
        relative min-h-screen overflow-hidden
        bg-[#0A0A0A] flex items-center
      "
    >
      {/* ─── Aurora Background ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <Aurora
          colorStops={["#03045E", "#0077B6", "#00B4D8"]}
          blend={0.35}
          amplitude={0.8}
          speed={0.2}
        />
      </div>

<div className="absolute inset-0">
  <Aurora
    colorStops={[
      "#03045E",
      "#0077B6",
      "#00B4D8",
    ]}
    blend={0.35}
    amplitude={0.8}
    speed={0.8}
  />
</div>
<div className="absolute inset-0 bg-black/35" />
   

      {/* ─── Content ────────────────────────────────────── */}
      <div className="relative z-10 w-full pt-[72px]">
        {/* pt-[72px] offsets the fixed navbar */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-[120px] lg:py-[160px]">
          <div className="max-w-4xl">

            {/* EYEBROW */}
            <motion.p
              {...fadeUp(0)}
              className="
                font-body uppercase tracking-[0.15em]
                text-[13px] font-semibold
                text-[#00B4D8] mb-6
              "
            >
              ADVERTISING  ·  DESIGN  ·  MARKETING 
            </motion.p>

            {/* HEADLINE */}
            <h1
  className="
    font-heading font-extrabold
    leading-[0.93]
    tracking-[-0.04em]
    text-[clamp(3rem,7vw,5.5rem)]
    mb-8
  "
>
  <div className="overflow-hidden leading-[0.93]">
    <motion.span
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="block text-white"
    >
      Your Growth.
    </motion.span>
  </div>

  <div className="overflow-hidden leading-[0.93]">
    <motion.span 
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        block
        bg-gradient-to-r
        from-cyan-400
        via-sky-300
        to-cyan-500
        bg-clip-text
        text-transparent
        pb-2
      "
    >
      Engineered.
    </motion.span>
  </div>
</h1>

            {/* SUB-HEADLINE */}
            <motion.p
              {...fadeUp(0.2)}
              className="
              text-[#9CA3AF]
              text-xl
              md:text-4xl
              leading-relaxed
              max-w-4xl
              mb-12
              "
            >
            We Build Brands That Command Attention. 
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="
              text-[#9CA3AF]
              text-lg
              md:text-xl
              leading-relaxed
              max-w-2xl
              mb-12
              "
            >
              We are the growth system your business has been missing. Design 
that gets you chosen. Advertising that gets you seen. Marketing that keeps you relevant. 
              
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  bg-[#00B4D8] text-white
                  text-sm font-semibold uppercase tracking-widest
                  hover:bg-[#0077B6]
                  transition-all duration-300
                  hover:shadow-[0_0_32px_rgba(0,180,216,0.4)]
                  hover:scale-[1.02]
                "
              >
                Start a conversation
                            <ArrowRight size={18}/>

              </Link>

              {/* Secondary CTA */}
              <Link
                to="/portfolio"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  border border-white/20
                  text-white text-sm font-semibold uppercase tracking-widest
                  hover:border-[#00B4D8] hover:text-[#00B4D8]
                  transition-all duration-300
                  hover:scale-[1.02]
                "
              >
                See Our Work
              </Link>
            </motion.div>

            {/* SOCIAL PROOF */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#00B4D8] text-[#00B4D8]"
                  />
                ))}
              </div>

              <p className="text-[#9CA3AF]">
Trusted by ambitious businesses, Globally .Building the brands their markets remember. 
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Scroll Indicator ───────────────────────────── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1],
              y: [0, 8, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { delay: 1.2, duration: 0.6 },
              y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
            }}
            className="
              absolute bottom-8 left-1/2 -translate-x-1/2
              text-white/50 pointer-events-none
            "
            aria-hidden="true"
          >
            <ChevronDown size={28} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;