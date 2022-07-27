import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
        <React.Fragment key={anchor}>
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
                <NavHashLink to="/productos">PRODUCTOS</NavHashLink>
                <NavHashLink to="/service">SERVICIO TÉCNCIO</NavHashLink>
                <NavHashLink to="/#nosotros">NOSOTROS</NavHashLink>
                <NavHashLink to="/#clients">CLIENTES</NavHashLink>
                <NavHashLink to="/contact">CONTACTO</NavHashLink>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
