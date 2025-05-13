import './Formulario.css';

function Formulario({citas, setCitas}){
    const añadirCita = () => {
        let nuevo = {
            NombreDueño: document.querySelector("#NombreDueño").value,
            NombreMascota: document.querySelector("#NombreMascota").value,
            Fecha: document.querySelector("#Fecha").value,
            Hora: document.querySelector("#Hora").value,
            Sintomas: document.querySelector("#Sintomas").value,
        };

        for(const attr in nuevo){
            if(!nuevo[attr]) return;
        }

        let aux = [...citas, nuevo];
        setCitas(aux);
        
    };

    return(
        <div className="form">
            <label>Nombre del dueño:</label>
            <input id="NombreDueño" type="text"/>
            <label>Nombre de la mascota:</label>
            <input id="NombreMascota" type="text"/>
            <label>Fecha:</label>
            <input id="Fecha" type="date"/>
            <label>Hora:</label>
            <input id="Hora" type="time"/>
            <label>Sintomas:</label>
            <textarea id="Sintomas"></textarea>
            <input type="submit" value="Submit" onClick={añadirCita}/>
        </div>
    ); 

}

export default Formulario