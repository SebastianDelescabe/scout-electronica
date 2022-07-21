import React from 'react';
import './Service.css';
import { serviceData } from '../../assets/data/serviceData';

export const Service = () => {
    return (
        <div className='service'>
            <div className='service-container'>
                <div className='service-title'>
                    <p>SERVICIO TÉCNICO</p>
                </div>
                {
                    serviceData && serviceData.map(service => (
                        <div className='service__item'>
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
            </div>
        </div>
    )
}
