import React from 'react';
import './Clients.css';
import fotoHome1 from '../../assets/fotoHome1.jpg'
import fotoHome2 from '../../assets/fotoHome2.jpg'
import fotoHome3 from '../../assets/fotoHome3.jpg'

export const Clients = () => {
    return (
        <div className='clients' id="clients">
            <div className='clients-text'>
                <span className='clients-title'>Clientes</span>
                {/* <h2>Confían en nosotros en nosotros</h2> */}
            </div>
            <div className='clients-images'>
                <img src={fotoHome1} alt="" />
                <img src={fotoHome2} alt="" />
                <img src={fotoHome3} alt="" />
                <img src={fotoHome1} alt="" />
                <img src={fotoHome2} alt="" />
                <img src={fotoHome3} alt="" />
                <img src={fotoHome1} alt="" />
                <img src={fotoHome2} alt="" />
            </div>
        </div>
    )
}
