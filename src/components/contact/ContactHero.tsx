import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

const ContactHero = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#0A0A0A]
      min-h-[35vh]
      flex
      items-center
      justify-center
      pt-24
      "
    >
      {/* Background */}

      <div className="absolute inset-0">

       

        {/* Cyan Glow */}

        <div
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[900px]
          h-[450px]
          rounded-full
          bg-[#00B4D8]/10
          blur-[140px]
          "
        />

        {/* Bottom Fade */}

        {/* <div
          className="
          absolute
          bottom-0
          inset-x-0
          h-32
          bg-gradient-to-t
          from-[#00B4D8]/10
          to-transparent
          "
        /> */}

      </div>

      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        px-6
        text-center
        "
      >
        {/* Eyebrow */}

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
            ease: EASE,
          }}
          className="
          uppercase
          tracking-[0.35em]
          text-[#00B4D8]
          text-xs
          sm:text-sm
          font-semibold
          mb-5
          "
        >
          CONTACT
        </motion.p>

        {/* Heading */}

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
            duration: 1.3,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          font-heading
          font-black
          tracking-tight
          leading-[1.05]
          text-white
          text-[clamp(2.5rem,5vw,5rem)]
          "
        >
          Let's Talk.
          <span className="block text-[#00B4D8]">
            No Sales Pitch — Just Strategy.
          </span>
        </motion.h1>

        {/* Description */}

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
            duration: 0.7,
            delay: 0.2,
            ease: EASE,
          }}
          className="
          mt-8
          max-w-2xl
          mx-auto
          text-base
          sm:text-lg
          leading-8
          text-[#9CA3AF]
          "
        >
          Tell us about your business and goals.
          <br className="hidden sm:block" />
          We'll respond within <span className="text-white font-medium">1 business day.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;