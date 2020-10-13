import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";

export default function RegisterForm({ setShowLogin }) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            name: Yup.string()
                .required("El nombre es obligatorio"),
            username: Yup.string()
                .required(true)
                .matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio"),
            email: Yup.string()
                .required(true)
                .email("El email no es valido"),
            password: Yup.string()
                .required(true).oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden "),
            repeatPassword: Yup.string()
                .required(true).oneOf([Yup.ref("password")], "Las contraseñas no coinciden "),
        }),
        onSubmit: (formValue) => {
            console.log(formValue)
        }
    })

    return (
        <>
            <h2 className="register-form-title">Regístrate para ver fotos y videos</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input
                    type="text"
                    placeholder="Nombre y apellidos"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name && true}
                />
                <Form.Input
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username}
                />
                <Form.Input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email && true}
                />
                <Form.Input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />
                <Form.Input
                    type="password"
                    placeholder="Repetir Contraseña"
                    name="repeatPassword"
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                    error={formik.errors.repeatPassword}
                />
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
