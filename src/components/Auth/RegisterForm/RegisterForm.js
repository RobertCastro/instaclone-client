import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import "./RegisterForm.scss";

export default function RegisterForm({ setShowLogin }) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: (formValue) => {
            console.log(formValue)
        }
    })

    return (
        <>
            <h2 className="register-form-title">Regístrate para ver fotos y videos</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input type="text" placeholder="Nombre y apellidos" name="name" onChange={formik.handleChange} value={formik.values.name} />
                <Form.Input type="text" placeholder="Nombre de usuario" name="username" onChange={formik.handleChange} value={formik.values.username} />
                <Form.Input type="text" placeholder="Correo electrónico" name="email" onChange={formik.handleChange} value={formik.values.email} />
                <Form.Input type="password" placeholder="Contraseña" name="password" onChange={formik.handleChange} value={formik.values.password} />
                <Form.Input type="password" placeholder="Repetir Contraseña" name="repeatPassword" onChange={formik.handleChange} value={formik.values.repeatPassword} />
                <Button type="submit" className="btn-submit">Registrarse</Button>
            </Form>
        </>
    )
}

function initialValues() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    }
}
