import React from 'react'
import Hero from '../components/home/Hero'
import CredibilityBar from '../components/home/CredibilityBar'
import ServicesOverview from '../components/home/ServicesOverview'
const Home = () => {
  return (
    <div>
      <Hero />
      <CredibilityBar/>
      <ServicesOverview />
    </div>
  )
}

export default Home
