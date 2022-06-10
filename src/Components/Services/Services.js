import "./Services.css";
import Megaphone from "./images/Megaphone.js";
import Mente from "./images/Mente.js";
import Help from "./images/Help.js";
import Hands from "./images/Hands.js";

import { useInView } from "react-intersection-observer";
import { useRef, useCallback, useEffect } from "react";

const Services = () => {

    const { ref, inView, entry } = useInView({
        delay: 500,
        triggerOnce: true
    })

    return(
        <div ref={ref} className={"class_services_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            {/* <div className="class_services_triangle"/> */}
            
            <span className="class_container_title">¿Quiénes somos?</span>

            <div className="class_line_separated" />
            
            <span className="class_container_subtitle">Somos una entidad sin fines de lucro nacida de una realidad frecuentemente ignorada y desestimada. Somos personas con Tartamudez, Padres y Fonoaudiólogos de la Provincia de Salta, Argentina, que buscan visibilizar la Tartamudez y dar voz a las personas que viven con ella día a día.</span>

            <br/>
            <br/>
            <br/>
            <br/>

            <div className="class_services_icon_main">

                <span className="class_services_icon_title_main"><i className="fas fa-star"/>&nbsp;LO QUE BUSCAMOS</span>

                <div className="class_services_icon_container">
                    <div className="class_services_icon">
                        <Megaphone/> 

                        <span className="class_services_icon_title">Anunciar</span>

                        <div style={{width: "25px", borderColor: "#19bcdb"}} className="class_line_separated" />

                        <span className="class_services_icon_subtitle">
                            Anunciamos acerca de la tartamudez
                        </span>
                    </div>

                    <div className="class_services_icon">
                        <Mente/>

                        <span className="class_services_icon_title">Concientizar</span>

                        <div style={{width: "25px", borderColor: "#19bcdb"}} className="class_line_separated" />

                        <span className="class_services_icon_subtitle">
                            Concientizamos acerca de la tartamudez
                        </span>
                    </div>

                    <div className="class_services_icon">
                        <Help/>

                        <span className="class_services_icon_title">Asesorar</span>

                        <div style={{width: "25px", borderColor: "#19bcdb"}} className="class_line_separated" />

                        <span className="class_services_icon_subtitle">
                            Asesoramos acerca de la tartamudez
                        </span>
                    </div>

                    <div className="class_services_icon">
                        <Hands/>

                        <span className="class_services_icon_title">Apoyar</span>

                        <div style={{width: "25px", borderColor: "#19bcdb"}} className="class_line_separated" />

                        <span className="class_services_icon_subtitle">
                            Brindamos apoyo a personas con tartamudez
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services;