import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

const Button = ({ text, link }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={link}
        className="
        bg-primary
        text-white
        px-8
        py-4
        rounded-full
        font-semibold
        transition-all
        duration-300
        hover:bg-secondary
        hover:shadow-glow
        "
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default Button;