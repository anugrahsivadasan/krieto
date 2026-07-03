import { motion } from "framer-motion";
import { ArrowRight, Infinity } from "lucide-react";
import Counter from "../../components/ui/Counter";

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
      className="relative overflow-hidden py-28 "
    >
      {/* Background */}

     

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, ease: EASE }}
          className="text-center mb-20"
        >
          <h2 className="text-white font-black text-[clamp(2.7rem,5vw,4.8rem)] leading-none">
            Results That
            <span className="block bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
              Speak For Themselves
            </span>
          </h2>

          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Every project we complete is built around measurable growth,
            long-term partnerships and delivering exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* =========================
              BIG FEATURE CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            whileHover={{ y: -6 }}
            className="
              lg:col-span-8
              rounded-[36px]
              bg-black
              border border-white/10
              overflow-hidden
              relative
              p-10
              min-h-[430px]
            "
          >

            {/* Organic Blob */}

            <div className="absolute -right-24 -bottom-24">

              {/* <div
                className="
                w-[650px]
                h-[340px]
                rounded-full
                rotate-[-12deg]
                bg-gradient-to-r
                from-[#68e0f0]
                via-[#2b9bb8]
                to-[#008ed0]
                blur-[18px]
                "
              /> */}

            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">

              <div>

                <span className="text-cyan-400 text-sm uppercase tracking-[4px]">
                  Performance
                </span>

                <h3 className="text-white text-4xl font-bold mt-5 max-w-lg leading-tight">
                  Projects delivered against real targets.
                </h3>

                <p className="text-slate-300 mt-6 max-w-md leading-8">
                  Every project is focused on measurable outcomes,
                  exceptional user experience and sustainable business
                  growth.
                </p>

              </div>

              <div className="mt-16">

                <div className="text-white text-7xl font-black leading-none">
                  <Counter end={50} suffix="+" label="" />
                </div>

                <p className="text-slate-300 mt-5 text-lg">
                  Successfully completed projects across industries.
                </p>

              </div>

            </div>

          </motion.div>

                    {/* =========================
              TOP RIGHT CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            whileHover={{ y: -6 }}
            className="
              lg:col-span-4
              rounded-[36px]
              bg-black
              border border-white/10
              p-8
              min-h-[205px]
              flex flex-col justify-between
            "
          >

            {/* <div className="flex -space-x-3">

              {[1,2,3,4].map((id)=>(
                <img
                  key={id}
                  src={`https://i.pravatar.cc/100?img=${id}`}
                  className="w-12 h-12 rounded-full border-2 border-[#111111]"
                />
              ))}

            </div> */}

            <div>

              <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
                Trust
              </span>

              <p className="text-slate-300 mt-6 max-w-xl leading-8">
                Every project is delivered with transparency,
                accountability and measurable outcomes that create
                long-term partnerships.
              </p>

            </div>

            

            <div>

              <div className="text-6xl font-black text-white">
                <Counter end={100} suffix="%" label="" />
              </div>

              <h3 className="text-white text-2xl font-bold mt-4">
                Accountability on every brief
              </h3>

            </div>

          </motion.div>

          {/* =========================
              BOTTOM LEFT CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            whileHover={{ y: -6 }}
            className="
              lg:col-span-8
              rounded-[36px]
              bg-black
              border border-white/10
              p-10
              min-h-[250px]
              flex flex-col justify-between
            "
          >
<div>

              <div className="text-5xl font-black text-white">
                <Counter end={6} suffix="" label="" />
              </div>

              <h3 className="text-white text-2xl font-bold mt-4">
                Service Categories
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                One integrated digital ecosystem designed to help brands
                scale faster.
              </p>

            </div>



           

          </motion.div>

          {/* =========================
              BOTTOM RIGHT CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            whileHover={{ y: -6 }}
            className="
              lg:col-span-4
              rounded-[36px]
              bg-black
              border border-white/10
              p-8
              min-h-[250px]
              flex flex-col justify-between
            "
          >

            <Infinity
              className="text-cyan-400"
              size={74}
              strokeWidth={2.3}
            />

            <div>

              <h3 className="text-white text-2xl font-bold">
                Growth is Shared
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Growing together with every client through continuous
                innovation and lasting partnerships.
              </p>

            </div>

          </motion.div>

          {/* =========================
              CTA CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
              lg:col-span-12
              rounded-[36px]
              bg-black
              border border-white/10
              p-10
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-6
            "
          >

            <div>

              <h3 className="text-white text-3xl font-bold">
                Ready to build something remarkable?
              </h3>

              <p className="text-slate-400 mt-3 max-w-xl">
                Let's create digital experiences that drive measurable
                growth for your business.
              </p>

            </div>

            <button
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-cyan-400
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Get Started

              <ArrowRight size={18} />

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default StatsSection;