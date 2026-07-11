import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── STEP DATA ───────────────────────────────────────────────────────────
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "Deep-dive into your brand, market position, and competitive landscape to uncover exactly where the growth is hiding.",
    image:
      "https://media.istockphoto.com/id/607912434/photo/start-up-team-meeting.jpg?s=612x612&w=0&k=20&c=TgO5j2Vqz-h_DHMEO1zEMFFnrNBd44NvlFZTuQSjCb8=",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "Data-driven insights that shape a winning go-to-market blueprint built specifically around your customers.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "Crafting visuals and copy that command attention, build trust fast, and convert browsers into buyers.",
    image:
      "https://media.istockphoto.com/id/1630663973/photo/woman-hand-holding-virtual-global-internet-connection-metaverse-business-global-internet.jpg?s=612x612&w=0&k=20&c=uT3exMBlXQi37GvX-hANO9eJA2eqRtjrbqCtEOJ1VRE=",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "Precise execution across every channel — launched on time, on brief, and built to perform from day one.",
    image:
      "https://media.istockphoto.com/id/2157053032/photo/happy-business-team-working-on-reports-in-the-office.jpg?s=612x612&w=0&k=20&c=KErofhmINqEvIVL_0qKfV_n5FizB2fIr7z1awtFwCUQ=",
  },
  {
    number: "05",
    title: "Reporting & Analytics",
    description:
      "Transparent dashboards that tie every dollar spent to measurable results, so you always know what's working.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&crop=center&q=80&auto=format",
  },
  {
    number: "06",
    title: "Optimisation & Scale",
    description:
      "Continuous refinement to compound growth well beyond launch, turning early wins into lasting momentum.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUGEWGc-TAO04BuAARnKBzCqY4C7SqtH6oGWifv-BJB0z_UnvdoyrhjSr&s=10",
  },
];

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Refs for the intro copy's theme transition (section stays behind the cards)
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

    // ── No colour transition — section stays dark (#0A0A0A) at all times ──

    // ── MOBILE: normal vertical stack, no pin, no horizontal track ──────
    mm.add("(max-width: 767px)", () => {
      gsap.set(track, { clearProps: "x" });
      gsap.set(intro, { clearProps: "all" });
      gsap.set(anchorRefs.current, { clearProps: "all" });
      anchorRefs.current.forEach((anchor) => {
        const card = anchor?.querySelector<HTMLElement>(".card");
        if (card) gsap.set(card, { clearProps: "all" });
      });

      gsap.set(
        anchorRefs.current
          .flatMap((a) => [a?.querySelector(".step-number"), a?.querySelector(".step-title")])
          .filter(Boolean) as HTMLElement[],
        { clearProps: "transform" }
      );

      if (prefersReducedMotion) return;

      const tweens = anchorRefs.current
        .filter(Boolean)
        .map((anchor) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: anchor,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });

          tl.from(anchor, {
            opacity: 0,
            y: 40,
            scale: 0.97,
            duration: 0.7,
            ease: "power3.out",
          }, 0);

          const numberEl = anchor?.querySelector<HTMLElement>(".step-number");
          const titleEl = anchor?.querySelector<HTMLElement>(".step-title");
          const descEl = anchor?.querySelector<HTMLElement>(".step-desc");

          if (numberEl) {
            tl.from(numberEl, { yPercent: 120, duration: 0.7, ease: "power4.out" }, 0.08);
          }
          if (titleEl) {
            tl.from(titleEl, { yPercent: 120, duration: 1, ease: "power4.out" }, 0.22);
          }
          if (descEl) {
            tl.from(descEl, { opacity: 0, y: 14, duration: 0.6, ease: "power3.out" }, 0.42);
          }

          return tl;
        });

      cleanups.push(() => {
        tweens.forEach((t) => t.scrollTrigger?.kill());
        tweens.forEach((t) => t.kill());
      });
    });

    // ── TABLET + DESKTOP: whole section pins, entire track scrolls ──────
    mm.add("(min-width: 768px)", () => {
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

          // No colour glow — just a neutral lift via scale/opacity/shadow depth.
          gsap.to(card, {
            scale: isActive ? 1.02 : 1,
            opacity: isActive ? 1 : 0.8,
            boxShadow: isActive
              ? "0 30px 60px rgba(0,0,0,0.55)"
              : "0 20px 40px rgba(0,0,0,0.35)",
            duration: 0.5,
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
          scrub: 0.6,
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

      // Cards — entrance from the right + mask reveal for number/title
      anchorRefs.current.forEach((anchor) => {
        if (!anchor) return;

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: anchor,
            containerAnimation: scrollTween,
            start: "left 92%",
            toggleActions: "play none none reverse",
          },
        });
        if (cardTl.scrollTrigger) cardTriggers.push(cardTl.scrollTrigger);

        cardTl.from(anchor, {
          opacity: 0,
          scale: 0.95,
          x: 100,
          duration: 0.8,
          ease: "power4.out",
        }, 0);

        const numberEl = anchor.querySelector<HTMLElement>(".step-number");
        const titleEl = anchor.querySelector<HTMLElement>(".step-title");
        const descEl = anchor.querySelector<HTMLElement>(".step-desc");

        // Mask reveal — number first and quicker, heading slower right after.
        if (numberEl) {
          cardTl.from(numberEl, {
            yPercent: 130,
            duration: 0.7,
            ease: "power4.out",
          }, 0.1);
        }
        if (titleEl) {
          cardTl.from(titleEl, {
            yPercent: 130,
            duration: 1.05,
            ease: "power4.out",
          }, 0.26);
        }
        if (descEl) {
          cardTl.from(descEl, {
            opacity: 0,
            y: 16,
            duration: 0.7,
            ease: "power3.out",
          }, 0.48);
        }

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

      // Hover interactions — plain lift, no colour glow
      const hoverCleanups: (() => void)[] = [];

      anchorRefs.current.forEach((anchor) => {
        const card = anchor?.querySelector<HTMLElement>(".card");
        const image = anchor?.querySelector<HTMLElement>(".card-image");
        if (!card) return;

        const onEnter = () => {
          gsap.to(card, {
            y: -8,
            boxShadow: "0 35px 70px rgba(0,0,0,0.6)",
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
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Subtle ambient glow */}
      <div className="ambient-glow absolute top-[-30%] right-[-20%] w-[70%] h-[120%] bg-[radial-gradient(ellipse,rgba(0,180,216,0.10),transparent)] pointer-events-none z-0" />

      <div
        ref={pinRef}
        className="relative z-10 w-full md:h-screen md:overflow-hidden flex flex-col justify-center py-14 md:py-16 lg:py-20 xl:py-24"
      >
        {/* ── Horizontal track: intro panel + all cards live here ─────── */}
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row w-full md:w-max gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20 md:items-center will-change-transform"
        >
          {/* ── Intro panel (heading + text) ──────────────────────────── */}
          <div
            ref={introRef}
            className="w-full md:w-screen flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p
                  ref={labelRef}
                  className="font-['JetBrains_Mono'] text-md tracking-[0.25em] uppercase mb-2"
                  style={{ color: "#00B4D8" }}
                >
                  How We Work
                </p>
                <h2
                  ref={headingRef}
                  className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
                  style={{ color: "#FFFFFF" }}
                >
                  Six steps. One straight line to revenue.
                </h2>
              </div>
              <div
                ref={subtextRef}
                className="font-['Inter'] text-sm md:text-base max-w-sm border-l border-[#00B4D8]/25 pl-4 md:pl-6"
                style={{ color: "#D1D5DB" }}
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
              className={`w-[min(88vw,540px)] sm:w-[min(80vw,600px)] md:w-[clamp(540px,56vw,700px)] lg:w-[clamp(640px,50vw,780px)] xl:w-[clamp(680px,44vw,840px)] 2xl:w-[clamp(720px,40vw,880px)] flex-shrink-0 mx-auto md:mx-0 ${
                index === 0 ? "md:ml-10 lg:ml-14 xl:ml-20 2xl:ml-24" : ""
              } ${
                index === processSteps.length - 1
                  ? "md:mr-10 lg:mr-14 xl:mr-20 2xl:mr-24"
                  : ""
              }`}
            >
              {/* Anchor — owns entrance x / opacity / scale */}
              <div
                className="card group relative flex flex-col md:flex-row
                  h-auto md:h-[420px] lg:h-[460px] xl:h-[500px] 2xl:h-[540px]
                  rounded-3xl cursor-pointer overflow-hidden
                  border border-white/10
                  shadow-xl shadow-black/40
                  will-change-transform"
                style={{ backgroundColor: "#0D1B2A" }}
              >
                {/* ── Left: content — big number, heading, description ── */}
                <div className="order-2 md:order-1 w-full md:w-[52%] flex flex-col justify-center p-6 md:p-7 lg:p-9">
                  <div className="overflow-hidden mb-1 md:mb-2">
                    <span
                      className="step-number inline-block font-['Space_Grotesk'] font-bold leading-[0.85] text-[64px] sm:text-[76px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
                      style={{ color: "#00B4D8" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="overflow-hidden mb-3 md:mb-4">
                    <h3
                      className="step-title inline-block font-['Space_Grotesk'] font-semibold leading-tight text-2xl sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-4xl text-white"
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="step-desc font-['Inter'] leading-relaxed text-base md:text-[17px] lg:text-lg text-[#9CA3AF]">
                    {step.description}
                  </p>
                </div>

                {/* ── Right: image ────────────────────────────────── */}
                <div className="order-1 md:order-2 relative w-full md:w-[48%] h-[220px] sm:h-[260px] md:h-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="card-image w-full h-full object-cover will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent opacity-35 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-50 pointer-events-none" />
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