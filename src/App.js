import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { AboutMe } from "./components/Pages/AboutMe";
import {Skills} from "./components/Pages/Skills";
import Contact from "./components/Pages/ContactMe";
import Projects from "./components/Pages/Projects";
import Pro from "./components/Pages/Pro";
import SignIn from "./components/Pages/SignIn";




function App() {
	
	return (
	<>
				
				
	<Router>
		<Sidebar/>
		<Routes>		
			<Route path='/about-Me' element={<AboutMe/>} />
			<Route path='/Skills' element={<Skills/>} />
			<Route path='/contact' element={<Contact/>} />
			<Route path='/Projects' element={<Projects/>} />
			<Route path='/Pro' element={<Pro/>} />
			<Route path="/SignIn" element={<SignIn/>} />
			
		</Routes>
	</Router>


	</>
		);
}

export default App;
