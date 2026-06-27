import {
  Megaphone,
  TrendingUp,
  Palette,
  PenTool,
  Target,
  Sparkles,
} from "lucide-react";

const items = [
  {
    title: "Advertising",
    icon: Megaphone,
  },
  {
    title: "Marketing",
    icon: TrendingUp,
  },
  {
    title: "Brand Design",
    icon: Palette,
  },
  {
    title: "Content Creation",
    icon: PenTool,
  },
  {
    title: "Digital Strategy",
    icon: Target,
  },
  {
    title: "AI-Powered Production",
    icon: Sparkles,
  },
];

const marqueeItems = [...items, ...items];

const CredibilityBar = () => {
  return (
    <section
      className="
      relative
      w-full
      overflow-hidden
      bg-[#111827]
      border-y
      border-white/5 py-6
      "
    >
      {/* Left Fade */}

      <div
        className="
        pointer-events-none
        absolute
        left-0
        top-0
        z-10
        h-full
        w-24
        bg-gradient-to-r
        from-[#111827]
        to-transparent
        "
      />

      {/* Right Fade */}

      <div
        className="
        pointer-events-none
        absolute
        right-0
        top-0
        z-10
        h-full
        w-24
        bg-gradient-to-l
        from-[#111827]
        to-transparent
        "
      />

      <div className="marquee group">
        <div className="marquee-track">
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
                py-6
                border-r
                border-white/10
                transition-all
                duration-300
                hover:text-[#00B4D8]
                "
              >
                <Icon
                  size={20}
                  className="
                  mr-3
                  text-[#00B4D8]
                  transition-transform
                  duration-300
                  group-hover:translate-y-[-2px]
                  "
                />

                <span
                  className="
                  text-sm
                  md:text-base
                  font-medium
                  tracking-wide
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
    </section>
  );
};

export default CredibilityBar;