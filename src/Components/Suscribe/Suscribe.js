import "./Suscribe.css";

const Suscribe = () => {
    return(
        <div className="class_suscribe_container">
            <span className="class_suscribe_title">Suscríbete y recibe todas las novedades acerca de la Fundación Salteña de Tartamudez</span>

            <br/>

            <div className="class_suscribe_form">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-paper-plane"/></span>
                <input type="text" className="form-control" placeholder="Correo electrónico..." aria-label="Username" aria-describedby="basic-addon1"/>
                <button className="btn btn-primary">Suscribirme</button>
            </div>
        </div>
    )
}

export default Suscribe;