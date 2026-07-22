import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { serviceTiles } from "./serviceContent";

gsap.registerPlugin(ScrollTrigger);

// Show only the first 6 tiles by default
const VISIBLE_TILES = 6;

const AllServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const [showAll, setShowAll] = useState(false);

  const tiles = showAll ? serviceTiles : serviceTiles.slice(0, VISIBLE_TILES);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cardEls = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-service-card]"),
    );

    if (!prefersReducedMotion) {
      // ── Dark monochrome animation ───────────────────────────────────
      const animation = gsap.fromTo(
        cardEls,
        { autoAlpha: 0, y: 56, rotate: -1.5 },
        {
          autoAlpha: 1,
          y: 0,
          rotate: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: { each: 0.07, from: "start" },
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
          },
        },
      );

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, []);

  // Re-animate newly revealed cards when "show all" is toggled
  useEffect(() => {
    if (!showAll) return;
    const section = sectionRef.current;
    if (!section) return;

    const newCards = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-service-card]"),
    );

    gsap.fromTo(
      newCards.slice(VISIBLE_TILES),
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.06 },
    );
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-28 md:py-36"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        {/* ── Header ────────────────────────────────────────────────── */}
        <div className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p
              ref={eyebrowRef}
              className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#ffffff" }}
            >
              All Services
            </p>
            <h2
              ref={headingRef}
              className="font-heading text-[clamp(2.6rem,5.5vw,5.2rem)] font-bold leading-[1] tracking-tight"
              style={{ color: "#ffffff" }}
            >
              Built as a custom mix, not a menu.
            </h2>
          </div>
          <p
            ref={subTextRef}
            className="max-w-2xl font-body text-base leading-8 md:text-lg"
            style={{ color: "#d1d5db" }}
          >
            Each engagement is assembled around the work your market needs to
            see, believe, remember, and act on.
          </p>
        </div>

        {/* ── Masonry grid — only first 6 visible ───────────────────── */}
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                data-service-card
                key={service.title}
                to={service.link}
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#111111] p-7 opacity-0 transition-all duration-500 hover:-translate-y-[5px] hover:border-white/20 hover:bg-[#171717]"
              >
                <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80 transition duration-500 group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/35 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/80"
                  />
                </div>

                <div className="relative mt-10">
                  <h3 className="font-heading text-xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── View All / Show Less button ────────────────────────────── */}
        {/* {!showAll && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-transparent px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-white hover:text-black"
            >
              <span className="absolute inset-0 -z-10 translate-y-full rounded-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative">View All Services</span>
              <ArrowUpRight
                size={16}
                className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Show Less
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default AllServices;
