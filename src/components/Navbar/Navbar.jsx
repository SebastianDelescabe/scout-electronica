import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo-nav.png";
import { Drawer } from "./Drawer";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../customHooks/useScrollPosition";

export const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={scrollPosition > 10 ? 'container-nav-scroll' : 'container-nav'}>
      <div className="container-elements-nav">
        <div>
          <Link to={"/"}>
            <img className="img-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="container-titles-nav">
          <>
            <p
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="hover-underline-animation"
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
              <MenuItem onClick={handleClose}>
                <Link to={"/ss"}>Control de calidad</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/ss"}>Line Producción</Link>
              </MenuItem>
            </Menu>
          </>
          <a className="hover-underline-animation" href="/">SERVICIO TÉCNCIO</a>
          <a className="hover-underline-animation" href="#nosotros">NOSOTROS</a>
          <a className="hover-underline-animation" href="/">CLIENTES</a>
          <a className="hover-underline-animation" href="/contact">CONTACTO</a>
        </div>
        <div className="container-drawer-nav">
          <Drawer />
        </div>
      </div>
    </div>
  );
};
