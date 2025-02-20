
import "../styles/reset.css";
import '../styles/App.css';
import { Outlet } from "react-router-dom";

function ProfileLayoutPage() {

	return (
		<>
			<Outlet />
		</>
	)
}

export default ProfileLayoutPage
