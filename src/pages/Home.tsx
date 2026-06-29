import Hero from "../components/home/Hero";
import CredibilityBar from "../components/home/CredibilityBar";
import ServicesOverview from "../components/home/ServicesOverview";
import HowWeWork from "../components/home/HowWeWork";
import StatsCounter from "../components/home/StatsCounter";
import FeaturedWork from "../components/home/FeaturedWork";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <main>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Credibility / Services Marquee */}
      <CredibilityBar />

      {/* Section 3 — Services Overview */}
      <ServicesOverview />

      {/* Section 4 — How We Work */}
      <HowWeWork />

      {/* Section 5 — Stats / Social Proof Counters */}
      <StatsCounter />

      {/* Section 6 — Featured Work */}
      <FeaturedWork />

      {/* Section 7 — Testimonials */}
      <Testimonials />

      {/* Section 8 — Final CTA */}
      <FinalCTA />
    </main>
  );
};

export default Home;
