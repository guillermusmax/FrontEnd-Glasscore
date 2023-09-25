import * as React from 'react';
import { useState, useEffect} from '../components/useClient/ReactClient'
import { DataGrid } from '../components/useClient/MaterialUIClient';

const Pensum = () => {

  //State that storages API's data
  const [People, setPeople] = useState([]);
  const [infoPage, setInfoPage] = useState({});

  const GetList = (page, url) => {
    url = 
      page === null
      ? url
      : `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setInfoPage(data.info);
      });

  };

  useEffect(() => {
    GetList(0, null);
  }, []);

  //DataGrid's columns
  const columns = [
    { field: 'puesto', headerName: 'Puesto(#)', width: 130 },
    { field: 'fullName', headerName: 'Estudiante', width: 130 },
    { field: 'collegeCareer', headerName: 'Carrera', width: 430 },
    { field: 'semester', headerName: 'Semestre', width: 130 },
    { field: 'generalIndex', headerName: 'Indice general', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      // field: 'fullName',
      // headerName: 'Full name',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,
    },
  ];

  //Mapeo
  {People?.map((item) => {

    //DataGrid's rows
    const rows = [
      //{ id: {item.id}, puesto: {item.id}, fullName: {item.name}, collegeCareer: {item.type}, semester: {item.type}, generalIndex: {item.gender}},
      /*{id: 2, puesto: 2, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 3, puesto: 3, fullName: 'Jon', collegeCareer: 'Ingenieria en telecomunicaciones de redes informaticas', semester: 8, generalIndex: 3.9},
      { id: 4, puesto: 4, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 5, puesto: 5, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 6, puesto: 6, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 7, puesto: 7, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 8, puesto: 8, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 9, puesto: 9, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 10, puesto: 10, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 11, puesto: 11, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 12, puesto: 12, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 13, puesto: 13, fullName: 'Jon', collegeCareer: 'Ingenieria en telecomunicaciones de redes informaticas', semester: 8, generalIndex: 3.9},
      { id: 14, puesto: 14, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 15, puesto: 15, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 16, puesto: 16, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 17, puesto: 17, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 18, puesto: 18, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
      { id: 19, puesto: 19, fullName: 'Jon', collegeCareer: 'Ingenieria de Software', semester: 8, generalIndex: 3.9},
    }*/

    ];

    //DataGrid creation
    return (
      <div style={{ height: 650, width: '100%', background: '#fff', fontSize: '20px'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[10]}
        />
      </div>
    );

  })}
};

export default Pensum;