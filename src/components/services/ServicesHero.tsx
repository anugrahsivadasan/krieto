import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ServicesHero = () => {
  return (
    <section
      id="services-hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#0A0A0A]"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,rgba(0,180,216,0.16),transparent_38%),radial-gradient(ellipse_at_12%_90%,rgba(144,224,239,0.08),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20 text-center md:px-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#00B4D8]"
          >
            Krieto Services
          </motion.p>

          <h1 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.2, ease }}
                className="block leading-[1.05] text-[#F9FAFB]"
              >
Built to move               </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.3, ease }}
                className="block bg-gradient-to-r from-[#00B4D8] to-[#90E0EF] bg-clip-text leading-[1.05] text-transparent"
              >
                together. 
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
            className="mx-auto max-w-2xl font-['Inter'] text-lg leading-relaxed text-[#6B7280] md:text-xl"
          >
            Advertising, Design. Marketing. Three disciplines, fully integrated, all accountable to one outcome: 
your growth. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#00B4D8]/40 bg-[#00B4D8] px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_44px_rgba(0,180,216,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_58px_rgba(0,180,216,0.28)]"
            >
              Start a Project
              <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
