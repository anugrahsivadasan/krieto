import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

const arcVariants: Variants = {
  enter: (direction: number) => ({
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
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.6,
    x: direction > 0 ? -220 : 220,
    y: -60,
    rotate: direction > 0 ? -110 : 110,
    transition: { duration: 0.55, ease: [0.4, 0, 1, 1] as const },
  }),
};

const textVariants: Variants = {
  enter: { opacity: 0, x: 60 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] as const },
  },
};

const STATS = [
  { label: "Projects", value: "50+" },
  { label: "Success", value: "100%" },
  { label: "Support", value: "24/7" },
];

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v: number) => {
    const raw = v * services.length;
    const next = Math.min(services.length - 1, Math.max(0, Math.floor(raw)));
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const goTo = (index: number) => {
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
          MOBILE / TABLET (below lg)
      ============================================================ */}
      <section className="relative block w-full overflow-hidden bg-[#0A0A0A] px-5 py-16 sm:px-8 lg:hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full opacity-30 blur-[140px]"
          style={{ backgroundColor: services[0].accentSoft }}
        />

        <div className="relative flex flex-col items-center text-center">
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            OUR SERVICES
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl">
            Built to move together.
          </h2>
         <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
  Three disciplines. One integrated system. Every output connected to your growth.
</p>
        </div>

        <div className="relative mt-8 flex flex-col gap-20">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <div
                className="relative flex aspect-square w-full max-w-[360px] flex-col justify-between overflow-hidden p-7 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                style={{
                  borderRadius: "8% 52% 46% 58% / 14% 28% 68% 54%",
                  background: `linear-gradient(145deg, ${service.blobFrom} 0%, ${service.blobTo} 100%)`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
                />
                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-black/20 blur-3xl"
                />

                <div className="relative z-10">
                  <span className="text-xs tracking-[0.3em] text-white/60">
                    {service.number}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-black leading-none text-white">
                    {service.title.charAt(0) +
                      service.title.slice(1).toLowerCase()}
                  </h3>
                  <p className="mt-2 max-w-[200px] text-sm leading-6 text-white/80">
                    {service.subtitle}
                  </p>
                </div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute bottom-0 right-0 w-[52%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="mt-8 flex w-full max-w-[420px] flex-col items-center text-center">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur-md">
                  {service.number} • SERVICE
                </span>

                <h3 className="mt-6 font-heading text-2xl font-black leading-tight text-white sm:text-3xl">
                  {service.paragraphheading}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white sm:w-auto"
                  style={{ background: service.accent }}
                >
                  {service.button}
                  <ArrowRight size={20} />
                </Link>

                <div className="mt-10 grid w-full grid-cols-3 gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <h4
                        className="text-2xl font-black sm:text-3xl"
                        style={{ color: service.accent }}
                      >
                        {stat.value}
                      </h4>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          DESKTOP (lg and up)
      ============================================================ */}
      <section
        ref={sectionRef}
        className="relative left-1/2 hidden w-screen -translate-x-1/2 lg:block"
        style={{ height: `${services.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#0A0A0A]">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-10 h-[700px] w-[700px] rounded-full opacity-30 blur-[180px]"
            animate={{ backgroundColor: active.accentSoft }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-40 bottom-0 h-[650px] w-[650px] rounded-full opacity-20 blur-[180px]"
            animate={{ backgroundColor: active.accentSoft }}
            transition={{ duration: 0.8 }}
          />

          <div className="pointer-events-none absolute right-12 top-10 z-20 hidden items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 xl:flex">
            {/* <Mouse size={16} /> */}
            Scroll to explore
          </div>

          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-1 flex-col px-6 sm:px-10 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex shrink-0 flex-col items-center justify-center px-4 pb-6 pt-12 text-center lg:pb-4 lg:pt-10 xl:pb-10 xl:pt-24"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 lg:mb-2 lg:text-sm lg:tracking-[0.35em]">
                OUR SERVICES
              </p>

              <h2 className="font-heading text-[clamp(2.6rem,4.5vw,5.4rem)] font-black leading-none text-white">
                Built to move together.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 lg:mt-5 lg:text-lg">
                Three disciplines. One integrated system. Every output
                connected to your growth.
              </p>
            </motion.div>

            <div
              className="
                mx-auto grid w-full min-h-0 max-w-[1400px] flex-1
                grid-cols-1 items-center gap-12 py-4
                lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-10
                xl:grid-cols-[520px_1fr] xl:gap-16
                2xl:grid-cols-[600px_1fr] 2xl:gap-20
              "
            >
              <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center lg:max-w-none lg:justify-end">
                <div className="relative w-full max-w-[420px] lg:max-w-none">
                  <motion.div
                    animate={{
                      background: `linear-gradient(145deg, ${active.blobFrom} 0%, ${active.blobTo} 100%)`,
                    }}
                    transition={{ duration: 0.8 }}
                    className="relative flex aspect-square w-full flex-col justify-between overflow-hidden p-8 shadow-[0_40px_80px_rgba(0,0,0,0.35)] lg:p-10 xl:p-14"
                    style={{
                      borderRadius: "8% 52% 46% 58% / 14% 28% 68% 54%",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                    />
                    <div
                      aria-hidden
                      className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl"
                    />

                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={`${active.id}-title`}
                        custom={direction}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative z-10"
                      >
                        <span className="text-xs tracking-[0.3em] text-white/60 lg:text-sm">
                          {active.number}
                        </span>

                        <h2 className="mt-4 font-heading text-[clamp(2.2rem,3.2vw,4rem)] font-black leading-none text-white lg:mt-2">
                          {active.title.charAt(0) +
                            active.title.slice(1).toLowerCase()}
                        </h2>

                        <p className="mt-4 max-w-xs text-base leading-7 text-white/80 lg:mt-0 lg:text-lg lg:leading-8">
                          {active.subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <div className="relative flex flex-1 items-end justify-end">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                          key={active.id}
                          src={active.image}
                          alt={active.title}
                          custom={direction}
                          variants={arcVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="absolute bottom-0 right-0 w-[80%] max-w-[460px] object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.45)]"
                        />
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-8 lg:-bottom-14 lg:gap-12">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => goTo(index)}
                        className="text-left"
                      >
                        <p
                          className="text-xs font-bold lg:text-sm"
                          style={{
                            color:
                              index === activeIndex
                                ? service.accent
                                : "rgba(255,255,255,0.45)",
                          }}
                        >
                          {service.number}
                        </p>

                        <p
                          className="mt-1 text-[10px] uppercase tracking-[0.2em] lg:text-xs lg:tracking-[0.25em]"
                          style={{
                            color:
                              index === activeIndex
                                ? "#fff"
                                : "rgba(255,255,255,0.45)",
                          }}
                        >
                          {service.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active.id}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full max-w-xl text-center lg:text-left xl:max-w-2xl"
                  >
                    <h3 className="mt-6 font-heading text-[clamp(2rem,2.8vw,4.2rem)] font-black leading-[1.05] text-white lg:mt-8">
                      {active.paragraphheading}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-400 lg:mt-8 lg:text-xl lg:leading-9">
                      {active.description}
                    </p>

                    <Link
                      to={active.link}
                      className="group mt-8 inline-flex items-center gap-4 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:gap-6 lg:mt-12 lg:text-lg"
                      style={{ background: active.accent }}
                    >
                      {active.button}
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>

                    <div className="mt-12 grid grid-cols-3 gap-6 lg:mt-16 lg:gap-8 xl:mt-20 xl:gap-10">
                      {STATS.map((stat) => (
                        <div key={stat.label}>
                          <h4
                            className="text-3xl font-black lg:text-4xl xl:text-5xl"
                            style={{ color: active.accent }}
                          >
                            {stat.value}
                          </h4>
                          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50 lg:mt-3 lg:text-xs lg:tracking-[0.3em]">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
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