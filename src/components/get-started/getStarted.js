import React from 'react'
import './getStarted.css'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function GetStarted() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn.value)
  return (
    <div className='getStartedContainer'> 
      <h1>Ready to feel the power of AI?</h1>
      <Link to= {isLoggedIn ? '/register' : '/login'}>
      <Button text='Get Started' width='500px' height='100px' />
      </Link>
    </div>
  )
}
