import img from '../assets/headshot-man.png'

const Card1 = () => {
    const name = "John Doe";
    const title = "Software Engineer";
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

export default Card1;