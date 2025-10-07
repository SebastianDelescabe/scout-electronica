import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo1-nav.png";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../customHooks/useScrollPosition";
import { navItems } from "../../assets/data/navData";
import { NavHashLink } from 'react-router-hash-link';

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
          <span className="hover-underline-animation products-menu" href="#">
            EQUIPOS
            <ul className="scout-menu">
              {navItems.map((category) => (
                <li key={category.category} className="submenu-category">
                  {category.category}
                  <ul className="submenu-items">
                    {category.items.map((item) => (
                      <li key={item.id}>
                        <a href={item.seo_name}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1wk4QVLYoafvb8KECOv-sR8M0rGecYuif/view?usp=drive_link"
                >
                  Descargar catálogo
                </a>
              </li>
            </ul>
          </span>

          <NavHashLink className="hover-underline-animation" to="/service#top">
            SERVICIO TÉCNICO
          </NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/conocenos#top">
            CONOCENOS
          </NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/#clients">
            CLIENTES
          </NavHashLink>
          <NavHashLink className="hover-underline-animation" to="/contact#top">
            CONTACTO
          </NavHashLink>
        </div>

        <div className="container-drawer-nav">
          <Drawer menuData={navItems} />
        </div>
      </div>
    </div>
  );
};
