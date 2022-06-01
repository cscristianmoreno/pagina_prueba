import { useRef, useEffect } from "react";
import "./Carousel.css";
import Image_1 from "./images/image.jpg";

const Carousel = () => {
    const titleRef = useRef();
    const subtitleRef = useRef();
    const iconRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            titleRef.current.classList.add("class_effect_display");
        }, 1000);

        setTimeout(() => {
            subtitleRef.current.classList.add("class_effect_display");
        }, 1500);

        setTimeout(() => {
            iconRef.current.classList.add("class_effect_display");
        }, 2000);
    }, []);

    return(
        <div className="class_carousel_container">
            <img src={Image_1}/>
            
            <div className="class_carousel_title_container">
                <div className="class_carousel_title_main">

                    <span ref={titleRef} className="class_carousel_title class_effect_opacity">Fluyendo desde el alma</span>

                    <div className="class_line_separated" />
                    <span ref={subtitleRef} className="class_carousel_subtitle class_effect_opacity">Fundación Salteña de Tartamudez</span>

                    <div ref={iconRef} className="class_icon_container class_effect_opacity">
                        <a href="https://www.facebook.com/Fundaci%C3%B3n-Salte%C3%B1a-de-Tartamudez-113056783882151" target="_blank">
                            <i className="fab fa-facebook"/>
                        </a>

                        <a href="https://instagram.com/salta_fundaciontartamudez?igshid=YmMyMTA2M2Y=" target="_blank">
                            <i className="fab fa-instagram"/>
                        </a>

                        <a href="https://wa.me/+5493874822531" target="_blank">
                            <i className="fab fa-whatsapp"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carousel;