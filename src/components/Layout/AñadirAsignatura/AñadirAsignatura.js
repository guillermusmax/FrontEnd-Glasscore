import { Modal, Form, Button, Radio } from "semantic-ui-react";
import React, { useState } from 'react';
import styles from './AñadirAsignatura.module.scss';

export function AñadirAsignatura({ isOpen, onClose, asignaturaCodigo }) {
  const [selectedSeccion, setSelectedSeccion] = useState(null);

  const asignaturas = {
    'CBM-110': {
      '1': {
        profesores: 'Edwin Lopez',
        creditos: 4,
        horario: 'Martes: 14/16, Jueves 14/16',
      },
      '2': {
        profesores: 'Maria Duruthy',
        creditos: 4,
        horario: 'Martes: 16/18, Jueves 16/18',
      },
      '3': {
        profesores: 'Nehomar Zalasaar',
        creditos: 4,
        horario: 'Martes: 9/11, Viernes 9/11',
      },
    },
    'CFB-230': {
      '1': {
        profesores: 'Carlos García',
        creditos: 3,
        horario: 'Lunes: 10/12, Miércoles 10/12',
      },
      '2': {
        profesores: 'Ana Rodriguez',
        creditos: 3,
        horario: 'Lunes: 14/16, Miércoles 14/16',
      },
    },
  };

  const secciones = asignaturas[asignaturaCodigo];

  return (
    <div className={styles.crearusuariolayout}>
      <Modal open={isOpen} onClose={onClose} className={styles.modal}>
        <Modal.Header>Añadir asignatura</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field className={styles.checkboxGroup}>
              <label>{`Asignatura ${asignaturaCodigo}`}</label>
              {secciones &&
                Object.keys(secciones).map((seccionKey) => (
                  <Form.Field key={seccionKey}>
                    <Radio
                      label={`Sección ${seccionKey}`}
                      value={seccionKey}
                      checked={selectedSeccion === seccionKey}
                      onChange={() => setSelectedSeccion(seccionKey)}
                    />
                  </Form.Field>
                ))}
            </Form.Field>
            {selectedSeccion !== null && secciones && (
              <div className={styles.nameRow}>
                <Form.Field>
                  <label>{`Sección ${selectedSeccion}`}</label>
                  <p>{`Profesor: ${secciones[selectedSeccion].profesores}`}</p>
                  <p>{`Horario: ${secciones[selectedSeccion].horario}`}</p>
                </Form.Field>
              </div>
            )}
          </Form>
        </Modal.Content>
        <Modal.Actions className={styles.actionsContainer}>
          <div className={styles.buttonContainer}>
            <Button negative onClick={onClose} className={styles.cancelButton}>
              Cancelar
            </Button>
            <Button positive className={styles.saveButton}>
              Guardar
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
