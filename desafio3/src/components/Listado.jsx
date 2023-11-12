import React from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Listado = ({ bd, buscar,setBd }) => {
console.log(buscar)

if ( buscar === "" ){
  return (




    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>

      {bd.map((objeto, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{objeto.nombre}</td>
          <td>{objeto.correo}</td>
          <td>{objeto.edad}</td>
          <td>{objeto.cargo}</td>
          <td>{objeto.telefono}</td>
        </tr>

        
      ))}

      </tbody>
    </Table>





  );



}else{
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>

      {buscar.map((objeto, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{objeto.nombre}</td>
          <td>{objeto.correo}</td>
          <td>{objeto.edad}</td>
          <td>{objeto.cargo}</td>
          <td>{objeto.telefono}</td>
        </tr>
      ))}

      </tbody>
    </Table>
  );






}





}


export default Listado;
