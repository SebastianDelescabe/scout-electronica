import React from 'react';
import { destacadosData } from '../../assets/data/destacadosData';
import { NavHashLink } from 'react-router-hash-link';
import './Destacados.css';


export const Destacados = () => {
    return (
        <div className='destacados-items' id='destacados'>
            <h3>EQUIPOS <strong>DESTACADOS</strong></h3>
            <div className='destacados-container'>
            {
                destacadosData.map(productoDestacado => (
                <NavHashLink className="button-text" to={productoDestacado.id}>
                    <div className='destacados-item'>
                        <img src={productoDestacado.image} />
                        <span>{productoDestacado.nombre}</span>
                        <NavHashLink className="button-text" to={productoDestacado.id}>{productoDestacado.button}</NavHashLink>
                    </div>
                </NavHashLink>
                ))
            }
            </div>
        </div>
    )
}
