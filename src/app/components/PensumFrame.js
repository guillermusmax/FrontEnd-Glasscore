
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './PensumFrame.module.css'


/*const PensumFrame = () => {
  
  //DataGrid's columns
  const columns = [
    { field: 'code', headerName: 'Clave', width: 270},
    { field: 'subject', headerName: 'Asignatura', width: 1450 },
    { field: 'credits', headerName: 'Créditos', width: 160 },
  ];


    //DataGrid's rows
    const rows = [
      //{ id: {item.id}, puesto: {item.id}, fullName: {item.name}, collegeCareer: {item.type}, semester: {item.status}, generalIndex: {item.gender}},
      { id: 2, code: 'CBM123', subject: 'Aseguramiento de la calidad de Software', credits: 4},
      { id: 3, code: 'GC123', subject: 'Base de datos', credits: 5},
      { id: 4, code: 'IBM321', subject: 'Tendencias en la ingenieria de Software', credits: 2},
      { id: 5, code: 'CBM123', subject: 'Aseguramiento de la calidad de Software', credits: 4},
      { id: 6, code: 'GC123', subject: 'Base de datos', credits: 5},
      { id: 7, code: 'IBM321', subject: 'Tendencias en la ingenieria de Software', credits: 2},
      { id: 8, code: 'GC123', subject: 'Base de datos', credits: 5},
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
            </div>
      </div>
    );
};

export default PensumFrame;*/


function createData(code, subject, credits) {
    return { code, subject, credits};
  }
  
  const rows = [
    createData('CBM101', 'Matematicas Discreta', 5),
    createData('IDS', 'Aseguramiento de la calidad de software', 9.0, 37, 4.3),
    createData('CBM101', 'Matematicas Discreta', 5),
    createData('IDS', 'Aseguramiento de la calidad de software', 9.0, 37, 4.3),
    createData('CBM101', 'Matematicas Discreta', 5),
    createData('IDS', 'Aseguramiento de la calidad de software', 9.0, 37, 4.3),
    createData('CBM101', 'Matematicas Discreta', 5),
    createData('IDS', 'Aseguramiento de la calidad de software', 9.0, 37, 4.3),
  ];
  
  export default function PensumFrame() {
    return (
      <div>
        
          <TableContainer className={styles.hu03MostrarRankingYHu05Inner}>
          <h1><b>Trimestre 1</b></h1>
            <Table sx={{ Width: '100%'}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Clave</b></TableCell>
                  <TableCell align="left"><b>Asignatura</b></TableCell>
                  <TableCell align="center"><b>Créditos</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.code}
                    </TableCell>
                    <TableCell align="left">{row.subject}</TableCell>
                    <TableCell align="center">{row.credits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
    );
  }