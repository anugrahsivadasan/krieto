import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_BREAKPOINT = 1024;

// Replace later
const WHATSAPP_NUMBER = "17373634769";
const MESSAGE =
  "Hi Krieto, I'd like to learn more about your services.";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mobile =
      window.innerWidth < MOBILE_BREAKPOINT;

    if (mobile) {
      setVisible(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="fixed bottom-7 right-7 z-[9999]"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group flex items-center"
          >
            {/* Label */}

            <div
              className="
                overflow-hidden
                max-w-0
                opacity-0
                mr-0
                transition-all
                duration-500
                ease-out
                group-hover:max-w-[240px]
                group-hover:opacity-100
                group-hover:mr-4
              "
            >
              <div
                className="
                  backdrop-blur-xl
                  bg-white/10
                  border
                  border-white/15
                  rounded-full
                  px-5
                  py-3
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-white
                  shadow-2xl
                "
              >
                Chat with us
              </div>
            </div>

            {/* Button */}

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -8,
              }}
              whileTap={{
                scale: 0.92,
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0,180,216,0.2)",
                  "0 0 40px rgba(0,180,216,.45)",
                  "0 0 0 rgba(0,180,216,0.2)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                },
              }}
              className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#00B4D8]
                shadow-[0_12px_40px_rgba(0,180,216,.35)]
                overflow-hidden
              "
            >
              {/* Shine */}

              <motion.div
                animate={{
                  x: [-80, 80],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear",
                  repeatDelay: 4,
                }}
                className="
                  absolute
                  inset-y-0
                  w-6
                  bg-white/30
                  blur-md
                  rotate-12
                "
              />

              {/* Icon */}

              <FaWhatsapp
                size={32}
                className="relative text-white"
              />
            </motion.div>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;