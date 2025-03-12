import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import Education from "./Components/Study";
import Project from "./Components/Projects";
import Experience from "./Components/Experience";

import Contact from "./Components/Contact";
import ProjectDetails from "./Components/ProjectDetails";

import SocialNavbar from "./Components/Socialnavbar";
function App() {
  return (
    <Router>
      
      <div>
      <Navbar /> {/* Your main horizontal navbar */}
      
    </div>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} /> {/* Dynamic Route */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <SocialNavbar /> {/* Your main horizontal navbar */}
      
    </div>
    </Router>
  );
}

export default App;
