import "./styles/reset.css";
import './styles/App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import NotFound from "./pages/NotFound";
import ProfileDetailPage from "./pages/ProfileDetailPage"
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { ModeProvider, ModeContext } from "./contexts/ModeContext"
import { useContext } from "react";

function App() {

	// //dark mode stuff
	// const [mode, setMode] = useState(false);

	// const handleMode = () => {
	// 	setMode(!mode);
	// }

	const { mode } = useContext(ModeContext);
	return (


		<HashRouter>
			<header>
				<Navbar />
			</header>
			<main className={mode ? "darkMode" : ""}>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/add-profile" element={<AddProfilePage />}></Route>
					<Route path="profile/:id" element={<ProfileLayoutPage />}>
						<Route index element={<ProfileDetailPage />}></Route>
						<Route path="edit" element={<ProfileEditPage />}></Route>
					</Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</main>
		</HashRouter>


	)
}

export default App
