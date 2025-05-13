import './Formulario.css';

function Formulario({citas, setCitas}){
    const añadirCita = () => {
        let nuevo = {
            Name: document.querySelector("#Name").value,
            SubName: document.querySelector("#SubName").value,
            Email: document.querySelector("#Email").value,
            Fecha: document.querySelector("#Fecha").value,
            Hora: document.querySelector("#Hora").value,
            Password: document.querySelector("#Password").value,
        };

        for(const attr in nuevo){
            if(!nuevo[attr]) return;
        }

        let aux = [...citas, nuevo];
        setCitas(aux);
        
    };

    return(
        <div className="form">
            <label>Name:</label>
            <input id="Name" type="text"/>
            <label>SubName:</label>
            <input id="SubName" type="text"/>
            <label>Email:</label>
            <input id="Email" type="mail"/>
            <label>Fecha:</label>
            <input id="Fecha" type="date"/>
            <label>Hora:</label>
            <input id="Hora" type="time"/>
            <label>Password:</label>
            <input id="Password" type="password"/>
            <input type="submit" value="Submit" onClick={añadirCita}/>
        </div>
    ); 

}

export default Formulario