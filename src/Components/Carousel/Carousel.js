import "./Carousel.css";
import Image_1 from "./images/image.jpg";

const Carousel = () => {
    return(
        <div className="class_carousel_container">
            <img src={Image_1}/>

            <div className="class_carousel_title_container">
                <div className="class_carousel_title_main">
                    <span className="class_carousel_title">Fluyendo desde el alma</span>
                    <div className="class_line_separated" />
                    <span className="class_carousel_subtitle">Fundación Salteña de Tartamudez</span>

                    <div className="class_icon_container">
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