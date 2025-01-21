import img from '../assets/headshot-woman.png'

const Card2 = () => {
    const name = "Jane Doe";
    const title = "Computer Engineer";
    const email = "a@a.com"

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

export default Card2;