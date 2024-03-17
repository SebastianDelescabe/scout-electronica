import React from "react";
import { ContactForm } from "./ContactForm";
import { MapContact } from "./MapContact";
import { ContactInfo } from "./ContactInfo";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="banner-bg-contact">
        <div className="banner-contact-bgblack">
          <p className="p-title-contact">Contacto</p>
        </div>
      </div>
      <div className="container-contact">
        <div className="container-elements-contact">
          <div className="container-map-contact">
            <MapContact />
          </div>
          <div className="container-form-info-contact">
            <div className="container-form-titles">
              <h5>CONTACTO</h5>
              <h2>Contacta con nosotros</h2>
            </div>
            <div className="container-form-info&form">
              <ContactInfo />
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
