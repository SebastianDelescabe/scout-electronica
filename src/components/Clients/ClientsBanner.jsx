import React,{useEffect} from "react";
import clientBanner1 from '../../assets/images/clientBanner1.png';
import clientBanner2 from '../../assets/images/clientBanner2.png';
import clientBanner3 from '../../assets/images/clientBanner3.png';
import clientBanner4 from '../../assets/images/clientBanner4.png';
import clientBanner5 from '../../assets/images/clientBanner5.png';
import clientBanner6 from '../../assets/images/clientBanner6.png';
import Aos from 'aos'
import './Clients.css'

export const ClientsBanner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='clients-banner' id="clients" >
            <span>Diferenciales <strong> SCOUT</strong></span>
            <div className='clients-banner-data' data-aos="fade-right">
                <div>
                    <img src={clientBanner1} alt="" />
                    <p>Soporte técnico directo del fabricante</p>
                </div>
                <div>
                    <img src={clientBanner2} alt="" />
                    <p>⁠Entrega rápida en todo el país.</p>
                </div>
                <div>
                    <img src={clientBanner4} alt="" />
                    <p>Personalización según las necesidades del cliente.</p>
                </div>
                <div>
                    <img src={clientBanner6} alt="" />
                    <p>Precios competitivos frente a equipos importados.</p>
                </div>
                <div>
                    <img src={clientBanner3} alt="" />
                    <p>⁠Garantía local y servicio postventa confiable.</p>
                </div>
                <div>
                    <img src={clientBanner5} alt="" />
                    <p>Confianza de laboratorios líderes</p>
                </div>
            </div>
        </div>

    )
}
