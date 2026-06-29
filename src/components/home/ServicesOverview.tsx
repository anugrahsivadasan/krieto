import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Container } from "../global/Section";
// import RevealHeading from "../animations/RevealHeading";

const ServicesOverview = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
  className="mx-auto mb-20 max-w-3xl text-center"
>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              OUR SERVICES
            </p>

            
  <h2
    
    className="font-heading text-[clamp(3rem,6vw,4.8rem)] font-black leading-tight text-white"
  >
    Built to move together.
  </h2>


            <p className="mt-6 text-lg leading-8 text-slate-400">
              Three disciplines. One integrated system. Every output connected to
              your growth.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                >
                <Link
  to={service.link}
  className={`
    group
    relative
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-[32px]
    border
    border-white/10
    bg-[#111827]
    p-10
    transition-all
    duration-500
    hover:-translate-y-3
    ${service.border}
  `}
>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 transition duration-500 group-hover:opacity-30`}
                    />

                    <div
                      className="relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{ background: `${service.accent}20` }}
                    >
                      <Icon size={30} style={{ color: service.accent }} />
                    </div>

                   <div className="relative z-10 flex flex-1 flex-col">

  <p
    className="text-sm font-bold tracking-[0.25em]"
    style={{ color: service.accent }}
  >
    {service.title}
  </p>

  <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
    {service.subtitle}
  </h3>

  {/* Text content */}
  <div className="mt-6 flex-1">

    <p className="font-semibold leading-7 text-white">
      {service.paragraphheading}
    </p>

    <p className="mt-4 leading-8 text-slate-400">
      {service.description}
    </p>

  </div>

  {/* Button stays at bottom */}
  <div
    className="mt-10 inline-flex items-center gap-3 font-semibold transition-all group-hover:gap-5"
    style={{ color: service.accent }}
  >
    {service.button}

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-2"
    />
  </div>

</div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;

