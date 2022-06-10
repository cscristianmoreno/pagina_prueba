import "./Gallery.css";
import camera from "./images/image_camera.jpg";
import logo from "./images/gallery/logo.jpg";
import image_1 from "./images/gallery/imagen_1.jpg";
import image_2 from "./images/gallery/imagen_2.jpg";
import image_3 from "./images/gallery/imagen_3.jpg";
import image_4 from "./images/gallery/imagen_4.jpg";
import image_5 from "./images/gallery/imagen_5.jpg";
import image_6 from "./images/gallery/imagen_6.jpg";
import image_7 from "./images/gallery/imagen_7.jpg";
import image_8 from "./images/gallery/imagen_8.jpg";
import { useInView } from "react-intersection-observer";

const Gallery = () => {

    const [ref, inView] = useInView({
        delay: 500,
        triggerOnce: true
    });


    return(
        <div ref={ref} className={"class_gallery_container class_effect_opacity" + ((inView) ? " class_effect_display" : "")}>
            <span className="class_container_title">Acerca de la fundación</span>

            <div className="class_line_separated"/>

            <span className="class_container_subtitle">Informamos a la sociedad sobre Tartamudez y sus características reales, capacitamos a profesionales fonoaudiólogos en detección y tratamiento con bases científicas; brindamos orientación a psicólogos, psicopedagogos, médicos y demás personal del área de  Salud y Educación, en la  detección,  entendimiento y contención adecuada; brindamos asesoramiento a las personas que tartamudean y a sus familias; y trabajamos para brindar acceso a herramientas que aumenten la confianza, autoestima, perdiendo el miedo, la vergüenza, inseguridad y el estigma de expresarse, iniciando un camino de aceptación.</span>

            <br/>
            <br/>

            <div className="class_gallery_image_container">
                <div className="class_gallery_image">
                    <img src={image_1}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_2}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_3}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_4}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_5}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_6}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_7}/>
                </div>

                <div className="class_gallery_image">
                    <img src={image_8}/>
                </div>
            </div>

        </div>
    )
}

export default Gallery;