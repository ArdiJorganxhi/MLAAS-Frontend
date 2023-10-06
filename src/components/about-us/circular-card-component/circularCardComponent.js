import React from 'react'
import './circularCardComponent.css'

export default function CircularCardComponent(props) {
  return (
    <div className='card-container'>
    <div className='icon-container'>
      <span className='icon'>{props.icon}</span>
  
    </div>
    <span className='text'>{props.text}</span>
    </div>
  )
}
