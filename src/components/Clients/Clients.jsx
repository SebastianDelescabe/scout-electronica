import React, { useEffect } from 'react';
import { clients } from '../../assets/data/clientsData'
import { v4 as uuidv4 } from 'uuid';
import laurel1 from '../../assets/laurel1.png'
import laurel2 from '../../assets/laurel2.png'
import Aos from 'aos'
import './Clients.css';

export const Clients = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id="clients" className='clients'>
            <div className='container-title-clients'>
                <p className='title-client'>CLIENTES</p>
            </div>
            <div className="clients-background">
                <div className='clients-banner'>
                    <div className='bg-glass-clients'>
                        <span> Damos solución a los requerimientos de nuestros clientes</span>
                    </div>
                </div>
            </div>
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
