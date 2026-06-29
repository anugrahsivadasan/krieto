import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Container } from "../global/Section";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const ServicesOverview = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-[120px]" id="services">
      <Container>
        {/* ─── Heading ──────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-16"
        >
          <p className="
            font-body uppercase tracking-[0.15em]
            text-[#00B4D8] text-[13px] font-semibold mb-4
          ">
            Our Services
          </p>

          <h2 className="
            font-heading font-extrabold text-white
            text-[clamp(2rem,4.5vw,3.5rem)]
            leading-[1.05] tracking-[-0.02em]
          ">
            Everything Your Brand
            <br />
            Needs to Win
          </h2>

          <p className="
            font-body text-[#9CA3AF] text-lg
            mt-6 max-w-xl mx-auto leading-relaxed
          ">
            From strategy to execution — we handle it all.
          </p>
        </motion.div>

        {/* ─── Cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp(index * 0.08)}
                className="h-full"
              >
                <Link
                  to={service.link}
                  className="
                    group relative flex flex-col h-full
                    rounded-2xl bg-[#1E1E1E]
                    border border-white/[0.06]
                    p-8
                    transition-all duration-500
                    hover:scale-[1.02]
                    hover:border-[#00B4D8]/60
                    hover:shadow-[0_12px_40px_rgba(0,180,216,0.15)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      bg-[#00B4D8]/10 flex items-center justify-center
                      mb-6
                      transition-colors duration-300
                      group-hover:bg-[#00B4D8]/20
                    "
                  >
                    <Icon size={26} className="text-[#00B4D8]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[#9CA3AF] leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="inline-flex items-center gap-2 text-[#00B4D8] text-sm font-semibold mt-auto">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;