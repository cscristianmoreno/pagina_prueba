import "./Footer.css";
// import Logo from "../Menu/images/fundacion.jpg";

const Footer = () => {
    return(
        <div className="class_footer_container">

            <div className="class_footer_icon_container">
                <span className="class_footer_title">Fundación Salteña de Tartamudez</span>

                <br/>
                <br/>
                <span className="class_footer_subtitle">Buscamos concientizar acerca de la tartamudez y su impacto en la vida de las personas</span>
                
                <br/>
                <br/>
                <span className="class_footer_subtitle">Conocé más acerca de la tartamudez en nuestras redes sociales</span>
                

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
                <span className="class_footer_title">Objetivos claves</span>

                <ul>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Detectar la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Respaldar la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Defender la tartamudez</li>
                    <li><i className="fas fa-angle-double-right"/>&nbsp;&nbsp;Concientizar acerca de la tartamudez</li>
                </ul>
            </div>

            <div className="class_footer_caracteristics">
                
                <span className="class_footer_title">Acerca de</span>
                <br/>
                <br/>

                <span style={{fontStyle: "italic"}} className="class_footer_reserved_title">© 2022 Fundación Salteña de Tartamudez.</span>
                <br/>
                <span className="class_footer_reserved_title">Todos los derechos reservados.</span>
                <br/>
                <span className="class_footer_reserved_title">Diseño y desarrollo: <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank">Cristian Moreno</a></span>
            </div>
        </div>
    )
}

export default Footer;