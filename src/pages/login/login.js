import React from 'react'
import './login.css'
import FormInput from '../../components/form-input/formInput'
import Button from '../../components/button/button'
import { LoginRequest } from '../../models/requests/LoginRequest'

function Login() {
  const {loginValues, handleChange, handleSubmit} = LoginRequest();
  return (
    <div className='login-page'>
    <h1 className='login-title'>Enter your login information and let's roll!</h1>
    <form className='login-form'>
      <FormInput type='text' placeholder="Enter your email"  name='email' value={loginValues.email} onChange={handleChange} />
      <FormInput type='password' placeholder="Enter your password" name='password' value={loginValues.password} onChange={handleChange} />
      <Button text="Login" className='login-button' onSubmit={handleSubmit} width='300px' />
    </form>
    </div>
  )
}

export default Login
