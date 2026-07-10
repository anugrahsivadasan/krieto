import { Megaphone, Palette, TrendingUp } from "lucide-react";
import adv from "../assets/advr.png";
import mar from "../assets/markk.png";
import design from "../assets/des.png";

export const services = [
  {
    id: "advertising",
    number: "01",
    title: "ADVERTISING",
    subtitle: "The Frame That Changes Everything.",
    paragraphheading: "Creative & Platform Advertising",
    description:
      "AI powered video. Animated content & premium voiceovers. Production-quality advertising built for the platforms where your audience actually watches.",
    button: "Explore Advertising",
    icon: Megaphone,
    image: adv,
    accent: "#6653BE", // Advertising Purple
    accentSoft: "rgba(102,83,190,0.35)",
    blobFrom: "#6859B6", // Pill Fill
    blobTo: "#3F3476",
    link: "/services/advertising",
  },

  {
    id: "design",
    number: "02",
    title: "DESIGN",
    subtitle: "Built to Be Chosen.",
    paragraphheading: "Brand Identity & Design",
    description:
      "Your brand communicates before you do. We make sure it says the right thing, everywhere it shows up.",
    button: "Explore Design",
    icon: Palette,
    image: design,
    accent: "#FDD406", // Design Yellow
    accentSoft: "rgba(253,212,6,0.35)",
    blobFrom: "#FFF50D", // Pill Fill
    blobTo: "#B38F00",
    link: "/services/design",
  },

  {
    id: "marketing",
    number: "03",
    title: "MARKETING",
    subtitle: "Build the Brand They Cannot Forget.",
    paragraphheading: "Digital Marketing & Brand Reputation",
    description:
      "We build marketing infrastructure that compounds: Social media, SEO, email, reputation, analytics—all integrated, all pointed at your growth.",
    button: "Explore Marketing",
    icon: TrendingUp,
    image: mar,
    accent: "#029289", // Marketing Teal
    accentSoft: "rgba(2,146,137,0.35)",
    blobFrom: "#008A7F", // Pill Fill
    blobTo: "#04534D",
    link: "/services/marketing",
  },
];