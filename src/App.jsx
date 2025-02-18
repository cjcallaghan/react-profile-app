import "./styles/reset.css";
import './styles/App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import NotFound from "./pages/NotFound";
import {useState} from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {

	//dark mode stuff
	const [mode, setMode] = useState(false);

	const handleMode = () => {
		setMode(!mode);
	}

	return (
		<HashRouter>
			<header>
				<Navbar mode={mode} updateMode={handleMode}/>
			</header>
			<main className={mode ? "darkMode" : ""}>
				<Routes>
					<Route path="/" element={<HomePage/>}></Route>
					<Route path="/add-profile" element={<AddProfilePage/>}></Route>
					<Route path="/about" element={<AboutPage/>}></Route>
					<Route path="*" element={<NotFound/>}></Route>
				</Routes>
			</main>
		</HashRouter>
	)
}

export default App
