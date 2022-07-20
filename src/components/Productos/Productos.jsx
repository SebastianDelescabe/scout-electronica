import React from "react";
import { ControlCalidad } from "./ControlCalidad";
import { LineaProduccion } from "./LineaProduccion";

export const Productos = () => {
  return (
    <div className="container-productos">
      <p className="title-productos">PRODUCTOS</p>
      <div>
        <p className="title-ind-products">Control de calidad</p>
        <ControlCalidad />
      </div>
      <div>
        <p className="title-cal-products">Linea de Producción</p>
        <LineaProduccion />
      </div>
    </div>
  );
};
