import { Modal, Form, Button, Checkbox, Segment, Table, Icon, Pagination} from "semantic-ui-react";
import { AñadirAsignatura } from '@/components/Layout/AñadirAsignatura/AñadirAsignatura';
import styles from './BuscarAsignacion.module.scss';  './AñadirAsignatura.module.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let data = [
    { Código: 'CBM-110', Materia: 'Jugo e china', Créditos: "4"},
    
    // ... otros datos ...
  ];


export function BuscarAsignacion() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  
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
            <Table.HeaderCell>Créditos</Table.HeaderCell>
            <Table.HeaderCell>Añadir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Código}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Materia}</Table.Cell>
              <Table.Cell style={{ width: '200px' }} className={styles.centeredCell}>{item.Créditos}</Table.Cell>
              <Table.Cell style={{ width: '100px' }} className={styles.centeredCell}>
              <Button icon color="" onClick={item} className={styles.iconButton}>
                  <Icon name="add" />
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
              <AñadirAsignatura isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}