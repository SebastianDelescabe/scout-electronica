import React from 'react';
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdHouse } from "react-icons/md";

export const ContactInfo = () => {
    return (
        <div className='contact-info'>
            <div className='contact-info__container'>
                <MdEmail className='contact-info__icon' />
                <div className='contact-info__data-position'>
                    <span>Email</span>
                    <a href={`mailto:scoutelectronica@gmail.com`} > scoutelectronica@gmail.com</a>
                </div>
            </div>
            <div className='contact-info__container'>
                <MdPhone className='contact-info__icon' />
                <div className='contact-info__data-position'>
                    <span>Teléfono</span>
                    <span>(+54) 7527-9718</span>
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
    )
}
