/*"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Asignaturas = () => {
  // State that stores API's data
  const [people, setPeople] = useState([]);
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

  // DataGrid's columns
  const columns = [
    { field: 'image', headerName: 'Image', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'type', headerName: 'Type', width: 430 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
  ];

  // DataGrid's rows
  const rows = people?.map((item) => ({
    id: item.id,
    image: item.image,
    name: item.name,
    type: item.type,
    status: item.status,
    gender: item.gender,
  }));

  // DataGrid creation
  return (
    <div style={{ height: 650, width: '100%', background: '#fff', fontSize: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default Asignaturas;*/





/*"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Asignaturas = () => {
  // State that stores API's data
  const [people, setPeople] = useState([]);

  const GetList = (url) => {
    url = `https://localhost:44377/api/Usuarios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setInfoPage(data.info);
      });
  };

  useEffect(() => {
    GetList(null);
  }, []);

  // DataGrid's columns
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'lastName', headerName: 'Apellido', width: 430 },
    { field: 'rol', headerName: 'Rol', width: 130 },
    { field: 'userName', headerName: 'Nombre de usuario', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'state', headerName: 'Estado', width: 130 },
  ];

  // DataGrid's rows
  const rows = people?.map((item, index) => ({
    id: index,
    name: item.Nombre_Usuario,
    lastName: item.Apellido_Usuario,
    rol: item.Rol,
    userName: item.UserName,
    email: item.Email,
    state: item.Estado,

  }));

  // DataGrid creation
  return (
    <div style={{ height: 650, width: '100%', background: '#fff', fontSize: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default Asignaturas;*/











/*"use client"
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Asignaturas = () => {
  const [employeeList, setEmployeeList] =  useState([])

  useEffect(() => {
    getEmployeeList();
  }, []);

  const getEmployeeList = () => {
    axios.get("https://localhost:44377/api/Usuarios").then((response) => {
      
      setEmployeeList(response.data);
    }).catch((error) => {
      console.error('Error al obtener la lista de empleados:', error);
    }); 
}

  // DataGrid's columns
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'lastName', headerName: 'Apellido', width: 430 },
    { field: 'rol', headerName: 'Rol', width: 130 },
    { field: 'userName', headerName: 'Nombre de usuario', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'state', headerName: 'Estado', width: 130 },
  ];

  // DataGrid's rows
  const rows = employeeList.map((item, index) => ({
    id: index,
    name: item.Nombre_Usuario,
    lastName: item.Apellido_Usuario,
    rol: item.Rol,
    userName: item.UserName,
    email: item.Email,
    state: item.Estado,

  }));

  // DataGrid creation
  return (
    <div style={{ height: 650, width: '100%', background: '#fff', fontSize: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default Asignaturas;*/







"use client"
import React, { useState } from 'react';
import axios from 'axios';

function MyFormPage() {

  const userData = {
    User_Name: 0,
    Password: ""
  };

  const [inputUser, setInputUser] = useState(userData)

  const handleUser = (e) =>{
    setInputUser({...inputUser, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await axios.post("https://localhost:44377/api/Login", inputUser).then((response)=>{
      console.log(response);
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error('Error:', error);
    });
  };


  // Creamos estados para almacenar los valores de los campos del formulario
  /*const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier lógica que necesites con los datos del formulario
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };*/

  return (
    <section>
    <div style={{background:'black'}}>
      
      <div>
        <h2>Log in</h2>
        <div>
          <label for="full-user" >User</label>
          <input type="number" 
          value={12}  
          onChange={handleUser} name = "UserName" id="full-user" user="full-user" />         
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password"   
          value={'password123&'}
          
          onChange={handleUser} name = "Password" id="password" user="password" />
        </div>
        
          <button onClick={handleSubmit}>Log in</button>
        
      </div>
    </div>
  </section>
  );
}

export default MyFormPage;
