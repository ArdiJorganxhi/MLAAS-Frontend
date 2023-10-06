import React from 'react'
import './heroSection.css'
import Button from '../button/button'

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <h1>We brought AI to your foot.</h1>
      <Button text="Get Started" width="500px" height="100px" />
    </div>
  )
}
