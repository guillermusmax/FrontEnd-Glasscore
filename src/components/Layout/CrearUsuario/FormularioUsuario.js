import React, { useState } from 'react';
import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";
import axios from 'axios';
import { CheckboxCambios } from '@/components/Layout/CrearUsuario/CheckboxCambios';
import styles from './CrearUsuario.module.scss'



  
export function FormularioUsuario(){
  const opcionesEstado = [
    { key: 'activo', text: 'Activo', value: 'Activo' },
    { key: 'inactivo', text: 'Inactivo', value: 'Inactivo' },
  ];
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Email, setEmail] = useState("");
    const [Rol, setRol] = useState("");
    const [Estado, setEstado] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordConfirmed, setPasswordConfirmed] = useState("");
    
    

    const formData={
        nombreUsuario: Nombre,
        apellidoUsuario: Apellido,
        email: Email,
        estado: Estado,
        password: Password,
        passwordConfirmed: PasswordConfirmed,
        rol: "Estudiante"
      };
  
      

      const  handleSubmit = async(event) => {
        
       event.preventDefault();
        // Aquí puedes manejar la lógica para guardar los datos
        axios.post("https://localhost:7206/api/Usuarios", formData)
          .then(function (response) {
            console.log(response);
            
            setMostrarFormulario(false);
          })
          .catch(function (error) {
            console.error(error);
            console.log(formData);
            // Manejar errores si es necesario
          });
      };

      const handleChange = (e, { value }) => {
        setEstado(value);
      };

    return(

        <div>
          {mostrarFormulario ? (
              <Form className={styles.form} >
                <Form.Input
                  label="Nombre(s)"
                  name="nombres"
            
                  onChange={(e)=> setNombre(e.target.value)}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Apellido(s)"
                  name="apellidos"
           
                  onChange={(e)=> setApellido(e.target.value)}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Email"
                  name="email"
                  type="email"
                  
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
                <Form.Field
        label="Estado"
        control={Select}
        name="estado"
        options={opcionesEstado}
        value={Estado}
        onChange={handleChange}
        required
        className={styles.input}
      />
                <Form.Input
                  label="Contraseña"
                  name="password"
                  type="password"
                 
                  onChange={(e)=> setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Confirmar Contraseña"
                  name="confirmPassword"
                  type="password"
                 
                  onChange={(e)=> setPasswordConfirmed(e.target.value)}
                  required
                  className={styles.input}
                />
                <Button primary onClick={handleSubmit}>
                  Guardar
                </Button>
            </Form>
            ) : (
              <CheckboxCambios />
            )}

        </div>
        
    )
}