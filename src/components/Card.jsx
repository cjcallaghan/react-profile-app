import style from "../styles/card.module.css";
import PropTypes from "prop-types";

const Card = ({id, image_url, name, title, email, animation, updateAnimation}) => {

    return (
        <div className={`${style["profile-card"]} ${animation ? style["is-entering"] : ""}`}
        onAnimationEnd={updateAnimation}
        >

            <div className={style["profile-card__img"]}>
                <img src={image_url} alt={name}/>
            </div>
            <div className={style["profile-card__content"]}>
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto${email}`}>{email}</a></p> 
                {/* `` is used to include string and variable */}
            </div>
        </div>
    );
}

Card.propTypes = {
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Card;