import React from 'react';
import './Home.css';
import fotoHome from '../../assets/fotoHome.png';
import { products } from '../../assets/productData.js';

console.log(products);
export const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home__image'>
                    <img src={fotoHome} alt="" />
                </div>
                <div className="home__title">
                    <h1>Inovacion y calidad para productos en latinoamerica</h1>
                </div>
            </div>
        </>
    )
}
