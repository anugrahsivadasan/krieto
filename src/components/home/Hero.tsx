import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, ArrowRight } from "lucide-react";

import Aurora from "../global/Aurora";

const EASE: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    delay,
    ease: EASE,
  },
});

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#0A0A0A]
      flex
      items-center
      justify-center
      "
    >
      {/* Aurora */}

      <div className="absolute inset-0 pointer-events-none">
        <Aurora
          colorStops={[
            "#03045E",
            "#0077B6",
            "#00B4D8",
          ]}
          blend={0.35}
          amplitude={0.8}
          speed={0.4}
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Premium Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[850px]
        h-[850px]
        rounded-full
        blur-[180px]
        pointer-events-none
      "
      />

      <div
        className="
        relative
        z-10
        w-full
        pt-[72px]
      "
      >
        <div
          className="
          w-full
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          min-h-[calc(100vh-72px)]
          flex
          items-center
          justify-center
        "
        >
          <div
            className="
            w-full
            max-w-5xl
            mx-auto
            text-center
          "
          >

                        {/* Eyebrow */}

        <motion.div
  {...fadeUp(0)}
  className="
    mt-8
    sm:mt-10
    lg:mt-0
    mb-8
    lg:mb-10
  "
>

<p
 className="
 uppercase
 text-[#00B4D8]
 text-xs
 tracking-[0.3em]
 font-semibold
"
>
Advertising · Design · Marketing
</p>

</motion.div>

            {/* Heading */}

            <h1
              className="
                font-heading
                font-extrabold
                tracking-[-0.06em]
                leading-[1.04]
text-[clamp(2.8rem,11vw,7.2rem)]              "
            >
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: 160 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-white"
                >
                  Your Growth.
                </motion.span>
              </div>

              <div className="overflow-hidden pb-3 ">
                <motion.span
                  initial={{ y: 160 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-300
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  <span className="text-white">Co-</span>
                 Engineered.
                </motion.span>
              </div>
            </h1>

            {/* Main Statement */}

            <motion.p
              {...fadeUp(0.18)}
              className="
                mt-10
                mx-auto
                max-w-4xl
                text-[#9CA3AF]
                text-xl
sm:text-2xl
md:text-[34px]
                font-medium
                leading-snug
              "
            >
              We Build Brands That Command Attention.
            </motion.p>

            {/* Description */}

            <motion.p
              {...fadeUp(0.28)}
              className="
                mt-8
                mx-auto
                max-w-3xl
                text-[#9CA3AF]
               text-base
sm:text-lg
md:text-[20px]
                leading-[1.9]
              "
            >
              We are the growth system your business has been missing.
              <br />
              Advertising that gets you seen.  <br />
              Design that gets you chosen. <br />
               Marketing that keeps you relevant.
            </motion.p>

            {/* CTA */}

            <motion.div
              {...fadeUp(0.38)}
              className="
                mt-16
                flex
                flex-col
                sm:flex-row
                justify-center
                items-center
                gap-5
              "
            >
                            {/* Primary CTA */}
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                 px-6 py-3
sm:px-8 sm:py-4
                  rounded-full
                  bg-[#00B4D8]
                  text-white
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                  transition-all
                  duration-300
                  hover:bg-[#0077B6]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(0,180,216,0.35)]
                "
              >
                Start a conversation
                <ArrowRight size={18} />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/portfolio"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  text-white
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                  transition-all
                  duration-300
                  hover:border-[#00B4D8]
                  hover:text-[#00B4D8]
                  hover:-translate-y-1
                "
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Social Proof */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="
                mt-16
                flex
                flex-col
                items-center
                justify-center
                gap-5
              "
            >
              {/* Stars */}

              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="
                      fill-[#00B4D8]
                      text-[#00B4D8]
                    "
                  />
                ))}
              </div>

              {/* Text */}

              <p
                className="
                  max-w-2xl
                  text-center
                  text-[#9CA3AF]
                  text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                Trusted by ambitious businesses, globally.
                {/* Building the brands their markets remember. */}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.6],
              y: [0, 8, 16, 8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                delay: 1.5,
                duration: 0.8,
              },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              text-white/50
            "
          >
            <ChevronDown size={30} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;