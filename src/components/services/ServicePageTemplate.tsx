import Section, { Container } from "@/components/global/Section";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type IncludedItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ApproachStep = {
  title: string;
  description: string;
};

export type ResultCard = {
  metric: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type RelatedService = {
  title: string;
  description: string;
  link: string;
};

interface Props {
  title: string;
  subtitle: string;
  heroGradient: string;
  challenge: string;
  solution: string;
  includedItems: IncludedItem[];
  approachSteps: ApproachStep[];
  results: ResultCard[];
  testimonials: Testimonial[];
  relatedServices: RelatedService[];
  ctaHeadline: string;
  ctaLink: string;
  ctaLabel: string;
}

const ServicePageTemplate = ({
  title,
  subtitle,
  heroGradient,
  challenge,
  solution,
  includedItems,
  approachSteps,
  results,
  testimonials,
  relatedServices,
  ctaHeadline,
  ctaLink,
  ctaLabel,
}: Props) => {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <section
        className="relative overflow-hidden bg-[#070e17]"
        style={{
          backgroundImage: heroGradient,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1827]/80 via-[#02060d]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <Container className="relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.35em] text-[#00B4D8]">
              Krieto Services
            </p>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      <Section className="bg-[#090e17]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgb(0_180_216_/_5%)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00B4D8]">
                The Challenge
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                {challenge}
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgb(0_180_216_/_5%)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00B4D8]">
                The Krieto Solution
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                {solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              What’s Included
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Deliverables designed to move your business forward.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {includedItems.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgb(0_180_216_/_5%)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#090e17]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A premium process built for clarity and speed.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl font-bold text-[#00B4D8]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-[#02080f]/90 p-8 shadow-[0_24px_100px_rgba(0,0,0,0.25)]">
            <div className="grid gap-6 md:grid-cols-3">
              {results.map((result, index) => (
                <div key={index} className="rounded-3xl bg-[#0b1726] p-6">
                  <p className="text-4xl font-semibold text-[#00B4D8]">
                    {result.metric}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#090e17]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              How our clients experience the work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-lg leading-8 text-slate-200">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm text-slate-400">
                  <span className="block font-semibold text-white">
                    {testimonial.author}
                  </span>
                  <span>{testimonial.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              You might also need…
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Supporting services that keep the whole system premium.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#00B4D8]/40"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#00B4D8]">
                  Related
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-[#02080f] py-20">
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B4D8]">
              Ready to grow?
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {ctaHeadline}
            </h2>
            <Link
              to={ctaLink}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#030B13] transition hover:bg-[#90E0EF]"
            >
              {ctaLabel}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ServicePageTemplate;
