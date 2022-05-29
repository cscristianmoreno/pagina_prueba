import { HashRoute, Router, Route } from "react-router-dom";

import "./App.css";
import Menu from "./Components/Menu/Menu.js";
import Carousel from "./Components/Carousel/Carousel.js";
import Services from "./Components/Services/Services.js";
import Products from "./Components/Products/Products.js";
import Footer from "./Components/Footer/Footer.js";
import Gallery from "./Components/Gallery/Gallery.js";
import Objectives from "./Components/Objectives/Objectives.js";
import Members from "./Components/Members/Members.js";
import Announcement from "./Components/Announcement/Announcement.js";
import Suscribe from "./Components/Suscribe/Suscribe.js";


const App = () => {
    return(
        <>
            <Menu/>
            <Carousel/>
            <Services/>
            <Gallery/>
            <Objectives/>
            <Members/>
            <Suscribe/>
            <Announcement/>
            {/* <Products/> */}
            <Footer/>
        </>
    );
}

export default App;