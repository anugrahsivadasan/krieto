import { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { packages } from "./serviceContent";

gsap.registerPlugin(ScrollTrigger);

const PricingPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-price-card]"));
    const animation = gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 72 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0A0A0A] py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-20 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#00B4D8]/[0.055] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
            Pricing Preview
          </p>
          <h2 className="font-heading text-[clamp(2.6rem,5.5vw,5.1rem)] font-bold leading-[1] tracking-tight text-white">
            Scope starts with the business problem.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
          {packages.map((item) => {
            const Icon = item.icon;
            return (
              <article
                data-price-card
                key={item.name}
                className={`relative overflow-hidden rounded-[28px] border bg-white/[0.035] p-8 opacity-0 backdrop-blur-xl transition duration-300 hover:-translate-y-[6px] md:p-10 ${
                  item.popular
                    ? "border-[#00B4D8]/55 shadow-[0_30px_110px_rgba(0,180,216,0.16)] lg:-translate-y-8"
                    : "border-white/10"
                }`}
              >
                {item.popular && (
                  <div className="absolute right-6 top-6 rounded-full border border-[#90E0EF]/30 bg-[#00B4D8]/15 px-4 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#90E0EF]">
                    Most Popular
                  </div>
                )}
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A0A]/65 text-[#90E0EF]">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-white">{item.name}</h3>
                <p className="mt-4 font-heading text-4xl font-bold text-[#90E0EF]">{item.price}</p>
                <p className="mt-5 min-h-[84px] font-body text-sm leading-7 text-[#9CA3AF]">{item.description}</p>

                <ul className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 font-body text-sm leading-6 text-white/78">
                      <Check size={18} className="mt-1 flex-none text-[#00B4D8]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#00B4D8]/35 px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#00B4D8] hover:shadow-[0_0_44px_rgba(0,180,216,0.22)]"
                >
                  Discuss Scope
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-sm leading-7 text-[#9CA3AF]">
            Every project is custom. Prices shown are starting points.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.16em] text-[#90E0EF] transition duration-300 hover:gap-4 hover:text-white"
          >
            Get Custom Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
