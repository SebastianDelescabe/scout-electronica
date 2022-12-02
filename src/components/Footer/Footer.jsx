import React from 'react';
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import logo from '../../assets/images/logo1-nav.png'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className="footer__logo-responsive">
                    <img src={logo} alt="" />
                    <span>Nuestros objetivos son los mismos que los suyos.</span>
                </div>

                <div className="footer__contact">
                    <span>Contactanos</span>
                    <div>
                        <MdPhone className='footer__icons' />
                        <p>(+54) 7527-9718</p>
                    </div>
                    <div>
                        <MdEmail className='footer__icons' />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <a href={`mailto:scout@scout.com.ar`} >scout@scout.com.ar</a>
                            <a className='footer__other-mail' href={`mailto:scoutelectronica@gmail.com`} > scoutelectronica@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <MdHouse className='footer__icons' />
                        <p>Buenos Aires, Villa ballester</p>
                    </div>
                </div>
                <div className="footer__logo">
                    <img src={logo} alt="logo" />
                    <span>Nuestros objetivos son los mismos que los suyos.</span>
                </div>
                <div className='footer__info'>
                    <span>Horarios de atención</span>
                    <p>Lunes a viernes</p>
                    <p>08:00 am 18:00 pm</p>
                    <div />
                    <p>Sábados</p>
                    <p>08:00 am 13:00 pm</p>
                </div>
            </div>
        </div >
    )
}
