import { useEffect, useRef } from "react";

interface TrustBadge {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

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

interface TrustBadge {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Founded",
    sublabel: "2025",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Client Satisfaction",
    sublabel: "100%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

function Credentials() {
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

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <div className="text-center mb-16">
          <p
            className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-4"
            style={{ transitionDelay: "0ms" }}
          >
            Credentials
          </p>

          <h2
            className="reveal-child font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight"
            style={{ transitionDelay: "80ms" }}
          >
            Trust & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {trustBadges.map((badge, i) => (
            <div
              key={badge.label}
              className="reveal-child group bg-[#1E1E1E] border border-white/[0.06] rounded-xl p-5 text-center hover:border-[#00B4D8]/25 hover:shadow-[0_0_30px_rgba(0,180,216,0.06)] transition-all duration-300 hover:-translate-y-1"
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

        <div
          className="reveal-child border-t border-white/[0.06] pt-12"
          style={{ transitionDelay: "600ms" }}
        >
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

                <span className="font-['Inter'] text-[#6B7280] text-sm">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;