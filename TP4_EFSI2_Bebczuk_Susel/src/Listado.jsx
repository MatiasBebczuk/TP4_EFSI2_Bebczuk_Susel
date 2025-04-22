import Citas from "./Citas.jsx"

function Listado(){
    const Cita = Citas();
    return(
        <div className="Listado">
      <h2>Listado de párrafos</h2>
      <ul>
        {[...Array(3)].map((_, index) => (
          <p>{index}{Cita}</p> 
        ))}
      </ul>
    </div>
    ); 

}

export default Listado