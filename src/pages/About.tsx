import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "@/components/about/AboutHero";

const MissionVision = lazy(() => import("@/components/about/Mission&Vision"));
const OurStory = lazy(() => import("@/components/about/OurStory"));
const ProcessSection = lazy(() => import("@/components/about/OurProcess"));
const Credentials = lazy(() => import("@/components/about/Credentials"));
const FinalCTA = lazy(() => import("@/components/about/AboutPageCTA"));

const SectionFallback = () => <div className="min-h-[32vh] w-full" aria-hidden="true" />;

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hero = document.getElementById("about-hero");
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
    <main>
      <AboutHero />

      <Suspense fallback={<SectionFallback />}>
        <OurStory />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <MissionVision />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Credentials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FinalCTA />
      </Suspense>
    </main>
  );
};

export default Home;