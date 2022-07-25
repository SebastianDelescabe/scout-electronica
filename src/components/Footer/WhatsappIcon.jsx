import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import './WhatsappIcon.css'

export const WhatsappIcon = () => {

    return (
        <div className='whatsappIcon'>
            <a href='#top'>
                <img src={whatsapp} alt="whatsap" />
            </a>
        </div>
    )
}