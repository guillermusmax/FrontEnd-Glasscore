import { Table, Button, Icon , Pagination} from "semantic-ui-react";
import styles from './SeleccionEstudiante.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let data = [
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01',  Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    { Código: 'CBM-110', Materia: 'Aseguramiento de ondas', Sección: '01', Profesores: 'Eva Liriano', Créditos: "4", Horario: "Mar: 12/14"},
    // ... otros datos ...
  ];


export function SeleccionEstudiante() {

  const [Asignaturas, setAsignaturas] =  useState([])
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios.get("https://localhost:44377/api/Usuarios").then((response) => {

    setUserList(response.data);
    }).catch((error) => {
      console.error('Error al obtener la lista de usuarios:', error);
    });
  }

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

  const handleEdit = (id) => {
    // Lógica para editar el elemento con el ID proporcionado
    // Aquí puedes abrir un modal o realizar la acción que necesites.
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    // Lógica para eliminar el elemento con el ID seleccionado
    // Aquí debes eliminar el elemento de tu lista de datos.
    // Por ejemplo, puedes usar filter para crear una nueva lista sin el elemento.
    data = data.filter((item) => item.id !== selectedItemId);
    setConfirmOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  return (
    <div className={styles.customTable}>
         <Table>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell className={styles.headerCell}>Código</Table.HeaderCell>
            <Table.HeaderCell className={styles.headerCell}>Materia</Table.HeaderCell>
            <Table.HeaderCell className={styles.headerCell}>Seccion</Table.HeaderCell>
            <Table.HeaderCell>Profesores</Table.HeaderCell>
            <Table.HeaderCell>Creditos</Table.HeaderCell>
            <Table.HeaderCell>Horario</Table.HeaderCell>
            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Código}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Materia}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Sección}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Profesores}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Créditos}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Horario}</Table.Cell>
              <Table.Cell style={{ width: '100px' }} className={styles.centeredCell}>
              <Button icon color="" onClick={() => handleEdit(item.id)} className={styles.iconButton}>
                  <Icon name="pencil alternate" />
                </Button>
                <Button icon color="" onClick={() => handleDelete(item.id)} className={styles.iconButton}>
                  <Icon name="trash alternate" />
                </Button>
              </Table.Cell>
        </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

    </div>
  )
}