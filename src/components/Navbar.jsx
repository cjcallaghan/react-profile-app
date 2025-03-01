import style from "../styles/navbar.module.css";
import {Link} from "react-router-dom";
import {ModeContext} from "../contexts/ModeContext";
import { useContext } from "react";
import {AuthContext} from "../contexts/AuthContext"

const Navbar = () => {

    const {mode, handleModeChange} = useContext(ModeContext)
    const {isLogin, logout} = useContext(AuthContext);

    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isLogin &&
                <li>
                    <Link to="/add-profile">Add Profile</Link>
                </li>}
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            {
            isLogin ? 
            <button onClick={logout}>Logout</button> : 
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            }
            <button className={style.mode} onClick={(handleModeChange)}>Mode</button>
        </nav>
    );
}

export default Navbar;