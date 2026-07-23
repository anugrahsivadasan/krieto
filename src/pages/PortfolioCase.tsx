import Section, { Container } from "@/components/global/Section";
import { portfolio } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const PortfolioCase = () => {
  const { slug } = useParams();
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#00B4D8]/10 blur-[180px]" />
        <Container className="relative">
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
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Case study page placeholder
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Ready for your custom content
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Challenge
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                This section is ready for your project brief, goals, and the
                problem you solved for this client.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Approach
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Add your strategy, process, and creative decisions here when
                you&apos;re ready.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
              Results
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Replace this area with your metrics, outcomes, and proof points.
            </p>
          </div>
        </Container>
      </Section>

      <section className="bg-[#070707] py-24">
        <Container>
          <div className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,180,216,0.12),transparent_45%)] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00B4D8]">
                Ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                This page is ready for your real case study content.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#02060f] transition hover:bg-[#90E0EF]"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#00B4D8]"
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
