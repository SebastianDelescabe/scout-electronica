import React from 'react';
import { Home } from '../Home/Home';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carrousel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Home /></SwiperSlide>
        </Swiper>
    );
};