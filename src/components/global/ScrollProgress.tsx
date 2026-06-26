import {
  motion,
  useScroll,
} from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } =
    useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      h-[2px]
      origin-left
      bg-cyan-400
      z-[999]
      "
    />
  );
};

export default ScrollProgress;