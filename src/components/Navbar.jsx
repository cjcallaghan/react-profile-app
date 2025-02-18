import style from "../styles/navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = ({updateMode}) => {


    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-profile">Add Profile</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <button className={style.mode} onClick={(updateMode)}>Mode</button>
        </nav>
    );
}

export default Navbar;