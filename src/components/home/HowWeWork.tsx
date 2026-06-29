import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";
import { Container } from "../global/Section";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by deeply understanding your business, your audience, and your competitive landscape. Every decision we make is rooted in data and real insight.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We craft a tailored roadmap aligned with your goals — combining channel strategy, creative direction, and measurable milestones to ensure every move counts.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execute & Scale",
    description:
      "We launch, iterate, and optimize relentlessly. Your campaigns are live, tracked, and refined continuously so your brand keeps growing month over month.",
    icon: Rocket,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const HowWeWork = () => {
  return (
    <section className="relative bg-[#0D1B2A] py-[120px]" id="how-we-work">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        {/* ─── Heading ──────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="
            font-body uppercase tracking-[0.15em]
            text-[#00B4D8] text-[13px] font-semibold mb-4
          ">
            Our Process
          </p>
          <h2 className="
            font-heading font-extrabold text-white
            text-[clamp(2rem,4.5vw,3.5rem)]
            leading-[1.05] tracking-[-0.02em]
          ">
            How We Work
          </h2>
          <p className="
            font-body text-[#9CA3AF] text-lg
            mt-6 max-w-xl mx-auto leading-relaxed
          ">
            A proven three-step framework that turns strategy into results.
          </p>
        </motion.div>

        {/* ─── Steps ────────────────────────────────────── */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Dashed connector — desktop only */}
          <div className="
            hidden md:block
            absolute top-[72px] left-[calc(33.33%+16px)] right-[calc(33.33%+16px)]
            border-t-2 border-dashed border-[#00B4D8]/25
            pointer-events-none
          " />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp(index * 0.15)}
                className="relative"
              >
                <div className="
                  group relative
                  flex flex-col
                  rounded-2xl bg-[#1E1E1E]
                  border border-white/[0.06]
                  p-8
                  transition-all duration-500
                  hover:border-[#00B4D8]/40
                  hover:shadow-[0_12px_40px_rgba(0,180,216,0.1)]
                ">
                  {/* Large background number */}
                  <span className="
                    absolute top-5 right-6
                    font-heading font-extrabold
                    text-[80px] leading-none
                    text-white/[0.04]
                    select-none pointer-events-none
                    transition-colors duration-500
                    group-hover:text-[#00B4D8]/[0.08]
                  ">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-[#00B4D8]/10
                    flex items-center justify-center
                    mb-6
                    transition-colors duration-300
                    group-hover:bg-[#00B4D8]/20
                  ">
                    <Icon size={26} className="text-[#00B4D8]" />
                  </div>

                  {/* Step label */}
                  <p className="
                    font-body text-[13px] font-semibold uppercase
                    tracking-[0.12em] text-[#00B4D8] mb-2
                  ">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[#9CA3AF] leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default HowWeWork;
