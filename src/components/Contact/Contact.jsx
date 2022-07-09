import React from 'react';
import { ContactForm } from './ContactForm';
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import './Contact.css';

export const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='container-elements-contact'>
        <p className='title-contact'>CONTACTO</p>
        <div className='container-map-contact'>
        </div>
        <div className='container-form-info-contact'>

          <div className='contact-info'>
            <div className='contact-info__container'>
              <MdEmail className='contact-info__icon' />
              <div className='contact-info__data-position'>
                <span>Email</span>
                <span>scout@scout.com.ar</span>
              </div>
            </div>
            <div className='contact-info__container'>
              <MdPhone className='contact-info__icon' />
              <div className='contact-info__data-position'>
                <span>Teléfono</span>
                <span>(+54 )4720-5603</span>
              </div>
            </div>
            <div className='contact-info__container'>
              <MdHouse className='contact-info__icon' />
              <div className='contact-info__data-position'>
                <span>Buenos Aires</span>
                <span>Villa Balester</span>
              </div>
            </div>
          </div>
          <div className='contact-form'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
