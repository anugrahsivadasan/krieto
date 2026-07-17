import {
  BarChart3,
  BadgeCheck,
  Brush,
  Clapperboard,
  Code2,
  Compass,
  FileText,
  LineChart,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePillar = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  alt: string;
  link: string;
};

export type ServiceTile = {
  title: string;
  description: string;
  icon: LucideIcon;
  size: string;
  link: string;
};

export const pillars: ServicePillar[] = [
  {
    number: "01",
    eyebrow: "Advertising",
    title: "Creative Advertising & Video Production ",
    description:
      "AI Powered video. Animated content & premium voiceovers. Production-quality advertising built for the platforms where your audience actually watches. ",
    services: [
      "Creative advertising",
      "Platform advertising ",
      
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    alt: "Cinematic night exterior with blue illuminated architecture",
    link: "/services/advertising",
  },
  {
    number: "02",
    eyebrow: "Design",
    title: "Brand Identity & Design    ·   Web Development & E-Commerce  ",
    description:
      "Your brand communicates before you do. We build visual systems that make your business the obvious choice. ",
    services: [
      "Brand identity",
      "Brand design",
      
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimal modern workspace with dramatic natural light",
    link: "/services/design",
  },
  {
    number: "03",
    eyebrow: "Marketing",
    title: "Build the Brand They Cannot Forget ",
    description:
      "Consistent presence across every channel. Built as infrastructure. Measured relentlessly.  ",
    services: [
      "Brand visibility",
      "Brand reputation",
     
    ],
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    alt: "Abstract architectural form with bright blue light",
    link: "/services/marketing",
  },
  
];

export const serviceTiles: ServiceTile[] = [
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and identity foundations that make the brand easier to buy.",
    icon: Compass,
    size: "md:row-span-2",
    link: "/services/design",
  },
  {
    title: "Paid Campaigns",
    description: "Platform-aware campaign systems for launches, offers, and ongoing demand.",
    icon: Target,
    size: "md:row-span-1",
    link: "/services/advertising",
  },
  {
    title: "Website Design",
    description: "Premium web experiences that carry the brand and convert interest into action.",
    icon: Code2,
    size: "md:row-span-2",
    link: "/services/design",
  },
  {
    title: "Video Production",
    description: "Launch films, ads, motion assets, and voice-led creative for modern platforms.",
    icon: Video,
    size: "md:row-span-1",
    link: "/services/advertising",
  },
  {
    title: "Content Systems",
    description: "Creative calendars, social narratives, and repeatable production rhythms.",
    icon: PenTool,
    size: "md:row-span-1",
    link: "/services/marketing",
  },
  {
    title: "Analytics",
    description: "Readable performance intelligence that turns marketing into decision support.",
    icon: BarChart3,
    size: "md:row-span-2",
    link: "/services/marketing",
  },
  {
    title: "Creative Direction",
    description: "Campaign worlds, visual language, and art direction that make work feel distinct.",
    icon: Sparkles,
    size: "md:row-span-2",
    link: "/services/design",
  },
  {
    title: "SEO Presence",
    description: "Search visibility, technical clarity, and content that compounds over time.",
    icon: Search,
    size: "md:row-span-1",
    link: "/services/marketing",
  },
  {
    title: "Social Growth",
    description: "Channel strategy and creative output for brands that need consistent attention.",
    icon: Share2,
    size: "md:row-span-1",
    link: "/services/marketing",
  },
  {
    title: "Identity Systems",
    description: "Logos, typography, color, and flexible brand systems built for real use.",
    icon: Palette,
    size: "md:row-span-2",
    link: "/services/design",
  },
  {
    title: "Ad Concepts",
    description: "Simple, memorable ideas shaped into campaign assets that people understand fast.",
    icon: Megaphone,
    size: "md:row-span-1",
    link: "/services/advertising",
  },
  {
    title: "Copywriting",
    description: "Clear words for websites, launches, campaigns, offers, and brand systems.",
    icon: FileText,
    size: "md:row-span-1",
    link: "/services/design",
  },
];

export const packages = [
  {
    name: "Starter",
    price: "From $1.5k",
    icon: Brush,
    description: "For focused launches, brand refreshes, and single-channel campaigns.",
    features: ["Discovery sprint", "Core creative direction", "One primary deliverable", "Launch guidance"],
  },
  {
    name: "Growth",
    price: "From $4.5k",
    icon: Rocket,
    description: "For businesses ready to connect brand, creative, and marketing momentum.",
    features: ["Strategy and positioning", "Multi-channel creative", "Website or campaign system", "Performance review"],
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    icon: TrendingUp,
    description: "For brands that need ongoing creative production and growth infrastructure.",
    features: ["Dedicated creative system", "Monthly campaigns", "Analytics and optimization", "Executive reporting"],
  },
];

export const faqs = [
  {
    question: "How fast will we see results?",
    answer:
      "Advertising results can show within days. SEO and content build over 3–6 months. We give you the honest timeline upfront — not the one that wins the pitch. ",
  },
  {
    question: "Can we start with only one service?",
    answer:
      "Yes. Many great partnerships started with a single project. We will tell you if the scope limits what we can achieve — we would rather be honest than overcommit. ",
  },
  {
    question: "What makes Krieto different? ",
    answer:
      "We are in the outcomes business, not the deliverables business. Most agencies give you outputs. We give you a system that produces results — and we measure it that way. ",
  },
  {
    question: "How do contracts work? ",
    answer:
      "No long-term lock-ins to start. The work earns the relationship. Most clients stay because the results make leaving feel illogical. ",
  },
];

export const proofPoints = [
  { value: "03", label: "Integrated disciplines" },
  { value: "6+", label: "Service capabilities" },
  { value: "01", label: "Growth system" },
];

export const trustIcons = [BadgeCheck, Clapperboard, LineChart];
