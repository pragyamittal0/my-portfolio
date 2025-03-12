import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-left">
      {/* Left Side: Logo */}
      <div className="nav-div">
        <img src="/pragya.png" alt="Logo" className="logo-img" />
      </div>

      {/* Right Side: Navigation Links */}
      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/project" className="nav-link">Project</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
