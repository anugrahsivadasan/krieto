import { useEffect, useRef } from "react";
import { motion } from "framer-motion";


function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const children = el.querySelectorAll(".reveal-child");

    children.forEach((child) => observer.observe(child));

    if (el.classList.contains("reveal-child")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

const OurStory = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(0,180,216,0.05),transparent)] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Editorial image */}
          <div
            className="reveal-child order-2 lg:order-1"
            style={{ transitionDelay: "0ms" }}
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/5]
                border
                border-white/[0.06]
                bg-[#1E1E1E]
                group
              "
            >
              {/* Image */}
              <img
                src="https://i.pinimg.com/1200x/4a/e2/c7/4ae2c7296fd8022f9ca52bc433f9ae41.jpg"
                alt="Our Story"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Premium dark overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/10
                  to-transparent
                  transition-opacity
                  duration-700
                "
              />

              {/* Subtle vignette */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.35)_100%)]
                "
              />
            </div>
          </div>

          {/* Right — Story content */}
          <div className="order-1 lg:order-2 space-y-8">

            {/* Eyebrow */}
            <p
              className="reveal-child font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.25em] uppercase"
              style={{ transitionDelay: "100ms" }}
            >
              Our Story
            </p>

            {/* Heading */}
           <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 1.3,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className=" font-['Space_Grotesk'] font-bold text-[#F9FAFB] text-4xl md:text-5xl leading-tight tracking-tight"
>
  Why Krieto Exists
</motion.h2>

           

            {/* Body paragraphs */}
            <div className="space-y-5">

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "250ms" }}
              >
                Krieto was born in Dallas–Fort Worth out of a simple,
                stubborn conviction: that ambitious businesses deserve the
                same calibre of creative thinking that Fortune 500 brands buy
                at ten times the price. We saw too many promising companies
                settle for mediocre work because premium felt out of reach.
                We refused to accept that.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "300ms" }}
              >
                From the beginning, Texas shaped how we work — direct,
                results-focused, and never satisfied with average. Those
                values run through every strategy deck, every campaign brief,
                and every pixel we place. We don't dress up busywork as
                strategy. We build things that move the needle.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "350ms" }}
              >
                Today we serve clients from Texas to every time zone,
                delivering advertising, design, and marketing work that
                competes at the highest level — without the bloated
                retainers, the endless committee reviews, or the diluted
                output.
              </p>

              <p
                className="reveal-child font-['Inter'] text-[#6B7280] text-base md:text-lg leading-relaxed"
                style={{ transitionDelay: "400ms" }}
              >
                If you want a partner who treats your growth like their own,
                you've found the right agency.
              </p>

            </div>

          </div>

        </div>

         {/* Pull quote */}
         <div
  className="reveal-child mt-[205px] flex justify-center"
  style={{ transitionDelay: "200ms" }}
>
  <blockquote className="text-center max-w-4xl">
    <div className="w-16 h-[2px] bg-[#00B4D8] mx-auto mb-4" />

    <p className="font-['Space_Grotesk'] text-[#00B4D8] text-xl md:text-4xl 2xl:text-6xl italic font-bold leading-snug">
      "The best businesses do not always win. The best-positioned ones do.
      <br />
     We built Krieto to fix that for you."
    </p>
  </blockquote>
</div>
      </div>
    </section>
  );
};

export default OurStory;