import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/KrietoKw.png";

interface Props {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: Props) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            transition: {
              duration: 0.7,
            },
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Glow */}

          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[180px]"
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [0.2, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
            }}
          />

          {/* Logo */}

          <motion.img
            src={logo}
            alt="Krieto"
            className="relative w-[240px] md:w-[320px] object-contain"
            initial={{
              x: 1200,
              scale: 0.6,
              opacity: 0,
              filter: "blur(14px)",
            }}
            animate={{
              x: 0,
              scale: [0.6, 1.12, 1],
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
