import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Stammering from "./Components/Information/Stammering.js";
import Organizations from "./Components/Organizations/Organizations.js";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<LinkHome/>}/>
                    <Route path="acerca_de_la_tartamudez" element={<LinkStuttering/>}/>
                    <Route path="organizaciones" element={<LinkOrganizations/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const LinkHome = () => {
    return(
        <>
                <Menu/>
                <Carousel/>
                <Services/>
                <Gallery/>
                <Objectives/>
                <Members/>
                <Suscribe/>
                {/* <Announcement/> */}
                <Footer/>
        </>
    )
}

const LinkStuttering = () => {
    return (
        <>
            <Menu/>
            <Stammering/>
            <Footer/>
        </>
    )
}

const LinkOrganizations = () => {
    return(
        <>
            <Menu/>
            <Organizations/>
            <Footer/>
        </>
    )
}

export default App;