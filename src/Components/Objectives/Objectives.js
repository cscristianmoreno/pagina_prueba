import "./Objectives.css";

import Lupa from "./images/Lupa.js";
import Shield from "./images/Shield.js";
import Defense from "./images/Defense.js";
import Initialize from "./images/Initialize.js";
import Hands from "./images/Hands.js";
import Organization from "./images/Organization.js";
import Voice from "./images/Voice.js";
import Capacitation from "./images/Capacitation.js";
import Supervition from "./images/Supervition.js";
import Resources from "./images/Resources.js";
import Incorporation from "./images/Incorporation.js";
import Bus from "./images/Bus.js";

import { useInView } from "react-intersection-observer";

const Objectives = () => {
    const [ref, inView] = useInView({
        delay: 1000,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={"class_objectives_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_container_title">Objetivos</span>

            <div className="class_line_separated"/>

            <div className="class_objectives_icon_container">
                <div className="class_objectives_icon">
                    <Lupa/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Detectar</span>
                        <span className="class_objectives_description_subtitle">Detectar la tartamudez a temprana edad</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Shield/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Respaldar</span>
                        <span className="class_objectives_description_subtitle">Respaldar a la persona con tartamudez durante el periodo educativo.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Defense/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Defender</span>
                        <span className="class_objectives_description_subtitle">Defender sobre los derechos de las personas con tartamudez.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Initialize/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Iniciar</span>
                        <span className="class_objectives_description_subtitle">Iniciar acciones para favorecer el acceso y la mejora de oportunidades  de inserción laboral a personas que tartamudean.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Bus/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Traslado</span>
                        <span className="class_objectives_description_subtitle">Facilitar la gestión para el traslado de la persona con tartamudez y un acompañante.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Organization/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Organizar</span>
                        <span className="class_objectives_description_subtitle">Organizar actividades acompañar y asesorar al G.A.M. (grupo de ayuda mutua) y  G.A.P. (grupo de apoyo para padres).</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Voice/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Informar</span>
                        <span className="class_objectives_description_subtitle">Brindar información y capacitación sobre tartamudez a las familias, establecimientos, docentes y profesionales.</span>
                    </div>
                </div>
                
                <div className="class_objectives_icon">
                    <Capacitation/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Capacitar</span>
                        <span className="class_objectives_description_subtitle">Brindar capacitaciones periódicas en todos los ámbitos.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Supervition/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Supervisar</span>
                        <span className="class_objectives_description_subtitle">Asesorar y supervisar los  tratamientos que reciban las personas con tartamudez dentro de nuestra institución.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Resources/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Recursos</span>
                        <span className="class_objectives_description_subtitle">Procurar la obtención de recursos provenientes del sector público y/o privado para el financiamiento de las actividades de la Fundación.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Incorporation/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Incorporar</span>
                        <span className="class_objectives_description_subtitle">Facilitar la incorporación de voluntarios que permitan multiplicar el accionar de la entidad.</span>
                    </div>
                </div>

                <div className="class_objectives_icon">
                    <Hands/>
                    
                    &nbsp;
                    &nbsp;
                    <div className="class_objectives_description">
                        <span className="class_objectives_description_title">Accionar</span>
                        <span className="class_objectives_description_subtitle">Articular convenios con áreas gubernamentales gubernamentales nacionales, provinciales y municipales para le ejecución de proyectos.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objectives;