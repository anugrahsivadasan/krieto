import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Section, { Container } from "@/components/global/Section";
import PortfolioCard from "@/components/home/PortfolioCard";
import { portfolio } from "@/data/portfolio";

const categories = ["All", "Marketing", "Advertising", "Design", "Strategy"];

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

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWork = useMemo(() => {
    if (activeCategory === "All") {
      return portfolio;
    }

    return portfolio.filter((item) => item.tags?.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className="bg-[#02060f] text-white">
      <section className="overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#09101a] via-[#02060f] to-[#02060f] py-24 sm:py-28 lg:py-32">
        <Container className="relative">
          <div className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-[#00B4D8]/15 blur-[160px]" />
          <div className="absolute left-0 top-24 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02060f] to-transparent" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#90E0EF]">
              Work That Wins
            </p>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Work That Wins Clients New Business
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              From brand identity to full-funnel campaigns — here's what we've built.
            </p>
          </div>
        </Container>
      </section>

      <Section className="pt-20 lg:pt-24">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Filter by category
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                See how our work changes by discipline.
              </h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <div className="flex flex-wrap items-center gap-3">
                {categories.map((category) => {
                  const active = category === activeCategory;
                  const count = category === "All" ? portfolio.length : portfolio.filter((item) => item.tags?.includes(category)).length;

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "bg-[#00B4D8] text-[#02060f] shadow-glow"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {category}
                      <span className="ml-2 text-xs text-slate-400">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatePresence mode="popLayout">
              {filteredWork.slice(0, 1).map((item) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:row-span-2"
                >
                  <PortfolioCard {...item} large />
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="grid gap-6">
              <AnimatePresence mode="popLayout">
                {filteredWork.slice(1).map((item) => (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PortfolioCard {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400">
            <span>{filteredWork.length} project{filteredWork.length === 1 ? "" : "s"} shown</span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold transition hover:text-white"
            >
              Talk to a strategist
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#070d16]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
              Straight From Our Clients
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proof from people who saw the work move their business.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#00B4D8]/10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#00B4D8]">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={18} className="text-[#00B4D8]" />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-8 text-slate-200">“{item.quote}”</p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-slate-400">{item.role}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-[#01050c] py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Start your next chapter
              </p>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Your Brand Could Be Our Next Case Study.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#02060f] transition hover:bg-[#90E0EF]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Portfolio;
