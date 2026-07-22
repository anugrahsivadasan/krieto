import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { proofPoints, trustIcons } from "./serviceContent";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,180,216,0.14),transparent_44%)]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-[#00B4D8]/25 bg-gradient-to-br from-[#00B4D8]/18 via-white/[0.04] to-white/[0.025] px-6 py-14 text-center backdrop-blur-xl md:px-12 md:py-20"
        >
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#90E0EF]/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#00B4D8]/12 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center gap-3">
              {trustIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A0A]/45 text-[#90E0EF]"
                >
                  <Icon size={21} />
                </div>
              ))}
            </div>

            <h2 className="font-heading max-w-4xl text-[40px] font-bold leading-[0.98] tracking-tight text-white">
Not sure where your biggest opportunity is? That is exactly what you will hear from us. 
            </h2>
            <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-8 text-white/70 md:text-lg">
              Bring us the business goal. We will shape the brand, creative, and growth system around it.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-[#0A0A0A] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.18)]"
              >
                Start a Conversation
                <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#90E0EF]/45 hover:text-[#90E0EF]"
              >
                View Work
              </Link>
            </div>

            <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="font-heading text-4xl font-bold text-[#90E0EF]">{point.value}</p>
                  <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
