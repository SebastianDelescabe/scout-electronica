import React from 'react';
import './Home.css';

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
                        <span className="button-text">{data.button}</span>
                    </button>
                </div>
                <div className='homeCard__image'>
                    <img src={data.image} alt="homeCard__image" />
                </div>
                <button className='homeCard__button-responsive'>{data.button}</button>
            </div>
        </div>
    )
}
