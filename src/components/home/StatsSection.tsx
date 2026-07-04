import { motion } from "framer-motion";
// Counter box not used inside cards to avoid nested boxed UI
import { Infinity } from "lucide-react";
import heroImg from "../../assets/hero.png";

const stats = [
  {
    end: 50,
    suffix: "+",
    title: "Projects delivered against real targets",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    end: 6,
    suffix: "",
    title: "Service categories. One integrated system.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    end: 100,
    suffix: "%",
    title: "Accountability on every brief",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: true,
    title: "Growth Is Shared",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="w-full relative bg-gradient-to-b from-[#0077B6] via-sky-300 to-black py-16 lg:py-24"
    >
      <div className="w-full">
        <div className="grid grid-cols-12">
          {/* Left heading column */}
          <div className="col-span-12 lg:col-span-3 px-6 lg:px-12 flex items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-black text-slate-900 tracking-tight leading-tight text-4xl lg:text-[40px]">
                  Results That
                  <span className="block mt-2 text-white">
                    Speak For Themselves
                  </span>
                </h2>
                <p className="mt-6 text-[#1E1E1E] max-w-md pb-4">
                  Every project we complete is built around measurable growth
                  and long-term partnerships.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right - four edge-to-edge image cards */}
          {/* Right - Premium Cards */}
          <div className="col-span-12 lg:col-span-9 px-6 lg:pr-10">
            <div className="grid h-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative h-[430px] overflow-hidden rounded-3xl"
                >
                  {/* Background */}
                  <img
                    src={item.image || heroImg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Glass Layer */}
                  <div className="absolute inset-0 bg-white/[0.03]" />

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-end p-8">
                    {item.icon ? (
                      <>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                          <Infinity size={34} className="text-cyan-300" />
                        </div>

                        <h3 className="text-3xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                      </>
                    ) : (
                      <>
                        <h3 className="text-[54px] font-black leading-none text-white">
                          {item.end}
                          <span className="text-cyan-300">{item.suffix}</span>
                        </h3>

                        <p className="mt-5 text-sm leading-6 text-slate-200">
                          {item.title}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
