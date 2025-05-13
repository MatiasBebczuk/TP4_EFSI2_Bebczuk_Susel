import { useState } from 'react';
import Formulario from "./Formulario.jsx"
import Listado from "./Listado.jsx"

function App() {
 const [citas, setCitas] = useState([]);

  return (
    <>
      <Formulario citas = {citas} setCitas = {setCitas}/>
      <Listado citas = {citas}/>
    </>
  )
}

export default App
