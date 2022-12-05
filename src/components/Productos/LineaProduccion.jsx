import React, { useState, useRef, useContext } from "react";
import products from "../../assets/data/productData";
import { useDraggable } from "react-use-draggable-scroll";
import { NavHashLink } from 'react-router-hash-link'; //NavHashlink te lleva al id, Hash link te lleva a la ruta
import "./Productos.css";
import { ProductContext } from "../../helper/ProductContext";


const productosFavoritos = products.filter(producto => producto.fav);
const productos = products.filter(producto => !producto.fav);

export const LineaProduccion = () => {

  const { setProductTitle } = useContext(ProductContext)

  const ref = useRef();
  const { events } = useDraggable(ref);

  const [openDest, setOpenDest] = useState(true)
  const [openAll, setOpenAll] = useState(false)


  return (
    <div>
      <div className="title-pro">
        <p className="title-cal-products" onClick={() => setOpenDest(!openDest)}>{openDest ? '▼' : '▶'} Equipos <strong>Destacados</strong></p>
      </div>
      <div className="productos-destacados"  {...events}
        ref={ref}>
        {
          openDest &&
          productosFavoritos && productosFavoritos.map(producto => (
            <div onClick={() => setProductTitle(producto.title)} className="productos-destacados-container fadeIn" key={producto.title}>
              <NavHashLink className="product-ref" to='/contact#form' >
                <span>{producto.title}<strong>SCOUT</strong></span>
                <img src={producto.image} alt="" />
                <ul>{producto.descriptionItems.map(item => <li>{item}</li>)}</ul>
                <button>Más información</button>
              </NavHashLink>
            </div>
          ))
        }
      </div>
      <p className="title-cal-products" onClick={() => setOpenAll(!openAll)}>{openAll ? '▼ ' : '▶ '} Todos los <strong>Equipos</strong></p>
      {
        openAll &&
        <div className="productos">
          {
            productos && productos.map(producto => (
              <div onClick={() => setProductTitle(producto.title)} className="productos-container fadeIn" key={producto.title}>
                <NavHashLink className="product-ref" to='/contact#form'>
                  <span>{producto.title}<strong>SCOUT</strong></span>
                  <img src={producto.image} alt="" />
                  <ul>{producto.descriptionItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
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
