import React from "react";
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
          <p className="title-cal-products">Linea de Producción</p>
          <LineaProduccion />
        </div>
      </div>
      <div className='products-button'>
        <button type='submit' className="app__button">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <a href='https://drive.google.com/u/0/uc?id=1J4gnNZKP_-USQcEtoSnMyURBn9C6rlvz&export=download' target="blank" className="button-text" >Catálogo PDF</a>
        </button>
      </div>
    </div>
  );
};
