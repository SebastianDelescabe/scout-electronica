import React,{useEffect} from "react";
import clientBanner1 from '../../assets/images/clientBanner1.png';
import clientBanner2 from '../../assets/images/clientBanner2.png';
import clientBanner3 from '../../assets/images/clientBanner3.png';
import clientBanner4 from '../../assets/images/clientBanner4.png';
import './Clients.css'
import Aos from 'aos'

export const ClientsBanner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='clients-banner'>
            <span>Diferenciales <strong> SCOUT</strong></span>
            <div className='clients-banner-data' data-aos="fade-right">
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
