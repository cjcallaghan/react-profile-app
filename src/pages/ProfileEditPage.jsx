
import "../styles/reset.css";
import '../styles/App.css';
import Wrapper from "../components/Wrapper"
import { Navigate, useNavigate, useParams } from "react-router-dom";


function ProfileEditPage() {
	const {id} = useParams()
	const navigate = useNavigate;

	const handleDelete = () => {
		if (window.confirm("delete for sure?")) {
			fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/delete-profile.php/?id=${id}`, {
				method: "DELETE", 
				credentials: "include",
			}).then((rep) => rep.json())
			.then(data => {
				if(data.message){
					navigate("/");
				}

			})
		}
	}

	return (
		<>
			<Wrapper>
				<h1>DeleteProfile</h1>
				
				<button onClick={handleDelete}>Delete</button>

			</Wrapper>
		</>
	)
}



export default ProfileEditPage
