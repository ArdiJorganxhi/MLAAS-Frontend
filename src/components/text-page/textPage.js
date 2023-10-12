import React from 'react'
import FormInput from '../form-input/formInput'
import { TextRequest } from '../../models/requests/TextRequest'
import Button from '../button/button'
import './textPage.css'
import TextRequestInput from '../text-request-input/textRequestInput'

export default function TextPage(props) {
  const {handleChange, textValue} = TextRequest()
  return (
    <div className='textPageContainer'>
      <h1 className='textPageTitle'>{props.title}</h1>
      <div className='formInput'>
        <TextRequestInput name={textValue} value={textValue} onChange={handleChange} />
        <Button text='Send' />
      </div>
    </div>
  )
}
