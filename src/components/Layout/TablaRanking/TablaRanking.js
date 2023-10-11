import React, { useState, useEffect } from 'react';
import { Table, Progress } from 'semantic-ui-react';
import styles from './TablaRanking.module.scss'
import axios from 'axios';
import { CirculoProgreso } from '@/components/Layout/CirculoProgreso/CirculoProgreso';

export function TablaRanking() {

  function getpercent(indice){
    var IndicePercent = Math.round((indice*100)/4);
    return IndicePercent
  }

  const [StudentList, setStudentList] =  useState([])
  useEffect(() => {
    getStudentList();
  }, []);

  const getStudentList = () => {
    axios.get("https://localhost:7206/api/Estudiantes").then((response) => {
  
    setStudentList(response.data);
    }).catch((error) => {
      console.error('Error al obtener la lista de usuarios:', error);
    });
  }
  return (

    <div className={styles.rankingEstudiantil}>
     <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Puesto#</Table.HeaderCell>
            <Table.HeaderCell>Estudiante</Table.HeaderCell>
            <Table.HeaderCell>Carrera</Table.HeaderCell>
            <Table.HeaderCell>Trimestre</Table.HeaderCell>
            {/*<Table.HeaderCell>Materias</Table.HeaderCell>*/}
            <Table.HeaderCell>Indice General</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {StudentList.length > 0 && StudentList.map((item,index) => (
            <Table.Row key = {index}>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{item.nombreUsuario + " " + item.apellidoUsuario}</Table.Cell>
            <Table.Cell>{item.carrera}</Table.Cell>
            <Table.Cell>{item.trimestre}</Table.Cell>
            {/*<Table.Cell>80/140</Table.Cell>*/}
            <Table.Cell>
              <CirculoProgreso percent={getpercent(item.indiceGeneral)}/>
            </Table.Cell>
          </Table.Row>
          ))}
          
        
        </Table.Body>
      </Table>
    </div>
  );
}