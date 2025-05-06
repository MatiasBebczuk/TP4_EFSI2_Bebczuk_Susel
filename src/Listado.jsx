import Citas from "./Citas.jsx"
import './Listado.css'

function Listado(){
    const Cita = Citas();
    return(
        <div className="Listado">
      <h2>Listado de párrafos</h2>
      <ul>
        {[...Array(3)].map((_, index) => (
          <li key={index}>{Cita}</li> 
        ))}
      </ul>
    </div>
    ); 

}

export default Listado