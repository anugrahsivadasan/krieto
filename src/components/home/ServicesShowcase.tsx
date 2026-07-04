import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

/**
 * ServicesShowcase
 * ------------------------------------------------------------------
 * DESKTOP (lg and up):
 *  - Unchanged scroll-jacking behaviour. Section is
 *    `services.length * 100vh` tall; inner wrapper is
 *    `sticky top-0 h-screen` so it stays pinned while you scroll.
 *  - scrollYProgress (0 -> 1) is bucketed into an `activeIndex`.
 *  - Layout has been cleaned up: the two columns now share one
 *    grid, are both vertically centered, and the duplicate
 *    `order-1 / order-1` (which did nothing) has been replaced
 *    with an explicit, intentional order so the card always leads
 *    and the copy always trails, with matching column widths.
 *
 * MOBILE (below lg):
 *  - No scroll-jacking at all — the section takes up a single,
 *    normal-height screen (no `100vh * services.length` track).
 *  - All three services render at once, stacked in normal document
 *    flow (card, heading, copy, CTA, repeated for each service).
 *    Nothing is tabbed, hidden, or driven by scroll position —
 *    the user just scrolls the page normally to see all of them.
 * ------------------------------------------------------------------
 */

const arcVariants = {
  enter: (direction) => ({
    opacity: 0,
    scale: 0.6,
    x: direction > 0 ? 220 : -220,
    y: 60,
    rotate: direction > 0 ? 110 : -110,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    scale: 0.6,
    x: direction > 0 ? -220 : 220,
    y: -60,
    rotate: direction > 0 ? -110 : 110,
    transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
  }),
};

const textVariants = {
  enter: { opacity: 0, x: 60 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
};

const ServicesShowcase = () => {
  const sectionRef = useRef(null);

  // Desktop: driven by scroll position.
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const raw = v * services.length;
    const next = Math.min(services.length - 1, Math.max(0, Math.floor(raw)));
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const goTo = (index) => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const top = el.offsetTop;
    const height = el.offsetHeight - window.innerHeight;
    const target = top + (height * (index + 0.5)) / services.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const active = services[activeIndex];

  return (
    <>
      {/* ============================================================
          MOBILE / TABLET (below lg) — static, tap-driven, one screen
      ============================================================ */}
      <section className="block lg:hidden relative w-full overflow-hidden bg-[#0A0A0A] px-5 py-16 sm:px-8">
        {/* ambient glow, same family as desktop but toned down and static
            (no active-service tracking needed since all three show at once) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-16 h-[320px] w-[320px] rounded-full blur-[100px]"
          style={{ backgroundColor: services[0].accentSoft }}
        />

        {/* Heading */}
        <div className="relative flex flex-col items-center text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            OUR SERVICES
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl">
            Built to move together.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
            Three disciplines. One integrated system. Every output connected
            to your growth.
          </p>
        </div>

        {/* All three services stacked and visible together — nothing
            is hidden behind a tab, nothing is driven by scroll
            position. This is just normal document flow. */}
        <div className="relative mt-10 flex flex-col gap-14">
          {services.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className="relative mx-auto flex aspect-square w-full max-w-[340px] flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                style={{
                  borderRadius: "0% 58% 46% 54% / 0% 34% 66% 58%",
                  background: `linear-gradient(145deg, ${s.blobFrom} 0%, ${s.blobTo} 100%)`,
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 30%, rgba(255,255,255,0) 70%), radial-gradient(circle at 25% 20%, rgba(255,255,255,0.22), transparent 16%), radial-gradient(circle at 85% 80%, ${s.accentSoft}, transparent 28%)`,
                    mixBlendMode: "screen",
                  }}
                />

                <div className="relative">
                  <p
                    className="mb-1 text-xs font-bold tracking-[0.2em]"
                    style={{ color: s.accent }}
                  >
                    {s.number}
                  </p>
                  <h2 className="font-heading text-2xl font-black text-white sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-[220px] text-sm text-white/80">
                    {s.subtitle}
                  </p>
                </div>

                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute bottom-2 right-0 w-[70%] object-contain"
                />
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {s.paragraphheading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {s.description}
                </p>
                <Link
                  to={s.link}
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white sm:w-auto"
                  style={{ background: s.accent }}
                >
                  {s.button}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          DESKTOP (lg and up) — original scroll-jacking experience
      ============================================================ */}
      <section
        ref={sectionRef}
        className="relative left-1/2 hidden w-screen -translate-x-1/2 lg:block"
        style={{ height: `${services.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
          {/* top-center floating sphere */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[46%] top-[40%] h-14 w-14 rounded-full blur-[1px]"
            animate={{
              background: `radial-gradient(circle at 35% 30%, ${active.accent}, ${active.blobTo})`,
            }}
            transition={{ duration: 0.8 }}
          />

          {/* large soft glow bleeding off the bottom-right corner */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-24 h-[480px] w-[560px] rounded-full blur-[120px]"
            animate={{ backgroundColor: active.accentSoft }}
            transition={{ duration: 0.8 }}
          />

          <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col px-10">
            {/* ===================== Heading ===================== */}
            <div className="flex flex-col items-center justify-center px-5 pb-8 pt-16 text-center sm:pb-10 lg:px-12 lg:pt-20">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 lg:text-sm lg:tracking-[0.35em]">
                OUR SERVICES
              </p>

              <h2 className="max-w-5xl font-heading text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                Built to move together.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-slate-400 md:max-w-2xl lg:text-lg">
                Three disciplines. One integrated system.
                <br className="hidden sm:block" />
                Every output connected to your growth.
              </p>
            </div>

            {/* ===================== Main Content =====================
                Single grid, both columns vertically centered, explicit
                (and equal) widths so nothing drifts out of alignment
                at intermediate breakpoints. The card always comes
                first, the copy always second — no more redundant
                `order-1` on both sides. */}
            <div className="grid flex-1 grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2 lg:gap-16">
              {/* LEFT — card + nav */}
              <div className="order-1 flex w-full flex-col items-center lg:items-end">
                <div className="relative w-full max-w-[620px] lg:max-w-[520px] xl:max-w-[620px]">
                  <motion.div
                    animate={{
                      background: `linear-gradient(145deg, ${active.blobFrom} 0%, ${active.blobTo} 100%)`,
                    }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto flex aspect-square w-full flex-col justify-between overflow-hidden rounded-[42px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8 lg:p-12"
                    style={{
                      borderRadius: "0% 58% 46% 54% / 0% 34% 66% 58%",
                      backgroundBlendMode: "overlay",
                      backgroundColor: "rgba(15,23,42,0.35)",
                    }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 30%, rgba(255,255,255,0) 70%), radial-gradient(circle at 25% 20%, rgba(255,255,255,0.22), transparent 16%), radial-gradient(circle at 85% 80%, ${active.accentSoft}, transparent 28%)`,
                        mixBlendMode: "screen",
                      }}
                    />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        <h2 className="font-heading text-4xl font-black text-white xl:text-6xl">
                          {active.title}
                        </h2>

                        <p className="mt-5 max-w-xs text-base text-white/80 lg:text-lg">
                          {active.subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active.id}
                        src={active.image}
                        variants={arcVariants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute bottom-4 right-2 w-[76%] object-contain lg:right-2 lg:w-[80%] xl:w-[72%]"
                      />
                    </AnimatePresence>
                  </motion.div>

                  {/* Navigation */}
                  <div className="mt-8 flex flex-wrap justify-center gap-8 lg:gap-12">
                    {services.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => goTo(i)}
                        className="text-center"
                      >
                        <p
                          className="font-bold"
                          style={{
                            color: i === activeIndex ? s.accent : "#777",
                          }}
                        >
                          {s.number}
                        </p>

                        <p
                          className="mt-1 text-xs tracking-[0.25em]"
                          style={{
                            color: i === activeIndex ? "#fff" : "#666",
                          }}
                        >
                          {s.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — copy */}
              <div className="order-2 flex w-full justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full max-w-[560px] text-center lg:max-w-[520px] lg:text-left xl:max-w-[560px]"
                  >
                    <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                      {active.paragraphheading}
                    </h3>

                    <p className="mt-7 text-lg leading-9 text-slate-400">
                      {active.description}
                    </p>

                    <Link
                      to={active.link}
                      className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white sm:w-auto"
                      style={{
                        background: active.accent,
                      }}
                    >
                      {active.button}
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesShowcase;