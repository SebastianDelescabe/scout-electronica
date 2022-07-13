import React from 'react';
import './Home.css';

export const HomeCard = ({ data }) => {
    return (
        <div className='homeCard'>
            <div className='homeCard__items'>
                <div className="homeCard__container">
                    <span>{data.title}</span>
                    <button>{data.button}</button>
                </div>
                <div className='homeCard__image'>
                    <img src={data.image} alt="homeCard__image" />
                </div>
                <button className='homeCard__button-responsive'>{data.button}</button>
            </div>
        </div>
    )
}
