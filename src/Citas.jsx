import './Citas.css'

function Citas({cita}){
    return(
      <div className="cita">
        <p className="NombreDueño">Nombre del dueño: {cita.NombreDueño}</p> 
        <p className="NombreMascota">SubName: {cita.NombreMascota}</p> 
        <p className="Fecha">Fecha: {cita.Fecha}</p> 
        <p className="Hora">Hora: {cita.Hora}</p> 
        <p className="Sintomas">Sintomas: {cita.Sintomas}</p> 
      </div>
    ); 

}

export default Citas