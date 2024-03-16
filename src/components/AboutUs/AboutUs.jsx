import React, { useEffect } from "react";
import { AboutUsSwiper } from "./AboutUsSwiper";
import "./AboutUs.css";
import Aos from "aos";

export const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="nosotros">
      <div className="bg-nosotros" id="nosotros">
        <div className="bg-black">
          <p className="experience-title-nosotros">
            20 años de experiencia garantizan <strong>calidad y compromiso</strong>
          </p>
          <div>
            <p className="quines-title-nosotros">¿Quiénes somos?</p>
            <p className="text-nosotros">
              Scout Electronica es una empresa dedicada a ofrecer soluciones
              integrales en el suministro de equipos e insumos para laboratorios
              medicinales o afines.
            </p>
          </div>
        </div>
      </div>
      <AboutUsSwiper />
    </div>
  );
};
