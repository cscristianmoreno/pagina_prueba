import { useRef } from "react";

import { useInView } from "react-intersection-observer";

import "./Group.css";
import Group1 from "./images/grupo.jpg";
import Group2 from "./images/grupo_2.jpg";
import Group3 from "./images/grupo_3.jpg";

const Group = () => {
    const [ref, inView] = useInView({
        delay: 1000,
        triggerOnce: true
    });

    return(
        <div ref={ref} className={"class_stammering_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_container_title">Grupos de ayuda</span>

            <div className="class_line_separated"/>

            <br/>

                <div className="class_stammering_image_container">
            <img className="class_stammering_image class_stammering_image_main" src={Group1}/>
                <img style={{marginLeft: "75%", marginTop: "70%"}} className="class_stammering_image class_stammering_image_absolute class_stammering_image_position_1" src={Group2}/>
                <img style={{marginRight: "80%", marginTop: "0%"}} className="class_stammering_image class_stammering_image_absolute class_stammering_image_position_2" src={Group3}/>
            </div>

            <div className="class_stammering_information_title_container">
                
                <div className="class_stammering_information_title">
                    <span>
                          <i style={{color: "orange"}} className="fas fa-user-friends"/>&nbsp;
                          ¿Qué es un grupo de ayuda?
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>
                <p className="class_stammering_information_text">
                    Un grupo de ayuda es un espacio en el cual diversas personas que comparten un mismo problema o dificultad se reúnen para intentar superar o mejorar su situación. Hay muchos tipos de grupos de ayuda, en función del colectivo de personas que decide reunirse.
                </p>
                
            </div>

            <div className="class_stammering_information_title_container">
                
                <div className="class_stammering_information_title">
                    <span>
                        <i style={{color: "#653b9b"}} className="fas fa-people-carry"/>&nbsp;
                        ¿Para qué sirve un grupo de ayuda?
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>
                <p className="class_stammering_information_text">
                    Se trata de una estrategia dirigida a la cooperación y al apoyo entre personas que viven con un mismo problema, de manera que se contribuya a que cada miembro pueda mejorar su competencia a la hora de adaptarse al problema en cuestión o sus consecuencias y afrontar posibles complicaciones futuras. Además de ello permite la expresión de dudas, miedos y emociones derivadas de su vivencia en un entorno acogedor y donde va a encontrarse con otros sujetos que han pasado por lo mismo y van a comprenderse entre sí.
                </p>
                
            </div>

            <div className="class_stammering_information_title_container">
                
                <div className="class_stammering_information_title">
                    <span>
                        <i style={{color: "red"}} className="fas fa-users"/>&nbsp;
                        Grupos G.A.M & G.A.P
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>

                <p className="class_stammering_information_text">
                    Los grupos de apoyo tienen una gran variedad de posibles aplicaciones y funciones, entre las cuales destacan las siguientes.
                </p>

                <ul className="class_stammering_information_types">
                    <li><i className="fas fa-circle"/>&nbsp;&nbsp;<span className="class_stammering_list">Grupo de ayuda mutua (G.A.M)</span>: El grupo de ayuda mutua está conformado por persona que sufren de tartamudez, el objetivo de este grupo es entender y brindar contención a las mismas, ofreciéndoles un espacio de reunión donde se puede abordar este tema más ampliamente.</li>
                    <li><i className="fas fa-circle"/>&nbsp;&nbsp;<span className="class_stammering_list">Grupo de ayuda para padres (G.A.P)</span>: El grupo de ayuda para padres es un espacio derivado a los mismos para informar y brindar herramientas de como llevar a cabo esta situación sobre sus hijos, dándoles consejos y brindándoles apoyo en todo momento.</li>
                </ul>
                
            </div>
        </div>

        
    )   
}

export default Group;