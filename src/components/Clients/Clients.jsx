import React from 'react';
import { clients } from '../../assets/data/clientsData'
import './Clients.css';

export const Clients = () => {
    return (
        <div className='clients' id="clients">
            <div className='clients-banner'>
                <span>20 años de experiencia en el mercado </span>
            </div>
            <div className='clients-images'>
                {clients && clients.map((image) => (
                    <img src={image} alt="" />
                ))}
            </div>
        </div>
    )
}
