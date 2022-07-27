import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import './WhatsappIcon.css'

export const WhatsappIcon = () => {

    return (
        <div className='whatsappIcon'>
            <a href='https://api.whatsapp.com/send?phone=541169465607' target="blank">
                <img src={whatsapp} alt="whatsap" />
            </a>
        </div>
    )
}