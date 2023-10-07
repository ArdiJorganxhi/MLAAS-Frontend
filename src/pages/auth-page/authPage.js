import React from 'react'
import Button from '../../components/button/button'
import './authPage.css'

export default function AuthPage() {
  return (
    <div className='authPageContainer'>
      <h1>First, let's give you access to our platform!</h1>
      <div className='authPageButtonContainer'>
      <Button text='Register' width='500px' height='100px' />
      <Button text='Login' width='500px' height='100px' />
      </div>
    </div>
  )
}
