import "./Members.css";
import user_1 from "./images/user_1.jpg";
import user_2 from "./images/user_2.jpg";
import user_3 from "./images/user_3.jpg";
import user_4 from "./images/user_4.jpg";

import { useInView } from "react-intersection-observer";

const Members = () => {

    const [ref, inView] = useInView({
        delay: 1000,
        triggerOnce: true
    });

    return(
        <div ref={ref} className={"class_members_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_members_title"><i className="fas fa-users"/>&nbsp;&nbsp;Fundadores</span>

            <div className="class_members_image_container">
                <div className="class_members_image">
                    <img src={user_1}/>
                    
                    <span className="class_members_name">LORENA GALVAN</span>
                    <span className="class_members_role"><i className="fas fa-star"/>&nbsp;Presidenta</span>
                    <br/>
                    <span className="class_members_description">Madre de un niño con tartamudez</span>
                </div>

                <div className="class_members_image">
                    <img src={user_2}/>
                    
                    <span className="class_members_name">ANALÍA CORRAL</span>
                    <span className="class_members_role"><i className="fas fa-sticky-note"/>&nbsp;Secretaria</span>
                    <br/>
                    <span className="class_members_description">Lic. en Fonoaudiología</span>
                    <span className="class_members_description">Dip. en transtornos de la fluidez</span>
                </div>

                <div className="class_members_image">
                    <img src={user_3}/>
                    
                    <span className="class_members_name">ALEJANDRA NUÑEZ</span>
                    <span className="class_members_role"><i className="fas fa-coins"/>&nbsp;Tesorera</span>
                    <br/>
                    <span className="class_members_description">Profesora en Arte</span>
                </div>

                <div className="class_members_image">
                    <img src={user_4}/>
                    
                    <span className="class_members_name">CARINA MUÑOZ</span>
                    <span className="class_members_role"><i className="fas fa-headset"/>&nbsp;Vocal 1</span>
                    <br/>
                    <span className="class_members_description">Estudiante</span>
                    <span className="class_members_description">Persona con tartamudez</span>
                </div>
            </div>
        </div>
    )
}

export default Members;