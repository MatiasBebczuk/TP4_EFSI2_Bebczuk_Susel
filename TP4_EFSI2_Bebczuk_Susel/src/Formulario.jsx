function Formulario(){
    return(
        <form className="form">
                <label>
                        Name:
                        <input type="text" name="name" />
                        SubName:
                        <input type="text" name="subname" />
                        Email:
                        <input type="mail" name="email" />
                        Password:
                        <input type="password" name="password" />
                </label>
            <input type="submit" value="Submit" />
        </form>
    ); 

}

export default Formulario