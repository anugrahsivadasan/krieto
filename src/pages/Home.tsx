import Hero from '../components/home/Hero'
import CredibilityBar from '../components/home/CredibilityBar'
import ServicesOverview from '../components/home/ServicesOverview'
import ProcessSection from '../components/home/ProcessSection'
import StatsSection from '../components/home/StatsSection'
import FeaturedWork from '../components/home/FeaturedWork'
const Home = () => {
  return (
    <div>
      <Hero />
      <CredibilityBar/>
      <ServicesOverview />
      <ProcessSection />
      <StatsSection />
      <FeaturedWork/>
    </div>
  )
}

export default Home
