import { useEffect, useRef } from "react";
import {
  Search,
  BarChart3,
  PenTool,
  Zap,
  LineChart,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── STEP DATA ───────────────────────────────────────────────────────────
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "Deep-dive into your brand, market position, and competitive landscape.",
    icon: <Search className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Foundation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "Data-driven insights that shape a winning go-to-market blueprint.",
    icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Blueprint",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "Crafting visuals and copy that command attention and convert.",
    icon: <PenTool className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Craft",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "Precise execution across every channel — on time, on brief.",
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Execution",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "05",
    title: "Reporting & Analytics",
    description:
      "Transparent dashboards that tie every dollar to measurable results.",
    icon: <LineChart className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Insight",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "06",
    title: "Optimisation & Scale",
    description:
      "Continuous refinement to compound growth well beyond launch.",
    icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />,
    badge: "Growth",
    image:
      "https://images.unsplash.com/photo-1639765487008-b892a4efe924?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
];

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Refs for theme-transition targets
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const track = trackRef.current;
    const intro = introRef.current;
    if (!section || !pinEl || !track || !intro) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mm = gsap.matchMedia();
    const cleanups: (() => void)[] = [];

    // ── Refresh after images load ───────────────────────────────────────
    const images = track.querySelectorAll("img");
    let loadedCount = 0;
    const onImageLoad = () => {
      loadedCount += 1;
      if (loadedCount >= images.length) {
        ScrollTrigger.refresh();
      }
    };
    images.forEach((img) => {
      if (img.complete) onImageLoad();
      else img.addEventListener("load", onImageLoad);
    });

    // ── Viewport colour transition (black → white) ──────────────────────
    // Collect all card elements for bg colour tweening
    const cardEls = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".card"))
      .filter(Boolean) as HTMLElement[];

    // Collect all card image overlay divs (gradient from-[#0E0E0E])
    const cardOverlays = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".card-overlay-bottom"))
      .filter(Boolean) as HTMLElement[];

    // Collect icon wrapper divs
    const iconWrappers = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".icon-wrapper"))
      .filter(Boolean) as HTMLElement[];

    // Number spans
    const numberSpans = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".step-number"))
      .filter(Boolean) as HTMLElement[];

    // Title h3s
    const titleEls = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".step-title"))
      .filter(Boolean) as HTMLElement[];

    // Description p's
    const descEls = anchorRefs.current
      .map((a) => a?.querySelector<HTMLElement>(".step-desc"))
      .filter(Boolean) as HTMLElement[];

    if (!prefersReducedMotion) {
      const themeTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",   // when section top hits 80% from viewport top (entering)
          end: "top 10%",     // fully in view
          scrub: 1.2,
          toggleActions: "play none none reverse",
        },
      });

      // Section background: black → white
      themeTl.fromTo(
        section,
        { backgroundColor: "#000000" },
        { backgroundColor: "#ffffff", ease: "none" },
        0
      );

      // Ambient glow: fade out (it's a dark theme element)
      const glowEl = section.querySelector<HTMLElement>(".ambient-glow");
      if (glowEl) {
        themeTl.fromTo(glowEl, { opacity: 1 }, { opacity: 0, ease: "none" }, 0);
      }

      // Heading: white → near-black
      if (headingRef.current) {
        themeTl.fromTo(
          headingRef.current,
          { color: "#F9FAFB" },
          { color: "#111111", ease: "none" },
          0
        );
      }

      // Label: cyan stays but adapts (darken slightly)
      if (labelRef.current) {
        themeTl.fromTo(
          labelRef.current,
          { color: "#00B4D8" },
          { color: "#007A94", ease: "none" },
          0
        );
      }

      // Sub-text: muted gray → dark gray
      if (subtextRef.current) {
        themeTl.fromTo(
          subtextRef.current,
          { color: "#afb3bc" },
          { color: "#374151", ease: "none" },
          0
        );
      }

      // Cards bg: #0E0E0E → white with a subtle border
      if (cardEls.length) {
        themeTl.fromTo(
          cardEls,
          { backgroundColor: "#0E0E0E" },
          { backgroundColor: "#ffffff", ease: "none" },
          0
        );
      }

      // Card title h3: light → dark
      if (titleEls.length) {
        themeTl.fromTo(
          titleEls,
          { color: "#F9FAFB" },
          { color: "#111111", ease: "none" },
          0
        );
      }

      // Card description p: gray → darker gray
      if (descEls.length) {
        themeTl.fromTo(
          descEls,
          { color: "#6B7280" },
          { color: "#374151", ease: "none" },
          0
        );
      }

      cleanups.push(() => {
        themeTl.scrollTrigger?.kill();
        themeTl.kill();
      });
    }

    // ── MOBILE: normal vertical stack, no pin, no horizontal track ──────
    mm.add("(max-width: 767px)", () => {
      gsap.set(track, { clearProps: "x" });
      gsap.set(intro, { clearProps: "all" });
      gsap.set(anchorRefs.current, { clearProps: "all" });
      anchorRefs.current.forEach((anchor) => {
        const card = anchor?.querySelector<HTMLElement>(".card");
        if (card) gsap.set(card, { clearProps: "all" });
      });

      if (prefersReducedMotion) return;

      const tweens = anchorRefs.current
        .filter(Boolean)
        .map((anchor) =>
          gsap.from(anchor, {
            opacity: 0,
            y: 40,
            scale: 0.97,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: anchor,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          })
        );

      cleanups.push(() => {
        tweens.forEach((t) => t.scrollTrigger?.kill());
        tweens.forEach((t) => t.kill());
      });
    });

    // ── TABLET + DESKTOP: whole section pins, entire track (heading
    //    + text + cards) scrolls horizontally as one continuous strip ──
    mm.add("(min-width: 768px)", () => {
      // Always set the pinned container to exactly one viewport tall so
      // the section can never be taller than the screen while pinned.
      gsap.set(pinEl, { clearProps: "height" });

      if (prefersReducedMotion) {
        gsap.set(track, { clearProps: "x" });
        return;
      }

      const getScrollDistance = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = pinEl.clientWidth;
        return Math.max(0, trackWidth - viewportWidth);
      };

      const applyActiveState = () => {
        const viewportRect = pinEl.getBoundingClientRect();
        const viewportCenter = viewportRect.left + viewportRect.width / 2;

        let activeIndex = -1;
        let minDist = Infinity;

        anchorRefs.current.forEach((anchor, i) => {
          if (!anchor) return;
          const card = anchor.querySelector<HTMLElement>(".card");
          if (!card) return;

          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const dist = Math.abs(cardCenter - viewportCenter);

          if (dist < minDist) {
            minDist = dist;
            activeIndex = i;
          }
        });

        anchorRefs.current.forEach((anchor, i) => {
          const card = anchor?.querySelector<HTMLElement>(".card");
          if (!card) return;

          const isActive = i === activeIndex;

          gsap.to(card, {
            scale: isActive ? 1.03 : 1,
            opacity: isActive ? 1 : 0.75,
            boxShadow: isActive
              ? "0 0 0 1px rgba(0,180,216,0.4), 0 0 44px rgba(0,180,216,0.22)"
              : "0 25px 50px rgba(0,0,0,0.4)",
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      const scrollTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: pinEl,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: applyActiveState,
          onRefresh: () => applyActiveState(),
        },
      });

      const cardTriggers: ScrollTrigger[] = [];

      // Intro (heading + text) — parallax/fade as it scrolls off to the left
      const introFade = gsap.fromTo(
        intro,
        { opacity: 1 },
        {
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: intro,
            containerAnimation: scrollTween,
            start: "left left",
            end: "right left",
            scrub: true,
          },
        }
      );
      if (introFade.scrollTrigger) cardTriggers.push(introFade.scrollTrigger);

      // Cards — entrance from the right as the track scrolls
      anchorRefs.current.forEach((anchor) => {
        if (!anchor) return;

        const entrance = gsap.from(anchor, {
          opacity: 0,
          scale: 0.95,
          x: 120,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: anchor,
            containerAnimation: scrollTween,
            start: "left 95%",
            toggleActions: "play none none reverse",
          },
        });
        if (entrance.scrollTrigger) cardTriggers.push(entrance.scrollTrigger);

        const image = anchor.querySelector<HTMLElement>(".card-image");
        if (image) {
          const parallax = gsap.fromTo(
            image,
            { y: -20 },
            {
              y: 20,
              ease: "none",
              scrollTrigger: {
                trigger: anchor,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
          if (parallax.scrollTrigger)
            cardTriggers.push(parallax.scrollTrigger);
        }
      });

      // Hover interactions (GSAP — no transform conflicts)
      const hoverCleanups: (() => void)[] = [];

      anchorRefs.current.forEach((anchor) => {
        const card = anchor?.querySelector<HTMLElement>(".card");
        const image = anchor?.querySelector<HTMLElement>(".card-image");
        if (!card) return;

        const onEnter = () => {
          gsap.to(card, {
            y: -10,
            boxShadow:
              "0 0 0 1px rgba(0,180,216,0.35), 0 35px 70px rgba(0,0,0,0.65)",
            duration: 0.5,
            ease: "expo.out",
            overwrite: "auto",
          });
          if (image) {
            gsap.to(image, {
              scale: 1.05,
              duration: 0.7,
              ease: "expo.out",
              overwrite: "auto",
            });
          }
        };

        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.5,
            ease: "expo.out",
            overwrite: "auto",
          });
          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.7,
              ease: "expo.out",
              overwrite: "auto",
            });
          }
          applyActiveState();
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        hoverCleanups.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      applyActiveState();

      cleanups.push(() => {
        hoverCleanups.forEach((fn) => fn());
        cardTriggers.forEach((t) => t.kill());
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Subtle ambient glow */}
      <div className="ambient-glow absolute top-[-30%] right-[-20%] w-[70%] h-[120%] bg-[radial-gradient(ellipse,rgba(0,180,216,0.10),transparent)] pointer-events-none z-0" />

      {/* Pin wrapper — exactly one viewport tall on desktop/tablet so the
          section can never overflow while pinned. On mobile it's a normal
          flowing block (height set by content). */}
      <div
        ref={pinRef}
        className="relative z-10 w-full md:h-screen md:overflow-hidden flex flex-col justify-center py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      >
        {/* ── Horizontal track: intro panel + all cards live here ─────── */}
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row w-full md:w-max gap-10 sm:gap-12 md:gap-16 lg:gap-[100px] xl:gap-[120px] 2xl:gap-[140px] md:items-center will-change-transform"
        >
          {/* ── Intro panel (heading + text) — first "page" of the track ── */}
          <div
            ref={introRef}
            className="w-full md:w-screen flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p
                  ref={labelRef}
                  className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase mb-2"
                  style={{ color: "#00B4D8" }}
                >
                  How We Work
                </p>
                <h2
                  ref={headingRef}
                  className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
                  style={{ color: "#F9FAFB" }}
                >
                  Six steps. One straight line to revenue.
                </h2>
              </div>
              <div
                ref={subtextRef}
                className="font-['Inter'] text-sm md:text-base max-w-sm border-l border-[#00B4D8]/25 pl-4 md:pl-6"
                style={{ color: "#afb3bc" }}
              >
                No detours, no guesswork — every engagement runs the same
                disciplined path from first audit to compounding scale.
              </div>
            </div>
          </div>

          {/* ── Cards ─────────────────────────────────────────────────── */}
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                anchorRefs.current[index] = el;
              }}
              className={`w-[min(85vw,380px)] sm:w-[min(70vw,380px)] md:w-[clamp(320px,32vw,380px)] lg:w-[clamp(370px,26vw,430px)] xl:w-[clamp(390px,24vw,450px)] 2xl:w-[clamp(410px,20vw,470px)] flex-shrink-0 mx-auto md:mx-0 ${
                index === 0 ? "md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-32" : ""
              } ${
                index === processSteps.length - 1
                  ? "md:mr-12 lg:mr-16 xl:mr-24 2xl:mr-32"
                  : ""
              }`}
            >
              {/* Anchor — owns entrance x / opacity / scale */}
              <div
                className="card group relative h-[clamp(340px,58vh,440px)] sm:h-[clamp(380px,60vh,500px)] md:h-[clamp(400px,58vh,520px)] lg:h-[clamp(420px,60vh,560px)] xl:h-[clamp(440px,62vh,600px)] 2xl:h-[clamp(460px,64vh,640px)] rounded-3xl cursor-pointer
                  border border-white/10
                  shadow-xl shadow-black/40
                  will-change-transform"
                style={{ backgroundColor: "#0E0E0E" }}
              >
                {/* ── Image (~65% height) ─────────────────────────── */}
                <div className="relative w-full h-[50%] overflow-hidden rounded-t-[32px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="card-image w-full h-full object-cover will-change-transform"
                    style={{ borderRadius: "32px" }}
                  />
                  <div className="card-overlay-bottom absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 pointer-events-none rounded-t-[32px]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-50 pointer-events-none rounded-t-[32px]" />
                </div>

                {/* ── Content ──────────────────────────────────────── */}
                <div className="p-6 md:p-7  flex flex-col justify-between h-[40%]">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="step-number font-['JetBrains_Mono'] text-xs tracking-widest"
                        style={{ color: "rgba(0,180,216,0.6)" }}
                      >
                        {step.number}
                      </span>
                      <div className="icon-wrapper w-8 h-8 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8]">
                        {step.icon}
                      </div>
                    </div>
                    <h3
                      className="step-title font-['Space_Grotesk'] text-lg font-semibold leading-tight"
                      style={{ color: "#F9FAFB" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="step-desc font-['Inter'] text-sm leading-relaxed mt-1.5 mb-4 line-clamp-2"
                      style={{ color: "#6B7280" }}
                    >
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;