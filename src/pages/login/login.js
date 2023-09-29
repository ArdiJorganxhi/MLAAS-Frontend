import React from 'react'
import './login.css'
import FormInput from '../../components/form-input/formInput'
import Button from '../../components/button/button'
import { LoginRequest } from '../../models/requests/LoginRequest'

function Login() {
  const {loginValues, handleChange} = LoginRequest();
  return (
    <div className='login-card'>
    <form className='login-form'>
      <FormInput type='text' placeholder="Enter your email"  name='email' value={loginValues.email} onChange={handleChange} />
      <FormInput type='password' placeholder="Enter your password" name='password' value={loginValues.password} onChange={handleChange} />
      <Button text="Login" className='register-button' />
    </form>
    </div>
  )
}

export default Login
