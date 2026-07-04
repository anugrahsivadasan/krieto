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
    eyebrow: "Marketing",
    title: "Growth systems built for sustained market presence.",
    description:
      "We shape the channels, content, campaigns, and intelligence that keep your brand visible to the people already moving toward a decision.",
    services: [
      "Digital marketing strategy",
      "Content creation",
      "Market presence and reputation",
      "Growth intelligence and analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    alt: "Abstract architectural form with bright blue light",
    link: "/services/marketing",
  },
  {
    number: "02",
    eyebrow: "Advertising",
    title: "Campaign concepts with the discipline to earn attention.",
    description:
      "From launch films to paid creative systems, we design advertising that feels memorable, sharp, and native to where your audience actually watches.",
    services: [
      "Creative advertising",
      "Video production",
      "Campaign direction",
      "Paid media concepts",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    alt: "Cinematic night exterior with blue illuminated architecture",
    link: "/services/advertising",
  },
  {
    number: "03",
    eyebrow: "Design",
    title: "Brand and digital experiences designed to be chosen.",
    description:
      "We turn first impressions into trust through identity systems, websites, ecommerce experiences, and visual worlds that make your value easier to understand.",
    services: [
      "Brand identity",
      "Website design and development",
      "Ecommerce experiences",
      "Creative direction",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimal modern workspace with dramatic natural light",
    link: "/services/design",
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
    question: "What services does Krieto handle?",
    answer:
      "Krieto works across marketing, advertising, and design. That includes brand identity, websites, campaign creative, video, content systems, digital marketing, reputation, and growth analytics.",
  },
  {
    question: "Can we start with only one service?",
    answer:
      "Yes. Many clients begin with one focused need, then expand once the foundation is working. We shape the engagement around the clearest business priority first.",
  },
  {
    question: "Are the pricing numbers fixed?",
    answer:
      "No. They are starting points to help frame scope. Every project is custom because the right budget depends on complexity, timeline, deliverables, and the level of strategic support needed.",
  },
  {
    question: "How soon can a project begin?",
    answer:
      "Most projects begin after a discovery conversation, scope alignment, and deposit. Smaller engagements can move quickly, while larger brand or growth systems need a deeper planning phase.",
  },
];

export const proofPoints = [
  { value: "03", label: "Integrated disciplines" },
  { value: "12+", label: "Service capabilities" },
  { value: "01", label: "Growth system" },
];

export const trustIcons = [BadgeCheck, Clapperboard, LineChart];
