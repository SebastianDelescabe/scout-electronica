import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo-nav.png";
import { Drawer } from "./Drawer";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container-nav">
      <div className="container-elements-nav">
        <div>
          <img className="img-logo" src={Logo} alt="logo" />
        </div>
        <div className="container-titles-nav">
          <>
            <p
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              PRODUCTOS
            </p>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              disableScrollLock
            >
              <MenuItem onClick={handleClose}><Link to={'/ss'}>Hola</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to={'/ss'}>Hola</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to={'/ss'}>Hola</Link></MenuItem>
            </Menu>
          </>
          <a href="/">SERVICIO TÉCNCIO</a>
          <a href="/">NOSOTROS</a>
          <a href="/">CLIENTES</a>
          <a href="/contact">CONTACTO</a>
        </div>
        <div className="container-drawer-nav">
          <Drawer />
        </div>
      </div>
    </div>
  );
};
