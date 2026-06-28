import {
  Globe,
  RefreshCw,
  LayoutTemplate,
  ShoppingBag,
  Badge,
  Brush,
  CreditCard,
  Package,
  BookOpen,
  Mail,
  FileText,
  AtSign,
  Image,
  PanelsTopLeft,
  Clapperboard,
  FileVideo,
  SlidersHorizontal,

  // Replace social icons with these
  Share2,
  Camera,
  PlayCircle,
  Music2,
  MessageCircle,

  CalendarDays,
  BadgeDollarSign,
  Search,
  Mic,
  Bot,
  Sparkles,
  Star,
  MapPinned,
  BarChart3,
  TrendingUp,
  MailCheck,
  Users,
  Activity,
} from "lucide-react";

const services = [
  { title: "New Website Development", icon: Globe },
  { title: "Website Redesign", icon: RefreshCw },
  { title: "High-Converting Landing Pages", icon: LayoutTemplate },
  { title: "Shopify / WooCommerce Design", icon: ShoppingBag },

  { title: "Logo Design", icon: Badge },
  { title: "Animated Logo Design", icon: Brush },
  { title: "Digital Business Card Design", icon: CreditCard },
  { title: "Package Design", icon: Package },
  { title: "Business Brochure Design", icon: BookOpen },
  { title: "Greeting Cards Design", icon: Mail },
  { title: "Envelope Design", icon: Mail },
  { title: "Letterhead Design", icon: FileText },
  { title: "Email Signature Design", icon: AtSign },
  { title: "Premium Poster Design", icon: Image },
  { title: "Carousel Posters", icon: PanelsTopLeft },
  { title: "Animated Video Posters", icon: Clapperboard },
  { title: "Animated GIF Posters", icon: FileVideo },
  { title: "Before & After Slider Design", icon: SlidersHorizontal },

{ title: "Facebook Management", icon: Share2 },
{ title: "Instagram Management", icon: Camera },
{ title: "YouTube Channel Management", icon: PlayCircle },
{ title: "TikTok Management", icon: Music2 },
{ title: "X (Twitter) Management", icon: MessageCircle },
{ title: "Threads Management", icon: MessageCircle },
{ title: "LinkedIn Management", icon: Users },

  { title: "Reels Creation", icon: PlayCircle },
  { title: "Content Strategy & Planning", icon: CalendarDays },

  { title: "Meta Ads Campaigns", icon: BadgeDollarSign },
  { title: "Google Ads Campaigns", icon: Search },
  { title: "Influencer Marketing", icon: Users },

  { title: "Location Photography", icon: Camera },
  { title: "Product Photography", icon: Camera },
  { title: "Generated Voiceovers", icon: Mic },
  { title: "AI Avatar Videos", icon: Bot },
  { title: "Video Quality Enhancement", icon: Sparkles },

  { title: "Google Reviews Management", icon: Star },
  { title: "Yelp Reviews Management", icon: Star },
  { title: "Google Maps Visibility (GBP)", icon: MapPinned },

  { title: "Search Engine Optimization", icon: Search },
  { title: "Local SEO & Citation Building", icon: Globe },

  { title: "Email Marketing Campaigns", icon: MailCheck },
  { title: "Email Campaign Reports", icon: BarChart3 },
  { title: "Campaign Performance Reports", icon: TrendingUp },
  { title: "Customer Engagement Insights", icon: Activity },
  { title: "Growth Recommendations", icon: TrendingUp },
  { title: "Website Traffic Reports", icon: BarChart3 },
  { title: "Social Media Audit", icon: Activity },
];

// Duplicate multiple times for a perfectly smooth infinite loop
const marqueeItems = [
  ...services,
  ...services,
  ...services,
  ...services,
];

const CredibilityBar = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#111827]
        border-y
        border-white/10
        py-6
      "
    >
      {/* Left Fade */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-24
          bg-gradient-to-r
          from-[#111827]
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* Right Fade */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-24
          bg-gradient-to-l
          from-[#111827]
          to-transparent
          z-20
          pointer-events-none
        "
      />

      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="
            flex
            w-max
            animate-[marquee_120s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  items-center
                  shrink-0
                  px-10
                  py-2
                  border-r
                  border-white/10
                  group
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={18}
                  className="
                    mr-3
                    text-[#00B4D8]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    text-sm
                    md:text-base
                    font-medium
                    tracking-wide
                    text-white/90
                    group-hover:text-[#00B4D8]
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind v4 custom animation */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default CredibilityBar;