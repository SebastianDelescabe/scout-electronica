import React from 'react'
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className='error'>
            <div>NO SE ENCONTRO LA PAGINA</div>
            <Link to='/'>
                <button>Volver</button>
            </Link>
        </div>
    )
}
