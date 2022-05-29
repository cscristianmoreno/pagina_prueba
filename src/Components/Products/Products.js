import "./Products.css";
import Quality from "./images/Quality.js";
import CreditCard from "./images/CreditCard.js";
import Discount from "./images/Discount.js";
import Renovation from "./images/Renovation.js";

const Products = () => {
    return(
        <div className="class_products_container">
            <span className="class_container_title"><span style={{color: "gray"}}>NUESTROS</span> PRODUCTOS</span>

            <div className="class_line_separated" />

            <span className="class_container_subtitle">
               Accedé a una gran variedad de productos de alta demanda y de la mejor calidad, y si no estás conforme con el producto, te devolvemos el 100% del dinero.  
            </span>

            <div className="class_products_information_container">
                <div className="class_products_information">
                    <Quality/>

                    <div className="class_products_information_title_container">
                        <span className="class_products_information_title">Productos</span>
                        <span className="class_products_information_subtitle">Accede a nuestro stock de productos de alta calidad</span>
                    </div>
                </div>

                <div className="class_products_information">
                    <CreditCard/>

                    <div className="class_products_information_title_container">
                        <span className="class_products_information_title">Métodos de pago</span>
                        <span className="class_products_information_subtitle">Accede a diferentes medios de pago</span>
                    </div>
                </div>

                <div className="class_products_information">
                    <Discount/>

                    <div className="class_products_information_title_container">
                        <span className="class_products_information_title">Descuentos</span>
                        <span className="class_products_information_subtitle">Accede a una gran variedad de descuentos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;