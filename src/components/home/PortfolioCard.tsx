import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  large?: boolean;
}

const PortfolioCard = ({
  title,
  category,
  description,
  image,
  link,
  large = false,
}: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`group relative overflow-hidden rounded-[30px]
      ${
        large
          ? "h-[650px]"
          : "h-[315px]"
      }`}
    >
      {/* Image */}

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

      {/* Overlay */}

      <motion.div
        variants={{
          rest: {
            background:
              "linear-gradient(to top,#0A0A0A 15%,transparent 65%)",
          },
          hover: {
            background:
              "linear-gradient(to top,#0A0AEE 5%,rgba(10,10,10,.2) 45%,transparent)",
          },
        }}
        className="absolute inset-0"
      />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 p-8">

        <span
          className="
          inline-block
          mb-4
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          text-xs
          uppercase
          tracking-[0.15em]
          backdrop-blur-md
        "
        >
          {category}
        </span>

        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -8 },
          }}
          className="text-3xl font-bold mb-3"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={{
            rest: {
              opacity: 0,
              y: 15,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: .35,
          }}
          className="text-gray-300 mb-6"
        >
          {description}
        </motion.p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary font-semibold"
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
      </div>
    </motion.div>
  );
};

export default PortfolioCard;