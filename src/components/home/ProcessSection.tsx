import { motion } from "framer-motion";
import { processSteps } from "../../data/process";
import ScrollStack, { ScrollStackItem } from "../animations/ScrollStack";

const ProcessSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-32 overflow-hidden">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.15em] text-[#00B4D8] text-sm font-semibold mb-4"
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]"
          >
            How We Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#9CA3AF] mt-5 max-w-2xl mx-auto text-base sm:text-lg"
          >
            A proven process designed to deliver measurable growth.
          </motion.p>
        </div>

        {/* ---------------- MOBILE + TABLET ---------------- */}

        <div className="mt-16 space-y-8 lg:hidden">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border overflow-hidden"
                style={{
                  background: step.bg,
                  borderColor: `${step.accent}40`,
                }}
              >
                {/* Number */}
                <div
                  className="flex justify-between items-center px-6 pt-6"
                  style={{ color: step.accent }}
                >
                  <span className="uppercase tracking-[0.25em] text-xs font-semibold">
                    Step {step.number}
                  </span>

                  <span className="text-6xl font-black opacity-20">
                    {step.number}
                  </span>
                </div>

                {/* Content */}

                <div className="px-6 pb-6">
                  <h3
                    className="text-3xl sm:text-4xl font-black mt-4"
                    style={{ color: step.text }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-5 leading-8 text-base"
                    style={{
                      color: `${step.text}CC`,
                    }}
                  >
                    {step.description}
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${step.accent}20`,
                      }}
                    >
                      <Icon
                        size={26}
                        style={{
                          color: step.accent,
                        }}
                      />
                    </div>

                    <span
                      className="uppercase tracking-[0.25em] text-sm font-medium"
                      style={{
                        color: step.accent,
                      }}
                    >
                      KRIETO PROCESS
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- DESKTOP ---------------- */}

        <div className="hidden lg:block mt-12">
          <ScrollStack
            className="min-h-[1800px]"
            useWindowScroll
            itemDistance={120}
            itemScale={0.05}
            itemStackDistance={40}
            baseScale={0.88}
            rotationAmount={0.2}
            blurAmount={2}
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <ScrollStackItem
                  key={step.number}
                  itemClassName="
                    border
                    rounded-[32px]
                    overflow-hidden
h-[500px]
  xl:h-[500px]                    w-full
                  "
                  style={{
                    background: step.bg,
                    borderColor: `${step.gradient}`,
                  }}
                >
                  <div
                    className="flex h-full"
                    style={{
                      background: step.bg,
                      color: step.text,
                    }}
                  >
                    {/* Left */}

                    <div className="flex-1 p-14 flex flex-col justify-between">
                      <div>
                        <span
                          className="text-sm tracking-[0.3em] uppercase font-semibold"
                          style={{ color: step.accent }}
                        >
                          Step {step.number}
                        </span>

                        <motion.h2
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-6 text-6xl font-black"
                          style={{ color: step.text }}
                        >
                          {step.title}
                        </motion.h2>

                        <p
                          className="mt-8 max-w-xl text-lg leading-9"
                          style={{
                            color: `${step.accent}`,
                          }}
                        >
                          {step.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-5">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `${step.accent}20`,
                          }}
                        >
                          <Icon
                            size={30}
                            style={{
                              color: step.accent,
                            }}
                          />
                        </div>

                        <div
                          className="uppercase tracking-[0.3em]"
                          style={{
                            color: step.accent,
                          }}
                        >
                          KRIETO PROCESS
                        </div>
                      </div>
                    </div>

                    {/* Right */}

                   <div
  className="relative w-[40%] overflow-hidden flex items-center justify-center"
>
  {/* Background Gradient */}
  {/* <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(circle at 30% 30%, ${step.gradient}25 0%, transparent 45%),
        radial-gradient(circle at 80% 80%, ${step.gradient}18 0%, transparent 50%),
        linear-gradient(135deg, ${step.gradient}10 0%, transparent 70%)
      `,
    }}
  /> */}

  {/* Large Blur Blob */}
  {/* <div
    className="absolute w-80 h-80 rounded-full blur-[90px]"
    style={{
      background: step.gradient,
      opacity: 0.18,
    }}
  /> */}

  {/* Small Floating Blob */}
  {/* <div
    className="absolute top-10 right-10 w-24 h-24 rounded-full blur-2xl"
    style={{
      background: step.glow,
      opacity: 0.4,
    }}
  /> */}

  {/* Number */}
 <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
  <img
    src={step.image}
    alt={step.title}
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Dark overlay */}

  {/* Cyan glow overlay */}
  {/* <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(circle at 30% 30%, ${step.gradient}40 0%, transparent 55%),
        linear-gradient(to top, rgba(10,10,10,.85), rgba(10,10,10,.2))
      `,
    }}
  /> */}
</div>
</div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;