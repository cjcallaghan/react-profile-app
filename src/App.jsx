import Navbar from "./components/Navbar";
import About from "./components/About";
import "./styles/reset.css";
import './styles/App.css';

import img_monkey from './assets/monkey.png';
import img_giraffe from './assets/giraffe.png';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";

function App() {
	const profiles = [
		{
			img: img_monkey,
			name: "Monkey Man",
			title: "Banana Specialist",
			email: "ooah@swing.com"
		},
		{
			img: img_giraffe,
			name: "Giraffe Gal",
			title: "Treetop Inspector",
			email: "purpletongue@leaves.com"
		}
	]

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Wrapper>
					<h1>Profile App</h1>
				</Wrapper>
				<Wrapper>
					<About />
				</Wrapper>
				<Wrapper>
					<div className='profile-cards'>
						{/* {profiles.map(profile => <Card key={profile.email} img={profile.img} name={profile.name} title={profile.title} email={profile.email} />)} */}
						{/* Same thing ^ */}
						{profiles.map(profile => <Card key={profile.email} {...profile} />)}

						{/* <Card1 />
						<Card2 /> */}
					</div>
				</Wrapper>
			</main>
		</>
	)
}

export default App
