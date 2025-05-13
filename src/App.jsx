import { useState } from 'react';
import Formulario from "./Formulario.jsx";
import Listado from "./Listado.jsx";
import './App.css';

function App() {
 const [citas, setCitas] = useState([]);

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <Formulario citas = {citas} setCitas = {setCitas}/>
      <Listado citas = {citas}/>
    </div>
  )
}

export default App
