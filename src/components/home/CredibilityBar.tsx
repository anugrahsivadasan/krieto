import "../../styles/marquee.css";
import {
  Megaphone,
  TrendingUp,
  Palette,
  PenTool,
  Target,
  Sparkles,
} from "lucide-react";

const items = [
  { title: "Advertising", icon: Megaphone },
  { title: "Marketing", icon: TrendingUp },
  { title: "Brand Design", icon: Palette },
  { title: "Content Creation", icon: PenTool },
  { title: "Digital Strategy", icon: Target },
  { title: "AI-Powered Production", icon: Sparkles },
];

// Duplicate for seamless loop
const marqueeItems = [...items, ...items, ...items];

const CredibilityBar = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#111827]
        border-y border-white/[0.06]
        py-5
      "
      aria-label="Services overview marquee"
    >
      {/* Left edge fade */}
      <div
        className="
          pointer-events-none absolute left-0 top-0 z-10
          h-full w-32
          bg-gradient-to-r from-[#111827] to-transparent
        "
      />

      {/* Right edge fade */}
      <div
        className="
          pointer-events-none absolute right-0 top-0 z-10
          h-full w-32
          bg-gradient-to-l from-[#111827] to-transparent
        "
      />

      {/* Marquee track */}
      <div className="marquee group" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  flex items-center shrink-0
                  px-10 gap-3
                  border-r border-white/10
                  text-white/70
                  hover:text-[#00B4D8]
                  transition-colors duration-300
                "
              >
                <Icon
                  size={18}
                  className="text-[#00B4D8] flex-shrink-0"
                />
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
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