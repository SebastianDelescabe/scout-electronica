import React from 'react'
import whatsapp from '../../assets/images/whatsapp.png'
import './WhatsappIcon.css'

export const WhatsappIcon = () => {

    return (
        <div className='whatsappIcon'>
            <a
                href="https://api.whatsapp.com/send?phone=541138121029&text=Hola%2C%20me%20gustar%C3%ADa%20consultar"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src={whatsapp} alt="whatsap" />
            </a>
        </div>
    )
}