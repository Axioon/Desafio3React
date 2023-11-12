
import Alert from "./Alert";
import React, { useState, useId, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Listado from "./Listado";
const Formulario = ({ setAlert, alert,setBd,buscar,
  bd }) => {

  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
    id: Date.now(),
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    const vacios =
      !colaborador.nombre ||
      !colaborador.correo ||
      !colaborador.edad ||
      !colaborador.cargo ||
      !colaborador.telefono;

    if (vacios) {
      setAlert({
        error: true,
        msg: "Completa todos los campos.",
        color: "warning",
      });
    } else {
      setAlert({
        error: true,
        msg: "¡Todo perfecto!",
        color: "success",
      });

      setTimeout(() => {

        setBd((prevBd) => [...prevBd, colaborador]); // Usar una función para actualizar el estado
        
        setColaborador({
          nombre: "",
          correo: "",
          edad: "",
          cargo: "",
          telefono: "",
          id: Date.now(),
        });
        setAlert(null);

      }, 1000);
    }
  };



  return (
    <>

  
      <Form className=" shadow-lg container w-25 rounded-3" onSubmit={handleSubmit}>
        <Form.Label className="  fw-bold   fs-3 text-center">
          {" "}
          Agregar colaborador
        </Form.Label>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicNombre"
        >
          <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            className="w-78"
            value={colaborador.nombre}
            onChange={(e)=> setColaborador ( {...colaborador, nombre :e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
            type="email"
            name="email"
            value={colaborador.correo}
         placeholder="Email del colaborador" 
         onChange= { (e)=>  setColaborador( {...colaborador, correo: e.target.value}) }
         
         /></Form.Group>
    

      <Form.Group className="mb-3" controlId="formBasicEdad">
      <Form.Control type="text" placeholder="Edad del colaborador"
        onChange={(e)=> setColaborador( { ...colaborador, edad: e.target.value})}
        value={colaborador.edad}
      
      /></Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
      <Form.Control type="text" placeholder="Cargo del colaborador"
      onChange={ (e)=> setColaborador( {...colaborador, cargo: e.target.value})}
      value={colaborador.cargo}
      
      /></Form.Group>


      <Form.Group className="mb-3" controlId="formBasicTelefono">
      <Form.Control type="text" placeholder="Telefono del colaborador" 
      onChange={ (e)=> setColaborador ( {...colaborador, telefono: e.target.value})}
      value={colaborador.telefono}
      
      /></Form.Group>
 


        <Alert
        alert = {alert}
        
        />

        <Button variant="primary" type="submit" className="  m-2">
          Agregar colaborador
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
