import React from 'react';
import { ContactForm } from './ContactForm';
import { MapContact } from './MapContact';
import { ContactInfo } from './ContactInfo';
import './Contact.css';

export const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='container-elements-contact'>
        <p className='title-contact'>CONTACTO</p>
        <div className='container-map-contact'>
          <MapContact />
        </div>
        <div className='container-form-info-contact'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
