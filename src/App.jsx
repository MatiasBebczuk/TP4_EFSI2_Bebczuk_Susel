import { useState } from 'react';
import Formulario from "./Formulario.jsx"
import Listado from "./Listado.jsx"

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
