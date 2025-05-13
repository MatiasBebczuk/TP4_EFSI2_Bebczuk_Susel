import './Citas.css'

function Citas({cita}){
    return(
      <div className="cita">
        <p className="Name">Name: {cita.Name}</p> 
        <p className="SubName">SubName: {cita.SubName}</p> 
        <p className="Email">Email: {cita.Email}</p> 
        <p className="Fecha">Fecha: {cita.Fecha}</p> 
        <p className="Password">Password: {cita.Password}</p> 
      </div>
    ); 

}

export default Citas