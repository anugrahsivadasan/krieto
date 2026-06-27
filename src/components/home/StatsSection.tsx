import { motion } from "framer-motion";
import Counter from "../../components/ui/Counter";

const StatsSection = () => {
  return (
    <section
      className="
      relative
      bg-[#111827]
      py-28
      overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#00B4D8]/10
        blur-[180px]
        pointer-events-none
        "
      />

      {/* Top Border */}

      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
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
          }}
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          <Counter
            end={50}
            suffix="+"
            label="Projects Delivered"
          />

          <Counter
            end={3}
            label="Core Service Areas"
          />

          <Counter
            end={100}
            suffix="%"
            label="Client Satisfaction Commitment"
          />

          {/* Special Card */}

          <div
            className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            backdrop-blur-xl
            p-10
            text-center
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#00B4D8]
            hover:shadow-[0_0_40px_rgba(0,180,216,0.15)]
            "
          >
            <h3
              className="
              font-heading
              font-bold
              text-[clamp(2.5rem,5vw,4rem)]
              text-[#00B4D8]
              "
            >
              Texas
            </h3>

            <p className="mt-4 text-[#9CA3AF]">
              Headquartered, Global Reach
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;