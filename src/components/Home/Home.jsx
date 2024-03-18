import React, { useEffect, useState } from 'react';
import { HomeCard } from './HomeCard';
import { Clients } from '../Clients/Clients';
import { homeData } from '../../assets/data/homeData';
import './Home.css';

//Carrousel imports
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export const Home = () => {
    const [isPhone, setIsPhone] = useState(
        window.innerWidth < 900 ? true : false
    )

    const handleResize = () => {
        if (window.innerWidth < 900) setIsPhone(true)
        else setIsPhone(false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <div className='home' id='home'>
            <div className='home__banners'>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                navigation={isPhone ? false : true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="swiper"
            >
                {
                    homeData && homeData.map(data => (
                        <SwiperSlide key={data.id}>
                            <HomeCard data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
            <Clients />
        </div>
    );
};
