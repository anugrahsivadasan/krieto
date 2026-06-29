import Hero from "../components/home/Hero";
import CredibilityBar from "../components/home/CredibilityBar";
import ServicesOverview from "../components/home/ServicesOverview";
import ProcessSection from "../components/home/ProcessSection";
import StatsSection from "../components/home/StatsSection";
import FeaturedWork from "../components/home/FeaturedWork";
import FinalCTA from "../components/home/FinalCTA";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <ServicesOverview />
      <ProcessSection />
      <StatsSection />
      <FeaturedWork />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Home;

