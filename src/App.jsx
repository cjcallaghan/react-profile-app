import Navbar from "./components/Navbar";
import About from "./components/About";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import "./styles/reset.css";
import './styles/App.css';

function App() {

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<div className='section'>
					<div className='container'>
						<h1>Profile App</h1>
					</div>
				</div>
				<div className='section'>
					<div className='container'>
						<About />
					</div>
				</div>
					<div className='section'>
						<div className='container'>
							<div className='profile-cards'>
								<Card1 />
								<Card2 />
							</div>
						</div>
					<div/>
				</div>
			</main>
		</>
	)
}

export default App
