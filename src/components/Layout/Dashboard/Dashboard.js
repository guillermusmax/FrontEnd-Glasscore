import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import MovingIcon from '@mui/icons-material/Moving';
import styles from './Dashboard.module.css'


function createData(section, subject, credits, classroom, monday, tuesday, wednesday, thursday, friday, saturday ) {
    return { section, subject, credits, classroom, monday, tuesday, wednesday, thursday, friday, saturday };
}
  
const rows = [
  createData('CBM101-01', 'Matematicas Discreta', '5', 'AB202', '16/18', null, '16/18', null, null, null),
  createData('CBM101-01', 'Aseguramiento de la calidad de software', '4', 'AB202', '14/16', null, '14/16', null, '14/16', null),
  createData('CBM101-01', 'Tendencia en la ingenieria de software', '4', 'AB202', null, null, null, null, null, '10/12'),
  createData('CBM101-01', 'Analisis de datos en la ingenieria', '4', 'AB202', null, null, null, null, null, '9/10'),
  createData('CBM101-01', 'Ingenieria economica', '4', 'AB202', null, null, null, null, null, '8/9'),
  createData('CBM101-01', 'Diseño de software', '4', 'AB202', null, null, null, null, null, '12/14'),
  createData('CBM101-01', 'Practica profesional en la ingenieria de software', '4', 'AB202', '12/14', '12/14', '12/14', '12/14', '12/14', null),
  createData('CBM101-01', 'Modelos y metodos de la ingenieria de software', '3', 'AB202', '10/12', null, '10/12', null, '10/12', null),
  createData('CBM101-01', 'Arquitectura del computador', '4', 'AB202', null, '10/12', null, '10/12', null, null),
  createData('CBM101-01', 'Gestion de proyectos', '4', 'AB202', null, '18/20', '18/20', null, null, null),
];

const Schedule = () => {
  return (
    <div>
        <TableContainer className={styles.hu03MostrarRankingYHu05Inner}>
          <Table sx={{ Width: '100%'}} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell className={styles.fontDashboard}><b>Seccion</b></TableCell>
                <TableCell className={styles.fontDashboard} align="left"><b>Asignatura</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Créditos</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Aula</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Lun</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Ma</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Mi</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Ju</b></TableCell>
                <TableCell className={styles.fontDashboard} align="center"><b>Vi</b></TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className={styles.fontDashboard}>
                    {row.section}
                  </TableCell>
                  <TableCell className={styles.fontDashboard} align="left">{row.subject}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.classroom}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.monday}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.tuesday}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.wednesday}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.thursday}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.friday}</TableCell>
                  <TableCell className={styles.fontDashboard} align="center">{row.saturday}</TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
  );
}


function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 350, minHeight: 230, paddingTop: 2.5, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <CardContent>
      <BarChartIcon sx={{ fontSize: 50 , backgroundColor: `rgba(${props.color}, 0.3)`, borderRadius: '50%'}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h4" component="div">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}



export default function Dashboard() {
    return(
      <div>
        <div className={styles.board}>
          
          <div className={styles.card}>
            <BasicCard 
              color= '240, 0, 0'
              title= 'Total trimestres'
              value= '8/14 Trimestres'
            />
            <BasicCard 
              color= '0, 0, 240'
              title= 'Total materias'
              value= '95/100 Materias'
            />
            <BasicCard 
              color= '0, 240, 240'
              title= 'Creditos aprobados'
              value= '102/340 Creditos'
            />
            <BasicCard 
              color= '0, 240, 0'
              title= 'Indice general'
              value= '3.7/4'
            />
            <BasicCard 
              color= '240, 240, 0'
              title= 'Indice trimestral'
              value= '3.9/4'
            />

          </div>
        </div>

        <div className={styles.scheduleFrame}>
        <Schedule />
        </div>
      </div>
      
    )

}
  
