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
 * Matches the reference exactly: full-bleed dark section, no border,
 * no rounded frame. The purple blob sits flush against the actual
 * top-left corner of the viewport (hard corner top-left, organic
 * everywhere else) — not centered inside a padded container.
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
    // left-1/2 w-screen -translate-x-1/2 keeps this full-bleed no matter
    // what max-w-* container it's rendered inside elsewhere on the page.
    <section
      ref={sectionRef}
      className="relative left-1/2 w-screen -translate-x-1/2"
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

        {/* scroll to explore indicator, top-right */}

        <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col px-10">
          {/* ===================== Heading ===================== */}

          <div
            className="
    flex
    flex-col
    items-center
    justify-center
    text-center

    px-5
    sm:px-8
    lg:px-12

    pt-12
    sm:pt-16
    lg:pt-20

    pb-8
    sm:pb-10
    lg:pb-12
  "
          >
            <p
              className="
      mb-3
      text-[11px]
      sm:text-xs
      lg:text-sm
      font-semibold
      uppercase
      tracking-[0.25em]
      sm:tracking-[0.3em]
      lg:tracking-[0.35em]
      text-cyan-400
    "
            >
              OUR SERVICES
            </p>

            <h2
              className="
      font-heading
      font-black
      leading-tight
      text-white

      text-4xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl

      max-w-5xl
    "
            >
              Built to move together.
            </h2>

            <p
              className="
      mt-5
      max-w-xs
      sm:max-w-lg
      md:max-w-2xl

      text-sm
      sm:text-base
      lg:text-lg

      leading-7
      sm:leading-8

      text-slate-400
    "
            >
              Three disciplines. One integrated system.
              <br className="hidden sm:block" />
              Every output connected to your growth.
            </p>
          </div>

          {/* ===================== Main Content ===================== */}

          <div
            className="
    grid
    flex-1
    items-center
    gap-10

    grid-cols-1
    lg:grid-cols-2

    pb-10
  "
          >
            {/* LEFT */}

            <div
              className="
    flex
    items-center
    justify-center
    lg:justify-end
    order-1
  "
            >
              <div className="relative">
                <motion.div
                  animate={{
                    background: `linear-gradient(145deg, ${active.blobFrom} 0%, ${active.blobTo} 100%)`,
                  }}
                  transition={{ duration: 0.8 }}
                  className="relative flex aspect-square
            w-[300px] sm:w-[360px] md:w-[460px] lg:w-[520px] xl:w-[620px]
            flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-12
            rounded-[42px] border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
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
                      <h2
                        className="font-heading text-3xl
sm:text-4xl
md:text-5xl
xl:text-6xl font-black text-white"
                      >
                        {active.title}
                      </h2>

                      <p
                        className="mt-5 max-w-xs text-sm
sm:text-base
lg:text-lg text-white/80"
                      >
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
                      className="
absolute
bottom-4

right-2
sm:right-0
lg:right-2

w-[68%]
sm:w-[72%]
md:w-[76%]
lg:w-[80%]
xl:w-[72%]

object-contain
"
                    />
                  </AnimatePresence>
                </motion.div>

                {/* Navigation */}

                <div
                  className="
mt-8
flex
justify-center
gap-6
sm:gap-8
lg:gap-12

flex-wrap
"
                >
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

            {/* RIGHT */}

            <div
              className="
    flex
    justify-center
    lg:justify-start
    order-1
  "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="
w-full
max-w-[820px]

text-center
lg:text-left
"
                >
                  <h3
                    className="text-3xl
sm:text-4xl
md:text-5xl font-bold leading-tight text-white"
                  >
                    {active.paragraphheading}
                  </h3>

                  <p
                    className="mt-7 text-base
sm:text-lg

leading-8
sm:leading-9 text-slate-400"
                  >
                    {active.description}
                  </p>

                  <Link
                    to={active.link}
                    className="mt-10 inline-flex
justify-center

w-full
sm:w-auto items-center gap-3 rounded-full px-8 py-4 font-semibold text-white"
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

        {/* pagination dots */}
        {/* <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.title}`}
              className="rounded-full transition-all"
              style={{
                height: i === activeIndex ? 10 : 8,
                width: i === activeIndex ? 10 : 8,
                backgroundColor:
                  i === activeIndex ? active.accent : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ServicesShowcase;
