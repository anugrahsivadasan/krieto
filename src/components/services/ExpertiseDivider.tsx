import { motion } from "framer-motion";

const ExpertiseDivider = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-10">
      <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-6 md:px-12">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-left bg-gradient-to-r from-transparent via-[#00B4D8] to-[#90E0EF]/20 shadow-[0_0_24px_rgba(0,180,216,0.55)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-[#90E0EF]"
        >
          Our Expertise
        </motion.p>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-right bg-gradient-to-r from-[#90E0EF]/20 via-[#00B4D8] to-transparent shadow-[0_0_24px_rgba(0,180,216,0.45)]"
        />
      </div>
    </section>
  );
};

export default ExpertiseDivider;
