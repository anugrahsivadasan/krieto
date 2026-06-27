import { motion } from "framer-motion";
import { processSteps } from "../../data/process";

const ProcessSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.15em] text-[#00B4D8] text-sm font-semibold mb-4">
            OUR PROCESS
          </p>

          <h2 className="font-heading font-bold text-white text-[clamp(2.5rem,5vw,4rem)]">
            How We Work
          </h2>

          <p className="text-[#9CA3AF] mt-5 max-w-2xl mx-auto text-lg">
            A proven process designed to deliver measurable growth.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop dashed line */}

          <div
            className="
            hidden
            lg:block
            absolute
            top-16
            left-[16%]
            right-[16%]
            border-t-2
            border-dashed
            border-[#00B4D8]/20
            "
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {processSteps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: window.innerWidth > 1024 ? -40 : 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                    duration: .7,
                  }}
                  className="
                  relative
                  rounded-3xl
                  bg-[#1A1A1A]
                  border
                  border-white/5
                  p-10
                  transition-all
                  duration-500
                  hover:border-[#00B4D8]
                  hover:shadow-[0_0_0_1.5px_#00B4D8,0_30px_60px_rgba(0,180,216,.15)]
                  hover:-translate-y-2
                  "
                >

                  {/* Large Number */}

                  <span
                    className="
                    absolute
                    top-5
                    right-8
                    text-[110px]
                    font-extrabold
                    text-[#00B4D8]
                    opacity-[0.08]
                    leading-none
                    pointer-events-none
                    "
                  >
                    {step.number}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#00B4D8]/10
                    flex
                    items-center
                    justify-center
                    mb-8
                    "
                  >
                    <Icon
                      size={30}
                      className="text-[#00B4D8]"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="relative z-10 text-2xl font-bold text-white mb-5">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="relative z-10 text-[#9CA3AF] leading-8">
                    {step.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;