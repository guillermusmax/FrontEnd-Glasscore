import { Modal, Form, Button, Checkbox, Segment, Table, Icon, Pagination} from "semantic-ui-react";
import { AñadirAsignatura } from '@/components/Layout/AñadirAsignatura/AñadirAsignatura';
import styles from './BuscarAsignacion.module.scss';  './AñadirAsignatura.module.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let data = [
  { codigo: 'CBM-110', materia: 'Aseguramiento de ondas', sección: '01',  profesores: 'Eva Liriano', creditos: "4", horario: "Mar: 12/14"},
  { codigo: 'CFB-230', materia: 'Aseguramiento de ondas', sección: '01',  profesores: 'Eva Liriano', creditos: "4", horario: "Mar: 12/14"},
  { codigo: 'LOL-342', materia: 'Aseguramiento de ondas', sección: '01',  profesores: 'Eva Liriano', creditos: "4", horario: "Mar: 12/14"},
  { codigo: 'ROU-203', materia: 'Aseguramiento de ondas', sección: '01',  profesores: 'Eva Liriano', creditos: "4", horario: "Mar: 12/14"},
    // ... otros datos ...
  ];


export function BuscarAsignacion(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  
  /*const [Asignaturas, setAsignaturas] =  useState([])
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios.get("https://localhost:44377/api/Usuarios").then((response) => {

    setUserList(response.data);
    }).catch((error) => {
      console.error('Error al obtener la lista de usuarios:', error);
    });
  }*/

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };


  // Filtra los datos para mostrar solo los que coinciden con el código del prop "subject"
  const filteredData = data.filter(item => item.codigo === props.subject);

  console.log(filteredData);

  return (
    <div className={styles.customTable}>
         <Table>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell className={styles.headerCell}>Código</Table.HeaderCell>
            <Table.HeaderCell className={styles.headerCell}>Materia</Table.HeaderCell>
            <Table.HeaderCell>Créditos</Table.HeaderCell>
            <Table.HeaderCell>Añadir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.codigo}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.materia}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.creditos}</Table.Cell>
              <Table.Cell style={{ width: '100px' }} className={styles.centeredCell}>
              <Button icon color="" onClick={handleOpenModal} className={styles.iconButton}>
                  <Icon name="add" />
                </Button>
              </Table.Cell>
        </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/*<Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
          />*/}
              <AñadirAsignatura isOpen={modalOpen} onClose={handleCloseModal} asignaturaCodigo={props.subject}/>
    </div>
  )
}