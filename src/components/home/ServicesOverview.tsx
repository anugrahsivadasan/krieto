import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

const ServicesOverview = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.15em] text-[#00B4D8] text-sm font-semibold mb-5">
            OUR SERVICES
          </p>

          <h2 className="text-white font-heading font-extrabold text-[clamp(2.5rem,5vw,4rem)]">
            Everything Your Brand
            <br />
            Needs to Win
          </h2>

          <p className="text-[#9CA3AF] text-lg mt-6 max-w-2xl mx-auto">
            From strategy to execution — we handle it all.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
              >
                <Link
                  to={service.link}
                  className="
                  group
                  relative
                  block
                  h-full
                  rounded-3xl
                  bg-[#1E1E1E]
                  border
                  border-white/5
                  p-8
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:border-[#00B4D8]
                  hover:shadow-[0_0_0_1.5px_#00B4D8,0_30px_60px_rgba(0,180,216,0.15)]
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#00B4D8]/10
                    flex
                    items-center
                    justify-center
                    mb-8
                    transition
                    duration-300
                    group-hover:bg-[#00B4D8]/20
                    "
                  >
                    <Icon
                      size={28}
                      className="text-[#00B4D8]"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-bold text-white mb-5">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-[#9CA3AF] leading-8 mb-10">
                    {service.description}
                  </p>

                  {/* Link */}

                  <div
                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#00B4D8]
                    font-semibold
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      "
                    />
                  </div>

                </Link>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;