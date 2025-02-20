
import "../styles/reset.css";
import '../styles/App.css';
import Wrapper from "../components/Wrapper";
import {data, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

function ProfileDetailPage() {
	const {id} = useParams();
	const [profile, setProfile] = useState(null)

	useEffect(() => {
		fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/fetch-data-with-id.php/?id=${id}`)
			.then((res) => res.json())
			.then((data) => (
				setProfile(data),
				console.log(data)
			))
	}, [id])

	return (
		
		<Wrapper>
			{!profile ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>{profile.name}</h1>
					<p><a href={`mailto${profile.email}`}>{profile.email}</a></p>
					<p>{profile.email}</p>
					<img src={profile.image_url} alt={profile.name}></img>
					<Link to="edit">Edit</Link>
				</>
			)}
		</Wrapper>
	
	)
}

export default ProfileDetailPage
