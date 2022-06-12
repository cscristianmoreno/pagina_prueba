import { useState, useRef } from "react";
import MenuDefault from "./MenuDefault";
import "./Menu.css";
import Feather from "./images/Feather.js";
import Fundacion from "./images/fundacion.jpg";

import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const menuItems = [
    { icon: "fas fa-comment", item: "SU HISTORIA", link: "historia_de_la_tartamudez" },
    { icon: "fas fa-user-friends", item: "G.A.M & G.A.P", link: "grupos_de_ayuda_mutua" },
    // { icon: "fas fa-book", item: "ACTIVIDADES", link: "actividades" },
    // { icon: "fas fa-book", item: "PREGUNTAS", link: "actividades" },
    // { icon: "fas fa-book", item: "FORMACIÓN", link: "actividades" },
    // { icon: "fas fa-book", item: "DESCRUBIENDO", link: "actividades" }
];

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(0);

    const responsive = useMediaQuery({
        query: "(max-width: 988px)"
    });

    const menuResponsive = useRef();
    const subMenuRef = useRef();

    const handleOpenMenu = () => {
        
        menuResponsive.current.classList.toggle("class_menu_responsive_display");
    }

    const handleOpenSubMenu = (e) => {
        e.currentTarget.classList.toggle("class_menu_items_selected");
        subMenuRef.current.classList.toggle("class_menu_submenu_display");
        setOpenMenu(!(openMenu));
    }

    if (responsive) {
        return(
            <>
            <MenuDefault/>

            <div className="class_menu_container">
                <NavLink to="/">   
                    <img src={Fundacion}/>
                </NavLink>

                <i onClick={() => handleOpenMenu()} className="fas fa-bars"/>
            </div>

            <div ref={menuResponsive} className="class_menu_responsive">
                <img src={Fundacion}/>

                <ul className="class_menu_responsive_items">
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive) ? "class_menu_items_selected" : undefined}>Inicio</NavLink>
                    </li>
                    <li onClick={(e) => handleOpenSubMenu(e)} style={{position: "relative"}}>
                    <span>Acerca de la tartamudez&nbsp;&nbsp;<i className={(openMenu) ? "fas fa-angle-down class_menu_icon class_menu_icon_rotate" :"fas fa-angle-down class_menu_icon"}/></span>
                        <ul ref={subMenuRef} className="class_menu_submenu_container">
                        {
                            menuItems.map((str, num) => {
                                return(
                                    <li key={num}>
                                       <NavLink to={"/" + str.link} className={({isActive}) => (isActive) ? "class_menu_item_selected" : ""}><i className={str.icon}/>&nbsp;&nbsp;&nbsp;{str.item}</NavLink>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/organizaciones" className={({isActive}) => (isActive) ? "class_menu_items_selected" : undefined}>
                            Organizaciones
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>

            
        )
    }

    return(
        <>
            <MenuDefault/>

            <div className="class_menu_container">
                <NavLink to="/">   
                    <img src={Fundacion}/>
                    <span className="class_menu_title">Fluyendo desde el alma</span>
                </NavLink>

                <ul className="class_menu_items">
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive) ? "class_menu_items_selected" : undefined}>Inicio</NavLink>
                    </li>
                    <li onClick={(e) => handleOpenSubMenu(e)} style={{position: "relative"}}>
                        <span>Acerca de la tartamudez&nbsp;&nbsp;<i className={(openMenu) ? "fas fa-angle-down class_menu_icon class_menu_icon_rotate" :"fas fa-angle-down class_menu_icon"}/></span>
                        <ul ref={subMenuRef} className="class_menu_submenu_container">
                        {
                            menuItems.map((str, num) => {
                                return(
                                    <li key={num}>
                                       <NavLink to={"/" + str.link} className={({isActive}) => (isActive) ? "class_menu_item_selected" : ""}><i className={str.icon}/>&nbsp;&nbsp;&nbsp;{str.item}</NavLink>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/organizaciones" className={({isActive}) => (isActive) ? "class_menu_items_selected" : undefined}>
                            Organizaciones
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;