import { Megaphone, Palette } from "lucide-react";
import adv from "../assets/advr.png";
import design from "../assets/des.png";
import mar from "../assets/markk.png";

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
    image: adv,
    accent: "#5F5294",
    accentSoft: "rgba(95, 82, 148, 0.28)",
    blobFrom: "#5F5294",
    blobTo: "#343050",
    sectionBackground: "linear-gradient(135deg, #0D0E12 0%, #343050 100%)",
    textPrimary: "#E9E8EB",
    textSecondary: "#9593A1",
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
    image: design,
    accent: "#FBDC2F",
    accentSoft: "rgba(251, 188, 47, 0.28)",
    blobFrom: "#FBDC2F",
    blobTo: "#8A7238",
    sectionBackground: "linear-gradient(135deg, #11100D 0%, #443B20 100%)",
    // textPrimary: "#FBDC2F",
    // textSecondary: "#61605B",
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
    accent: "#137E7E",
    accentSoft: "rgba(13, 148, 136, 0.28)",
    blobFrom: "#137E7E",
    blobTo: "#042F2E",
    sectionBackground: "linear-gradient(135deg, #061414 0%, #0f2f2f 100%)",
    textPrimary: "#E9E8EB",
    textSecondary: "#94a3b8",
    link: "/services/marketing",
  },
];
