import React, { useState } from 'react';
import { Form, Button, Input , Select} from 'semantic-ui-react';

import styles from './CrearUsuario.module.scss';
import { CrearUsuario } from './CrearUsuario';



export function FormularioEstudiante (userData){

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedCarrer, setSelectedCarrer] = useState('');
   // const [selectedID, setSelectedID] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false); // Variable de estado

    const opcionesTitulo = [
      { key: '1', text: 'Sistemas', value: '1' },
      { key: '2', text: 'Programación', value: '2' },
    ];

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleIDChange = (_, { value }) => {
        setSelectedID(value);
      };
    
    const handleCarrerChange = (e, { value }) => {
      setSelectedCarrer(value);
    };
    
    const studentPost ={
      nombreCarrera: selectedCarrer
    }
    const handleSave = () => {
      // Aquí puedes manejar la lógica para guardar la data
      console.log('Carrera:', selectedCarrer);
      console.log('Archivo:', selectedFile);
     // console.log('Matricula:',selectedID);
      setButtonDisabled(true);
    
    };
  return ( 
    <div className={styles.container}>
      <Form>
      <Form.Field>
          <label>Carrera:</label>
          <Select
            options={opcionesTitulo}
            placeholder="Selecciona una carrera"
            value={selectedCarrer}
            onChange={handleCarrerChange}
          />
        </Form.Field>
        
        <Form.Field>
          <label>Subir imagen:</label>
          <Input type="file" value={selectedFile} onChange={handleFileChange} />
        </Form.Field>
        <Button primary className={styles.saveButton} onClick={handleSave} disabled={isButtonDisabled} >
          Guardar
        </Button>
      </Form>
      
    </div>
  );
};