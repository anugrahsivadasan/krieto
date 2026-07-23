import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Section, { Container } from "@/components/global/Section";
import { portfolio } from "@/data/portfolio";

const PortfolioCase = () => {
  const { slug } = useParams();
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className="bg-[#02060f] text-white">
      <section className="relative overflow-hidden bg-[#050b14] pb-24 pt-20 sm:pt-24">
        <Container>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#00B4D8]"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#00B4D8]">
              {project.category}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {project.title}
            </motion.h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {project.description}
            </p>
          </div>
        </Container>

        <div className="mt-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
            style={{ minHeight: 420 }}
          />
        </div>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                  Challenge
                </p>
                <p className="mt-6 text-base leading-8 text-slate-300">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                  Approach
                </p>
                <div className="mt-6 space-y-6">
                  {project.caseStudy.approach.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="rounded-[28px] border border-white/10 bg-[#02060f] p-6"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">
                        Step {index + 1}
                      </p>
                      <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                  Results
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {project.caseStudy.results.map((result, index) => (
                    <div key={index} className="rounded-[24px] bg-[#060d17] p-6">
                      <p className="text-3xl font-semibold text-[#00B4D8]">{result.metric}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                  Gallery
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {project.caseStudy.gallery.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="h-64 w-full rounded-[24px] object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-[#070d16] py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Closing the loop
              </p>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                Ready to build a portfolio piece that earns attention and converts.
              </motion.h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#02060f] transition hover:bg-[#90E0EF]"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#00B4D8]"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PortfolioCase;
