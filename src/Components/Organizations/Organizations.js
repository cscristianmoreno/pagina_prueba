import "./Organizations.css";

import Hope from "./images/hope.jpg";
import Pandis from "./images/pandis.jpg";

const Organizations = () => {
    return(
        <div className="class_organizations_container">
            <span className="class_container_title">Organizaciones asociadas</span>

            <div className="class_line_separated"/>

            <span className="class_container_subtitle">A lo largo de los últimos meses, otras fundaciones se han unido y han generado ideas para beneficiar a miles de personas con tartamudez en Salta. Hoy, más que nunca, la unión y solidaridad prevalecen en nuestra fundación.</span>

            <br/>

            <div className="class_organizations_image_container">
                <div className="class_organizations_image">
                    <img src={Hope}/>
                    
                    <span className="class_organizations_image_title">H.O.P.E</span>

                    <div className="class_organizations_link_container">
                        <i className="fas fa-link"/>
                        &nbsp;
                        <a href="http://www.fundacionhope.org.ar/" target="_blank">Sitio web</a>
                    </div>
                </div>

                <div className="class_organizations_image">
                    <img src={Pandis}/>
                    
                    <span className="class_organizations_image_title">Grupo Pandis</span>

                    <div className="class_organizations_link_container">
                        <i className="fas fa-link"/>
                        &nbsp;
                        <a href="https://grupopandis.org/" target="_blank">Sitio web</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Organizations;