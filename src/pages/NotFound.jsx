
import "../styles/reset.css";
import '../styles/App.css';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

function AddProfilePage() {

	return (
		<>
			<Wrapper>
				<h1>404</h1>
				<p>Page Not Fount</p>
				<Link to="/">Home</Link>
			</Wrapper>
		</>
	)
}

export default AddProfilePage
