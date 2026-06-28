import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-xl w-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-12 text-center"
      >
        <div className="mx-auto w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-8">
          <Construction className="text-cyan-400" size={42} />
        </div>

        <h1 className="text-5xl font-black text-white mb-4">
          Under Construction
        </h1>

        <p className="text-slate-400 leading-8 text-lg mb-10">
          We're currently building this page to provide an amazing
          experience. Please check back soon.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold hover:scale-105 transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default UnderConstruction;