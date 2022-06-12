import { useRef } from "react";

import { useInView } from "react-intersection-observer";

import "./Stammering.css";
import Stuttering from "./images/tartamudez.jpg";
import Stuttering2 from "./images/tartamudez_2.jpg";
import Stuttering3 from "./images/tartamudez_3.jpg";

const Stammering = () => {
    const [ref, inView] = useInView({
        delay: 1000,
        triggerOnce: true
    });

    const stutteringRef = useRef();
    const reasonTextRef = useRef();
    const reasonTypesRef = useRef();
    const tratmentTextRef = useRef();
    const tratmentTypesRef = useRef();

    const handleOpenStutteringRef = () => {
        // stutteringRef.current.classList.toggle("class_stammering_information_display");
    }

    const handleOpenReasonRef = () => {
        // reasonTextRef.current.classList.toggle("class_stammering_information_display");
        // reasonTypesRef.current.classList.toggle("class_stammering_information_display");
    }

    const handleOpenTratmentRef = () => {
        // tratmentTextRef.current.classList.toggle("class_stammering_information_display");
        // tratmentTypesRef.current.classList.toggle("class_stammering_information_display");
    }

    return(
        <div ref={ref} className={"class_stammering_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_container_title">Historia de la tartamudez</span>

            <div className="class_line_separated"/>
        
            <div className="class_stammering_image_container">
                <img className="class_stammering_image class_stammering_image_main" src={Stuttering2}/>
                <img style={{marginLeft: "75%", marginTop: "-0%"}} className="class_stammering_image class_stammering_image_absolute class_stammering_image_position_1" src={Stuttering}/>
                <img style={{marginRight: "75%", marginTop: "60%"}} className="class_stammering_image class_stammering_image_absolute class_stammering_image_position_2" src={Stuttering3}/>
            </div>
            
            <div onClick={() => handleOpenStutteringRef()} className="class_stammering_information_title_container">
                
                <div className="class_stammering_information_title">
                    <span>
                          <i style={{color: "#e95757"}} className="fas fa-book"/>&nbsp;
                          Historia de la tartamudez
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>
                <p ref={stutteringRef} className="class_stammering_information_text">La tartamudez es conocida desde la antigüedad clásica, y ya Aristóteles señalaba a la lengua como responsable de la misma, incapaz de seguir la velocidad con que fluían las ideas. Esta idea fue sostenida hasta el siglo XIX, en que los cirujanos intentaban corregir la lengua con medios braquiales (dividiendo su raíz, cortándole cuñas, añadiendo prótesis...). Otros, en cambio, recomendaban el ensanchamiento de las vías respiratorias y la extirpación de las vegetaciones adenoides y de las amígdalas.</p>
            </div>

            <div onClick={() => handleOpenStutteringRef()} className="class_stammering_information_title_container">
                
                <div className="class_stammering_information_title">
                    <span>
                          <i style={{color: "orange"}} className="fas fa-exclamation-circle"/>&nbsp;
                          ¿Qué es la tartamudez?
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>
                <p ref={stutteringRef} className="class_stammering_information_text">La tartamudez es un trastorno del habla que conlleva problemas frecuentes y considerables de fluidez normal y de continuidad del habla. Las personas que tartamudean saben lo que quieren decir, pero tienen dificultades para decirlo. Por ejemplo, pueden repetir o prolongar una palabra, una sílaba, una consonante o una vocal. O bien, es posible que hagan pausas mientras hablan porque han llegado a una palabra o sonido problemáticos.</p>
            </div>

            <div className="class_stammering_information_title_container">
                <div onClick={() => handleOpenReasonRef()} className="class_stammering_information_title">
                    <span>
                          <i style={{color: "#653b9b"}} className="fas fa-microscope"/>&nbsp;
                          ¿Cuáles son sus causas?
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>
                
                <p ref={reasonTextRef} className="class_stammering_information_text">
                    Los investigadores continúan estudiando las causas de fondo de la tartamudez del desarrollo. Es posible que intervenga una combinación de factores. Las causas posibles de la tartamudez del desarrollo pueden ser:
                </p>

                <ul ref={reasonTypesRef} className="class_stammering_information_types">
                    <li><i className="fas fa-circle"/>&nbsp;&nbsp;<span className="class_stammering_list">Neurogénica</span>: Es producida por alguna lesión o golpe en el cerebro. También se conoce como tartamudez adquirida. El tartamudeo puede ocurrir en cualquier parte de la palabra. Tartamudean incluso cantando o susurrando. No muestran miedo o ansiedad.</li>
                    <li><i className="fas fa-circle"/>&nbsp;&nbsp;<span className="class_stammering_list">Psicógena</span>: Es la menos común. Es producido por algún trauma grave. Por el siglo XIX, se pensaba que era la causa principal de tartamudez. Con los recientes estudios, se ha demostrado que no era correcta. El tartamudeo es independiente de la situación. No muestran ansiedad.</li>
                    <li><i className="fas fa-circle"/>&nbsp;&nbsp;<span className="class_stammering_list">De desarrollo</span>: Es el tipo de tartamudez más común. Ocurre en el momento en que el niño se encuentra aprendiendo el lenguaje y el habla, alrededor de los 2 y 5 años. Luego, cuando el infante aprende estructuras gramaticales más complejas presenta difluencias propias de este aprendizaje. Unos reaccionarán adecuadamente, recuperándose de esta fase. Otros, si se han dado los factores en intensidad y relación adecuados para disparar la tartamudez, reaccionarán ante estas difluencias desarrollando estrategias para superarlas (uso de fuerza y tensión en el habla) y ocultarlas (evitar hablar).</li>
                </ul>
            </div>

            <div className="class_stammering_information_title_container">
                <div onClick={() => handleOpenTratmentRef()} className="class_stammering_information_title">
                    <span>
                        <i style={{color: "red"}} className="fas fa-book-medical"/>&nbsp;
                        Tratamiento
                    </span>
                    <i className="fas fa-angle-down"/>
                </div>

                <p ref={tratmentTextRef} className="class_stammering_information_text">
                    La tartamudez es extremadamente compleja, no se puede eliminar de un día para otro; se debe seguir un tratamiento global a través de un logopeda ante los primeros síntomas. No hay por qué alarmarse. Debe intentarse identificar en qué cosas le está afectando y de qué manera.

                    <br/>
                    <br/>

                    También para el tratamiento de tartamudeo existen aplicaciones móviles y programas para el ordenador. El objetivo principal de tal tipo de aplicaciones es recuperar el círculo articulatorio digo –>oigo –> construyó frase –> digo, etc. utilizando diferentes métodos de tratamiento de tartamudeo.
                </p>
{/* 
                <ul ref={tratmentTypesRef} className="class_stammering_information_types">
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Es fundamental no reaccionar negativamente ante las dificultades que se experimentan, debe evitarse la manifestación de signos de ansiedad o impaciencia. Las autocríticas y censuras en este aspecto deben olvidarse por completo, y practicarse la relajación.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Se debe evitar corregir al niño, dejarle que se exprese. Darle tiempo es imprescindible.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Es recomendable obtener apoyo de amigos y familiares. Debe tratarse de identificar aquellas personas en la que se pueda confiar para compartir los avances en el proceso de afrontamiento.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Deben potenciarse situaciones para conversar y hablar en un ambiente relajado y tranquilo, sin prestar demasiada atención a los fallos.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Es bueno conservar el contacto visual natural cuando se esté hablando, reforzando la conversación con el lenguaje gestual movimientos de cabeza, sonrisas.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Debe hablarse abiertamente sobre la tartamudez, informar a los oyentes o participantes de una conversación si se necesita más tiempo para comunicarse. El tartamudo debe poder utilizar el tiempo que necesite para expresarse.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;La recuperación probablemente será un proceso largo y gradual, por lo que debe conservarse la paciencia y el respeto consigo mismo.</li>
                    <li><i style={{fontSize: "16px"}} className="fas fa-angle-right"/>&nbsp;&nbsp;Es importante enseñar a los demás niños a no burlarse ni hacerle bullying al afectado, ya que esto demuestra falta de buenos modales.</li>
                </ul> */}
            </div>
        </div>
    )
}

export default Stammering;