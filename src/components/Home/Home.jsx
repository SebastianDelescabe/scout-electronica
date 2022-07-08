import React from 'react';
import './Home.css';
import fotoHome from '../../assets/fotoHome.png';

export const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home__items'>
                    <div className="home__title">
                        <span>Inovacion y calidad para productos en latinoamerica</span>
                        <button>Conocenos</button>
                    </div>
                    <div className='home__image'>
                        <img src={fotoHome} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
