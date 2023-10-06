import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";
import { modal } from "@nextui-org/react";
import React, { useState , useRef } from 'react';

import { FormularioAsignatura } from "@/components/Layout/CrearAsignatura/FormularioAsignatura";

import styles from './CrearAsignatura.module.scss'

export function CrearAsignatura({ isOpen, onClose }) {

    return (
        <div className={styles.crearusuariolayout}>
          <Modal open={isOpen} onClose={onClose} className={styles.modal}>
            <Modal.Header className={styles.modalheader}>Añadir Asignatura</Modal.Header>
            <Modal.Content>
              <FormularioAsignatura />
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={onClose}>Cerrar</Button>
            </Modal.Actions>
          </Modal>
        </div>
      );
}
