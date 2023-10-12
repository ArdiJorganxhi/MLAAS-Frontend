import React from 'react'

export default function TextRequestInput(props) {
  return (
   <input type='text' name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}></input>
  )
}
