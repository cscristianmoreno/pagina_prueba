import "./Footer.css";
// import Logo from "../Menu/images/fundacion.jpg";

import Hope from "./images/hope.jpg";
import Pandis from "./images/pandis.jpg";

const Footer = () => {
    return(
        <div className="class_footer_container">

            <div className="class_footer_icon_container">
                <span className="class_footer_icon_title">Fundación Salteña de Tartamudez</span>

                <br/>
                <br/>
                <span className="class_footer_icon_subtitle">Buscamos concientizar acerca de la tartamudez y su impacto en la vida de las personas</span>
                
                <br/>
                <br/>
                <span className="class_footer_icon_subtitle">Conocé más acerca de la tartamudez en nuestras redes sociales</span>
                

                <div className="class_footer_icon">
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

            <div className="class_footer_caracteristics">
                <span className="class_footer_caracteristics_title">Objetivos claves</span>

                <ul>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Detectar la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Respaldar la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Defender la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Concientizar acerca de la tartamudez</li>
                </ul>
            </div>

            <div className="class_footer_caracteristics">
                <span className="class_footer_caracteristics_title">Organizaciones aliadas</span>
                <br/>
                <br/>
                <div className="class_footer_image_container">
                    <div className="class_footer_image">
                        <img src={Hope}/>
                        <span className="class_footer_image_title">H.O.P.E</span>
                    </div>

                    <div className="class_footer_image">
                        <img src={Pandis}/>
                        <span className="class_footer_image_title">Grupo Pandis</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;