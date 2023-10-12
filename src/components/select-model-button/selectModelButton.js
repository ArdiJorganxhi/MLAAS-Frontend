import React from 'react'
import './selectModelButton.css'

export default function SelectModelButton(props) {
  return (
      <button className='selectModelButton' onClick={props.onClick}>
        <div className='buttonContent'>
        <i className='buttonIcon'>{props.icon}</i>
        <span className='buttonText'>{props.text}</span>
        </div>
      </button>
  )
}
