import { Modal, Form, Button, Checkbox, Segment, Icon, Radio} from "semantic-ui-react";
import React, { useState } from 'react';
import styles from './AñadirAsignatura.module.scss'

export function AñadirAsignatura({ isOpen, onClose }) {
  const [userType, setUserType] = useState(null);

  const data = {
    '1': {
      profesor: 'Edwin Lopez',
      horario: 'Martes: 16/18, Jueves 16/18'
    },
    '2': {
      profesor: 'Maria Duruthy',
      horario: 'Martes: 16/18, Jueves 16/18'
    }
  };

  return (
    <div className={styles.crearusuariolayout}>
      <Modal open={isOpen} onClose={onClose} className={styles.modal}>
        <Modal.Header>Añadir asignatura</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field className={styles.checkboxGroup}>
              <label>Lengua Española</label>
              <div className={styles.checkboxContainer}>
                <Form.Field>
                  <Radio
                    label="Sección 1"
                    value="1"
                    checked={userType === '1'}
                    onChange={() => setUserType('1')}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="Sección 2"
                    value="2"
                    checked={userType === '2'}
                    onChange={() => setUserType('2')}
                  />
                </Form.Field>
              </div>
            </Form.Field>
            <div className={styles.nameRow}>
              <div className={styles.nameField}>
                <Form.Field>
                  <label>Sección 1</label>
                  <p>{data['1'].profesor}; {data['1'].horario}</p>
                </Form.Field>
              </div>
              <div className={styles.nameField}>
                <Form.Field>
                  <label>Sección 2</label>
                  <p>{data['2'].profesor}; {data['2'].horario}</p>
                </Form.Field>
              </div>
            </div>                
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
