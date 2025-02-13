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
import {useEffect} from "react";
//import {faCheveronLeft}

function App() {
	// const profiles = [(
	// 	{
	// 		img: img_monkey,
	// 		name: "Monkey Man",
	// 		title: "Banana Specialist",
	// 		email: "ooah@swing.com"
	// 	},
	// 	{
	// 		img: img_giraffe,
	// 		name: "Giraffe Gal",
	// 		title: "Treetop Inspector",
	// 		email: "purpletongue@leaves.com"
	// 	},
	// 	{
	// 		img: img_monkey,
	// 		name: "Monkey Man 2",
	// 		title: "A",
	// 		email: "a@swing.com"
	// 	},
	// 	{
	// 		img: img_giraffe,
	// 		name: "Giraffe Gal 2",
	// 		title: "B",
	// 		email: "b@leaves.com"
	// 	},
	// 	{
	// 		img: img_monkey,
	// 		name: "Monkey Man 3",
	// 		title: "C",
	// 		email: "c@swing.com"
	// 	},
	// 	{
	// 		img: img_giraffe,
	// 		name: "Giraffe Gal 3",
	// 		title: "D",
	// 		email: "d@leaves.com"
	// 	},
	// 	{
	// 		img: img_monkey,
	// 		name: "Monkey Man 4",
	// 		title: "Banana Specialist",
	// 		email: "e@swing.com"
	// 	},
	// 	{
	// 		img: img_giraffe,
	// 		name: "Giraffe Gal 4",
	// 		title: "Treetop Inspector",
	// 		email: "f@leaves.com"
	// 	}
	// ]

	

	// //animation stuff
	// const [animation, setAnimation] = useState(false);

	// const handleAnimation = () => {
	// 	setAnimation(false);
	// }

	//dark mode stuff
	const [mode, setMode] = useState(false);

	const [profiles, setProfiles] = useState([]);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(1);

	const handleMode = () => {
		setMode(!mode);
	}

	// const titles = [...new Set]
	const [titles, setTitles] = useState([]);
	useEffect(() => {
		fetch("https://web.ics.purdue.edu/~ccallag/profile-app/get-titles.php")
			.then(res => res.json())
			.then(data => setTitles(data.titles));
	}, [])

	const [title, setTitle] = useState("");
	//update title on dropdown change
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setPage(1)
		// setAnimation(true);
	};

	


	//search
	const [searchInput, setSearchInput] = useState("");
	const handleSearchChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
		setPage(1)
		// setAnimation(true);
	};
	
	

	useEffect(() => {
		fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/fetch-data-with-filter.php?title=${title}&name=${searchInput}&page=${page}&limit=10`)
			.then(res => res.json())
			.then(data =>{ 
				setProfiles(data.profiles)
				setCount(data.count)
				setPage(data.page)
			});
	},[title, searchInput, page])

	const handleClear = () => {
		setTitle("");
		setSearchInput("");
		setPage(1)
		// setAnimation(true);
	}
	
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
								<option value="">All</option>
								{titles.map((title) => (
									<option key={title} value={title}>
										{title}
									</option>
								))}
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
						{profiles.map(profile => <Card key={profile.id} {...profile}/>)}
					</div>
					{count === 0 && <p>No profiles found.</p>}
					{count > 10 &&
						<div id="pagination">
							<button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
							<span>{page}/{Math.ceil(count/10)}</span>
							<button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(count/10)}>Next</button>
						</div>
					}	
					
				</Wrapper>
			</main>
		</>
	)
}

export default App
