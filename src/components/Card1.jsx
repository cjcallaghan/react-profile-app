import img from '../assets/monkey.png';
import "../styles/card.css";

const Card1 = () => {
    const name = "Monkey Man";
    const title = "Banana Specialist";
    const email = "ooah@swing.com"

    return (
        <div className="profile-card">
            <div className="profile-card__img">
                <img src={img} />
            </div>
            <div className='profile-card__content'>
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto${email}`}>{email}</a></p> 
                {/* `` is used to include string and variable */}
            </div>
        </div>
    );
}

export default Card1;