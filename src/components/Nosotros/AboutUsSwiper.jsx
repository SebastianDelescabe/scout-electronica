import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import equipo1 from "../../assets/equipo1.jpg";
import equipo2 from "../../assets/equipo2.jpg";
import equipo3 from "../../assets/equipo3.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";

export const AboutUsSwiper = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="slider">
            <div className="slider-container" data-aos="fade-right">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="aboutUs"
                >
                    <SwiperSlide>
                        <img src={equipo1} alt="slide2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={equipo2} alt="slide3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={equipo3} alt="slide1" />
                    </SwiperSlide>
                </Swiper>
                <div className="slider-texto">
                    <div className="slider-text-container">
                        <h1>Scout Electronica</h1>
                        <p>
                            Con años de experiencia en el rubro sanitario, comenzamos a elaborar distintos equipos electrónicos para control de sólidos en laboratorios medicinales importantes de Argentina.
                            Con el paso del tiempo logramos diversificar nuestros productos y expandir nuestras ventas tanto en el interior del pais, como en latinoamerica.
                            Hoy sólidamente instalados en el rubro, somos proveedores de los mas destacados laboratorios medicinales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
