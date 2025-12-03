import React from 'react'
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />  
      <Testimonials />
      <CTASection />
      <Footer /> 
    </div>
  )
}

export default Home