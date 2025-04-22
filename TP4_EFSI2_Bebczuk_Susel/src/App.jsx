import { useState } from 'react';
import './App.css'
import Formulario from "./Formulario.jsx"
import Listado from "./Listado.jsx"
import Citas from "./Citas.jsx"

function App() {
 const [citas, setCitas] = useState([]);

  return (
    <>
      <Formulario/>
      <Listado Citas = {citas} setCitas = {setCitas}/>
    </>
  )
}

export default App
