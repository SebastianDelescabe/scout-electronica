import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';
import Logo from "../../assets/images/scout-simbol.png";

import { NavHashLink } from 'react-router-hash-link'; //NavHashlink te lleva al id, Hash link te lleva a la ruta

export const Drawer = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="div-drawer">
      {["right"].map((anchor) => (
        <React.Fragment key={uuidv4()}>
          <IconButton
            anchor={anchor}
            open={state[anchor]}
            onClick={toggleDrawer(anchor, true)}
            style={{
              fontSize: "large",
              cursor: "pointer",
              color: "#4c4c4c",
            }}
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
                    anchor={anchor}
                    open={state[anchor]}
                    onClick={toggleDrawer(anchor, false)}
                    style={{
                      fontSize: "large",
                      cursor: "pointer",
                      color: "black"
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/productos#top">PRODUCTOS</NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/service#top">SERVICIO TÉCNCIO</NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/#nosotros">NOSOTROS</NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/#clients">CLIENTES</NavHashLink>
                <NavHashLink onClick={toggleDrawer(anchor, false)} to="/contact#top">CONTACTO</NavHashLink>
                <img className="simbol-scout" src={Logo} alt="logo-responsive" />
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
