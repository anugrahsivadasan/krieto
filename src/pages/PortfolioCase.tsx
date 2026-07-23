import Section, { Container } from "@/components/global/Section";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PortfolioCase = () => {
  const { slug } = useParams();
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const { caseStudy } = project;
  const secondaryImage = caseStudy.gallery?.[1] ?? caseStudy.gallery?.[0];

  return (
    <main className="bg-black text-white">
      {/* ================= Header ================= */}
      <Section className="pb-0 pt-12 lg:pt-16">
        <Container>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#00B4D8]"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
              {project.category}
              {project.industry ? ` · ${project.industry}` : ""}
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {project.title}
            </motion.h1>

            <p className="mt-4 text-base leading-7 text-slate-400">
              {project.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* ================= Hero image ================= */}
      <Section className="pt-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </Container>
      </Section>

      {/* ================= Body ================= */}
      <Section className="pt-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* -------- Left: challenge + approach -------- */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                The Challenge
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {caseStudy.challenge}
              </p>

              <div className="mt-10 border-t border-white/10 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Our Approach
                </p>

                <ul className="mt-6 space-y-5">
                  {caseStudy.approach.map((step) => (
                    <li key={step.title} className="flex gap-3">
                      <ChevronRight
                        size={18}
                        className="mt-0.5 shrink-0 text-[#00B4D8]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* -------- Pull quote -------- */}
              {caseStudy.results?.[0] ? (
                <div className="mt-10 rounded-2xl border-l-2 border-[#00B4D8] bg-white/[0.03] p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    We believe every project deserves a tailored path. Our
                    team combined strategy, creative, and measurement into a
                    single plan built around{" "}
                    <span className="font-semibold text-white">
                      {caseStudy.results[0].label.toLowerCase()}
                    </span>
                    , with a clear line from execution to business outcome.
                  </p>
                </div>
              ) : null}

              {/* -------- Secondary image + goal -------- */}
              {secondaryImage ? (
                <div className="mt-10">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={secondaryImage}
                      alt={`${project.title} — supporting visual`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Our Goal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    To help {project.title.toLowerCase()} move faster, look
                    sharper, and convert more of the attention it earns —
                    with work built to last past the launch.
                  </p>
                </div>
              ) : null}
            </div>

            {/* -------- Right: results sidebar -------- */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#00B4D8]" />
                  <p className="text-sm font-semibold text-white">
                    Results
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={result.label}
                      className={`flex items-center justify-between gap-4 pb-4 ${
                        index !== caseStudy.results.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-slate-400">
                        {result.label}
                      </span>
                      <span className="shrink-0 text-lg font-semibold text-white">
                        {result.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* -------- Other services / more work -------- */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-sm font-semibold text-white">
                  Other Projects
                </p>

                <div className="mt-4 space-y-1">
                  {portfolio
                    .filter((item) => item.slug !== project.slug)
                    .slice(0, 4)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        to={item.link}
                        className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00B4D8]" />
                          {item.title}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-slate-600 transition group-hover:text-[#00B4D8]"
                        />
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ================= CTA ================= */}
      <Section className="pb-24 pt-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Ready when you are
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to build a project like this for your brand?
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00B4D8] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#90E0EF]"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#00B4D8] hover:text-[#00B4D8]"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default PortfolioCase;