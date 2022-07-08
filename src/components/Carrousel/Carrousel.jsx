import React from 'react';
import { Home } from '../Home/Home';
import './Carrousel.css'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export const Carrousel = () => {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className="swiper"
            modules={[Navigation, Pagination, Autoplay]}
        >
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
        </Swiper>
    );
};