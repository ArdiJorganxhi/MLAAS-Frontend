import React from 'react'
import HeroSection from '../../components/hero-section/heroSection'
import AboutUs from '../../components/about-us/aboutUs'
import GetStarted from '../../components/get-started/getStarted'

export default function Home() {
  return (
    <div>
    <HeroSection />
    <AboutUs />
    <GetStarted />
    </div>
  )
}
