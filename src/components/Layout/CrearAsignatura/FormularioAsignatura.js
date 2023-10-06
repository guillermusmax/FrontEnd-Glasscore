import React, { useState } from 'react';
import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";

import styles from './CrearAsignatura.module.scss'



const opcionesEstado = [
    { key: 'activo', text: 'Activo', value: 'activo' },
    { key: 'inactivo', text: 'Inactivo', value: 'inactivo' },
  ];
  
export function FormularioAsignatura(){

    const [mostrarFormulario, setMostrarFormulario] = useState(true);


    const [formData, setFormData] = useState({
      nombreAsignatura: '',
      numeroCreditos: '',
      tipo: '',
      numeroAsignatura: '',
      });
  
      const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = () => {
        // Aquí puedes manejar la lógica para guardar los datos
        console.log(formData);
        setMostrarFormulario(false);
      };


    return(

        <div>
              <Form className={styles.form} >
                <Form.Input
                  label="Nombre de Asignatura"
                  name="nombreAsignatura"
                  value={formData.nombreAsignatura}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Numero de credito(s)"
                  name="numeroCreditos"
                  value={formData.numeroCreditos}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Numero de asignatura"
                  name="numeroAsignatura"
                  value={formData.numeroAsignatura}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Button primary onClick={handleSubmit}>
                  Guardar
                </Button>
            </Form>
        </div>
    )
}