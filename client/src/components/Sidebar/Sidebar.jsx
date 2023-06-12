import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/post">Create post</Link>
                </li>
                <li>
                    <Link to="/dashboard/posts">View all posts</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;