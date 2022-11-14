import React, { useState } from "react";
import products from "../../assets/data/productData";
import { v4 as uuidv4 } from 'uuid';
import { NavHashLink } from 'react-router-hash-link'; //NavHashlink te lleva al id, Hash link te lleva a la ruta
import "./Productos.css";


const productosFavoritos = products.filter(producto => producto.fav);
const productos = products.filter(producto => !producto.fav);

export const LineaProduccion = () => {

  const [openDest, setOpenDest] = useState(true)
  const [openAll, setOpenAll] = useState(false)

  return (
    <div>
      <p className="title-cal-products" onClick={() => setOpenDest(!openDest)}>Equipos <strong>Destacados</strong></p>
      <div className="productos-destacados">
        {
          openDest &&
          productosFavoritos && productosFavoritos.map(producto => (
            <div className="productos-destacados-container fadeIn">
              <NavHashLink className="product-ref" to='/contact#form'>
                <span>{producto.title}<strong>SCOUT</strong></span>
                <img src={producto.image} alt="" />
                <ul>{producto.descriptionItems.map(item => <li>{item}</li>)}</ul>
                <button>Cotizar ahora</button>
              </NavHashLink>
            </div>
          ))
        }
      </div>
      <p className="title-cal-products" onClick={() => setOpenAll(!openAll)}>Todos los <strong>Equipos</strong></p>
      {
        openAll &&
        <div className="productos">
          {
            productos && productos.map(producto => (
              <div className="productos-container fadeIn">
                <NavHashLink className="product-ref" to='/contact#form'>
                  <span>{producto.title}<strong>SCOUT</strong></span>
                  <img src={producto.image} alt="" />
                  <ul>{producto.descriptionItems.map(item => <li>{item}</li>)}</ul>
                  <button>Cotizar ahora</button>
                </NavHashLink>

              </div>
            ))
          }
        </div>
      }
    </div>
  );
};
