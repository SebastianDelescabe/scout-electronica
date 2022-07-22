import React from 'react';
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import whatsappIcon from '../../assets/whatsapp.png'
import logo from '../../assets/logo1-nav.png'

import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className="footer__contact">
                    <h3>Contactanos</h3>
                    <div>
                        <MdPhone className='footer__icons' />
                        <p>(+54) 4720-5603</p>
                    </div>
                    <div>
                        <MdEmail className='footer__icons' />
                        <a href={`mailto:scout@scout.com.ar`} >scout@scout.com.ar</a>
                    </div>
                    <div>
                        <MdHouse className='footer__icons' />
                        <p>Buenos Aires, Villa ballester</p>
                    </div>
                </div>
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <h3>Nuestros objetivos son los mismos que los suyos.</h3>
                    {/* <div className='whatsapp-button'>
                        <a href="https://api.whatsapp.com/send?phone=+1132969054" target="_blank">
                            <img src={whatsappIcon} alt='whatsapp' className='whatsapp-icon' />
                        </a>
                    </div> */}
                </div>

                <div className='footer__info'>
                    <h3>Horarios de atención</h3>
                    <p>Lunes a viernes</p>
                    <p>08:00 am 18:00 pm</p>
                    <p>Sábados</p>
                    <p>08:00 am 13:00 pm</p>
                </div>

            </div>
        </div >
    )
}
