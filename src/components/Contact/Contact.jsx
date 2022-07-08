import React from 'react'
import './Contact.css'
import { MapContact } from './MapContact'

export const Contact = () => {
  return (
    <div className='container-contact'>
        <div className='container-elements-contact'>
            <p className='title-contact'>CONTACTO</p>
            <div className='container-map-contact'>
                <MapContact/>
            </div>
            <div className='container-form-info-contact'>
                <div className='container-form-contact'></div>
                <div className='container-info-contact'></div>
            </div>
        </div>
    </div>
  )
}
