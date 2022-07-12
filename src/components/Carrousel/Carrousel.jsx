import React from "react";
import { Home } from "../Home/Home";
import { homeData } from "../../assets/data/homeData";
import "./Carrousel.css";

//Carrousel imports
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Nosotros } from "../Nosotros/Nosotros";

export const Carrousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper"
      >
        {homeData &&
          homeData.map((data) => (
            <SwiperSlide>
              <Home data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Nosotros />
    </>
  );
};
