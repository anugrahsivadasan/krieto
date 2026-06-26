import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 150,
      }}
      className="
      fixed
      w-[400px]
      h-[400px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      pointer-events-none
      z-0
      "
    />
  );
};

export default CursorGlow;