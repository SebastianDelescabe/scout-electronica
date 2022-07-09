import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import './Contact.css';

export const ContactForm = () => {

    const initialValues = {
        company: '',
        email: '',
        phone: '',
        request: '',
    }

    const onSubmit = () => {
        alert('ye')
    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange } = formik  //Touched y handleBlur es para salir del campo y que aparezca error si no complete nada

    return (
        <>
            <h2>Contáctenos desde éste formulario</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <span>Empresa</span>
                        <input
                            name="company"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email </label>
                        <input
                            name="email"
                            type="email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Teléfono </label>
                        <input
                            name="phone"
                            type='number'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>Consulta</span>
                        <textarea
                            name="request"
                            required
                            onChange={handleChange}
                            cols="30"
                            rows="8"
                            maxlength={1000}
                        />
                    </div>
                    <button type='submit'>Enviar consulta</button>
                </form>
            </div>
        </>
    )
}
