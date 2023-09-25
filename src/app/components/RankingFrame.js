import RankingPerson from "./RankingPerson";
import styles from "./RankingFrame.module.css";
import { DataGrid } from '../components/useClient/MaterialUIClient';
import * as React from 'react';

const RankingFrame = () => {
  
  //DataGrid's columns
  const columns = [
    { field: 'puesto', headerName: 'Puesto(#)', width: 170},
    { field: 'fullName', headerName: 'Estudiante', width: 430 },
    { field: 'collegeCareer', headerName: 'Carrera', width: 800 },
    { field: 'semester', headerName: 'Semestre', width: 160 },
    { field: 'subjects', headerName: 'Materias', width: 160 },
    { field: 'generalIndex', headerName: 'Indice general', width: 210 },
    //{
      // field: 'age',
      // headerName: 'Age',
      // type: 'number',
      // width: 90,
    //},
    //{
      // field: 'fullName',
      // headerName: 'Full name',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,
    //},
  ];



    //DataGrid's rows
    const rows = [
      //{ id: {item.id}, puesto: {item.id}, fullName: {item.name}, collegeCareer: {item.type}, semester: {item.status}, generalIndex: {item.gender}},
      {id: 2, puesto: 2, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      {id: 3, puesto: 3, fullName: 'Jon', collegeCareer: 'Ingenieria en telecomunicaciones de redes informaticas', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 4, puesto: 4, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 5, puesto: 5, fullName: 'Qreopatra del Monte de Jesus', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 6, puesto: 6, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 10, subjects: 89, generalIndex: 3.9},
      { id: 7, puesto: 7, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 8, puesto: 8, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 9, puesto: 9, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 45, generalIndex: 3.9},
      { id: 10, puesto: 10, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 11, puesto: 11, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 12, puesto: 12, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 13, puesto: 13, fullName: 'Jon', collegeCareer: 'Ingenieria en telecomunicaciones de redes informaticas', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 14, puesto: 14, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 15, puesto: 15, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 92, generalIndex: 3.9},
      { id: 16, puesto: 16, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 17, puesto: 17, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 23, generalIndex: 3.9},
      { id: 18, puesto: 18, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},
      { id: 19, puesto: 19, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, subjects: 89, generalIndex: 3.9},


    ];

    //DataGrid creation
    return (
      <div className={styles.hu03MostrarRankingYHu05Inner}>
      <div style={{ height: '100%', width: '100%'}}>
        <DataGrid
        className={styles.fontRanking}
          rows={rows}
          columns={columns}
          
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 13 },
            },
          }}
          pageSizeOptions={[10,9,8,7,6]}
        />
      </div>
      </div>
    );
};

export default RankingFrame;