import React from 'react';
import { HomeCard } from './HomeCard';
import { homeData } from '../../assets/data/homeData'
import './Home.css'

//Carrousel imports
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export const Home = () => {
    return (
        <div className='home'>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                //navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="swiper"
            >
                {
                    homeData && homeData.map(data => (
                        <SwiperSlide>
                            <HomeCard data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};