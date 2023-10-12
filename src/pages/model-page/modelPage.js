import React from 'react'
import SelectModelButton from '../../components/select-model-button/selectModelButton'
import {AiOutlineFileText} from 'react-icons/ai'
import {TbTextRecognition} from 'react-icons/tb'
import {PiTextStrikethroughBold} from 'react-icons/pi'
import {RiVoiceRecognitionFill} from 'react-icons/ri'
import {MdSpatialAudioOff} from 'react-icons/md'
import {GiMultipleTargets} from 'react-icons/gi'
import {FaRegObjectGroup} from 'react-icons/fa'
import './modelPage.css'

export default function ModelPage() {
  return (
    <div className='modelPageContainer'>
    <h1 className='modelPageTitle'>Select a model to get started?</h1>
    <div className='modelSection'>
    <h3 className='modelPageText'>Text</h3>
    <div className='modelExamples'>
    <SelectModelButton text='Text Generation' icon={<AiOutlineFileText />} /> 
    <SelectModelButton text='Text Summarization' icon={<PiTextStrikethroughBold />} /> 
    <SelectModelButton text='Text Classification' icon={<TbTextRecognition />} /> 
    </div>
    </div>


    <div className='modelSection'>
    <h3 className='modelPageText'>Audio</h3>
    <div className='modelExamples'>
    <SelectModelButton text='Audio Classification' icon={<RiVoiceRecognitionFill />} /> 
    <SelectModelButton text='Speech Recognition' icon={<MdSpatialAudioOff />} /> 
    </div>
     </div>

     <div className='modelSection'>
    <h3 className='modelPageText'>Image</h3>
    <div className='modelExamples'>
    <SelectModelButton text='Image Classification' icon={<GiMultipleTargets />} /> 
    <SelectModelButton text='Object Detection' icon={<FaRegObjectGroup />} /> 
    </div>
     </div>

  
    </div>
  )
}
