import React from 'react'
import Navbar from '../component/Navbar'
import HomeHero from '../component/HomeHero'
import About from '../component/About'
import HowItWorks from '../component/HowItWorks'
import Testimonials from '../component/Testimonials'
import CallToAction from '../component/CallToAction'
import GetInTouch from '../component/GetInTouch'
import Branding from '../component/Branding'
import Faq from '../component/Faq'
import Footer from '../component/Footer'



const Home = () => {
  return (
    <>
      {/* <Branding /> */}
      <HomeHero />
      <About />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <GetInTouch />
      <Faq />
      <Footer />
    </>
  )
}

export default Home