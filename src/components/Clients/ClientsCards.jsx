import React from 'react'
import Compromiso from "../../assets/images/deal.png"
import Watch from "../../assets/images/stopwatch.png"
import Team from "../../assets/images/teamManagement.png"

export const ClientsCards = () => {
  return (
    <>
       <div className="container-nosotros">
        <div className="container-elements-nosotros">
            <div className="cotnainer-pq-serv-nosotros">
              <div className="container-serv-nosotros">
                <p className="title-serv-card">COMPROMISO</p>
                <img className="img-serv-card" src={Compromiso} alt="deal" />
                <p className="text-serv-card">
                  Comprometidos en la fabricación de equipos con un alto índice
                  de confiabilidad.
                </p>
              </div>
              <div className="container-serv-nosotros">
                <p className="title-serv-card">TIEMPO</p>
                <img className="img-serv-card" src={Watch} alt="watch" />
                <p className="text-serv-card">
                Plazos de entrega reales y confiables con costos competitivos en base al mercado.
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
    </>
  )
}