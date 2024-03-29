import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';
import { useContext } from 'react';
import { ProductSelectedContext } from '../../context/ProductSelectedContext';

export const ContactForm = () => {

    const form = useRef();

    const { productSelected } = useContext(ProductSelectedContext)

    const initialValues = {
        company: '',
        email: '',
        phone: '',
        theme: productSelected === false ? '' : productSelected,
        request: '',
    }

    const [captcha, setCaptcha] = useState(false)

    function onChange() {
        setCaptcha(true)
    }

    const onSubmit = async (values, { resetForm }) => {
        if (captcha) {
            emailjs.sendForm('service_h2zusuy', 'template_pqpj53j', form.current, 'x6-8LVIrjwT2UXfe-')
                .then(() => {
                    toast.success("Email enviado correctamente");
                    resetForm({ company: "", email: "" })
                    setCaptcha(false)
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                }, (error) => {
                    toast.error("Error al enviar la consulta");
                });
        } else {
            alert('completar captcha')
        }
    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values } = formik

    return (
        <div className='contact-form' id="form">
            <div>
                <ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={1000}
                />
                <form onSubmit={handleSubmit} ref={form}>
                    <div className='contact-form-inputs-container'>
                        <div>
                            <input
                                placeholder='Empresa'
                                name="company"
                                values={values.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Email'
                                name="email"
                                type="email"
                                values={values.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='contact-form-inputs-container'>
                        <div>
                            <input
                                placeholder='Teléfono'
                                name="phone"
                                type='tel'
                                values={values.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Asunto'
                                name='theme'
                                type='text'
                                values={values.theme}
                                value={values.theme}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            placeholder='Consulta'
                            name="request"
                            values={values.request}
                            onChange={handleChange}
                            cols="30"
                            rows="5"
                            required
                            maxLength={1000}
                        />
                    </div>
                    <ReCAPTCHA
                        className='captcha--content'
                        sitekey="6LdMERkjAAAAACb93r264r5WbOVDIZFHYCWCO4Ev"
                        onChange={onChange}
                        required
                    />
                    <div className='form-button'>
                        <button type='submit' className="app__button" >
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Enviar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
