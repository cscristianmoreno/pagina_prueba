import "./Announcement.css";
import Headband from "./images/Headband.js";

const Announcement = () => {
    return(
        <div className="class_announcement_container">
            <div className="class_announcement_title">
                <Headband/>
                &nbsp;
                &nbsp;
                <span>El 22 de Octubre se celebra el Día de la Tartamudez</span>
            </div>
        </div>
    )
}

export default Announcement;