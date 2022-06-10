import { useEffect, useState } from "react";

import "./Suscribe.css";
import { useInView } from "react-intersection-observer";

const Suscribe = () => {

    const [email, setEmail] = useState("");

    const [ref, inView] = useInView({
        delay: 500,
        triggerOnce: true
    });

    const handleInputControl = (event) => {
        setEmail(event.target.value);
    }

    return(
        <div ref={ref} className={"class_suscribe_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_suscribe_title">Suscríbete y recibe todas las novedades acerca de la Fundación Salteña de Tartamudez</span>

            <br/>

            <form className="class_suscribe_form">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-paper-plane"/></span>
                <input onChange={handleInputControl} type="text" className="form-control" placeholder="Correo electrónico..." aria-label="Username" aria-describedby="basic-addon1"/>
                <button type="submit" className="btn btn-primary">Suscribirme</button>
            </form>
        </div>
    )
}

export default Suscribe;