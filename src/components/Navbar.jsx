import style from "../styles/navbar.module.css";

const Navbar = ({updateMode}) => {


    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Profiles</a>
                </li>
            </ul>
            <button className={style.mode} onClick={(updateMode)}>Mode</button>
        </nav>
    );
}

export default Navbar;