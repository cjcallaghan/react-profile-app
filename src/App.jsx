import Navbar from "./components/Navbar";
import About from "./components/About";
import "./styles/reset.css";
import './styles/App.css';

import img_monkey from './assets/monkey.png';
import img_giraffe from './assets/giraffe.png';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import ProfileForm from "./components/ProfileForm";
import {useState} from "react";

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
		},
		{
			img: img_monkey,
			name: "Monkey Man 2",
			title: "A",
			email: "a@swing.com"
		},
		{
			img: img_giraffe,
			name: "Giraffe Gal 2",
			title: "B",
			email: "b@leaves.com"
		},
		{
			img: img_monkey,
			name: "Monkey Man 3",
			title: "C",
			email: "c@swing.com"
		},
		{
			img: img_giraffe,
			name: "Giraffe Gal 3",
			title: "D",
			email: "d@leaves.com"
		},
		{
			img: img_monkey,
			name: "Monkey Man 4",
			title: "Banana Specialist",
			email: "e@swing.com"
		},
		{
			img: img_giraffe,
			name: "Giraffe Gal 4",
			title: "Treetop Inspector",
			email: "f@leaves.com"
		}
	]

	//animation stuff
	const [animation, setAnimation] = useState(false);

	const handleAnimation = () => {
		setAnimation(false);
	}

	//dark mode stuff
	const [mode, setMode] = useState(false);

	const handleMode = () => {
		setMode(!mode);
	}

	// const titles = [...new Set]

	const [title, setTitle] = useState("");
	//update title on dropdown change
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setAnimation(true);
	};


	//search
	const [searchInput, setSearchInput] = useState("");
	const handleSearchChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
		setAnimation(true);
	};

	const handleClear = () => {
		setTitle("");
		setSearchInput("");
		setAnimation(true);
	}

	//filter
	const filterProfiles = profiles.filter((profile) => 
		(title === "" || profile.title === title) && profile.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
	)
	
	const buttonStyle = {
		backgroundColor: "white",
  		color: "black",
  		border: "2px solid #555555",

		"&:hover": {
			backgroundColor: "#555555",
  			color: "white"
		}
	}

	return (
		<>
			<header>
				<Navbar mode={mode} updateMode={handleMode}/>
			</header>
			<main className={mode ? "darkMode" : ""}>
				<Wrapper>
					<h1>Profile App</h1>
				</Wrapper>
				<Wrapper>
					<About />
				</Wrapper>
				<Wrapper>
					<ProfileForm/>
				</Wrapper>
				<Wrapper>
					<div className="filter-wrapper">
						<div className="filter-select">
							<label htmlFor="title-select">Select a Title:</label>
							<select id="title-select" onChange={handleTitleChange} value={title}>
								{/* titles.map((title) => (option key={title} value={title})) */}
								<option value="">All</option>
								<option value="Banana Specialist">Banana Specialist</option>
								<option value="Treetop Inspector">Treetop Inspector</option>
								<option value="A">A</option>
								<option value="B">B</option>
								<option value="C">C</option>
								<option value="D">D</option>
							</select>
						</div>
					</div>
					<div className="search-wrapper">
						<div className="search-input">
							<label htmlFor="search-input">Search:</label>
							<input className="search-input" type="text" onChange={handleSearchChange} value={searchInput}></input>
						</div>
						<button style={buttonStyle} onClick={handleClear}>Clear</button>
					</div>
					<div className='profile-cards'>
						{filterProfiles.map(profile => <Card key={profile.email} {...profile} animation={animation} 
							updateAnimation={handleAnimation}/>)}
					</div>
				</Wrapper>
			</main>
		</>
	)
}

export default App
