import "../styles/reset.css";
import '../styles/App.css';
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import {useState} from "react";
import {useEffect} from "react";


function HomePage() {

	const [profiles, setProfiles] = useState([]);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(1);
	const [titles, setTitles] = useState([]);
	const [title, setTitle] = useState("");
	const [searchInput, setSearchInput] = useState("");

	
	useEffect(() => {
		fetch("https://web.ics.purdue.edu/~ccallag/profile-app/get-titles.php")
			.then(res => res.json())
			.then(data => setTitles(data.titles));
	}, [])

	
	//update title on dropdown change
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setPage(1)
		// setAnimation(true);
	};

	


	//search
	
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
		</>
	)
}

export default HomePage
