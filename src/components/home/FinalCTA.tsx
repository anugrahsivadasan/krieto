import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const FinalCTA = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-[#00B4D8] via-[#0094B8] to-[#0077B6]
        py-[120px]
      "
      id="cta"
    >
      {/* Radial light bloom top-left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />
      {/* Radial light bloom bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#03045E]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Eyebrow */}
          {/* <p className="
            font-body uppercase tracking-[0.15em]
            text-white/70 text-[13px] font-semibold mb-6
          ">
            Free Strategy Session
          </p> */}

          {/* Headline */}
          <h2 className="
            font-heading font-extrabold text-white
            text-[clamp(2.5rem,5vw,4.5rem)]
            leading-[1.02] tracking-[-0.03em]
            max-w-4xl mx-auto mb-6
          ">
           Your next client is already looking for you. 
          </h2>

          {/* Subtext */}
         <p
  className="
    font-body text-white/80 text-lg md:text-xl
    max-w-2xl mx-auto leading-relaxed mb-10
  "
>
  Tell us about your business, your goals, and your challenges.
  We'll review your enquiry and get back to you with the right next steps.
</p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3
                bg-white text-[#0A0A0A]
                px-10 py-5
                rounded-full
                font-semibold text-sm uppercase tracking-widest
                shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]
                transition-shadow duration-300
              "
            >
              Start a Conversation 
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust line */}
          <p className="font-body text-sm text-white/50 mt-6">
            Custom Quotes. No hidden fees. Results guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
