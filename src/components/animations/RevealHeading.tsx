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
    <div className="overflow-hidden pb-[0.25em]">
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          delay,
          ease,
        }}
        className="inline-block w-full"
        style={{ display: "block" }}
      >
        <h2 className={className}>
          {children}
        </h2>
      </motion.span>
    </div>
  );
}