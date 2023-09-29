import React from 'react'
import './formInput.css'

function FormInput(props) {
  return (
    <div>
    <input type={props.type} className='form-input' name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}  />
    </div>
  )
}

export default FormInput