import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ─── Scroll reveal (class-based, for text children) ──────────────────────────
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

    el.querySelectorAll(".reveal-child").forEach((child) =>
      observer.observe(child)
    );
    if (el.classList.contains("reveal-child")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Shared constants ─────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, amount: 0.3 } as const;

// Collage-specific motion constants
const COLLAGE_VP = { once: true, amount: 0.35 } as const;
const CARD_SPRING = {
  type: "spring" as const,
  stiffness: 90,
  damping: 18,
  mass: 0.8,
};
const CAPTION_EASE = [0.22, 1, 0.36, 1] as const;

// Approx spring settle + 0.2s after each card's own delay
const getCaptionDelay = (cardDelay: number) => cardDelay + 0.95 + 0.2;

const COLLAGE_CARDS = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop",
    alt: "Krieto team at work",
    rotate: -8,
    delay: 0,
    title: "Built With Strategy",
    subtitle:
      "Every project begins with research, positioning, and a clear growth roadmap.",
    positionClass:
      "relative lg:absolute lg:top-0 lg:left-0 lg:w-[58%] z-10 mb-4 lg:mb-0",
    frameClass:
      "aspect-[3/4] lg:aspect-auto lg:h-[400px]",
    imgClass: "w-full h-full object-cover",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&auto=format&fit=crop",
    alt: "Strategy session",
    rotate: 4,
    delay: 0.15,
    title: "Creative That Converts",
    subtitle:
      "Ideas designed to capture attention and move audiences to action.",
    positionClass:
      "relative lg:absolute lg:top-[24px] lg:right-0 lg:w-[46%] z-20 mb-4 lg:mb-0",
    frameClass:
      "aspect-[3/4] lg:aspect-auto lg:h-[300px]",
    imgClass: "w-full h-full object-cover object-top",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
    alt: "Client collaboration",
    rotate: 9,
    delay: 0.3,
    title: "Focused On Results",
    subtitle:
      "Everything we create is measured by business impact, not just aesthetics.",
    positionClass:
      "relative lg:absolute lg:bottom-0 lg:left-[12%] lg:w-[72%] z-10",
    frameClass:
      "aspect-[16/9] lg:aspect-auto lg:h-[195px]",
    imgClass: "w-full h-full object-cover object-center",
  },
] as const;

// ─── Collage card sub-component ───────────────────────────────────────────────
function CollageCard({
  src,
  alt,
  rotate,
  delay,
  title,
  subtitle,
  positionClass,
  frameClass,
  imgClass,
}: (typeof COLLAGE_CARDS)[number]) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 180,
        scale: 0.92,
        rotate,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate,
        filter: "blur(0px)",
      }}
      whileHover={{
        scale: 1.04,
        rotate,
      }}
      viewport={COLLAGE_VP}
      transition={{
        ...CARD_SPRING,
        delay,
      }}
      className={`${positionClass} will-change-transform`}
    >
      <div
        className={`
          group relative overflow-hidden rounded-2xl
          border border-white/[0.08] bg-[#141414]
          shadow-[0_40px_100px_rgba(0,0,0,0.45)]
          transition-shadow duration-500
          hover:shadow-2xl
          ${frameClass}
        `}
      >
        <motion.img
          src={src}
          alt={alt}
          className={imgClass}
          whileHover={{ scale: 1.08 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 18,
            mass: 0.8,
          }}
        />

        {/* Caption overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={COLLAGE_VP}
            transition={{
              duration: 0.6,
              delay: getCaptionDelay(delay),
              ease: CAPTION_EASE,
            }}
          >
            <p
              className="font-['Inter'] text-[13px] font-medium tracking-[0.04em]"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {title}
            </p>
            <p
              className="mt-1 font-['Inter'] text-[13px] font-medium tracking-[0.04em] leading-snug"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
const OurStory = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(0,180,216,0.05),transparent)] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT — Editorial collage (ONLY this block changed) ─────── */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full lg:h-[600px]">
              {/* Subtle glow behind collage only */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.08),transparent_70%)]" />

              {COLLAGE_CARDS.map((card) => (
                <CollageCard key={card.title} {...card} />
              ))}
            </div>
          </div>

          {/* ── RIGHT — Story content (untouched) ──────────────────────── */}
          <div className="order-1 lg:order-2 space-y-8">

            <p
              className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase"
              style={{ transitionDelay: "100ms" }}
            >
              Our Story
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl leading-tight tracking-tight"
            >
              Why Krieto Exists
            </motion.h2>

            <div className="space-y-5">
              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "250ms" }}
              >
                The companies winning in your market are not necessarily better
                than you. They have something most businesses never invest in
                seriously: a brand that communicates value before a word is
                spoken. Marketing that reaches the right people consistently.
                Advertising that earns attention. Design that removes doubt at
                first glance and Marketing that keeps you relevant
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "300ms" }}
              >
                Krieto was built for founders and businesses who have already
                built something worth buying — and need the world to know it.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "350ms" }}
              >
                We are a full-service advertising, design, and marketing agency.
                We do not sell deliverables. We build growth infrastructure: the
                brand presence, creative production, and marketing systems that
                make your business impossible to overlook.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "400ms" }}
              >
                We treat every client engagement as a partnership. Your revenue
                targets are ours. Your growth is the only metric that ultimately
                matters to us.
              </p>
            </div>

          </div>
        </div>

        {/* ── Pull quote (untouched) ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mt-24 md:mt-32"
        >
          <blockquote className="flex gap-8 items-stretch max-w-3xl">
            <div className="w-px bg-[#00B4D8] flex-shrink-0 self-stretch" />
            <p className="
              font-['Space_Grotesk']
              font-extrabold
              italic
              text-[#F9FAFB]
              
              text-2xl md:text-3xl lg:text-4xl
              tracking-tight
              leading-[1.25]
            ">
              "The best businesses do not always win.{" "}
              The best-positioned ones do.{" "}
              <span className="text-[#00B4D8]">
                We built Krieto to fix that for you."
              </span>
            </p>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;