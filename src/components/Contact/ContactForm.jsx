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
                toast.error("Completar campos correctamente");
            });

    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values } = formik

    return (
        <>
            <h2>Contáctenos desde éste formulario</h2>
            <div className="form-container">
                <ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={2000}
                />
                <form onSubmit={handleSubmit} ref={form}>
                    <div className='form-container'>
                        <span>Empresa</span>
                        <input
                            name="company"
                            values={values.company}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email </label>
                        <input
                            name="email"
                            type="email"
                            values={values.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Teléfono </label>
                        <input
                            name="phone"
                            type='number'
                            values={values.phone}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>Consulta</span>
                        <textarea
                            name="request"
                            values={values.request}
                            required
                            onChange={handleChange}
                            cols="30"
                            rows="7"
                            maxlength={1000}
                        />
                    </div>
                    <button type='submit'>Enviar consulta</button>
                </form>
            </div>
        </>
    )
}
