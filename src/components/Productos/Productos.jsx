import React from "react";
import { ControlCalidad } from "./ControlCalidad";
import { LineaProduccion } from "./LineaProduccion";

export const Productos = () => {
  return (
    <div>
      <div className="banner-bg-products">
        <div className="banner-products-bgblack">
          <p className="p-title-products">Nuestros Productos</p>
        </div>
      </div>
      <div className="container-productos">
        <div>
          <p className="title-ind-products">Control de calidad</p>
          <ControlCalidad />
        </div>
        <div>
          <p className="title-cal-products">Linea de Producción</p>
          <LineaProduccion />
        </div>
      </div>
    </div>
  );
};
