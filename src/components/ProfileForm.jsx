import {useState} from "react";

const ProfileForm = () => {
    const [data, setData] = useState({name: "", email: "", title: "", bio: ""});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("name"));

        try{
            const response = await fetch("https://web.ics.purdue.edu/~ccallag/test/send-data.php", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            console.log(result.message);
        } catch(error){
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <input type="text" name="name" placeholder="Name" required value={data.name} onChange={handleChange}></input>
            <input type="email" name="email" placeholder="Email" required value={data.email} onChange={handleChange}></input>
            <input type="text" name="title" placeholder="Title" required value={data.title} onChange={handleChange}></input>
            <textarea name="bio" placeholder="Bio" required value={data.bio} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>

        </form>
    )
}

export default ProfileForm;