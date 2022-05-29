import { useRef } from "react";
import MenuDefault from "./MenuDefault";
import "./Menu.css";
import Feather from "./images/Feather.js";
import Fundacion from "./images/fundacion.jpg";

import { useMediaQuery } from "react-responsive";

const Menu = () => {

    const responsive = useMediaQuery({
        query: "(max-width: 988px)"
    });

    const menuResponsive = useRef();

    const handleOpenMenu = () => {
        menuResponsive.current.classList.toggle("class_menu_responsive_display");
    }

    if (responsive) {
        return(
            <>
            <MenuDefault/>

            <div className="class_menu_container">
                <img src={Fundacion}/>

                <i onClick={() => handleOpenMenu()} className="fas fa-bars"/>
            </div>

            <div ref={menuResponsive} className="class_menu_responsive">
                <img src={Fundacion}/>
            </div>
        </>

            
        )
    }

    return(
        <>
            <MenuDefault/>

            <div className="class_menu_container">
                <div>
                    {/* <Feather/> */}
                    <img src={Fundacion}/>
                    <span className="class_menu_title">Fluyendo desde el alma</span>
                </div>

                <ul className="class_menu_items">
                    <li>Inicio</li>
                    <li>Acerca de la tartamudez</li>
                    <li>Organización</li>
                </ul>
            </div>
        </>
    )
}

export default Menu;