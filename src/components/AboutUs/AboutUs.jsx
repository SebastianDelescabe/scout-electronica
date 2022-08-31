import React from "react";
import { AboutUsSwiper } from "./AboutUsSwiper";
import Compromiso from "../../assets/images/deal.png"
import Watch from "../../assets/images/stopwatch.png"
import Team from "../../assets/images/teamManagement.png"
import "./AboutUs.css";

export const AboutUs = () => {

  return (
    <div className="nosotros">
      <div className="bg-nosotros" id="nosotros">
        <div className="bg-black">
          <p className="experience-title-nosotros">
            20 años de experiencia te garantizan nuestra calidad y compromiso
          </p>
          <div>
            <p className="quines-title-nosotros">¿Quiénes somos?</p>
            <p className="text-nosotros">
              Scout Electronica es una empresa dedicada a ofrecer soluciones
              integrales en el suministro de equipos e insumos para laboratorios
              medicinales o afines.
            </p>
          </div>
        </div>
      </div>
      <AboutUsSwiper />
      <div className='bannerTitle'>
        <div className='bannerTitle__container'>
          <div />
          <span>¿Por qué <b>NOSOTROS?</b></span>
          <div />
        </div>
      </div>
      <div className="container-nosotros">
        <div className="container-elements-nosotros">
          <div data-aos="fade-up">
            <div className="cotnainer-pq-serv-nosotros">
              <div className="container-serv-nosotros">
                <p className="title-serv-card">COMPROMISO</p>
                <img className="img-serv-card" src={Compromiso} alt="deal" />
                <p className="text-serv-card">
                  Comprometidos en la fabricación de máquinas con un alto índice
                  de confiabilidad.
                </p>
              </div>
              <div className="container-serv-nosotros">
                <p className="title-serv-card">TIEMPO</p>
                <img className="img-serv-card" src={Watch} alt="watch" />
                <p className="text-serv-card">
                  Plazos de entrega reales y costos competitivos en base al
                  mercado.
                </p>
              </div>
              <div className="container-serv-nosotros">
                <p className="title-serv-card">SERVICIOS</p>
                <img className="img-serv-card" src={Team} alt="team" />
                <p className="text-serv-card">
                  Servicios confiables en tiempo oportuno para garantizar la
                  satisfacción de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
