import { useEffect, useRef, useState } from "react";
import { Search, BarChart3, PenTool, Zap, LineChart, TrendingUp } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Deep-dive into your brand, market position, and competitive landscape.",
    icon: <Search className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Research & Strategy",
    description: "Data-driven insights that shape a winning go-to-market blueprint.",
    icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    number: "03",
    title: "Creative Development",
    description: "Crafting visuals and copy that command attention and convert.",
    icon: <PenTool className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    number: "04",
    title: "Implementation",
    description: "Precise execution across every channel — on time, on brief.",
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    number: "05",
    title: "Reporting & Analytics",
    description: "Transparent dashboards that tie every dollar to measurable results.",
    icon: <LineChart className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    number: "06",
    title: "Optimisation & Scale",
    description: "Continuous refinement to compound growth well beyond launch.",
    icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />,
  },
];

// ─── Simple "in view once" hook — no fragile scroll-percentage math ──────────
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ProcessSection() {
  const { ref: timelineRef, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(0,180,216,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="max-w-xl mb-20 md:mb-24">
          <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight leading-[1.15]">
            Six steps. One straight line to revenue.
          </h2>
          <p className="font-['Inter'] text-[#6B7280] text-base md:text-lg mt-5 leading-relaxed">
            No detours, no guesswork — every engagement runs the same disciplined
            path from first audit to compounding scale.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP — horizontal timeline, normal document flow
            (no absolute positioning against scroll math = no layout bugs)
            ════════════════════════════════════════════════════════════ */}
        <div ref={timelineRef} className="hidden lg:block">

          {/* Top row: nodes + connecting line, in normal flow */}
          <div className="relative flex items-center mb-10">
            {/* Background track */}
            <div className="absolute left-0 right-0 h-px bg-white/[0.08]" />
            {/* Animated fill */}
            <div
              className="absolute left-0 h-px bg-gradient-to-r from-[#00B4D8] to-[#90E0EF] transition-all ease-out"
              style={{
                width: inView ? "100%" : "0%",
                transitionDuration: "1400ms",
              }}
            />

            {processSteps.map((step, i) => (
              <div key={step.number} className="flex-1 flex justify-center relative">
                <div
                  className={`
                    w-3 h-3 rounded-full border-2 z-10 bg-[#0A0A0A]
                    transition-all duration-500
                    ${inView ? "border-[#00B4D8] shadow-[0_0_14px_rgba(0,180,216,0.55)]" : "border-white/20"}
                  `}
                  style={{ transitionDelay: `${200 + i * 140}ms` }}
                />
              </div>
            ))}
          </div>

          {/* Steps row — calm, even grid beneath the line, each tied to its node */}
          <div className="grid grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`
                  flex flex-col items-center text-center px-2
                  transition-all duration-600 ease-out
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${300 + i * 140}ms` }}
              >
                {/* Number — present but restrained, not oversized */}
                <span className="font-['JetBrains_Mono'] text-[#00B4D8]/50 text-xs tracking-widest mb-3">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-[15px] leading-snug mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-['Inter'] text-[#6B7280] text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            MOBILE / TABLET — vertical timeline
            ════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/[0.08]" />
          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <MobileStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Mobile step — own reveal, simple and reliable ───────────────────────────
function MobileStep({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      className={`relative flex gap-5 transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Node */}
      <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <div
          className={`
            w-3 h-3 rounded-full border-2 bg-[#0A0A0A] transition-all duration-500
            ${inView ? "border-[#00B4D8] shadow-[0_0_12px_rgba(0,180,216,0.55)]" : "border-white/20"}
          `}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-['JetBrains_Mono'] text-[#00B4D8]/50 text-xs tracking-widest">
            {step.number}
          </span>
          <div className="w-9 h-9 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8]">
            {step.icon}
          </div>
        </div>
        <h3 className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-base mb-1.5">
          {step.title}
        </h3>
        <p className="font-['Inter'] text-[#6B7280] text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default ProcessSection;