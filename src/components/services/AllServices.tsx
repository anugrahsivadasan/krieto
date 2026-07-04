import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceTiles } from "./serviceContent";

gsap.registerPlugin(ScrollTrigger);

const AllServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-service-card]"));
    const animation = gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 56, rotate: -1.5 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: { each: 0.07, from: "start" },
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
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
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              All Services
            </p>
            <h2 className="font-heading text-[clamp(2.6rem,5.5vw,5.2rem)] font-bold leading-[1] tracking-tight text-white">
              Built as a custom mix, not a menu.
            </h2>
          </div>
          <p className="max-w-2xl font-body text-base leading-8 text-[#9CA3AF] md:text-lg">
            Each engagement is assembled around the work your market needs to see, believe, remember, and act on.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceTiles.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                data-service-card
                key={service.title}
                to={service.link}
                className={`group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-7 opacity-0 backdrop-blur-xl transition duration-300 hover:-translate-y-[6px] hover:border-[#00B4D8]/45 ${service.size}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_10%,rgba(0,180,216,0.15),transparent_44%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A0A]/60 text-[#90E0EF] transition duration-300 group-hover:rotate-2 group-hover:text-[#00B4D8]">
                    <Icon size={24} />
                  </div>
                  <ArrowUpRight size={18} className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#90E0EF]" />
                </div>

                <div className="relative mt-10">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-[#9CA3AF]">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllServices;