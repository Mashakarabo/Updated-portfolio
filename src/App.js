import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/Pages/AboutMe";
import { Skills } from "./components/Pages/Skills";
import Contact from "./components/Pages/ContactMe";
import Projects from "./components/Pages/Projects";
import Pro from "./components/Pages/Pro";
import Loadhome from "./components/Pages/Pro";


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Loadhome/>} />
          <Route path="/Pro" element={<Pro/>} />
          <Route path="/about-Me" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />    
        </Routes>
      </Router>
    </>
  );
}

export default App;
