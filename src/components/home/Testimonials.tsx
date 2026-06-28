import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../global/Section";

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
"Three agencies before Krieto. The difference is they build systems, not campaigns. Results are still running six months after the engagement ended."  , 
  author: "Sarah Mitchell",
    role: "CEO",
    company: "Pinnacle Hospitality",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face",
    metric: "2× leads",
    period: "in 90 days",
  },
  {
    quote:
"Working with Krieto felt different from day one. They talked about our business in terms of revenue, not impressions. We grew 140% in the first quarter." ,  
  author: "Marcus Rodriguez",
    role: "Founder",
    company: "Velocity Commerce",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&crop=face",
    metric: "3.8× ROAS",
    period: "first campaign",
  },
  {
    quote:
      "From day one, Krieto understood our vision. Their brand design work is exceptional, and the paid advertising campaigns drove a 4× return on ad spend in the first quarter.",
    author: "Jennifer Park",
    role: "Marketing Director",
    company: "Stonebridge Group",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=face",
    metric: "4× ROAS",
    period: "Q1",
  },
  {
    quote:
      "We'd worked with three agencies before Krieto. None of them came close. The clarity of their strategy and the speed of execution is something we've never seen before.",
    author: "Daniel Osei",
    role: "COO",
    company: "Meridian Financial",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
    metric: "60% CAC drop",
    period: "6 months",
  },
];

const SLIDE_INTERVAL = 5000;

// ─── Card ─────────────────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="relative flex flex-col bg-[#1E1E1E] rounded-2xl border border-[#00B4D8]/15 px-8 pt-8 pb-8 min-h-[320px] h-full">
      {/* Top row: quote icon + stars */}
      <div className="flex items-center justify-between mb-6">
        {/* Quote mark SVG */}
        <svg
          aria-hidden="true"
          className="w-9 h-9 text-[#00B4D8]/40"
          viewBox="0 0 40 40"
          fill="currentColor"
        >
          <path d="M0 20C0 8.954 8.954 0 20 0h2v8h-2c-6.627 0-12 5.373-12 12v2H20v18H0V20zm22 0C22 8.954 30.954 0 42 0h2v8h-2c-6.627 0-12 5.373-12 12v2H42v18H22V20z" />
        </svg>

        {/* 5 stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3.5 h-3.5"
              viewBox="0 0 16 16"
              fill="#00B4D8"
              aria-hidden="true"
            >
              <path d="M8 1.3l1.5 3 3.3.5-2.4 2.3.6 3.3L8 8.9l-3 1.5.6-3.3L3.2 4.8l3.3-.5L8 1.3z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote text */}
      <p className="font-['Inter'] font-normal text-[17px] leading-[1.75] text-[#F9FAFB]/80 flex-1 mb-8">
        {t.quote}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-6" />

      {/* Footer: author left, metric right */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={t.avatar}
            alt={t.author}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#00B4D8]/20 flex-shrink-0"
          />
          <div>
            <p className="font-['Space_Grotesk'] font-semibold text-[#F9FAFB] text-sm leading-tight">
              {t.author}
            </p>
            <p className="font-['Inter'] text-xs text-[#6B7280] mt-0.5">
              {t.role},{" "}
              <span className="text-[#90E0EF]/70">{t.company}</span>
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 text-right">
          <p className="font-['Space_Grotesk'] font-bold text-[#00B4D8] text-base leading-none">
            {t.metric}
          </p>
          <p className="font-['JetBrains_Mono'] text-[10px] text-[#6B7280] tracking-widest uppercase mt-1">
            {t.period}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = testimonials.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track visible cards with stable keys for layout animation
  const [visibleCards, setVisibleCards] = useState([
    { key: `card-0`, index: 0 },
    { key: `card-1`, index: 1 },
  ]);

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      const normalizedIndex = (index + total) % total;
      if (normalizedIndex === current) return;

      setDirection(dir);

      // Build new visible cards so the persistent card keeps its key
      const prevLeft = current;
      const prevRight = (current + 1) % total;

      let newCards: { key: string; index: number }[];
      if (dir === 1) {
        // Forward: right card becomes left, new card enters right
        newCards = [
          { key: `card-${prevRight}`, index: prevRight },
          { key: `card-${(normalizedIndex + 1) % total}`, index: (normalizedIndex + 1) % total },
        ];
      } else {
        // Backward: left card becomes right, new card enters left
        newCards = [
          { key: `card-${(normalizedIndex - 1 + total) % total}`, index: (normalizedIndex - 1 + total) % total },
          { key: `card-${prevLeft}`, index: prevLeft },
        ];
      }

      setVisibleCards(newCards);
      setCurrent(normalizedIndex);
    },
    [current, total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  // ── Premium animations ─────────────────────────────────────────────────────
  const spring = {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1,
  } as const;

  const cardSlideIn = (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  });
  const cardSlideOut = (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
  });

  return (
    <section
      id="testimonials"
      className="relative bg-[#0A0A0A] py-[120px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-3">
              Client Stories
            </p>
            <h2 className="font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl tracking-tight leading-tight">
             Do not take our word for it. Hear it yourself from our clients. 
            </h2>
          </motion.div>

          {/* Arrow controls */}
          <motion.div
            className="flex items-center gap-3 md:mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#6B7280] hover:border-[#00B4D8]/50 hover:text-[#00B4D8] hover:bg-[#00B4D8]/[0.08] transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#6B7280] hover:border-[#00B4D8]/50 hover:text-[#00B4D8] hover:bg-[#00B4D8]/[0.08] transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* ── Mobile: single card ──────────────────────────────────────── */}
        <div className="md:hidden overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`mob-${current}`}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
                center: { x: 0, opacity: 1, scale: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={spring}
            >
              <TestimonialCard t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Desktop: 2-column layout with real layout animation ──────── */}
        <div className="hidden md:grid grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleCards.map(({ key, index }) => (
             <motion.div
  key={key}
  layout
  custom={direction}
  variants={{
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
    }),
  }}
  initial="enter"
  animate="center"
  exit="exit"
                transition={{
                  layout: spring,
                  opacity: { duration: 0.3 },
                  x: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.4, ease: "easeOut" },
                }}
                className="min-h-[320px]"
              >
                <TestimonialCard t={testimonials[index]} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Bottom bar: dots + counter + progress ────────────────────── */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      width: i === current ? 24 : 6,
                      backgroundColor:
                        i === current
                          ? "rgba(0,180,216,1)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-1.5 rounded-full"
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <p className="font-['JetBrains_Mono'] text-xs text-[#6B7280] tracking-widest select-none">
              <span className="text-[#F9FAFB]/50">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="mx-1.5 text-[#6B7280]/40">/</span>
              {String(total).padStart(2, "0")}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-px bg-white/[0.06] rounded-full overflow-hidden">
            <AnimatePresence mode="wait">
              {!isPaused && (
                <motion.div
                  key={current}
                  className="h-full bg-gradient-to-r from-[#00B4D8]/60 to-[#00B4D8] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}