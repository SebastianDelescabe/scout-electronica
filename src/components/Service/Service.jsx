import React from 'react';
import './Service.css';
import { serviceData } from '../../assets/data/serviceData';
import { HashLink } from 'react-router-hash-link';
export const Service = () => {
    return (
        <div className='service' id='service'>
            <div className='service-container'>
                <div className="banner-bg-service">
                    <div className="banner-service-bgblack">
                        <p className="p-title-contact">Servicio Técnico</p>
                    </div>
                </div>
                {
                    serviceData && serviceData.map((service) => (
                        <div key={service.title} className='service__item'>
                            <div className='service__item-text'>
                                <h1>{service.title}</h1>
                                <p>{service.text}</p>
                            </div>
                            <div className='service__image'>
                                <img src={service.image} alt="" />
                            </div>
                        </div>
                    ))
                }
                <div className='service-button'>
                    <button type='submit' className="app__button">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <HashLink to='/contact#top' className="button-text" >Contactanos</HashLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
