
import "../styles/reset.css";
import '../styles/App.css';
import Wrapper from "../components/Wrapper";
import ProfileForm from "../components/ProfileForm";

function AddProfilePage() {

	return (
		<>
			<h1>Add Profile</h1>
			<Wrapper>
				<ProfileForm/>
			</Wrapper>
		</>
	)
}

export default AddProfilePage
