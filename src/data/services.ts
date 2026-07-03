import { Megaphone, Palette, TrendingUp } from "lucide-react";
import adv from "../assets/advr.png";
import mar from "../assets/adv.png";
import design from "../assets/des.png";

// Each entry drives one "frame" of the scroll-pinned showcase.
// blobFrom / blobTo => gradient used on the left organic panel.
// accent => color used for numbers, links, dots, glows.
export const services = [
  {
    id: "advertising",
    number: "01",
    title: "ADVERTISING",
    subtitle: "The Frame That Changes Everything.",
    paragraphheading: "Creative Advertising & Video Production",
    description:
      "AI powered video. Animated content & premium voiceovers. Production-quality advertising built for the platforms where your audience actually watches.",
    button: "Explore Advertising",
    icon: Megaphone,
    image: adv, // <-- Added
    accent: "#5F5294",
    accentSoft: "rgba(139,92,246,0.35)",
    blobFrom: "#56506C",
    blobTo: "#343050",
    link: "/services/advertising",
  },
  {
    id: "design",
    number: "02",
    title: "DESIGN",
    subtitle: "Built to Be Chosen.",
    paragraphheading: "Brand Identity & Design · Web Development & E-Commerce",
    description:
      "Your brand communicates before you do. We make sure it says the right thing, everywhere it shows up.",
    button: "Explore Design",
    icon: Palette,
    image: design, // <-- Added
    accent: "#FBBF24",
    accentSoft: "rgba(251,191,36,0.35)",
    blobFrom: "#FBBF24",
    blobTo: "#78350F",
    link: "/services/design",
  },
{
  id: "marketing",
  number: "03",
  title: "MARKETING",
  subtitle: "Build the Brand They Cannot Forget.",
  paragraphheading:
    "Digital Marketing & Content Creation · Market Presence & Reputation · Growth Intelligence & Analytics",
  description:
    "Consistent presence across every channel that matters. Built as infrastructure. Measured as investment.",
  button: "Explore Marketing",
  image: mar,

accent: "#0D9488",
accentSoft: "rgba(13,148,136,0.35)",
blobFrom: "#14B8A6",
blobTo: "#042F2E",             // Dark teal

  link: "/services/marketing",
},
];