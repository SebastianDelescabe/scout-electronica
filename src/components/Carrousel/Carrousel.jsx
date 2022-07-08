import React from 'react';
import { Home } from '../Home/Home';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export const Carrousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
        </Swiper>
    );
};