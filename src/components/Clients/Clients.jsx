import React from 'react';
import { clients } from '../../assets/data/clientsData'
import './Clients.css';

export const Clients = () => {
    return (
        <div className='clients' id="clients">
            <div className='clients-text'>
                <span className='clients-title'>Clientes</span>
                {/* <h2>Confían en nosotros en nosotros</h2> */}
            </div>
            <div className='clients-images'>
                {clients && clients.map((image) => (
                    <img src={image} alt="" />
                ))}
            </div>
        </div>
    )
}
