import React from 'react';
import { ClientsBanner } from './ClientsBanner';
import { clients } from '../../assets/data/clientsData'
import {ClientsCards} from './ClientsCards';
import './Clients.css';
export const Clients = () => {

    return (
        <div className='clients'>
            <ClientsCards/>
            <ClientsBanner />
            <div className='clients-container' id="clients" >
                <div className='clients-images'>
                    {clients && clients.map(image => (
                        <img key={image} src={image} alt="clientsimage" />
                    ))}
                </div>
            </div>
        </div>
    )
}
