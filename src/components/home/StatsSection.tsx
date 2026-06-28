import { motion } from "framer-motion";
import Counter from "../../components/ui/Counter";
import { Infinity } from "lucide-react";

const stats = [
  {
    end: 50,
    suffix: "+",
    title: " Projects delivered against real targets ",
    description: "Successfully completed for clients across industries.",
  },
  {
    end: 6,
    suffix: "",
    title: "Service categories. One integrated system. ",
    description: "Web, Marketing, Creative Solutions...",
  },
  {
    end: 100,
    suffix: "%",
    title: "Accountability on every brief ",
    description: "Committed to delivering quality every time.",
  },
  {
    end:3,
    title: "Pillars. Zero gaps. ",
    description: "Serving clients globally.",
  },
];

const EASE: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="
      relative
      overflow-hidden
      py-32
      bg-gradient-to-br
      from-[#08121D]
      via-[#111827]
      to-[#0B1724]
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[220px]" />

        <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full blur-[180px]" />

        <div className="absolute -right-32 top-1/3 w-[450px] h-[450px] rounded-full  blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
            ease: EASE,
          }}
          className="text-center mb-20"
        >

          <h2
            className="
            font-heading
            font-black
            text-white
            text-[clamp(2.7rem,5vw,4.7rem)]
            tracking-tight
            leading-[1.05]
            "
          >
            Results That
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Speak For Themselves
            </span>
          </h2>

          <p
            className="
            mt-7
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-slate-400
            "
          >
            Every project we complete is built around measurable growth,
            long-term partnerships and delivering exceptional digital
            experiences.
          </p>

        </motion.div>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-7
          "
        >







                    {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: EASE,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              transition-all
              duration-500
              hover:border-cyan-400/40
              "
            >
              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-30
                transition-opacity
                duration-500
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-sky-500/10
                "
              />

              {/* Top Accent */}
{/* 
              <div
                className="
                absolute
                top-0
                left-8
                w-16
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-sky-400
                "
              /> */}

              <div className="relative z-10">

                {stat.text ? (

                  <h3
                    className="
                    font-heading
                    font-bold
                    text-[clamp(3rem,6vw,4.5rem)]
                    leading-none
                    text-cyan-400
                    "
                  >
                    {stat.text}
                  </h3>

                ) : (

                  <Counter
                    end={stat.end!}
                    suffix={stat.suffix}
                    label=""
                  />

                )}

                <h4
                  className="
                  mt-6
                  text-white
                  text-xl
                  font-semibold
                  "
                >
                  {stat.title}
                </h4>

                <p
                  className="
                  mt-3
                  leading-7
                  text-slate-400
                  text-sm
                  "
                >
                  {stat.description}
                </p>

              </div>

              {/* Decorative Circle */}

              <div
                className="
                absolute
                -right-8
                -bottom-8
                w-32
                h-32
                rounded-full
                border
                border-cyan-400/10
                group-hover:scale-125
                transition-transform
                duration-700
                "
              />

              {/* <div
                className="
                absolute
                right-6
                top-6
                w-2
                h-2
                rounded-full
                bg-cyan-400/70
                shadow-[0_0_20px_#00B4D8]
                "
              /> */}

            </motion.div>

          ))}
          
                  </div>
      </div>
    </section>
  );
};

export default StatsSection;