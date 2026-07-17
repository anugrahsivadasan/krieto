import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillars } from "./serviceContent";

gsap.registerPlugin(ScrollTrigger);

const HEADING_LINES = [
  "The services work best",
  "when they move together.",
] as const;

const DIM_COLOR = "rgba(249, 250, 251, 0.22)";
const WHITE_COLOR = "#F9FAFB";

const splitLineIntoLetters = (line: string, lineIndex: number) =>
  line.split("").map((char, charIndex) => (
    <span
      key={`${lineIndex}-${charIndex}`}
      className="letter inline-block"
      aria-hidden={char === " " ? undefined : undefined}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const ServicePillars = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const revealChildren = section.querySelectorAll(".reveal-child");
    const letters = heading.querySelectorAll<HTMLElement>(".letter");

    if (prefersReduced) {
      gsap.set(letters, { color: WHITE_COLOR });
      revealChildren.forEach((child) => child.classList.add("revealed"));
      imageRefs.current.filter(Boolean).forEach((image) => {
        gsap.set(image, { autoAlpha: 1, x: 0, scale: 1 });
      });
      return;
    }

    gsap.set(letters, { color: DIM_COLOR });

    // Light sweeps through letters first → last as you scroll
    const headingTween = gsap.to(letters, {
      color: WHITE_COLOR,
      ease: "none",
      stagger: {
        each: 0.05,
        from: "start",
      },
      scrollTrigger: {
        trigger: heading,
        start: "top 95%",
        end: "top 25%",
        scrub: 0.4,
      },
    });

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

    revealChildren.forEach((child) => observer.observe(child));

    const triggers = imageRefs.current.filter(Boolean).map((image, index) => {
      const isImageOnRight = index % 2 === 1;

      return gsap.fromTo(
        image,
        {
          autoAlpha: 0,
          x: isImageOnRight ? 90 : -90,
          scale: 1.04,
        },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 78%",
            end: "bottom 62%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      observer.disconnect();
      headingTween.scrollTrigger?.kill();
      headingTween.kill();
      triggers.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0A0A] py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(0,180,216,0.07),transparent_42%),radial-gradient(ellipse_at_8%_60%,rgba(144,224,239,0.055),transparent_34%)]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
            Three Pillars
          </p>

          <h2
            ref={headingRef}
            className="font-heading text-[clamp(2.8rem,6vw,3.8rem)] font-bold leading-[0.98] tracking-tight"
            style={{ color: DIM_COLOR }}
            aria-label="The services work best when they move together."
          >
            {HEADING_LINES.map((line, lineIndex) => (
              <span key={line} className="block">
                {splitLineIntoLetters(line, lineIndex)}
              </span>
            ))}
          </h2>
        </div>

        <div className="space-y-28 md:space-y-40">
          {pillars.map((pillar, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <div
                key={pillar.number}
                className="group relative grid items-center gap-10 transition duration-500 hover:-translate-y-1 md:gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24"
              >
                

                <div
                  ref={(node) => {
                    imageRefs.current[index] = node;
                  }}
                  className={`overflow-hidden rounded-[32px] opacity-0 ${
                    imageOnRight ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    className="h-[360px] w-full rounded-[32px] object-cover transition duration-700 group-hover:scale-105 md:h-[560px]"
                    loading="lazy"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center ${
                    imageOnRight ? "lg:order-1" : ""
                  }`}
                >
                  <span className="mb-8 block font-heading text-7xl font-bold leading-none text-white/10 md:text-8xl">
                    {pillar.number}
                  </span>
                  <p className="reveal-child mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    {pillar.title}
                  </h3>
                  <p className="reveal-child mt-6 max-w-xl font-body text-base leading-8 text-[#9CA3AF] md:text-lg">
                    {pillar.description}
                  </p>

                  <div className="mt-9 grid gap-3 sm:grid-cols-2">
                    {pillar.services.map((item) => (
                      <div
                        key={item}
                        className="reveal-child rounded-full border border-white/10 bg-[#0A0A0A]/45 px-5 py-3 font-body text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={pillar.link}
                    className="reveal-child mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-[#00B4D8]/35 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-[#90E0EF] transition duration-300 group-hover:translate-x-2 group-hover:bg-[#00B4D8] group-hover:text-white"
                  >
                    Explore {pillar.eyebrow}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;