import React, { useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

export const ContactForm = () => {

    const form = useRef();

    const initialValues = {
        company: '',
        email: '',
        phone: '',
        request: '',
    }

    const onSubmit = () => {
        emailjs.sendForm('service_h2zusuy', 'template_pqpj53j', form.current, 'x6-8LVIrjwT2UXfe-')
            .then((result) => {
                toast.success("Email enviado correctamente");
            }, (error) => {
                toast.error("Error al enviar la consulta");
                console.log(error);
            });

    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values } = formik

    return (
        <div className='contact-form'>
            <div>
                <ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={2000}
                />
                <form onSubmit={handleSubmit} ref={form}>
                    <h2>Contáctenos</h2>
                    <div className='contact-form-inputs-container'>
                        <div>
                            <input
                                placeholder='Empresa'
                                name="company"
                                values={values.company}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder='Email'
                                values={values.email}
                                required
                                onChange={handleChange}
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
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name=''
                                type='text'
                                placeholder='Asunto'
                                values={values.phone}
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="request"
                            values={values.request}
                            placeholder='Consulta'
                            required
                            onChange={handleChange}
                            cols="30"
                            rows="7"
                            maxlength={1000}
                        />
                    </div>
                    <div className='form-button'>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
