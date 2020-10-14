import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import "./LoginForm.scss";

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: (formData) => {
            console.log(formData)
        }
    });

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <h2>Entra para ver fotos y videos de tus amigos</h2>
            <Form.Input
                type="text"
                placeholder="Correo electrónico"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Form.Input
                type="text"
                placeholder="Contraseña"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <Button type="sybmit" className="btn-submit">Iniciar sesión</Button>
        </Form>
    )
}

function initialValues() {
    return {
        email: "",
        password: ""
    }
}
