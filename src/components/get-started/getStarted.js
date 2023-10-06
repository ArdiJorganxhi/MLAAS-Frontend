import React from 'react'
import './getStarted.css'
import Button from '../button/button'
import { Link } from 'react-router-dom'

export default function GetStarted() {
  return (
    <div className='getStartedContainer'> 
      <h1>Ready to feel the power of AI?</h1>
      <Link to='/register'>
      <Button text='Get Started' width='500px' height='100px' />
      </Link>
    </div>
  )
}
