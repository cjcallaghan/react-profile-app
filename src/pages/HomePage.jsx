import "../styles/reset.css";
import '../styles/App.css';
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import {useState} from "react";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import {useReducer} from "react";
import {initialState, homeReducer} from "../reducers/homeReducer"



function HomePage() {

	// const [profiles, setProfiles] = useState([]);
	// const [page, setPage] = useState(1);
	// const [count, setCount] = useState(1);
	// const [titles, setTitles] = useState([]);
	// const [title, setTitle] = useState("");
	// const [search, setSearch] = useState("");

	const [state, dispatch] = useReducer(homeReducer, initialState);
	const {titles, title, search, profiles, page, count} = state

	
	useEffect(() => {
		fetch("https://web.ics.purdue.edu/~ccallag/profile-app/get-titles.php")
			.then(res => res.json())
			.then((data) => {
				// setTitles(data.titles)
				dispatch({type: "SET_TITLES", payload: data.titles})
			});
	}, [])

	
	//update title on dropdown change
	const handleTitleChange = (e) => {
		// setTitle(e.target.value);
		// setPage(1)
		dispatch({type: "SET_TITLE", payload: e.target.value})
	};

	


	//search
	
	const handleSearchChange = (e) => {
		e.preventDefault();
		// setSearch(e.target.value);
		// setPage(1)
		dispatch({type: "SET_SEARCH", payload: e.target.value})
	};
	
	

	useEffect(() => {
		fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
			.then(res => res.json())
			.then((data) => { 
				// setProfiles(data.profiles)
				// setCount(data.count)
				// setPage(data.page)
				dispatch({type: "FETCH_DATA", payload: data})
			});
	},[title, search, page])

	const handleClear = () => {
		// setTitle("");
		// setSearch("");
		// setPage(1)
		// setAnimation(true);
		dispatch({type: "CLEAR_FILTERS"});
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
						<input className="search-input" type="text" onChange={handleSearchChange} value={search}></input>
					</div>
					<button style={buttonStyle} onClick={handleClear}>Clear</button>
				</div>
				<div className='profile-cards'>
					{profiles.map((profile) => (
						<Link to={`/profile/${profile.id}`} key={profile.id}>
							<Card {...profile}/>
						</Link>
					))}
				</div>
				{count === 0 && <p>No profiles found.</p>}
				{count > 10 &&
					<div id="pagination">
						<button onClick={() => dispatch({type: "SET_PAGE", payload: page - 1})} disabled={page === 1}>Previous</button>
						<span>{page}/{Math.ceil(count/10)}</span>
						<button onClick={() => dispatch({type: "SET_PAGE", payload: page + 1})} disabled={page >= Math.ceil(count/10)}>Next</button>
					</div>
				}	
				
			</Wrapper>
		</>
	)
}

export default HomePage
