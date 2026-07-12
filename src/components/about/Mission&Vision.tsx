import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import missionImage from "../../assets/missionvissionbg.png";

// NOTE: this file pins via GSAP ScrollTrigger, not CSS `position: sticky`.
// If this package isn't already in package.json: npm install gsap

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

const valuesWords = ["Precision", "Boldness", "Integrity", "Results"];

// Scroll thresholds (as a fraction of the pin's scroll progress 0 → 1)
const MISSION_IN = 0.1;
const VISION_IN = 0.42;
const VALUES_IN = 0.74;
const RELEASE = 0.97;

const MissionVision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        // Total scroll distance the section stays pinned for, as a
        // percentage of the viewport height. GSAP inserts a spacer of this
        // height automatically — no need to hand-size the section in vh.
        end: "+=260%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        // GSAP auto-detects transformed ancestors (a common Framer Motion
        // side effect) and switches from real `position: fixed` to a
        // transform-based pin when needed, so this stays reliable even
        // inside animated page wrappers.
        onUpdate: (self) => setScrollProgress(self.progress),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const showMission = reducedMotion || scrollProgress >= MISSION_IN;
  const showVision = reducedMotion || scrollProgress >= VISION_IN;
  const showValues = reducedMotion || scrollProgress >= VALUES_IN;
  const shouldPin = reducedMotion ? false : scrollProgress < RELEASE;

  const currentStage = showValues ? "values" : showVision ? "vision" : showMission ? "mission" : null;

  const transition = { duration: reducedMotion ? 0.01 : 1.35, ease: EASE };
  const transitionSlow = { duration: reducedMotion ? 0.01 : 1.5, ease: EASE };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background — atmosphere only, never the focal point */}
      <div className="absolute inset-0">
        <img
          src={missionImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[2.1] saturate-[2.75] "
          style={{
            transform: reducedMotion ? undefined : `translateY(${scrollProgress * -30}px) scale(1.08)`,
          }}
        />
        {/* Solid dark overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        {/* Subtle blue lighting, center only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.07),transparent_50%)]" />
        {/* Heavy vignette — corners fade fully to black */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_70%)]" />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 160px 40px rgba(0,0,0,0.96)" }} />
        
      
      </div>

      <div className={`relative flex h-full items-center ${shouldPin ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-6 py-24 md:px-12 lg:flex-row lg:items-center lg:gap-12 lg:px-16">
          {/* Left — pinned visual anchor, never moves */}
          <div className="relative flex min-h-[360px] w-full items-center lg:w-[30%] lg:min-h-[560px] lg:-translate-x-4">
            <div className="flex origin-center -rotate-90 flex-col items-start gap-2 opacity-[0.48] sm:gap-3 lg:absolute lg:left-[-6.5rem] lg:top-1/2 lg:-translate-y-1/2">
              <p className="font-['Space_Grotesk'] text-[clamp(3rem,9vw,7rem)] font-semibold uppercase leading-[0.8] tracking-[-0.06em] text-[#00B4D8]">
                What
              </p>
              <p className="font-['Space_Grotesk'] text-[clamp(3rem,9vw,7rem)] font-semibold uppercase leading-[0.8] tracking-[-0.06em] text-white">
                Drive Us
              </p>
            </div>
          </div>

          {/* Right — one editorial canvas, asymmetrical composition */}
          <div className="relative w-full flex-1 md:h-[560px] lg:h-[600px]">
            {/* MISSION — top-left */}
            <motion.div
              className="relative mb-28 md:absolute md:top-[12%] md:left-2 md:mb-0 w-full md:w-[58%] lg:w-[50%]"
              initial={false}
              animate={{
                opacity: showMission ? 1 : 0,
                y: showMission ? 0 : 120,
                letterSpacing: showMission ? "0.01em" : "0.1em",
              }}
              transition={transition}
            >
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-[70px] transition-opacity duration-1000"
                style={{ opacity: currentStage === "mission" ? 1 : 0 }}
              />
              
              <h3 className="font-['Space_Grotesk'] text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white">
                Mission
              </h3>
              <p className="mt-6 max-w-[460px] font-['Inter'] text-[1rem] leading-[1.8] text-[#F9FAFB]/75 sm:text-[1.05rem]">
                To deliver premium advertising, design and marketing that generates real, measurable revenue for our clients — not vanity metrics.
              </p>
            </motion.div>

            {/* VISION — mid-right */}
            <motion.div
              className="relative mb-28 md:absolute md:top-[45%] md:left-[60%] md:right-0 md:mb-0 w-full md:w-[60%] lg:w-[52%]"
              initial={false}
              animate={{
                opacity: showVision ? 1 : 0,
                y: showVision ? 0 : 120,
                letterSpacing: showVision ? "0.01em" : "0.1em",
              }}
              transition={transition}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-[70px] transition-opacity duration-1000"
                style={{ opacity: currentStage === "vision" ? 1 : 0 }}
              />
             
              <h3 className="font-['Space_Grotesk'] text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white">
                Vision
              </h3>
              <p className="mt-6 max-w-[460px] font-['Inter'] text-[1rem] leading-[1.8] text-[#F9FAFB]/75 sm:text-[1.05rem]">
A world where every business that deserves to grow, does. We eliminate the gap between potential 
and visibility — for businesses across every industry and every market.               </p>
            </motion.div>

            {/* VALUES — bottom-left, beneath both */}
            <motion.div
              className="relative md:absolute md:bottom-0 md:left-[3%] w-full md:w-[64%] lg:w-[56%]"
              initial={false}
              animate={{
                opacity: showValues ? 1 : 0,
                y: showValues ? 0 : 120,
              }}
              transition={transitionSlow}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-[70px] transition-opacity duration-1000"
                style={{ opacity: currentStage === "vision" ? 1 : 0 }}
              />
             
              <h3 className="font-['Space_Grotesk'] text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white">
                Values
              </h3>
              <p className="mt-6 max-w-[460px] font-['Inter'] text-[1rem] leading-[1.8] text-[#F9FAFB]/75 sm:text-[1.05rem]">
Your Business Is Our Business. Precision Over Volume. Bold Thinking. Grounded Execution. 
Honesty & Transparency. Growth Is Shared.              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
