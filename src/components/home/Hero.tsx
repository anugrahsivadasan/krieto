import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";

import Aurora from "../global/Aurora";
const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

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
      "
    >
{/* Aurora Background */}

<div className="absolute inset-0">
  <Aurora
    colorStops={[
      "#03045E",
      "#0077B6",
      "#00B4D8",
    ]}
    blend={0.35}
    amplitude={0.8}
    speed={0.8}
  />
</div>
<div className="absolute inset-0 bg-black/35" />
   

      {/* NOISE */}

      {/* <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        pointer-events-none
        bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-[size:20px_20px]
        "
      /> */}

      {/* CONTENT */}

      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl">
            {/* EYEBROW */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              uppercase
              tracking-[0.15em]
              text-[13px]
              font-semibold
              text-[#00B4D8]
              mb-6
              "
            >
              ADVERTISING  ·  DESIGN  ·  MARKETING 
            </motion.p>

            {/* HEADLINE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
              font-heading
              font-extrabold
              text-white
              leading-[0.95]
              tracking-[-0.04em]
              mb-8
              text-[clamp(3.5rem,8vw,5.5rem)]
              "
            >
              Your Growth. 
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Engineered.
              </span>
            </motion.h1>

            {/* SUBHEADLINE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="
              text-[#9CA3AF]
              text-xl
              md:text-4xl
              leading-relaxed
              max-w-4xl
              mb-12
              "
            >
            We Build Brands That Command Attention. 
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="
              text-[#9CA3AF]
              text-lg
              md:text-xl
              leading-relaxed
              max-w-2xl
              mb-12
              "
            >
             We are not a marketing agency. We are the growth system your business has been missing. Design 
that gets you chosen. Advertising that gets you seen. Marketing that keeps you relevant. 
              blend in.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mb-10
              "
            >
              <Link
                to="/contact"
                className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                bg-[#00B4D8]
                text-black
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Start a conversation
                            <ArrowRight size={18}/>

              </Link>

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
                border-white/15
                text-white
                hover:border-[#00B4D8]
                hover:text-[#00B4D8]
                transition-all
                duration-300
                "
              >
                See Our Work
              </Link>
            </motion.div>

            {/* SOCIAL PROOF */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-4
              "
            >
              <div className="flex gap-1">
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

              <p className="text-[#9CA3AF]">
Trusted by ambitious businesses building the brands their markets remember. 
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 1.8,
              },
            }}
            className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-white/70
            "
          >
            <ChevronDown size={28} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;