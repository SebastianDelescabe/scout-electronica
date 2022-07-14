import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
                <a href="/">PRODUCTOS</a>
                <a href="/">SERVVICIO TÉCNCIO</a>
                <a href="/">NOSOTROS</a>
                <a href="/">CLIENTES</a>
                <a href="/contact">CONTACTO</a>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
