import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function RevealHeading({
  children,
  className = "",
  delay = 0,
}: RevealHeadingProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          delay,
          ease,
        }}
      >
        <h2 className={className}>{children}</h2>
      </motion.div>
    </div>
  );
}