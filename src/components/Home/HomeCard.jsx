import React from 'react';
import './Home.css';
import { NavHashLink } from 'react-router-hash-link';

export const HomeCard = ({ data }) => {
    return (
        <div className='homeCard'>
            <div className='homeCard__items'>
                <div className="homeCard__container">
                    <span className='homeCard__title'>{data.title}</span>
                    <button className="app__button">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <NavHashLink className="button-text" to={data.id}>{data.button}</NavHashLink>
                    </button>
                </div>
                <div className='homeCard__image'>
                    <img src={data.image} alt="homeCard__image" />
                </div>
                <div className='homeCard__button-responsive'>
                    <button className="app__button">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">{data.button}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
