import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./LoginForm.scss";

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string().email("El email no es valido").required(true),
            password: Yup.string().required("La contraseña es obligatoria"),
        }),
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
                error={formik.errors.email && true}
            />
            <Form.Input
                type="text"
                placeholder="Contraseña"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password && true}
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
