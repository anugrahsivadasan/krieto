import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesHero from "@/components/services/ServicesHero";
import ExpertiseDivider from "@/components/services/ExpertiseDivider";

const ServicePillars = lazy(() => import("@/components/services/ServicePillars"));
const AllServices = lazy(() => import("@/components/services/AllServices"));
const PricingPreview = lazy(() => import("@/components/services/PricingPreview"));
const ServicesFAQ = lazy(() => import("@/components/services/ServicesFAQ"));
const ServicesCTA = lazy(() => import("@/components/services/ServicesCTA"));

const SectionFallback = () => <div className="min-h-[32vh] w-full bg-[#0A0A0A]" aria-hidden="true" />;

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hero = document.getElementById("services-hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "auto", block: "start" });
        window.scrollBy({ top: -88, left: 0, behavior: "auto" });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <main className="bg-[#0A0A0A]">
      <ServicesHero />
      <ExpertiseDivider />

      <Suspense fallback={<SectionFallback />}>
        <ServicePillars />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AllServices />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PricingPreview />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesFAQ />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesCTA />
      </Suspense>
    </main>
  );
};

export default Services;
