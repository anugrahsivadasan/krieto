import {
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    title: "ADVERTISING",
    subtitle: "The Frame That Changes Everything.",
    paragraphheading :"Creative Advertising & Video Production ",
    description:
      " AI Powered video. Animated content & premium voiceovers. Production-quality advertising built for the platforms where your audience actually watches. ",
    button: "Explore Advertising",
    icon: Megaphone,
    accent: "#8B5CF6",
    bg: "from-violet-500/20 to-violet-700/5",
    border: "hover:border-violet-400",
    shadow: "hover:shadow-[0_30px_60px_rgba(139,92,246,.25)]",
    link: "/services/advertising",
  },
  {
    title: "DESIGN",
    subtitle: "Built to Be Chosen. ",
    paragraphheading :"Brand Identity & Design    ·   Web Development & E-Commerce   ",
    description:
      "Your brand communicates before you do. We make sure it says the right thing.",
    button: "Explore Design",
    icon: Palette,
    accent: "#FBBF24",
    bg: "from-amber-400/20 to-amber-700/5",
    border: "hover:border-amber-400",
    shadow: "hover:shadow-[0_30px_60px_rgba(251,191,36,.25)]",
    link: "/services/design",
  },
  {
    title: "MARKETING",
    subtitle: "Build the Brand They Cannot Forget",
    paragraphheading :"Digital Marketing & Content Creation ·  Market Presence & Reputation  ·  Growth Intelligence & Analytics ",
    description:
      "Consistent presence across every channel that matters. Built as infrastructure. Measured as investment.",
    button: "Explore Marketing",
    icon: TrendingUp,
    accent: "#22C55E",
    bg: "from-green-500/20 to-green-700/5",
    border: "hover:border-green-400",
    shadow: "hover:shadow-[0_30px_60px_rgba(34,197,94,.25)]",
    link: "/services/marketing",
  },
];