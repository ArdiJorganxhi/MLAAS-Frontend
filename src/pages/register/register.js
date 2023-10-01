import React from 'react'
import FormInput from '../../components/form-input/formInput'
import './register.css'
import Button from '../../components/button/button'
import { RegisterRequest } from '../../models/requests/RegisterRequest'

function Register() {
  const {registerValues, handleChange, handleSubmit} = RegisterRequest()
  return (
    <div className='register-card'>
    <form className='register-form'>
      <FormInput placeholder="Enter an username" name='username' value={registerValues.username} onChange={handleChange} />
      <FormInput placeholder="Enter an email" name='email' value={registerValues.email} onChange={handleChange} />
      <FormInput type='password' placeholder="Enter a password" name='password' value={registerValues.password} onChange={handleChange} />
      <Button text="Register" className='register-button' onClick={handleSubmit} />
    </form>
    </div>
  )
}

export default Register
