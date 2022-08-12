import React, { useEffect } from 'react';
import { ClientsBanner } from './ClientsBanner';
import { clients } from '../../assets/data/clientsData'
import laurel1 from '../../assets/laurel1.png'
import laurel2 from '../../assets/laurel2.png'
import Aos from 'aos'
import { v4 as uuidv4 } from 'uuid';
import './Clients.css';

export const Clients = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id="clients" className='clients'>
            <ClientsBanner />
            <div className='clients-container'>
                <div className='clients-laurel'>
                    <img src={laurel1} alt='laurel1' />
                </div>
                <div data-aos="fade-right" className='clients-images'>
                    {clients && clients.map(image => (
                        <img key={uuidv4()} src={image} alt="clientsimage" />
                    ))}
                </div>
                <div className='clients-laurel'>
                    <img src={laurel2} alt='laurel2' />
                </div>
            </div>
        </div>
    )
}
