import React from 'react'
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className='error'>
            <div>No se encontro la página</div>
            <Link to='/'>
                <button>Volver</button>
            </Link>
        </div>
    )
}
