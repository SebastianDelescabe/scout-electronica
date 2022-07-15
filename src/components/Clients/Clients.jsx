import React from 'react';
import { clients } from '../../assets/data/clientsData'
import './Clients.css';

export const Clients = () => {
    return (
        <div className='clients' id="clients">
            <div className='title-client'>
                <p>CLIENTES</p>
            </div>
            <div className='clients-banner'>
                <span> Damos solución a los requerimientos de nuestros clientes</span>
            </div>
            <div className='clients-images'>
                {clients && clients.map((image) => (
                    <img src={image} alt="clientsimage" />
                ))}
            </div>
        </div>
    )
}
