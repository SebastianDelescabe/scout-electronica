import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo1-nav.png";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../customHooks/useScrollPosition";

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
          <NavHashLink className="hover-underline-animation" to='/productos#top'>EQUIPOS</NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/service#top">SERVICIO TÉCNCIO</NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/conocenos">CONOCENOS</NavHashLink>
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
