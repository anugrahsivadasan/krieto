import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "./serviceContent";

const ServicesFAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_40%,rgba(0,180,216,0.07),transparent_38%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-[0.75fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
            FAQ
          </p>
          <h2 className="font-heading text-[clamp(2.6rem,5vw,4.8rem)] font-bold leading-[1] tracking-tight text-white">
            Clear answers before we build.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`overflow-hidden rounded-[26px] border bg-white/[0.035] backdrop-blur-xl transition duration-300 ${
                  isOpen ? "border-[#00B4D8]/45 shadow-[0_24px_90px_rgba(0,180,216,0.12)]" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-xl font-bold leading-tight text-white md:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`flex-none text-[#90E0EF] transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p className="px-6 pb-7 font-body text-base leading-8 text-[#9CA3AF] md:px-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
