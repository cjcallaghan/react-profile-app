import {useState} from "react";

const ProfileForm = () => {
    const [data, setData] = useState({name: "", email: "", title: "", bio: "", image: null});
    const [errors, setErrors] = useState({image: "", general: ""});
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");



    const handleChange = (e) => {
        if(e.target.name === "image"){
            const file = e.target.files[0];
            if(file.size > 200000000){
                setErrors({...errors, image: "image too big"})
            } else {
                setData({ ...data, image: file});
            }
            
        }else{
            setData({ ...data, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append("name", data.name.trim());
        formData.append("email", data.email.trim());
        formData.append("title", data.title.trim());
        formData.append("bio", data.bio.trim());
        console.log(formData.get("name"));
        if (data.image) formData.append("image", data.image);
        try{
            const response = await fetch("https://web.ics.purdue.edu/~ccallag/profile-app/send-data.php", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            if(result.success){
                setData({name: "", email: "", title: "", bio: "", image: null});
                setErrors({image: "", general: ""})
                setSuccessMessage("success")
                setTimeout(() => {
                    setSuccessMessage("")
                }, 3000);
                
            }else{
                setErrors({image: "", general: result.message})
                setSuccessMessage("")
            }
            console.log(result.message);

        } catch(error){
            console.log(error)
        }finally {
            setSubmitting(false);
        }
        
    }


    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <input type="text" name="name" placeholder="Name" required value={data.name} onChange={handleChange}></input>
            <input type="email" name="email" placeholder="Email" required value={data.email} onChange={handleChange}></input>
            <input type="text" name="title" placeholder="Title" required value={data.title} onChange={handleChange}></input>
            <textarea name="bio" placeholder="Bio" maxLength={200} required value={data.bio} onChange={handleChange}></textarea>
            <p>{data.bio.length}/200</p>
            <label htmlFor="image">Chose an image</label>
            <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={handleChange}></input>
            {errors.image && <p>{errors.image}</p>}
            <button type="submit" disabled={submitting || errors.image !== "" || data.name.trim() === "" || data.title.trim() === "" || data.email.trim() === "" || data.bio.trim() === "" || data.image === null}>Submit</button>
            {/* disabled={submitting || errors.image === "" || data.name === "" || data.title === "" || data.email === "" || data.bio === "" || data.image === null ? true: false} */}
            {errors.general && <p>{errors.general}</p>}
            {successMessage && <p>{successMessage}</p>}

        </form>
    )
}

export default ProfileForm;