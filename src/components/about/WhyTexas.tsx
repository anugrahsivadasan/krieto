import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const children = el.querySelectorAll(".reveal-child");

    children.forEach((child) => observer.observe(child));

    if (el.classList.contains("reveal-child")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

function WhyTexas() {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0D1B2A] py-[120px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Content */}
          <div className="space-y-8">
            <p
              className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase"
              style={{ transitionDelay: "0ms" }}
            >
              Where We Operate
            </p>

            <h2
              className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight leading-tight"
              style={{ transitionDelay: "80ms" }}
            >
              Why Texas —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
                And Beyond.
              </span>
            </h2>

            <div className="space-y-5">
              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "160ms" }}
              >
                Texas isn't just where we're registered — it's who we are. The
                DFW metro moves fast, demands excellence, and has no patience
                for fluff. That environment forged our agency's character.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "220ms" }}
              >
                But our ambitions don't stop at state lines. We serve clients
                across the US and globally, bringing the same directness and
                quality to every engagement regardless of time zone.
              </p>
            </div>

            {/* Location badges */}
            <div
              className="reveal-child flex flex-wrap items-center gap-4"
              style={{ transitionDelay: "280ms" }}
            >
              <div className="flex items-center gap-3 bg-[#1E1E1E] border border-white/[0.06] rounded-full px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />

                <span className="font-['JetBrains_Mono'] text-[#F9FAFB] text-sm">
                  Dallas–Fort Worth, Texas
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#1E1E1E] border border-white/[0.06] rounded-full px-5 py-3">
                <svg
                  className="w-4 h-4 text-[#00B4D8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="font-['JetBrains_Mono'] text-[#F9FAFB] text-sm">
                  Serving Clients Globally
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="reveal-child"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative aspect-square max-w-[480px] mx-auto">

              <div className="absolute inset-0 rounded-full border border-[#00B4D8]/10 animate-[spin_40s_linear_infinite]" />

              <div className="absolute inset-4 rounded-full border border-[#00B4D8]/[0.07] animate-[spin_30s_linear_infinite_reverse]" />

              <div className="absolute inset-8 rounded-full border border-[#00B4D8]/[0.05] animate-[spin_20s_linear_infinite]" />

              <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.12),transparent_70%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1E1E1E]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 text-center w-64">

                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-[#00B4D8]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <p className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-2xl mb-1">
                    Texas
                  </p>

                  <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-widest uppercase">
                    → The World
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-4">
                    {["US", "EU", "AU", "AS"].map((region) => (
                      <span
                        key={region}
                        className="font-['JetBrains_Mono'] text-[9px] text-[#6B7280] tracking-wider"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#00B4D8]/40"
                  style={{
                    top: `calc(50% + ${
                      Math.sin((deg * Math.PI) / 180) * 44
                    }% - 4px)`,
                    left: `calc(50% + ${
                      Math.cos((deg * Math.PI) / 180) * 44
                    }% - 4px)`,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyTexas;