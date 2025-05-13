import Citas from "./Citas.jsx"
import './Listado.css'

function Listado({citas}){
    return(
        <div className="Listado">
      <ul>
        {citas.map((cita, i) => <Citas key={i} cita={cita}></Citas>)}
      </ul>
    </div>
    ); 

}

export default Listado