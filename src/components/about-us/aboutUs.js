import React from 'react'
import './aboutUs.css'
import CircularCardComponent from './circular-card-component/circularCardComponent'
import {BiUpload} from 'react-icons/bi'
import {FaRobot} from 'react-icons/fa'
import {IoCheckmarkDoneSharp} from 'react-icons/io5'

export default function AboutUs() {
  return (
    <div className='aboutUsContainer'>
    <h1 className='aboutUsTitle'>How it works?</h1>
    <div className='aboutUs'>
    
      <CircularCardComponent icon={<BiUpload />} text='Upload your request!' />
      <CircularCardComponent icon={<FaRobot />} text='Our model will process it!' />
      <CircularCardComponent icon={<IoCheckmarkDoneSharp />} text='Get your response!' />
    </div>
    </div>
  )
}
