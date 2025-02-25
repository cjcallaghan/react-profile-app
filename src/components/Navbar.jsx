import style from "../styles/navbar.module.css";
import {Link} from "react-router-dom";
import { ModeContext } from "../contexts/ModeContext";
import { useContext } from "react";

const Navbar = () => {

    const {mode, handleModeChange} = useContext(ModeContext)

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
            <button className={style.mode} onClick={(handleModeChange)}>Mode</button>
        </nav>
    );
}

export default Navbar;