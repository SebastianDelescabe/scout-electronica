import React from 'react';
import clientBanner1 from '../../assets/clientBanner1.png';
import clientBanner2 from '../../assets/clientBanner2.png';
import clientBanner3 from '../../assets/clientBanner3.png';
import clientBanner4 from '../../assets/clientBanner4.png';
import './Clients.css'

export const ClientsBanner = () => {
    return (
        <div className='clients-banner'>
            <span>Diferenciales <strong> SCOUT</strong></span>
            <div className='clients-banner-data'>
                <div>
                    <img src={clientBanner1} alt="" />
                    <p>Respuesta inmediata a consultas</p>
                </div>
                <div>
                    <img src={clientBanner2} alt="" />
                    <p>Servicio post venta y distribución</p>

                </div>
                <div>
                    <img src={clientBanner3} alt="" />
                    <p>Comunicacion directa con nuestros clientes</p>

                </div>
                <div>
                    <img src={clientBanner4} alt="" />
                    <p>Asesoria técnica de calidad</p>
                </div>
            </div>
        </div>

    )
}
