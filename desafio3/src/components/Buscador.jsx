import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
const Buscador = (
{bd, setBuscar}
) => {


const {nombre} =bd

const handleBuscar= (e) => {
const a = e.target.value
console.log(bd)
const resultadoFiltrado = bd.filter(
    (objeto) =>
      objeto.nombre.toLowerCase().includes(a.toLowerCase()) // Filtrar por el atributo 'nombre'
  );

setBuscar(resultadoFiltrado)
}

  return (
    <>
    

    <Form.Control
      type="text"
      placeholder='Busca un colaborador'
      id="b1"
      className='mb-4'
     onChange={ handleBuscar} 
    />
  
    
    
    </>
 
  )
}

export default Buscador
