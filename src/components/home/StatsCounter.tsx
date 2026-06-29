import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Container } from "../global/Section";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across industries",
  },
  {
    value: 6,
    suffix: "",
    label: "Core Service Areas",
    sublabel: "Full-stack capabilities",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Commitment, not a claim",
  },
  {
    value: 1,
    suffix: "",
    label: "Texas Headquarters",
    sublabel: "Globally trusted",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#0A0A0A] py-[120px]" id="stats">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,180,216,0.05),transparent)]" />
      </div>

      <Container>
        {/* ─── Heading ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="
            font-body uppercase tracking-[0.15em]
            text-[#00B4D8] text-[13px] font-semibold mb-4
          ">
            By the Numbers
          </p>
          <h2
            className="
            font-heading font-extrabold text-white
            text-[clamp(2rem,4.5vw,3.5rem)]
            leading-[1.05] tracking-[-0.02em]
          "
          >
            Results That Speak
          </h2>
        </motion.div>

        {/* ─── Stats Grid ─────────────────────────────── */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: EASE,
              }}
              className="
                flex flex-col items-center justify-center
                bg-[#0A0A0A]
                px-8 py-12
                text-center
                group
                hover:bg-[#111827]
                transition-colors duration-300
              "
            >
              {/* Number */}
              <div className="
                font-heading font-extrabold
                text-[clamp(3rem,5vw,4.5rem)]
                leading-none tracking-tight
                text-white mb-3
              ">
                <span>
  {stat.value}
  {stat.suffix}
</span>
              </div>

              {/* Label */}
              <p className="font-heading text-base font-semibold text-white mb-1">
                {stat.label}
              </p>

              {/* Sublabel */}
              <p className="font-body text-[13px] text-[#6B7280]">
                {stat.sublabel}
              </p>

              {/* Accent line */}
              <div
                className="
                w-8 h-[2px] rounded-full bg-[#00B4D8]
                mt-4 opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsCounter;

