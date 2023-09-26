"use client"

import styles from "./AcademicGradesFrame.module.css";
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const AcademicGradesFrame = () => {
  
  //DataGrid's columns
  const columns = [
    { field: 'code', headerName: 'Clave', width: 170},
    { field: 'section', headerName: 'Sección', width: 160 },
    { field: 'subject', headerName: 'Asignatura', width: 900 },
    { field: 'grade', headerName: 'Calificación', width: 200 },
    { field: 'credits', headerName: 'Créditos', width: 160 },
    { field: 'points', headerName: 'Puntos', width: 160 },
    /*{ 
        field: 'points', 
        headerName: 'Puntos', 
        width: 210, 
        valueGetter: (params) => {
            switch (params.row.grade) {
                case 'A':
                  `${params.row.credits * 4}`
                  break;
                case 'B':
                    `${params.row.credits * 3}`
                  break;
                case 'C':
                    `${params.row.credits * 2}`
                  break;
                case 'D':
                    `${params.row.credits * 1}`
                    break;
                default:
                    `${params.row.credits * 0}`
              }
        }
    }*/
  ];


    //DataGrid's rows
    const rows = [
      //{ id: {item.id}, puesto: {item.id}, fullName: {item.name}, collegeCareer: {item.type}, semester: {item.status}, generalIndex: {item.gender}},
      { id: 2, code: 'CBM123', section: 2, subject: 'Aseguramiento de la calidad de Software', grade: 'A', credits: 4, points: 16},
      { id: 3, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 4, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
      { id: 5, code: 'CBM123', section: 2, subject: 'Aseguramiento de la calidad de Software', grade: 'A', credits: 4, points: 16},
      { id: 6, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 7, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
      { id: 8, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 9, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
      { id: 10, code: 'CBM123', section: 2, subject: 'Aseguramiento de la calidad de Software', grade: 'A', credits: 4, points: 16},
      { id: 11, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 12, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2},
      { id: 13, code: 'CBM123', section: 2, subject: 'Aseguramiento de la calidad de Software', grade: 'A', credits: 4, points: 16},
      { id: 14, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 15, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
      { id: 16, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 17, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
      { id: 18, code: 'GC123', section: 1, subject: 'Base de datos', grade: 'B', credits: 5, points: 15},
      { id: 19, code: 'IBM321', section: 2, subject: 'Tendencias en la ingenieria de Software', grade: 'A', credits: 2, points: 8},
    ];

    //DataGrid creation
    return (
        <div className={styles.hu03MostrarRankingYHu05Inner}>
            <div style={{ height: 650, width: '100%'}}>
                <h1><b>Trimestre {1}</b></h1>
                <DataGrid
                    className={styles.fontRanking}
                    rows={rows}
                    columns={columns}
                />
                  <h1><b>Indice general:</b> {3.5}</h1>
                  <h1><b>Indice acumulado:</b> {3.5}</h1>
              

            </div>
      </div>
    );
};

export default AcademicGradesFrame;
