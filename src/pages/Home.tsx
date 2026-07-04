import Hero from "../components/home/Hero";
import CredibilityBar from "../components/home/CredibilityBar";
import ServicesOverview from "../components/home/ServicesOverview";
import ProcessSection from "../components/home/ProcessSection";
import StatsSection from "../components/home/StatsSection";
import FeaturedWork from "../components/home/FeaturedWork";
import FinalCTA from "../components/home/FinalCTA";
import Testimonials from "../components/home/Testimonials";
import ServicesShowcase from "@/components/home/ServicesShowcase";

const Home = () => {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <ServicesOverview />
      {/* <ServicesShowcase /> */}
      <ProcessSection />
      <FeaturedWork />
      <StatsSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Home;

