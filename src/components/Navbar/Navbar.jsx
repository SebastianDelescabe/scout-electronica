import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo-nav.png'
import { Drawer } from './Drawer'

export const Navbar = () => {
  return (
    <div className='container-nav'>
      <div className='container-elements-nav'>
        <div>
          <img className='img-logo' src={Logo} alt="logo" />
        </div>
        <div className='container-titles-nav'>
          <a href="/">PRODUCTOS</a>
          <a href="/">SERVICIO TÉCNCIO</a>
          <a href="/">NOSOTROS</a>
          <a href="/">CLIENTES</a>
          <a href="/">CONTACTO</a>
        </div>
        <div className='container-drawer-nav'>
        <Drawer/>
        </div>
      </div>
    </div>
  )
}


