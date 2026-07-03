import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-[#0A0A0A]"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,180,216,0.12),transparent_42%),radial-gradient(ellipse_at_20%_80%,rgba(144,224,239,0.08),transparent_40%)]" />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/30 to-transparent" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 text-center">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase mb-6"
        >
          About Krieto
        </motion.p>

        {/* Heading */}
        <h1
          className="
            font-['Space_Grotesk']
            font-bold
            leading-[1.05]
            tracking-tight
            text-4xl
            md:text-6xl
            lg:text-7xl
            mb-6
          "
        >
          {/* Line 1 */}
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block leading-[1.05] text-[#F9FAFB]"
            >
              The Agency Behind Brands
            </motion.span>
          </span>

          {/* Line 2 */}
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                block
                leading-[1.05]
                bg-gradient-to-r
                from-[#00B4D8]
                to-[#90E0EF]
                bg-clip-text
                text-transparent
              "
            >
              That Move Markets.
            </motion.span>
          </span>
        </h1>

        {/* Paragraph */}
        <motion.p
          {...fadeUp(0.45)}
          className="font-['Inter'] text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          We are Krieto — a Texas-born advertising, design, and marketing agency
          built to deliver the work that Fortune 500 agencies charge 10× more
          for.
        </motion.p>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
};

export default AboutHero;