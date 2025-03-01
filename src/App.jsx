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
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import {AuthProvider} from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

	// //dark mode stuff
	// const [mode, setMode] = useState(false);

	// const handleMode = () => {
	// 	setMode(!mode);
	// }

	const { mode } = useContext(ModeContext);
	return (


		<HashRouter>
			<AuthProvider>
				<header>
					<Navbar />
				</header>
				<main className={mode ? "darkMode" : ""}>
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/add-profile" element={<ProtectedRoute><AddProfilePage /></ProtectedRoute>}></Route>
						<Route path="profile/:id" element={<ProfileLayoutPage />}>
							<Route index element={<ProfileDetailPage />}></Route>
							<Route path="edit" element={<ProtectedRoute><ProfileEditPage /></ProtectedRoute>}></Route>
						</Route>
						<Route path="/about" element={<AboutPage />}></Route>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="/register" element={<RegisterPage />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</main>
			</AuthProvider>
		</HashRouter>




	)
}

export default App
