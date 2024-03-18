import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo1-nav.png";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../customHooks/useScrollPosition";
import products from "../../assets/data/productData";
import { NavHashLink } from 'react-router-hash-link'; //NavHashlink te lleva al id, Hash link te lleva a la ruta

export const Navbar = () => {

  const scrollPosition = useScrollPosition();

  return (
    <div className={scrollPosition > 10 ? 'container-nav-scroll' : 'container-nav'}>
      <div className="container-elements-nav">
        <div>
          <Link to={"/"}>
            <img className="img-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="container-titles-nav">
            <span className="hover-underline-animation products-menu" href="#">EQUIPOS
            <ul className="scout-menu">
            {
              products && products.map(product => (
                <li key={product.id}>
                  <a href={product.id}>{product.title}</a>
                </li>
              ))
            }
            <li>
              <a target="new_blanc" href="https://drive.google.com/u/0/uc?id=1J4gnNZKP_-USQcEtoSnMyURBn9C6rlvz&export=download">Descargar catálogo</a>
            </li>
            </ul>
            </span>
          <NavHashLink className="hover-underline-animation" to="/service#top">SERVICIO TÉCNCIO</NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/conocenos#top">CONOCENOS</NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/#clients">CLIENTES</NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/contact#top">CONTACTO</NavHashLink>
        </div>
        <div className="container-drawer-nav">
          <Drawer />
        </div>
      </div>
    </div >
  );
};
