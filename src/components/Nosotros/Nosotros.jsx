import React from "react";
import "./Nosotros.css";

export const Nosotros = () => {
  return (
    <div className="container-nosotros">
      <div className="container-elements-nosotros">
        <p className="title-contact">NOSOTROS</p>
        <div className="bg-nosotros">
        <div className="bg-black">
          <p className="experience-title-nosotros">
            15 años de experiencia te garantizan nuestra calidad y compromiso
          </p>
          <div>
            <p className="quines-title-nosotros">¿Quiénes somos?</p>
            <p className="text-nosotros">
              Nuestro equipo está formado por un grupo de personas con una vasta experiencia en
              forma individual atendiendo las necesidades de laboratorios
              medicinales y afines. Hoy formamos un grupo técnicamente
              homogéneo, comprometido en cada detalle de la atención al cliente.
              Esto nos lleva a la fabricación de máquinas con un alto índice de
              confiabilidad, plazos de entrega reales, costos competitivos y
              servicio técnico de pronta respuesta.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
