import styles from './FiltrarAsignaturas.module.scss';
import { Table, Icon, Button } from "semantic-ui-react";
import React, { useState } from 'react';
import { MateriaHorario } from '@/components/Layout/MateriaHorario/MateriaHorario';
import { CrearAsignatura } from '../CrearAsignatura';

export function FiltrarAsignaturas({ clave }) {
 
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Supongamos que tienes un array de asignaturas
  const asignaturas = [
    { clave: '123', nombre: 'Matemáticas' },
    { clave: '456', nombre: 'Historia' },
    { clave: '456', nombre: 'Historia' },
    { clave: '456', nombre: 'Historia' },
    { clave: '456', nombre: 'Historia' },


    // Agrega más asignaturas aquí
  ];

  return (
    <div>
      <h2>Gestionar Asignaturas</h2>
      <Button content='Agregar Estudiante' primary className={styles.addButton} onClick={handleOpenModal} />
      <CrearAsignatura isOpen={modalOpen} onClose={handleCloseModal} />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Clave</Table.HeaderCell>
            <Table.HeaderCell>Nombre de Asignatura</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {asignaturas.map((asignatura) => (
            <Table.Row key={asignatura.clave}>
              <Table.Cell>{asignatura.clave}</Table.Cell>
              <Table.Cell>{asignatura.nombre}</Table.Cell>
              <Table.Cell>
                <div className="icon-container" onClick={handleOpenModal}>
                  <Icon name="pencil" className={styles.editIcon} /> Editar
                  {/*<MateriaHorario clave={clave} isOpen={modalOpen} onClose={handleCloseModal}/>*/}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}