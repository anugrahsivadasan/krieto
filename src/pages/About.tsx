import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/Mission&Vision";
import OurStory from "@/components/about/OurStory";
import ProcessSection from "@/components/about/OurProcess";
import Credentials from "@/components/about/Credentials";
import FinalCTA from "@/components/about/AboutPageCTA";

const Home = () => {
  return (
    <main>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <ProcessSection/>
      <Credentials/>
      <FinalCTA/>


    </main>
  )
}
export default Home;