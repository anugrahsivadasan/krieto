/**
 * PORTFOLIO PAGE — premium redesign
 * --------------------------------------------------------------
 * Setup notes before dropping this in:
 *
 * 1. FONTS — this design pairs a serif display face with your body sans.
 *    Add to index.html <head>:
 *      <link rel="preconnect" href="https://fonts.googleapis.com">
 *      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&display=swap" rel="stylesheet">
 *    Then in tailwind.config, extend fontFamily:
 *      display: ['"Fraunces"', 'serif']
 *    (Body font falls back to whatever sans you already use site-wide.)
 *
 * 2. DATA SHAPE — this assumes your `@/data/portfolio` items look like:
 *      {
 *        slug, title, category, tags, image,
 *        industry?: string,        // NEW — shown under the title on cards
 *        secondaryImage?: string,  // NEW — crossfades in on card hover
 *        featured?: boolean,       // NEW — marks the spotlight project
 *        caseStudy: { challenge, approach: [{title, description}], gallery: string[], results: [{metric, label}] }
 *      }
 *    Everything new is optional and falls back gracefully if missing —
 *    but add `industry` and a couple of `secondaryImage`/`featured` values
 *    for the full effect.
 *
 * 3. This file replaces the need for a separate <PortfolioCard /> import —
 *    the card is defined inline below so the new visual system is self-contained.
 * --------------------------------------------------------------
 */

import Section, { Container } from "@/components/global/Section";
import { portfolio } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Aurora from "@/components/global/Aurora";
const categories = ["All", "Marketing", "Advertising", "Design", "Strategy"];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const testimonials = [
  {
    quote:
      "Krieto made our own marketing page feel like a statement, not a brochure. The portfolio was the proof we needed to trust them with our launch.",
    author: "Avery Clarke",
    role: "Founder",
    company: "Arc Studio",
    rating: 5,
  },
  {
    quote:
      "Every detail feels considered. The case studies show the work and the business logic behind it, which is exactly what our leadership wanted.",
    author: "Nina Patel",
    role: "Head of Brand",
    company: "Luxe Supply",
    rating: 5,
  },
  {
    quote:
      "Their portfolio reads like a collection of commercially successful projects, not just pretty pictures. That balance is rare.",
    author: "Caleb Morgan",
    role: "CMO",
    company: "Foundry Health",
    rating: 5,
  },
];

// Alternating aspect ratios keep the grid from feeling like a spreadsheet.
const cardAspect = [
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWork = useMemo(() => {
    if (activeCategory === "All") {
      return portfolio;
    }

    return portfolio.filter((item) => item.tags?.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className="bg-black text-white">
      {/* ---------------------------------------------------------------- */}
      {/* HERO — single wash of atmosphere, no scattered orbs elsewhere     */}
      {/* ---------------------------------------------------------------- */}
     {/*
  Replaces the existing <section> hero block in Portfolio.tsx.
  Uses `portfolio` (already imported in the file) to pull two thumbnails
  for the collage — no new data or imports required.
*/}

<section className="relative flex min-h-[62vh] items-center overflow-hidden border-b border-white/10 lg:min-h-[72vh]">

 <div className="absolute inset-0 pointer-events-none">
        <Aurora
          colorStops={[
            "#03045E",
            "#0077B6",
            "#00B4D8",
          ]}
          blend={0.35}
          amplitude={0.8}
          speed={0.4}
        />
      </div>

  {/* atmosphere — single wash, kept subtle */}
  <div className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full bg-[#00B4D8]/10 blur-[200px]" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050810] to-transparent" />

  <Container className="relative w-full py-16">
    <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      {/* ------------------------------------------------------------ */}
      {/* Copy column                                                   */}
      {/* ------------------------------------------------------------ */}
      <div>
        {/* <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#00B4D8]" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#90E0EF]">
            Selected Work
          </p>
        </div> */}

        <h1 className="mt-8 font-display text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
          Work That Wins
          <br />
          Clients{" "}
          <span className="italic text-[#90E0EF]">New Business.</span>
        </h1>

        <p className="mt-8 max-w-md text-lg leading-8 text-slate-400">
          From brand identity to full-funnel campaigns — here&apos;s what
          we&apos;ve built.
        </p>

        <a
          href="#work"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#90E0EF]"
        >
          See the work
          <span aria-hidden className="translate-y-px">
            ↓
          </span>
        </a>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Image collage — gives the hero a visual anchor instead of      */}
      {/* leaving it as text-only, and previews real portfolio imagery   */}
      {/* ------------------------------------------------------------ */}
      <div className="relative hidden h-[420px] lg:block">
        {portfolio[1]?.image ? (
          <div className="absolute right-6 top-0 h-[260px] w-[210px] -rotate-3 overflow-hidden rounded-[20px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={portfolio[1].image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
        {portfolio[2]?.image ? (
          <div className="absolute bottom-0 left-0 h-[280px] w-[230px] rotate-2 overflow-hidden rounded-[20px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={portfolio[2].image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  </Container>
</section>

      {/* ---------------------------------------------------------------- */}
      {/* FILTER BAR — flat pills per spec, no nested pill-in-pill wrapper  */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pt-14 lg:pt-16">
        <Container>
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-2xl font-normal text-white sm:text-3xl">
              More from the studio
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = category === activeCategory;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? "bg-[#00B4D8] text-white"
                        : "bg-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* GRID — bento-mixed aspect ratios, hover crossfades to a      */}
          {/* second image so more of the work is visible without a click */}
          {/* ---------------------------------------------------------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredWork.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={item.link}
                    className="group relative block w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#0A0A0A] text-left"
                  >
                    <div
                      className={`relative overflow-hidden ${cardAspect[index % cardAspect.length]}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={
                          (item as any).secondaryImage ??
                          item.caseStudy.gallery?.[0] ??
                          item.image
                        }
                        alt=""
                        aria-hidden
                        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur">
                        {item.category}
                      </span>

                      <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#050810] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Case Study
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg font-normal text-white">
                        {item.title}
                      </h3>
                      {(item as any).industry ? (
                        <p className="mt-1 text-sm text-slate-500">
                          {(item as any).industry}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-500">
            <span>
              {filteredWork.length} project
              {filteredWork.length === 1 ? "" : "s"} shown
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[#00B4D8] transition hover:text-white"
            >
              Talk to a strategist
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* TESTIMONIALS — editorial, not three identical decorated boxes     */}
      {/* ---------------------------------------------------------------- */}
      <Section className="mt-8 bg-[#070707]">
        <Container>
          <h2 className="max-w-xl font-display text-3xl font-normal leading-tight text-white sm:text-4xl">
            Straight from our clients.
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Quote size={28} className="text-[#00B4D8]" strokeWidth={1.5} />
                <p className="mt-5 flex-1 font-display text-lg font-normal leading-8 text-slate-200">
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={14}
                        className="fill-[#00B4D8] text-[#00B4D8]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#00B4D8] via-[#0094B8] to-[#0077B6] py-[120px]"
        id="cta"
      >
        <div className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#03045E]/40 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="mx-auto mb-6 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              Your next case study could be the one that changes your growth.
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Tell us about the work you want to be known for, and we&apos;ll
              shape it into a portfolio-worthy story that moves people and
              business.
            </p>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <p className="mt-6 text-sm text-white/50">
              Custom strategy. No fluff. Built for growth.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Portfolio;
