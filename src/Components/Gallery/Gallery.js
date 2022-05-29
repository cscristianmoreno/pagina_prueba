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

const Gallery = () => {
    return(
        <div className="class_gallery_container">
            <span className="class_container_title">Acerca de la fundación</span>

            <div className="class_line_separated"/>

            <br/>
            <br/>

            <span className="class_container_subtitle">Somos una entidad sin fines de lucro nacida de una realidad frecuentemente ignorada y desestimada. Somos personas con Tartamudez, Padres y Fonoaudiólogos de la Provincia de Salta, Argentina, que buscan visibilizar la Tartamudez y dar voz a las personas que viven con ella día a día.</span>

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