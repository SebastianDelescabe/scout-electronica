import React, { useState } from "react";
import products from "../../assets/data/productData";
import { v4 as uuidv4 } from 'uuid';
import "./Productos.css";

const productosFavoritos = products.filter(producto => producto.fav);
const productos = products.filter(producto => !producto.fav);

export const LineaProduccion = () => {
  return (
    <div>
      <div className="productos-destacados">
        {
          productosFavoritos && productosFavoritos.map(producto => (
            <div className="productos-destacados-container">
              <span>{producto.title}</span>
              <img src={producto.image} alt="" />
              <ul>{producto.descriptionItems.map(item => <li>{item}</li>)}</ul>
              <button>Cotizar ahora</button>
            </div>
          ))
        }
      </div>
      <p className="title-cal-products">Todos los <strong>Equipos</strong></p>
      <div className="productos">
        {
          productos && productos.map(producto => (
            <div className="productos-container">
              <span>{producto.title}</span>
              <img src={producto.image} alt="" />
              <ul>{producto.descriptionItems.map(item => <li>{item}</li>)}</ul>
              <button>Cotizar ahora</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
