import React from 'react';
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";

export default function RegisterForm({ setShowLogin }) {

    const onSubmit = () => {
        console.log("enviando")
    }
    return (
        <>
            <h2 className="register-form-title">Regístrate para ver fotos y videos</h2>
            <Form className="register-form" onSubmit={onSubmit}>
                <Form.Input type="text" placeholder="Nombre y apellidos" name="name" />
                <Form.Input type="text" placeholder="Nombre de usuario" name="name" />
                <Form.Input type="text" placeholder="Correo electrónico" name="email" />
                <Form.Input type="password" placeholder="Contraseña" name="password" />
                <Form.Input type="password" placeholder="Repetir Contraseña" name="repeatPassword" />
                <Button type="submit" className="btn-submit">Registrarse</Button>
            </Form>
        </>
    )
}
