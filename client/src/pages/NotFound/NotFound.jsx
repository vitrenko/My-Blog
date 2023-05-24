import { Link } from "react-router-dom";
import NotFoundPic from "../../assets/images/not_found.png";
import style from "./NotFound.module.scss";

const NotFound = () => 
    <div className={style.notFoundContainer}>
        <img src={NotFoundPic}></img>
        <Link to="/">Back to Home</Link>
    </div>

export default NotFound;