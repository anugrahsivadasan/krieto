import { useEffect, useRef } from "react";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
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
      { threshold: 0.12 }
    );

    const children = el.querySelectorAll(".reveal-child");
    children.forEach((child) => observer.observe(child));
    if (el.classList.contains("reveal-child")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TrustBadge {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}


// ─── Data ─────────────────────────────────────────────────────────────────────
const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Deep-dive into your brand, market position, and competitive landscape.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Research & Strategy",
    description: "Data-driven insights that shape a winning go-to-market blueprint.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Creative Development",
    description: "Crafting visuals and copy that command attention and convert.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Implementation",
    description: "Precise execution across every channel — on time, on brief.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Reporting & Analytics",
    description: "Transparent dashboards that tie every dollar to measurable results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Optimisation & Scale",
    description: "Continuous refinement to compound growth well beyond launch.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const trustBadges: TrustBadge[] = [
  {
    label: "Google Partner",
    sublabel: "Certified",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    label: "Meta Blueprint",
    sublabel: "Certified",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Texas Business",
    sublabel: "Registered",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Founded",
    sublabel: "2024",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Client Satisfaction",
    sublabel: "100%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] overflow-hidden bg-[#0A0A0A]">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,180,216,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(0,119,182,0.07),transparent)]" />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
      </div>

      {/* Horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-6 opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.1s]">
          About Krieto
        </p>

        {/* Headline */}
        <h1 className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.25s]">
          The Agency Behind Brands{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
            That Move Markets.
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-['Inter'] text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.4s]">
          We are Krieto — a Texas-born advertising, design, and marketing agency built to
          deliver the work that Fortune 500 agencies charge 10× more for.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal-child {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

// ─── Section 2: Our Story ─────────────────────────────────────────────────────
function OurStorySection() {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] md:py-[120px] py-[72px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(0,180,216,0.05),transparent)] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Editorial image */}
          <div className="reveal-child order-2 lg:order-1" style={{ transitionDelay: "0ms" }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1E1E1E] border border-white/[0.06] group">
              {/* Abstract editorial visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#0A0A0A] to-[#0D1B2A]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_30%_30%,rgba(0,180,216,0.15),transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(0,119,182,0.1),transparent)]" />
              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              {/* Center mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-['JetBrains_Mono'] text-[#00B4D8]/40 text-xs tracking-widest uppercase mb-3">Est.</p>
                  <p className="font-['Space_Grotesk'] font-bold text-[#F9FAFB]/10 text-[80px] leading-none">2024</p>
                  <p className="font-['JetBrains_Mono'] text-[#00B4D8]/40 text-xs tracking-widest uppercase mt-3">Dallas · Texas</p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#00B4D8]/30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#00B4D8]/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#00B4D8]/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#00B4D8]/30" />
            </div>
          </div>

          {/* Right — Story content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Eyebrow */}
            <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase" style={{ transitionDelay: "100ms" }}>
              Our Story
            </p>

            {/* Heading */}
            <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl leading-tight tracking-tight" style={{ transitionDelay: "150ms" }}>
              Why Krieto Exists
            </h2>

            {/* Pull quote */}
            <blockquote className="reveal-child border-l-2 border-[#00B4D8] pl-6 py-1" style={{ transitionDelay: "200ms" }}>
              <p className="font-['Space_Grotesk'] text-[#00B4D8] text-xl md:text-2xl italic font-medium leading-snug">
                "We built Krieto because great marketing should not be a luxury."
              </p>
            </blockquote>

            {/* Body paragraphs */}
            <div className="space-y-5">
              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "250ms" }}>
                Krieto was born in Dallas–Fort Worth out of a simple, stubborn conviction: that
                ambitious businesses deserve the same calibre of creative thinking that Fortune 500
                brands buy at ten times the price. We saw too many promising companies settle for
                mediocre work because premium felt out of reach. We refused to accept that.
              </p>

              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "300ms" }}>
                From the beginning, Texas shaped how we work — direct, results-focused, and never
                satisfied with average. Those values run through every strategy deck, every
                campaign brief, and every pixel we place. We don't dress up busywork as strategy.
                We build things that move the needle.
              </p>

              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "350ms" }}>
                Today we serve clients from Texas to every time zone, delivering advertising,
                design, and marketing work that competes at the highest level — without the
                bloated retainers, the endless committee reviews, or the diluted output.
              </p>

              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "400ms" }}>
                If you want a partner who treats your growth like their own, you've found the
                right agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Mission · Vision · Values ────────────────────────────────────
function MissionSection() {
  const ref = useScrollReveal();

  const cards = [
    {
      eyebrow: "Mission",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      heading: "Our Mission",
      body: "To deliver premium advertising and marketing that generates real, measurable revenue for our clients — not vanity metrics.",
    },
    {
      eyebrow: "Vision",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      heading: "Our Vision",
      body: "To be the most trusted advertising partner for ambitious businesses — from Texas to every continent on the map.",
    },
    {
      eyebrow: "Values",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      heading: "Our Values",
      pills: ["Precision", "Boldness", "Integrity", "Results"],
    },
  ];

  return (
    <section className="relative bg-[#0D1B2A] py-[120px] overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,180,216,0.05),transparent)] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4" style={{ transitionDelay: "0ms" }}>
            What Drives Us
          </p>
          <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight" style={{ transitionDelay: "80ms" }}>
            Mission · Vision · Values
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.eyebrow}
              className="reveal-child group relative bg-[#1E1E1E] border border-white/[0.06] rounded-2xl p-8 
                         hover:border-[#00B4D8]/30 hover:shadow-[0_0_40px_rgba(0,180,216,0.07)] 
                         transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B4D8]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6 group-hover:bg-[#00B4D8]/15 transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Eyebrow */}
                <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.2em] uppercase mb-2">
                  {card.eyebrow}
                </p>

                {/* Heading */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-xl mb-4">
                  {card.heading}
                </h3>

                {/* Body or pills */}
                {card.body && (
                  <p className="font-['Inter'] text-[#6B7280] text-sm leading-relaxed">
                    {card.body}
                  </p>
                )}
                {card.pills && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Our Process ───────────────────────────────────────────────────
function ProcessSection() {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,180,216,0.04),transparent)] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4" style={{ transitionDelay: "0ms" }}>
            How We Work
          </p>
          <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight" style={{ transitionDelay: "80ms" }}>
            Our Process
          </h2>
          <p className="reveal-child font-['Inter'] text-[#6B7280] text-lg mt-4 max-w-lg mx-auto" style={{ transitionDelay: "140ms" }}>
            Six deliberate steps — engineered to turn strategy into revenue.
          </p>
        </div>

        {/* Desktop: grid | Mobile: stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="reveal-child group relative bg-[#0A0A0A] p-8 hover:bg-[#1E1E1E]/60 transition-colors duration-300"
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Step number */}
              <p className="font-['JetBrains_Mono'] text-[#00B4D8]/30 text-xs tracking-widest mb-5">
                {step.number}
              </p>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/15 flex items-center justify-center text-[#00B4D8] mb-5 group-hover:bg-[#00B4D8]/15 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-base mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-['Inter'] text-[#6B7280] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Why Texas (And Beyond) ───────────────────────────────────────
function TexasSection() {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0D1B2A] py-[120px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/15 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Content */}
          <div className="space-y-8">
            <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase" style={{ transitionDelay: "0ms" }}>
              Where We Operate
            </p>

            <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight leading-tight" style={{ transitionDelay: "80ms" }}>
              Why Texas —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
                And Beyond.
              </span>
            </h2>

            <div className="space-y-5">
              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "160ms" }}>
                Texas isn't just where we're registered — it's who we are. The DFW metro moves
                fast, demands excellence, and has no patience for fluff. That environment forged
                our agency's character.
              </p>
              <p className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed" style={{ transitionDelay: "220ms" }}>
                But our ambitions don't stop at state lines. We serve clients across the US and
                globally, bringing the same directness and quality to every engagement regardless
                of time zone.
              </p>
            </div>

            {/* Location badge */}
            <div className="reveal-child flex items-center gap-4" style={{ transitionDelay: "280ms" }}>
              <div className="flex items-center gap-3 bg-[#1E1E1E] border border-white/[0.06] rounded-full px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-[#F9FAFB] text-sm">
                  Dallas–Fort Worth, Texas
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] border border-white/[0.06] rounded-full px-5 py-3">
                <svg className="w-4 h-4 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-['JetBrains_Mono'] text-[#F9FAFB] text-sm">
                  Serving Clients Globally
                </span>
              </div>
            </div>
          </div>

          {/* Right — Texas abstract visual */}
          <div className="reveal-child" style={{ transitionDelay: "100ms" }}>
            <div className="relative aspect-square max-w-[480px] mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#00B4D8]/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#00B4D8]/[0.07] animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-[#00B4D8]/[0.05] animate-[spin_20s_linear_infinite]" />

              {/* Glow */}
              <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.12),transparent_70%)]" />

              {/* Center card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1E1E1E]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 text-center w-64">
                  {/* TX star icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#00B4D8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <p className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-2xl mb-1">Texas</p>
                  <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-widest uppercase">→ The World</p>

                  {/* Dots */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    {["US", "EU", "AU", "AS"].map((region) => (
                      <span key={region} className="font-['JetBrains_Mono'] text-[9px] text-[#6B7280] tracking-wider">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbit dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#00B4D8]/40"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 44}% - 4px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 44}% - 4px)`,
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

// ─── Section 6: Credentials & Trust ──────────────────────────────────────────
function CredentialsSection() {
  const ref = useScrollReveal();

  const certPlaceholders = [
    { label: "Google Ads" },
    { label: "Meta Ads" },
    { label: "HubSpot" },
    { label: "Semrush" },
    { label: "Klaviyo" },
  ];

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,180,216,0.04),transparent)] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4" style={{ transitionDelay: "0ms" }}>
            Credentials
          </p>
          <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight" style={{ transitionDelay: "80ms" }}>
            Trust & Recognition
          </h2>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {trustBadges.map((badge, i) => (
            <div
              key={badge.label}
              className="reveal-child group bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-5 text-center 
                         hover:border-[#00B4D8]/25 hover:shadow-[0_0_30px_rgba(0,180,216,0.06)] 
                         transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${160 + i * 80}ms` }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/15 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8]/15 transition-colors duration-300">
                {badge.icon}
              </div>
              <p className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-sm mb-0.5">
                {badge.sublabel}
              </p>
              <p className="font-['JetBrains_Mono'] text-[#6B7280] text-[10px] tracking-wider">
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certification logo placeholders */}
        <div className="reveal-child border-t border-white/[0.06] pt-12" style={{ transitionDelay: "600ms" }}>
          <p className="font-['JetBrains_Mono'] text-[#6B7280]/60 text-[10px] tracking-[0.2em] uppercase text-center mb-8">
            Platform Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certPlaceholders.map((cert, i) => (
              <div
                key={cert.label}
                className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-6 h-6 rounded bg-[#6B7280]/20 border border-white/[0.06]" />
                <span className="font-['Inter'] text-[#6B7280] text-sm">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Final CTA ─────────────────────────────────────────────────────
function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0D1B2A] py-[120px] overflow-hidden">
      {/* Mesh glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(0,180,216,0.1),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center">
        <p className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-6" style={{ transitionDelay: "0ms" }}>
          Ready to Grow?
        </p>

        <h2 className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-6xl tracking-tight leading-tight mb-6 max-w-3xl mx-auto" style={{ transitionDelay: "80ms" }}>
          Let's Build Your Brand{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
            Together.
          </span>
        </h2>

        <p className="reveal-child font-['Inter'] text-[#6B7280] text-lg md:text-xl max-w-xl mx-auto mb-10" style={{ transitionDelay: "160ms" }}>
          Tell us about your goals. We'll show you exactly how Krieto can move the needle.
        </p>

        {/* Buttons */}
        <div className="reveal-child flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: "240ms" }}>
          {/* Primary CTA */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0077B6] text-white font-['Inter'] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,180,216,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Ghost CTA */}
          <a
            href="/work"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#00B4D8]/50 text-[#F9FAFB] hover:text-[#00B4D8] font-['Inter'] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <HeroSection />
      <OurStorySection />
      <MissionSection />
      <ProcessSection />
      <TexasSection />
      <CredentialsSection />
      <CTASection />
    </main>
  );
}