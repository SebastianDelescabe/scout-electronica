import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

export const ContactForm = ({ data }) => {

    const form = useRef();

    const initialValues = {
        company: '',
        email: '',
        phone: '',
        theme: '',
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
                    <h2>Cotizá y Asesorate</h2>
                    <h4>Solicita más información a través de nuestro formulario de contacto, tenemos cobertura en toda la región.</h4>
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
                            {data ? (
                                <input
                                    placeholder='Asunto'
                                    name='theme'
                                    type='text'
                                    value={data}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <input
                                    placeholder='Asunto'
                                    name='theme'
                                    type='text'
                                    values={values.theme}
                                    onChange={handleChange}
                                    required
                                />
                            )
                            }
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
