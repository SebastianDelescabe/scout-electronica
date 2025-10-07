import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../assets/images/scout-simbol.png";
import { MdPhone, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { NavHashLink } from 'react-router-hash-link';

export const Drawer = ({ menuData }) => {
  const [state, setState] = useState({ right: false });
  const [openSubmenu, setOpenSubmenu] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setState({ ...state, [anchor]: open });
  };

  const handleClickSubMenu = () => setOpenSubmenu(!openSubmenu);

  return (
    <div className="div-drawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            style={{ fontSize: "large", cursor: "pointer", color: "#4c4c4c" }}
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="div-drawer-contain">
              <div className="div-container-menu-mobile">
                <div className="icon-close">
                  <IconButton
                    onClick={toggleDrawer(anchor, false)}
                    style={{ fontSize: "large", cursor: "pointer", color: "black" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>

                {/* Menú EQUIPOS con subcategorías */}
                <div onClick={handleClickSubMenu} className="products__title-menu">
                  <span>EQUIPOS</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: openSubmenu ? "rotate(180deg)" : "unset",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>

                {openSubmenu && (
                  <ul className="scout-menu-mobile">
                    {menuData.map((category) => (
                      <li key={category.category}>
                        <span className="submenu-category-mobile">{category.category}</span>
                        <ul className="submenu-items-mobile">
                          {category.items.map((item) => (
                            <li key={item.id}>
                              <a href={item.seo_name}>{item.title}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    <li className="menu-mobile-descarga">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/u/0/uc?id=1J4gnNZKP_-USQcEtoSnMyURBn9C6rlvz&export=download"
                      >
                        Descargar catálogo
                      </a>
                    </li>
                  </ul>
                )}

                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/service#top">
                  SERVICIO TÉCNICO
                </NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/conocenos#top">
                  CONOCENOS
                </NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/#clients">
                  CLIENTES
                </NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/contact#top">
                  CONTACTO
                </NavHashLink>

                <img className="simbol-scout" src={Logo} alt="logo-responsive" />

                <div className="contact-mobile-menu">
                  <div>
                    <MdPhone className='footer__icons' />
                    <p>(+54) 1169465607</p>
                  </div>
                  <div>
                    <MdEmail className='footer__icons' />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <a className='footer__other-mail' href="mailto:scoutelectronica@gmail.com">
                        scoutelectronica@gmail.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <MdOutlineLocationOn className='footer__icons' />
                    <p>Buenos Aires, Villa Ballester</p>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
