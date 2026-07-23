import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  category: string;
  industry?: string;
  description: string;
  image: string;
  link: string;
  large?: boolean;
  onViewCaseStudy?: () => void;
}

const PortfolioCard = ({
  title,
  category,
  industry,
  description,
  image,
  link,
  large = false,
  onViewCaseStudy,
}: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`group relative overflow-hidden rounded-[30px] ${
        large ? "h-[420px] sm:h-[480px]" : "h-[340px] sm:h-[380px]"
      }`}
    >
      <motion.img
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{
          duration: 0.7,
        }}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <motion.div
        variants={{
          rest: {
            backdropFilter: "blur(0px)",
          },
          hover: {
            backdropFilter: "blur(10px)",
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 right-0 z-10 h-[58%]"
        style={{
          WebkitBackdropFilter: "blur(10px)",
          maskImage: "linear-gradient(to top, black 35%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 35%, transparent 100%)",
        }}
      />

      <motion.div
        variants={{
          rest: {
            opacity: 0.25,
          },
          hover: {
            opacity: 0.65,
          },
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute bottom-0 left-0 right-0 z-10 h-[58%] bg-gradient-to-t from-black via-black/80 to-transparent"
      />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.15em] backdrop-blur-md">
          {category}
        </span>

        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -8 },
          }}
          className="mb-3 text-3xl font-bold"
        >
          {title}
        </motion.h3>

        {industry ? (
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
            {industry}
          </p>
        ) : null}

        <div className="mb-6 overflow-hidden">
          <motion.p
            variants={{
              rest: {
                y: "120%",
                opacity: 0,
                filter: "blur(8px)",
              },
              hover: {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gray-300 will-change-transform"
            style={{ willChange: "transform, filter" }}
          >
            {description}
          </motion.p>
        </div>

        {onViewCaseStudy ? (
          <button
            type="button"
            onClick={onViewCaseStudy}
            className="inline-flex items-center gap-2 font-semibold text-[#00B4D8] transition hover:text-white"
          >
            View Case Study
            <motion.div
              variants={{
                rest: { x: 0 },
                hover: { x: 8 },
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </button>
        ) : (
          <Link
            to={link}
            className="inline-flex items-center gap-2 font-semibold text-[#00B4D8] transition hover:text-white"
          >
            View Case Study
            <motion.div
              variants={{
                rest: { x: 0 },
                hover: { x: 8 },
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
