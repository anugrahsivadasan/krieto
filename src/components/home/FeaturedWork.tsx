import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../global/Section";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const projects = [
  {
    title: "Brand Overhaul",
    category: "Brand & Design",
    description:
      "Complete visual identity rebrand for a Texas-based hospitality group, from logo to digital presence.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    tag: "Brand Identity",
    href: "/portfolio",
  },
  {
    title: "Performance Campaign",
    category: "Paid Advertising",
    description:
      "Multi-channel Google and Meta campaign achieving 4.2× ROAS for a regional retail brand.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    tag: "Advertising",
    href: "/portfolio",
  },
  {
    title: "Digital Growth Strategy",
    category: "Digital Marketing",
    description:
      "SEO, content, and social strategy that grew organic traffic by 280% in six months.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    tag: "Marketing",
    href: "/portfolio",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const FeaturedWork = () => {
  return (
    <section className="relative bg-[#0D1B2A] py-[120px]" id="work">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        {/* ─── Heading ──────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="
              font-body uppercase tracking-[0.15em]
              text-[#00B4D8] text-[13px] font-semibold mb-4
            ">
              Featured Work
            </p>
            <h2 className="
              font-heading font-extrabold text-white
              text-[clamp(2rem,4.5vw,3.5rem)]
              leading-[1.05] tracking-[-0.02em]
            ">
              Results We're
              <br />
              Proud Of
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="
              flex-shrink-0
              inline-flex items-center gap-2
              text-sm font-semibold text-[#00B4D8]
              hover:gap-3 transition-all duration-300
            "
          >
            View All Work
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* ─── Cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeUp(index * 0.1)}
            >
              <Link
                to={project.href}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#1E1E1E] border border-white/[0.06] h-full transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,180,216,0.15)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-60" />

                  {/* Category tag */}
                  <div className="
                    absolute top-4 left-4
                    px-3 py-1.5
                    rounded-full
                    bg-[#00B4D8]/90 backdrop-blur-sm
                    font-body text-xs font-semibold text-white
                    uppercase tracking-wide
                  ">
                    {project.tag}
                  </div>

                  {/* Ghost CTA — reveals on hover */}
                  <div className="
                    absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-400
                  ">
                    <span className="
                      flex items-center gap-2
                      border border-white/80 text-white
                      px-6 py-3 rounded-full
                      font-body text-sm font-semibold
                      backdrop-blur-sm bg-black/20
                    ">
                      View Project
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="font-body text-[13px] text-[#6B7280] uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[#9CA3AF] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default FeaturedWork;
