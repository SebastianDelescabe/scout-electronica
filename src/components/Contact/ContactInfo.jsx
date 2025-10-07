import React from 'react';
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock } from "react-icons/lu";

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
                    <span>(+54) 1169465607</span>
                </div>
            </div>
            <div className='contact-info__container'>
                <MdOutlineLocationOn className='contact-info__icon' />
                <div className='contact-info__data-position'>
                    <span>Buenos Aires</span>
                    <span>Villa Balester</span>
                    <span>11 de septiembre 6117</span>
                </div>
            </div>
            <div className='contact-info__container'>
                <LuClock className='contact-info__icon' />
                <div className='contact-info__data-position'>
                    <span>Horarios</span>
                    <span>Lunes - viernes</span>
                    <span>08:00 am 18:00 pm</span>
                </div>
            </div>
        </div>
    )
}
