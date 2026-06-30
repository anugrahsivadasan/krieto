import { useEffect, useRef } from "react";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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
      { threshold: 0.12 },
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

const MissionVision = () => {
  const ref = useScrollReveal();

  const cards = [
    {
      eyebrow: "Mission",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      heading: "Our Mission",
      body: "To deliver premium advertising and marketing that generates real, measurable revenue for our clients — not vanity metrics.",
    },
    {
      eyebrow: "Vision",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      heading: "Our Vision",
      body: "To be the most trusted advertising partner for ambitious businesses — from Texas to every continent on the map.",
    },
    {
      eyebrow: "Values",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      heading: "Our Values",
      pills: ["Precision", "Boldness", "Integrity", "Results"],
    },
  ];

  return (
    <section className="relative bg-[#0D1B2A] py-[120px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,180,216,0.05),transparent)] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <div className="text-center mb-16">
          <p
            className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4"
            style={{ transitionDelay: "0ms" }}
          >
            What Drives Us
          </p>

          <h2
            className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight"
            style={{ transitionDelay: "80ms" }}
          >
            Mission · Vision · Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.eyebrow}
              className="reveal-child group relative bg-[#1E1E1E] border border-white/[0.06] rounded-2xl p-8 hover:border-[#00B4D8]/30 hover:shadow-[0_0_40px_rgba(0,180,216,0.07)] transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B4D8]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6 group-hover:bg-[#00B4D8]/15 transition-colors duration-300">
                  {card.icon}
                </div>

                <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.2em] uppercase mb-2">
                  {card.eyebrow}
                </p>

                <h3 className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-xl mb-4">
                  {card.heading}
                </h3>

                {"body" in card && (
                  <p className="font-['Inter'] text-[#6B7280] text-sm leading-relaxed">
                    {card.body}
                  </p>
                )}

                {card.pills?.length ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className="font-['Inter'] text-xs text-[#90E0EF] bg-[#00B4D8]/10 border border-[#00B4D8]/20 px-3 py-1 rounded-full"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
