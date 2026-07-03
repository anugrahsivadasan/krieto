import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

/**
 * ServicesShowcase
 * ------------------------------------------------------------------
 * Full-bleed dark section, no border, no rounded frame.
 * Layout (top -> bottom, matches the target mockup):
 *   1. "OUR SERVICES" heading block, centered, own dark section.
 *   2. Sticky scroll area: organic shape (left, inset from edge)
 *      + service copy (right), vertically centered in the viewport.
 *   3. Pagination dots pinned to the bottom.
 *
 * Functionality (unchanged from before):
 *  - Section is `services.length * 100vh` tall; inner wrapper is
 *    `sticky top-0 h-screen` so it stays pinned while you scroll.
 *  - scrollYProgress (0 -> 1) is bucketed into an `activeIndex`.
 *  - The service image arcs out/in (diagonal offset + rotate) on
 *    change; direction-aware so scrolling back up reverses it.
 *  - Heading + right-hand copy slide in from the right, out to the
 *    left, on every change.
 *  - Clicking a 01/02/03 nav item or a pagination dot scrolls to
 *    that service's position and drives the same animation.
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
    <section
      ref={sectionRef}
      className="relative left-1/2 w-screen -translate-x-1/2"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0A0A0A]">

        {/* Background Glow */}

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-[700px] w-[700px] rounded-full blur-[180px] opacity-30"
          animate={{
            backgroundColor: active.accentSoft,
          }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 h-[650px] w-[650px] rounded-full blur-[180px] opacity-20"
          animate={{
            backgroundColor: active.accentSoft,
          }}
          transition={{ duration: 0.8 }}
        />

<div className="mx-auto flex h-full w-full max-w-[1600px] flex-col px-12 xl:px-20">
          {/* ================= Heading ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="flex h-[20vh] flex-col items-center justify-center text-center"
          >

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              OUR SERVICES
            </p>

            <h2 className="font-heading text-[clamp(3.5rem,6vw,5.4rem)] font-black leading-none text-white">
              Built to move together.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Three disciplines. One integrated system.
              Every output connected to your growth.
            </p>

          </motion.div>

          {/* ================= Body ================= */}

<div className="mx-auto flex h-[80vh] w-full max-w-[1400px] items-center justify-center gap-24 px-12">            {/* LEFT */}

<div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  background: `linear-gradient(145deg, ${active.blobFrom} 0%, ${active.blobTo} 100%)`,
                }}
                transition={{ duration: .8 }}
className="relative flex h-[650px] w-[650px] flex-col justify-between overflow-hidden p-14 shadow-[0_40px_80px_rgba(0,0,0,.35)]"                style={{
                  borderRadius:
                    "8% 52% 46% 58% / 14% 28% 68% 54%",
                }}
              >

                <motion.div
                  className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                />

                <motion.div
                  className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl"
                />

                <AnimatePresence
                  mode="wait"
                  custom={direction}
                >

                  <motion.div
                    key={`${active.id}-title`}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative z-10"
                  >

                    <span className="text-sm tracking-[0.35em] text-white/60">
                      {active.number}
                    </span>

                    <h2 className="mt-5 font-heading text-[4rem] font-black leading-none text-white">
                      {active.title.charAt(0) +
                        active.title.slice(1).toLowerCase()}
                    </h2>

                    <p className="mt-6 max-w-xs text-lg leading-8 text-white/80">
                      {active.subtitle}
                    </p>

                  </motion.div>

                </AnimatePresence>

                <div className="relative flex flex-1 items-end justify-end">

                  <AnimatePresence
                    mode="wait"
                    custom={direction}
                  >

                    <motion.img
                      key={active.id}
                      src={active.image}
                      alt={active.title}
                      custom={direction}
                      variants={arcVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute bottom-0 right-[-20px] w-[105%] max-w-[650px] object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,.45)]"
                    />

                  </AnimatePresence>

                </div>

              </motion.div>

              <div className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 gap-12">

                {services.map((service, index) => (

                  <button
                    key={service.id}
                    onClick={() => goTo(index)}
                    className="text-left"
                  >

                    <p
                      className="text-sm font-bold"
                      style={{
                        color:
                          index === activeIndex
                            ? service.accent
                            : "rgba(255,255,255,.45)",
                      }}
                    >
                      {service.number}
                    </p>

                    <p
                      className="mt-1 text-xs uppercase tracking-[0.25em]"
                      style={{
                        color:
                          index === activeIndex
                            ? "#fff"
                            : "rgba(255,255,255,.45)",
                      }}
                    >
                      {service.title}
                    </p>

                  </button>

                ))}

              </div>

            </div>

            {/* RIGHT STARTS HERE */}

            {/* RIGHT: copy block, right -> left transition */}
<div className="flex items-center justify-center">
  <AnimatePresence mode="wait" custom={direction}>
    <motion.div
      key={active.id}
      custom={direction}
      variants={textVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="max-w-[640px]"
    >

      <span
        className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md"
      >
        {active.number} • SERVICE
      </span>

      <h3 className="mt-8 font-heading text-[clamp(2.7rem,4vw,4.2rem)] font-black leading-[1.05] text-white">
        {active.paragraphheading}
      </h3>

      <p className="mt-8 text-xl leading-9 text-slate-400">
        {active.description}
      </p>

      <Link
        to={active.link}
        className="mt-12 inline-flex items-center gap-4 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:gap-6"
        style={{
          background: active.accent,
        }}
      >
        {active.button}

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      </Link>

      {/* Stats */}

      <div className="mt-20 grid grid-cols-3 gap-10">

        <div>
          <h4
            className="text-5xl font-black"
            style={{
              color: active.accent,
            }}
          >
            250+
          </h4>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
            Projects
          </p>
        </div>

        <div>
          <h4
            className="text-5xl font-black"
            style={{
              color: active.accent,
            }}
          >
            98%
          </h4>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
            Success
          </p>
        </div>

        <div>
          <h4
            className="text-5xl font-black"
            style={{
              color: active.accent,
            }}
          >
            24/7
          </h4>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
            Support
          </p>
        </div>

      </div>

    </motion.div>
  </AnimatePresence>

</div>

</div>

</div>

{/* Pagination */}

<div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-4">

  {services.map((service, index) => (

    <button
      key={service.id}
      onClick={() => goTo(index)}
      className="rounded-full transition-all duration-300"
      style={{
        width: index === activeIndex ? 30 : 10,
        height: 10,
        borderRadius: 999,
        background:
          index === activeIndex
            ? active.accent
            : "rgba(255,255,255,.25)",
      }}
    />

  ))}

</div>

</div>

</section>

</>
);
};

export default ServicesShowcase;