import "./App.css";
import { BaseColaboradores } from "../BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Buscador from "./components/Buscador";
import { useEffect } from "react";

function App() {

  const [bd, setBd] = useState(BaseColaboradores);



  const [ alert, setAlert]= useState("")

  const [buscar, setBuscar] = useState("")




  return (<>

  <Buscador
bd = {bd}
setBd = {setBd}
setBuscar = {setBuscar}
/>


  <Listado
  bd = {bd}
  buscar = {buscar}
  setBd = {setBd}

  />
  


<Formulario
   buscar = {buscar}
  alert= {alert}
  setAlert = {setAlert}
  setBd = {setBd}
  bd = {bd}
  />


  </>)
}

export default App;
